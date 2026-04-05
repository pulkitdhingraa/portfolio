import { certifications } from '../../data/certifications'

function CertBadge({ cert, type }) {
  const isEarned = type === 'earned'
  return (
    <div className="group relative cursor-default">
      <div
        className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(.22,.68,0,.98)]
          group-hover:-translate-y-1.5 group-hover:scale-[1.08]
          ${isEarned
            ? 'bg-white border-2 border-[rgba(13,148,136,0.2)] shadow-[0_4px_16px_rgba(0,0,0,0.04)] group-hover:border-teal-600 group-hover:shadow-[0_8px_30px_rgba(13,148,136,0.12),0_0_20px_rgba(13,148,136,0.06)]'
            : 'bg-white border-2 border-dashed border-gray-300 shadow-[0_4px_16px_rgba(0,0,0,0.02)] group-hover:border-indigo-500 group-hover:shadow-[0_8px_30px_rgba(99,102,241,0.12),0_0_20px_rgba(99,102,241,0.06)]'
          }`}
      >
        <img src={cert.img} alt={cert.name} className="w-12 h-12 object-contain rounded" />
      </div>
      <div className="absolute bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2 translate-y-1 bg-[#1A1A1A] text-white px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap pointer-events-none opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 z-10">
        {cert.name}
        <span className="block text-[10px] font-normal text-gray-400 mt-0.5">{cert.issuer}</span>
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-[#1A1A1A]" />
      </div>
    </div>
  )
}

export default function Certifications() {
  return (
    <section className="max-w-[1200px] mx-auto px-[60px] py-20" id="certifications">
      <div className="text-[11px] tracking-[3px] uppercase text-gray-400 mb-2">Credentials</div>
      <div className="text-[42px] font-black tracking-[-1.5px] mb-12">
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
