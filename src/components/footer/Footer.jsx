const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Connect' },
]

export default function Footer({ onSecretClick }) {
  return (
    <footer className="bg-gradient-to-b from-[#1A1A1A] to-[#111111] px-[60px] pt-5 pb-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-between items-center mb-3">
          <div className="text-base font-black text-white tracking-[-0.5px]">
            PULKIT{' '}
            <button
              onClick={onSecretClick}
              className="group font-normal text-[#4B5563] cursor-default hover:cursor-pointer bg-transparent border-none p-0"
            >
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
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-[11px] tracking-[1px] text-[#6B7280] no-underline border border-[#333] px-[18px] py-2.5 rounded-[20px] hover:border-teal-600 hover:text-teal-600 transition-all bg-transparent cursor-pointer"
          >
            BACK TO TOP
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>
        <div className="border-t border-[#222] pt-3 flex justify-between items-center">
          <div className="flex gap-6">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className="text-[11px] text-[#4B5563] no-underline hover:text-gray-400 transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <span className="text-[11px] text-[#333]">&copy; 2026 Pulkit Dhingra</span>
        </div>
      </div>
    </footer>
  )
}
