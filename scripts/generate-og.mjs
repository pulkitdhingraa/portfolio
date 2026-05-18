#!/usr/bin/env node
// Generates public/og-image.png at 1200×630.
// Run once locally with: npm run og
// Requires the sharp+resvg packages — installs them on demand via npx if missing.

import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const OUT = path.join(ROOT, 'public', 'og-image.png')

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fafafa"/>
      <stop offset="100%" stop-color="#f0fdfa"/>
    </linearGradient>
    <radialGradient id="glow" cx="85%" cy="20%" r="55%">
      <stop offset="0%" stop-color="rgba(13,148,136,0.18)"/>
      <stop offset="100%" stop-color="rgba(13,148,136,0)"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- Top label -->
  <text x="80" y="120" font-family="-apple-system, 'Segoe UI', system-ui, sans-serif"
        font-size="22" font-weight="700" letter-spacing="6" fill="#0D9488">
    DEVSECOPS · ENGINEER
  </text>

  <!-- Name -->
  <text x="80" y="270" font-family="-apple-system, 'Segoe UI', system-ui, sans-serif"
        font-size="140" font-weight="900" letter-spacing="-6" fill="#1A1A1A">
    PULKIT
  </text>
  <text x="80" y="400" font-family="-apple-system, 'Segoe UI', system-ui, sans-serif"
        font-size="140" font-weight="900" letter-spacing="-6" fill="#D4D4D4">
    DHINGRA
  </text>

  <!-- Tagline -->
  <text x="80" y="470" font-family="-apple-system, 'Segoe UI', system-ui, sans-serif"
        font-size="26" font-weight="500" fill="#525252">
    Building resilient, automated cloud-native infrastructure.
  </text>

  <!-- Tech tags row -->
  <g font-family="ui-monospace, 'SF Mono', Menlo, monospace" font-size="22" font-weight="600" fill="#0D9488">
    <rect x="80" y="510" width="118" height="50" rx="8" fill="none" stroke="#0D9488" stroke-width="1.5"/>
    <text x="139" y="543" text-anchor="middle">AWS</text>

    <rect x="218" y="510" width="200" height="50" rx="8" fill="none" stroke="#0D9488" stroke-width="1.5"/>
    <text x="318" y="543" text-anchor="middle">Kubernetes</text>

    <rect x="438" y="510" width="180" height="50" rx="8" fill="none" stroke="#0D9488" stroke-width="1.5"/>
    <text x="528" y="543" text-anchor="middle">Terraform</text>

    <rect x="638" y="510" width="140" height="50" rx="8" fill="none" stroke="#0D9488" stroke-width="1.5"/>
    <text x="708" y="543" text-anchor="middle">CI/CD</text>
  </g>

  <!-- Bottom right corner: dhngr.com -->
  <text x="1120" y="590" font-family="ui-monospace, 'SF Mono', Menlo, monospace"
        font-size="22" font-weight="600" fill="#0D9488" text-anchor="end">
    dhngr.com
  </text>

  <!-- Pulsing dot accent -->
  <circle cx="1100" cy="110" r="8" fill="#0D9488"/>
  <text x="1120" y="118" font-family="-apple-system, 'Segoe UI', system-ui, sans-serif"
        font-size="18" font-weight="600" fill="#525252">
    available
  </text>
</svg>`

// Use @resvg/resvg-js — pure JS, no native deps, fast.
let Resvg
try {
  ({ Resvg } = await import('@resvg/resvg-js'))
} catch {
  console.error('[og] @resvg/resvg-js not installed. Run: npm i -D @resvg/resvg-js')
  process.exit(1)
}

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
  font: { loadSystemFonts: true },
})
const png = resvg.render().asPng()
await writeFile(OUT, png)
console.log(`[og] wrote ${OUT} (${png.length} bytes)`)
