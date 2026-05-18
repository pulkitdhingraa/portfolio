import { useState } from 'react'

export default function ExperienceItem({ item }) {
  const { title, company, date, current, bullets } = item
  const [open, setOpen] = useState(false)

  return (
    <div className="relative pb-3">
      <div
        className={`absolute -left-8 top-3.5 w-4 h-4 rounded-full border-[3px] border-[#FAFAFA] z-[2]
          transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          ${open ? 'scale-[1.3]' : ''}
          ${current
            ? `bg-teal-600 ${open ? 'shadow-[0_0_0_4px_rgba(13,148,136,0.12)]' : ''}`
            : `bg-gray-300 ${open ? 'bg-indigo-500 shadow-[0_0_0_4px_rgba(99,102,241,0.12)]' : ''}`
          }`}
      />
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className="w-full flex items-start justify-between gap-3 md:gap-4 py-3.5 bg-transparent border-none cursor-pointer text-left"
      >
        <div className="min-w-0 flex-1">
          <span className={`text-[15px] md:text-[17px] font-bold transition-colors duration-500 ${open ? 'text-teal-600' : ''}`}>
            {title}
          </span>
          {current && (
            <span className="text-[9px] px-2.5 py-0.5 bg-[#F0FDFA] text-teal-600 rounded-[10px] font-semibold ml-2.5 inline-block">
              CURRENT
            </span>
          )}
          <div className="text-[12px] md:text-[13px] text-gray-400 mt-0.5">{company}</div>
        </div>
        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <span className={`text-[10px] md:text-[11px] font-mono whitespace-nowrap pt-1 text-right ${current ? 'text-teal-600' : 'text-gray-400'}`}>
            {date}
          </span>
          <svg
            className={`transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] flex-shrink-0 mt-1.5 ${open ? 'rotate-180' : ''}`}
            width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="text-[13px] text-gray-500 leading-[1.9] list-none flex flex-col gap-1 py-1 pb-4">
          {bullets.map((b, i) => (
            <li key={i} className="pl-[18px] relative before:content-['›'] before:absolute before:left-0 before:text-teal-600 before:font-bold">
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
