import { music, personalLinks } from '../../data/personal'

export default function MusicCard() {
  return (
    <div className="pp-card flex flex-col">
      <div className="flex items-center gap-2 mb-2">
        <img
          className="w-8 h-8 rounded object-cover flex-shrink-0"
          src={personalLinks.musicAvatar}
          alt=""
          referrerPolicy="no-referrer"
          style={{ objectPosition: 'center 25%' }}
        />
        <div>
          <div className="text-[0.75rem] font-medium text-[#fafafa]">300i</div>
          <div className="text-[0.6rem] text-[#aa44ff]">listening</div>
        </div>
      </div>
      <div className="text-[0.55rem] text-[#71717a] mb-1.5">Favourites</div>
      <div className="flex flex-col gap-1 mb-3">
        {music.map(song => (
          <div key={song.name} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <img className="w-7 h-7 rounded-sm flex-shrink-0 object-cover" src={song.img} alt={song.name} />
            <div className="flex-1 min-w-0">
              <div className="text-[0.6rem] text-[#fafafa] whitespace-nowrap overflow-hidden text-ellipsis leading-tight">{song.name}</div>
              <div className="text-[0.55rem] text-[#71717a]">{song.artist}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto pt-2 border-t border-[#27272a]">
        <a href={personalLinks.ytMusic} target="_blank" rel="noopener noreferrer" className="text-[0.6rem] text-[#71717a] no-underline hover:text-[#fafafa] transition-colors">
          377 liked songs &rarr;
        </a>
      </div>
    </div>
  )
}
