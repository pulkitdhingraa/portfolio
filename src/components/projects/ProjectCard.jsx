export default function ProjectCard({ project }) {
  const { num, tag, title, desc, tech, github, live, tall, wide, code } = project

  return (
    <div
      className={`group bg-white border border-[#F0F0F0] rounded-2xl p-7 relative overflow-hidden
        transition-all duration-350 ease-[cubic-bezier(.22,.68,0,.98)]
        hover:-translate-y-1.5 hover:shadow-[0_24px_48px_rgba(0,0,0,0.06),0_0_40px_rgba(13,148,136,0.06)]
        hover:border-[rgba(13,148,136,0.25)]
        ${tall ? 'row-span-2' : ''} ${wide ? 'col-span-2' : ''}`}
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-teal-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
      <div className="font-mono text-[64px] font-bold text-[rgba(13,148,136,0.05)] absolute -top-2.5 right-4 leading-none pointer-events-none group-hover:text-[rgba(13,148,136,0.09)] transition-colors duration-400">
        {num}
      </div>
      <div className="text-[10px] font-semibold tracking-[2px] uppercase text-teal-600 mb-3">{tag}</div>
      <div className="text-lg font-bold mb-2 tracking-[-0.3px]">{title}</div>
      <div className="text-[13px] text-gray-500 leading-[1.65] mb-4">{desc}</div>
      <div className="flex gap-1.5 flex-wrap mb-4">
        {tech.map(t => (
          <span key={t} className="font-mono text-[10px] font-medium px-2 py-0.5 bg-[rgba(13,148,136,0.07)] text-teal-600 rounded border border-[rgba(13,148,136,0.1)]">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-teal-600 no-underline hover:text-teal-800 transition-colors">
          GitHub &#8599;
        </a>
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-teal-600 no-underline hover:text-teal-800 transition-colors">
            Live &#8599;
          </a>
        )}
      </div>
      {code && (
        <div className="bg-[#1A1A1A] rounded-[10px] p-5 font-mono text-[11px] text-gray-200 leading-[1.8] mt-4 whitespace-pre overflow-hidden">
          {code}
        </div>
      )}
    </div>
  )
}
