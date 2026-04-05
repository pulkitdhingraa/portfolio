import { animeRecs, personalLinks } from '../../data/personal'

export default function AnimeCard() {
  return (
    <div className="pp-card flex flex-col" style={{ gridRow: '1 / span 2', gridColumn: 2, height: 'fit-content' }}>
      <div className="flex items-center gap-2 mb-2">
        <img className="w-8 h-8 rounded object-cover flex-shrink-0" src={personalLinks.animeAvatar} alt="Gawain" />
        <div>
          <div className="text-[0.75rem] font-medium text-[#fafafa]">300iのおすすめ</div>
          <div className="text-[0.6rem] text-[#ff69b4]">underrated picks</div>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        {animeRecs.map(anime => (
          <div key={anime.name} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <img className="w-7 h-10 rounded-sm flex-shrink-0 object-cover" src={anime.img} alt={anime.name} />
            <div className="flex-1 min-w-0">
              <div className="text-[0.6rem] text-[#fafafa] whitespace-nowrap overflow-hidden text-ellipsis leading-tight">{anime.name}</div>
              <div className="text-[0.55rem] text-[#71717a]">{anime.genre}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 pt-2 border-t border-[#27272a]" style={{ marginTop: 'auto' }}>
        <a href={personalLinks.mal} target="_blank" rel="noopener noreferrer" className="text-[0.6rem] text-[#71717a] no-underline hover:text-[#fafafa] transition-colors">
          134 completed on MAL &rarr;
        </a>
      </div>
    </div>
  )
}
