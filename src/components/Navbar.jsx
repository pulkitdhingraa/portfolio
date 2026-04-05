import { useScrollSpy } from '../hooks/useScrollSpy'

const NAV_SECTIONS = ['about', 'skills', 'projects', 'experience', 'blog', 'contact']
const NAV_LABELS = { about: 'About', skills: 'Skills', projects: 'Projects', experience: 'Experience', blog: 'Blog', contact: 'Connect' }

export default function Navbar({ onSecretClick }) {
  const activeId = useScrollSpy(NAV_SECTIONS)

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-[60px] py-5 bg-[rgba(250,250,250,0.85)] backdrop-blur-[12px] border-b border-gray-100">
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
    </nav>
  )
}
