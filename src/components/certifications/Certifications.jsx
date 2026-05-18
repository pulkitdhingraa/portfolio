import { certifications } from '../../data/certifications'

const ISSUER_LOGOS = {
  linkedin: {
    color: '#0A66C2',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  coursera: {
    color: '#0056D2',
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
        <path d="M11.374 23.977c-4.183-.21-8.006-2.626-9.959-6.347-2.097-3.858-1.871-8.864.732-12.454C4.748 1.338 9.497-.698 14.281.23c4.583.857 8.351 4.494 9.358 8.911 1.122 4.344-.423 9.173-3.925 12.04-2.289 1.953-5.295 2.956-8.34 2.797zm7.705-8.05a588.737 588.737 0 0 0-3.171-1.887c-.903 1.483-2.885 2.248-4.57 1.665-2.024-.639-3.394-2.987-2.488-5.134.801-2.009 2.79-2.707 4.357-2.464a4.19 4.19 0 0 1 2.623 1.669c1.077-.631 2.128-1.218 3.173-1.855-2.03-3.118-6.151-4.294-9.656-2.754-3.13 1.423-4.89 4.68-4.388 7.919.54 3.598 3.73 6.486 7.716 6.404a7.664 7.664 0 0 0 6.404-3.563z"/>
      </svg>
    ),
  },
  qwiklabs: {
    // Yellow ring with a stylized "q" (bowl + descender)
    color: '#FFC72C',
    svg: (
      <svg viewBox="0 0 24 24" className="w-10 h-10">
        {/* Outer ring */}
        <circle cx="12" cy="12" r="9" fill="none" stroke="#FFC72C" strokeWidth="2.6" />
        {/* q bowl */}
        <circle cx="12" cy="11" r="3.2" fill="#FFC72C" />
        {/* q descender, extends through the bottom of the ring */}
        <rect x="13.4" y="10.5" width="1.8" height="10.5" rx="0.9" fill="#FFC72C" />
      </svg>
    ),
  },
}

function CertBadge({ cert, type }) {
  const isEarned = type === 'earned'
  const Wrapper = cert.url ? 'a' : 'div'
  const wrapperProps = cert.url
    ? { href: cert.url, target: '_blank', rel: 'noopener noreferrer' }
    : {}
  return (
    <Wrapper {...wrapperProps} className="group relative cursor-pointer no-underline">
      <div
        className={`w-20 h-20 rounded-full overflow-hidden flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(.22,.68,0,.98)]
          group-hover:-translate-y-1.5 group-hover:scale-[1.08]
          ${isEarned
            ? 'bg-white border-2 border-[rgba(13,148,136,0.2)] shadow-[0_4px_16px_rgba(0,0,0,0.04)] group-hover:border-teal-600 group-hover:shadow-[0_8px_30px_rgba(13,148,136,0.12),0_0_20px_rgba(13,148,136,0.06)]'
            : 'bg-white border-2 border-dashed border-gray-300 shadow-[0_4px_16px_rgba(0,0,0,0.02)] group-hover:border-indigo-500 group-hover:shadow-[0_8px_30px_rgba(99,102,241,0.12),0_0_20px_rgba(99,102,241,0.06)]'
          }`}
      >
        {cert.logo && ISSUER_LOGOS[cert.logo] ? (
          <span style={{ color: ISSUER_LOGOS[cert.logo].color }} className="flex items-center justify-center">
            {ISSUER_LOGOS[cert.logo].svg}
          </span>
        ) : (
          <img
            src={cert.img}
            alt={cert.name}
            className={`object-contain rounded ${cert.large ? 'w-[72px] h-[72px]' : 'w-12 h-12'}`}
          />
        )}
      </div>
      <div className="absolute bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2 translate-y-1 bg-[#1A1A1A] text-white px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap pointer-events-none opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 z-10">
        {cert.name}
        <span className="block text-[10px] font-normal text-gray-400 mt-0.5">{cert.issuer}</span>
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-[#1A1A1A]" />
      </div>
    </Wrapper>
  )
}

export default function Certifications() {
  return (
    <section className="max-w-[1200px] mx-auto px-5 md:px-[60px] py-12 md:py-20" id="certifications">
      <div className="text-[11px] tracking-[3px] uppercase text-gray-400 mb-2">Credentials</div>
      <div className="text-[32px] md:text-[42px] font-black tracking-[-1.5px] mb-8 md:mb-12">
        Certified <em className="font-accent text-gray-500">Knowledge</em>
      </div>

      <div className="text-[11px] font-semibold tracking-[2px] uppercase text-teal-600 mb-4">Earned</div>
      <div className="flex gap-7 flex-wrap items-center">
        {certifications.earned.map(cert => (
          <CertBadge key={cert.name} cert={cert} type="earned" />
        ))}
      </div>

      <div className="text-[11px] font-semibold tracking-[2px] uppercase text-indigo-500 mb-4 mt-9">Pursuing</div>
      <div className="flex gap-7 flex-wrap items-center">
        {certifications.pursuing.map(cert => (
          <CertBadge key={cert.name} cert={cert} type="pursuing" />
        ))}
      </div>
    </section>
  )
}
