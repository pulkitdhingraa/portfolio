import { useState, useEffect } from 'react'
import Starfield from './Starfield'
import PhotographyCard2 from './PhotographyCard2'
import BooksCard from './BooksCard'
import YouTubeCard from './YouTubeCard'
import GamesCard from './GamesCard'
import AnimeCard from './AnimeCard'
import MusicCard from './MusicCard'
import { personalLinks } from '../../data/personal'
import { sections } from '../../config/sections'

const BIO_LINES = [
  'The Other Side',
  'linux enthusiast',
  'certified gamer hours',
  'weeb in disguise',
  'cloud native by day',
  'headshot machine',
  'ctrl+c ctrl+v engineer',
]

function TypingBio() {
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const line = BIO_LINES[lineIdx]

    if (!deleting && charIdx < line.length) {
      const id = setTimeout(() => setCharIdx(c => c + 1), 80 + Math.random() * 40)
      return () => clearTimeout(id)
    }

    if (!deleting && charIdx === line.length) {
      const id = setTimeout(() => setDeleting(true), 2000)
      return () => clearTimeout(id)
    }

    if (deleting && charIdx > 0) {
      const id = setTimeout(() => setCharIdx(c => c - 1), 40)
      return () => clearTimeout(id)
    }

    if (deleting && charIdx === 0) {
      setDeleting(false)
      setLineIdx(i => (i + 1) % BIO_LINES.length)
    }
  }, [charIdx, deleting, lineIdx])

  return (
    <p className="text-[#71717a] text-sm mb-2">
      {BIO_LINES[lineIdx].slice(0, charIdx)}
      <span className="ml-px" style={{ animation: 'ppBlink 1s step-end infinite' }}>|</span>
    </p>
  )
}

function PageLoadTime() {
  const [loadTime, setLoadTime] = useState(null)

  useEffect(() => {
    const entry = performance.getEntriesByType('navigation')[0]
    if (entry) {
      setLoadTime(Math.round(entry.loadEventEnd - entry.startTime))
    } else {
      setLoadTime(Math.round(performance.now()))
    }
  }, [])

  return <>{loadTime !== null ? `loaded in ${loadTime}ms` : '...'}</>
}

function ScreenRatio() {
  const [ratio, setRatio] = useState('')

  useEffect(() => {
    function update() {
      const w = window.innerWidth
      const h = window.innerHeight
      const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)
      const d = gcd(w, h)
      setRatio(`${w}×${h} · ${w/d}:${h/d}`)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return <>{ratio}</>
}

function LiveClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    function update() {
      const now = new Date()
      const ist = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
      const h = ist.getHours().toString().padStart(2, '0')
      const m = ist.getMinutes().toString().padStart(2, '0')
      const s = ist.getSeconds().toString().padStart(2, '0')
      setTime(`${h}:${m}:${s}`)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return <>{time}</>
}

function LiveTimeShort() {
  const [time, setTime] = useState('')

  useEffect(() => {
    function update() {
      const now = new Date()
      const ist = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }))
      const h = ist.getHours().toString().padStart(2, '0')
      const m = ist.getMinutes().toString().padStart(2, '0')
      setTime(`${h}:${m}`)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  return <>{time}</>
}

const socialIcons = {
  telegram: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>,
  email: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>,
  instagram: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3373 1.3803-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.8981-1.3783-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.8988.4227-.1644 1.0573-.3624 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.8988 1.3783.1645.4217.3624 1.0573.4171 2.2271.0602 1.2655.0739 1.6448.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.8985-.4227.1644-1.0573.3624-2.2272.4171-1.2652.0601-1.6442.0726-4.848.079-3.2037.007-3.5835-.005-4.8480-.0607M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>,
  discord: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>,
}

export default function PersonalPage({ visible, onExit }) {
  const { personal } = sections
  return (
    <div
      className={`fixed inset-0 z-[400] overflow-y-auto bg-[#09090b] transition-opacity duration-500 ${
        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      style={{
        '--pp-bg': '#09090b', '--pp-surface': '#18181b', '--pp-border': '#27272a',
        '--pp-fg': '#fafafa', '--pp-fg-muted': '#71717a',
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif",
        color: '#fafafa',
      }}
    >
      {personal.starfield && <div className="hidden md:block"><Starfield /></div>}

      {personal.aurora && (
        <div className="fixed inset-0 z-[1] pointer-events-none">
          <div className="absolute rounded-full" style={{
            width: 700, height: 300, top: '5%', left: '-5%',
            background: 'linear-gradient(90deg,rgba(255,0,64,0.06),rgba(255,100,0,0.03),transparent)',
            filter: 'blur(60px)',
            animation: 'ppAurora1 8s ease-in-out infinite alternate',
          }} />
          <div className="absolute rounded-full" style={{
            width: 600, height: 250, top: '50%', right: '-5%',
            background: 'linear-gradient(270deg,rgba(0,200,255,0.05),rgba(100,50,255,0.03),transparent)',
            filter: 'blur(60px)',
            animation: 'ppAurora2 10s ease-in-out infinite alternate',
          }} />
        </div>
      )}

      {/* Corner: name */}
      <div
        className="fixed top-4 left-4 text-[0.75rem] font-semibold z-[100]"
        style={{ fontFamily: "'SF Mono','Fira Code',monospace" }}
      >
        <span className="text-[#71717a]">Pulkit </span>
        <span
          onClick={onExit}
          className="pp-rgb-dhingra cursor-pointer"
        >
          DHINGRA
        </span>
      </div>

      {/* Corner: page load time */}
      <div className="fixed top-4 right-4 text-[0.65rem] text-[#71717a] z-[100]" style={{ fontFamily: "'SF Mono','Fira Code',monospace", fontVariantNumeric: 'tabular-nums' }}>
        <PageLoadTime />
      </div>

      {/* Corner: screen ratio */}
      <div className="fixed bottom-4 left-4 text-[0.65rem] text-[#71717a] z-[100]" style={{ fontFamily: "'SF Mono','Fira Code',monospace", fontVariantNumeric: 'tabular-nums' }}>
        <ScreenRatio />
      </div>

      {/* Corner: visitor count */}
      <div className="fixed bottom-4 right-4 text-[0.65rem] text-[#71717a] z-[100]" style={{ fontFamily: "'SF Mono','Fira Code',monospace" }}>
        you found the secret
      </div>

      {/* Main layout */}
      <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 pt-16 md:pt-8 relative z-[2]" style={{ animation: 'ppFadeUp 0.5s ease forwards' }}>
        <div className="pp-bento grid gap-4 md:gap-8 max-w-[1100px] w-full items-start">

          {/* Left sidebar — top aligned with name on desktop only */}
          <div className="pp-side grid grid-cols-2 gap-3 content-start lg:pt-[108px]">
            {personal.photography && <PhotographyCard2 />}
            {personal.books && <BooksCard />}
            {personal.youtube && <YouTubeCard />}
          </div>

          {/* Center profile */}
          <div className="pp-center flex flex-col items-center text-center">
            <div className="w-[104px] h-[104px] rounded-full mb-5 overflow-hidden bg-white hover:opacity-80 transition-opacity flex items-center justify-center">
              <img
                src={personalLinks.avatar}
                alt=""
                className="w-full h-full object-cover"
                style={{ transform: 'scale(1.2)' }}
              />
            </div>
            <h1 className="text-xl font-semibold tracking-[-0.02em] mb-1.5 text-[#fafafa]">300i</h1>
            <TypingBio />
            <p className="text-[#71717a] text-xs mb-3" style={{ fontVariantNumeric: 'tabular-nums' }}>
              <LiveTimeShort /> &middot; IST &middot; India
            </p>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#18181b] border border-[#27272a] rounded-full text-[0.65rem] text-[#71717a] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" style={{ animation: 'ppPulse 2s ease-in-out infinite' }} />
              exploring interests
            </div>

            {/* Social links */}
            {personal.socials && (
            <nav className="flex flex-col gap-2 w-full">
              {[
                { icon: socialIcons.telegram, label: 'Telegram', href: 'https://t.me/pdx300i' },
                { icon: socialIcons.email, label: 'Email', href: 'mailto:pulkitdhngra@gmail.com' },
                { icon: socialIcons.instagram, label: 'Instagram', href: 'https://instagram.com/pdx300i' },
                { icon: socialIcons.discord, label: 'Discord', href: 'https://discord.com/users/300i.zzzz' },
              ].map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-[#18181b] border border-[#27272a] rounded-lg text-sm font-medium text-[#fafafa] no-underline hover:bg-[#27272a] hover:border-[#3f3f46] transition-all"
                >
                  <span className="w-[18px] h-[18px] opacity-70 flex-shrink-0">{link.icon}</span>
                  <span className="flex-1 text-left">{link.label}</span>
                  <span className="opacity-40 text-sm hover:translate-x-0.5 hover:opacity-70 transition-all">&rsaquo;</span>
                </a>
              ))}
            </nav>
            )}
          </div>

          {/* Right sidebar — top aligned with name on desktop only */}
          <div className="pp-side grid grid-cols-2 gap-3 content-start lg:pt-[108px]">
            {personal.games && <GamesCard />}
            {personal.anime && <AnimeCard />}
            {personal.music && <MusicCard />}
          </div>

        </div>

        <footer className="max-w-[1100px] w-full mt-16 pt-6 border-t border-[#27272a] flex items-center justify-between text-xs text-[#71717a]">
          <span>&copy; 2026 &middot; 300i</span>
          <button
            onClick={onExit}
            className="inline-flex items-center gap-1.5 text-[#71717a] hover:text-[#fafafa] transition-colors bg-transparent border border-[#27272a] hover:border-[#3f3f46] rounded-full px-3 py-1.5 cursor-pointer text-xs"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            back to portfolio
          </button>
        </footer>
      </div>
    </div>
  )
}
