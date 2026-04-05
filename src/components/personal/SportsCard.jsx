import { sports } from '../../data/personal'

const TYPES = { Football: 'outdoor', Cricket: 'outdoor', 'Table Tennis': 'indoor', Badminton: 'outdoor' }

export default function SportsCard() {
  return (
    <div className="pp-card h-[176px]">
      {sports.map(sport => (
        <div key={sport} className="text-[0.6rem] p-1.5 bg-[#09090b] rounded mb-1">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22c55e] flex-shrink-0" style={{ animation: 'ppPulse 2s ease-in-out infinite' }} />
            <span className="text-[#fafafa] font-medium flex-1">{sport}</span>
            <span className="text-[0.55rem] text-[#71717a]">{TYPES[sport]}</span>
          </div>
        </div>
      ))}
      <div className="mt-2 pt-2 border-t border-[#27272a]">
        <span className="text-[0.55rem] text-[#71717a]">4 sports, active</span>
      </div>
    </div>
  )
}
