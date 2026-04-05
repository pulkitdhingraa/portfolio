export default function BlogPost({ post }) {
  const { num, type, label, title, excerpt, date, readTime } = post
  const isTutorial = type === 'tutorial'

  return (
    <div className="group grid grid-cols-[80px_1fr_auto] gap-6 items-start py-7 border-b border-gray-200 last:border-b-0 first:pt-0 cursor-pointer">
      <div className="font-mono text-5xl font-bold text-[rgba(13,148,136,0.08)] leading-none pt-1 transition-colors duration-300 group-hover:text-[rgba(13,148,136,0.15)]">
        {num}
      </div>
      <div>
        <div className={`text-[10px] font-semibold tracking-[2px] uppercase mb-2 flex items-center gap-2 ${isTutorial ? 'text-teal-600' : 'text-indigo-500'}`}>
          <div className={`w-1.5 h-1.5 rounded-full ${isTutorial ? 'bg-teal-600' : 'bg-indigo-500'}`} />
          {label}
        </div>
        <div className="text-[17px] font-bold tracking-[-0.2px] mb-1.5 leading-[1.35] transition-colors duration-200 group-hover:text-teal-600">
          {title}
        </div>
        <div className="text-[13px] text-gray-500 leading-[1.6] mb-2.5 max-w-[500px]">{excerpt}</div>
        <div className="flex items-center gap-3 text-[11px] text-gray-400">
          <span>{date}</span><span>&middot;</span><span>{readTime}</span>
        </div>
      </div>
      <div className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-300 text-base mt-2 flex-shrink-0 transition-all duration-300 group-hover:border-teal-600 group-hover:text-teal-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        &#8599;
      </div>
    </div>
  )
}
