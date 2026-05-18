import { ytChannels } from '../../data/personal'

export default function YouTubeCard() {
  return (
    <div className="pp-card flex flex-col">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded flex items-center justify-center bg-[#09090b]">
          <svg width="20" height="14" viewBox="0 0 24 17" fill="none"><path d="M23.5 2.5C23.2 1.4 22.3.5 21.2.2 19.3 0 12 0 12 0S4.7 0 2.8.2C1.7.5.8 1.4.5 2.5.2 4.4 0 8.5 0 8.5s.2 4.1.5 6c.3 1.1 1.2 2 2.3 2.3C4.7 17 12 17 12 17s7.3 0 9.2-.2c1.1-.3 2-.8 2.3-2.3.3-1.9.5-6 .5-6s-.2-4.1-.5-6z" fill="#FF0000"/><path d="M9.6 12.1l6.2-3.6-6.2-3.6v7.2z" fill="#fff"/></svg>
        </div>
        <div className="text-[0.75rem] font-medium text-[#ef4444]">watching</div>
      </div>
      <div className="text-[0.55rem] text-[#71717a] mb-1.5">Fav Channels</div>
      <div className="flex flex-col gap-[5px] flex-1">
        {ytChannels.map(ch => (
          <div key={ch.name} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <img className="w-7 h-7 rounded-full flex-shrink-0 object-cover bg-[#27272a]" src={ch.img} alt={ch.name} />
            <div className="flex-1 min-w-0">
              <div className="text-[0.6rem] text-[#fafafa] whitespace-nowrap overflow-hidden text-ellipsis leading-tight">{ch.name}</div>
              <div className="text-[0.55rem] text-[#71717a]">{ch.category}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
