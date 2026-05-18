import { useScrollSpy } from '../hooks/useScrollSpy'
import { useTheme } from '../context/ThemeContext'

const NAV_SECTIONS = ['about', 'skills', 'projects', 'experience', 'blog', 'contact']
const NAV_LABELS = { about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Experience', blog: 'Blog', contact: 'Connect' }

function SunIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

export default function Navbar({ onSecretClick }) {
  const activeId = useScrollSpy(NAV_SECTIONS)
  const { dark, toggle } = useTheme()

  return (
    <nav className="nav-root fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-[60px] py-5 bg-[rgba(250,250,250,0.85)] backdrop-blur-[12px] border-b border-gray-100">
      <div className="text-sm font-black tracking-tight">
        PULKIT{' '}
        <button onClick={onSecretClick} className="group font-normal text-gray-400 cursor-default hover:cursor-pointer hover:brightness-110 transition-[filter] duration-300 bg-transparent border-none p-0">
          {'DHINGRA'.split('').map((letter, i) => (
            <span
              key={i}
              className="inline-block transition-all duration-300 group-hover:animate-[rgbWave_1.5s_ease-in-out_infinite]"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {letter}
            </span>
          ))}
        </button>
      </div>
      <div className="flex items-center gap-8">
        <ul className="flex gap-8 list-none">
          {NAV_SECTIONS.map(id => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`text-[11px] tracking-[1.5px] uppercase no-underline transition-colors duration-400 ${
                  activeId === id ? 'text-teal-600' : 'text-transparent hover:text-gray-400'
                }`}
              >
                {NAV_LABELS[id]}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggle}
          aria-label={dark ? 'Switch to light mode' : 'Switch to night mode'}
          title={dark ? 'Light mode' : 'Night mode'}
          className="theme-toggle inline-flex items-center justify-center w-8 h-8 rounded-full border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-colors bg-transparent cursor-pointer"
        >
          {dark ? <SunIcon /> : <MoonIcon />}
        </button>
      </div>
    </nav>
  )
}
