import { games, personalLinks } from '../../data/personal'

export default function GamesCard() {
  return (
    <div className="pp-card flex flex-col">
      <div className="flex items-center gap-2 mb-2">
        <img className="w-8 h-8 rounded-full object-cover flex-shrink-0" src={personalLinks.gamesAvatar} alt="300i" />
        <div>
          <div className="text-[0.75rem] font-medium text-[#fafafa]">300i</div>
          <div className="text-[0.6rem] text-[#90ba3c]">online</div>
        </div>
      </div>
      <div className="text-[0.55rem] text-[#71717a] mb-1.5">Recently Played</div>
      <div className="flex flex-col gap-1.5 flex-1">
        {games.map(game => (
          <div key={game.name} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
            <img className="w-[46px] h-[22px] rounded-sm flex-shrink-0 object-cover" src={game.img} alt={game.name} />
            <div className="flex-1 min-w-0">
              <div className="text-[0.6rem] text-[#fafafa] whitespace-nowrap overflow-hidden text-ellipsis leading-tight">{game.name}</div>
              <div className="text-[0.55rem] text-[#71717a]">{game.hours}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 pt-2 border-t border-[#27272a]">
        <a href={personalLinks.steam} target="_blank" rel="noopener noreferrer" className="text-[0.6rem] text-[#71717a] no-underline hover:text-[#fafafa] transition-colors">
          54 games owned &rarr;
        </a>
      </div>
    </div>
  )
}
