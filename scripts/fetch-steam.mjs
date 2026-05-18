#!/usr/bin/env node
// Fetches owned games from Steam Web API, takes top 3 by playtime,
// and writes a JSON file the React app consumes.
//
// Usage: STEAM_API_KEY=... STEAM_ID=... node scripts/fetch-steam.mjs
// Or: drop a .env in the repo root and run `npm run sync:steam`.

import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OUT_PATH = path.join(ROOT, 'src', 'data', 'games-generated.json')

// Load .env if present (no dotenv dependency — parse manually)
try {
  const envText = await fs.readFile(path.join(ROOT, '.env'), 'utf8')
  for (const line of envText.split(/\r?\n/)) {
    const m = line.match(/^\s*([\w.-]+)\s*=\s*(.*)\s*$/)
    if (!m) continue
    const [, k, rawV] = m
    if (process.env[k]) continue
    const v = rawV.replace(/^['"]|['"]$/g, '')
    process.env[k] = v
  }
} catch {} // .env optional

const API_KEY = process.env.STEAM_API_KEY
const STEAM_ID = process.env.STEAM_ID || '76561198848372743'

if (!API_KEY) {
  console.error('[steam] STEAM_API_KEY missing. Set it in .env or env vars.')
  process.exit(1)
}

// Names to exclude (case-insensitive substring match).
// Steam doesn't host Valorant/Fortnite anyway, but keeping this here makes the
// filter explicit and easy to extend.
const EXCLUDE = ['valorant', 'fortnite']

const url = new URL('https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/')
url.searchParams.set('key', API_KEY)
url.searchParams.set('steamid', STEAM_ID)
url.searchParams.set('include_appinfo', '1')
url.searchParams.set('include_played_free_games', '1')
url.searchParams.set('format', 'json')

console.log('[steam] fetching owned games…')
const res = await fetch(url)
if (!res.ok) {
  console.error(`[steam] http ${res.status}: ${res.statusText}`)
  console.error('  Make sure your Steam profile + game details are public.')
  process.exit(1)
}
const json = await res.json()
const owned = json?.response?.games
if (!Array.isArray(owned)) {
  console.error('[steam] unexpected payload:', json)
  process.exit(1)
}

const filtered = owned
  .filter(g => g.name && !EXCLUDE.some(ex => g.name.toLowerCase().includes(ex)))
  .filter(g => (g.playtime_forever || 0) > 0)
  .sort((a, b) => (b.playtime_forever || 0) - (a.playtime_forever || 0))
  .slice(0, 3)

// Some games (EA App stubs, etc.) ship a blank gray placeholder as header.jpg.
// Auto-detect those via HEAD content-length and fall back to library_hero.jpg.
const CDN = 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps'
const HEADER_PLACEHOLDER_BYTES = 5000

async function pickImage(appid) {
  const header = `${CDN}/${appid}/header.jpg`
  try {
    const r = await fetch(header, { method: 'HEAD' })
    const size = parseInt(r.headers.get('content-length') || '0', 10)
    if (size > HEADER_PLACEHOLDER_BYTES) return header
  } catch {}
  // header missing or placeholder — try library_hero
  const hero = `${CDN}/${appid}/library_hero.jpg`
  try {
    const r = await fetch(hero, { method: 'HEAD' })
    if (r.ok) return hero
  } catch {}
  return header // last resort
}

const games = await Promise.all(filtered.map(async g => {
  const hours = Math.round((g.playtime_forever || 0) / 60)
  return {
    name: g.name,
    hours: `${hours} hrs`,
    img: await pickImage(g.appid),
  }
}))

const payload = {
  generatedAt: new Date().toISOString(),
  steamId: STEAM_ID,
  totalGames: owned.length,
  games,
}

await fs.writeFile(OUT_PATH, JSON.stringify(payload, null, 2) + '\n', 'utf8')
console.log(`[steam] wrote ${OUT_PATH}`)
console.log(`[steam] top 3 → ${games.map(g => `${g.name} (${g.hours})`).join(', ')}`)
