import { moodboard } from '../../data/personal'

export default function PhotographyCard2() {
  return (
    <div className="pp-card col-span-2">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded flex items-center justify-center text-sm bg-[#09090b]">✨</div>
        <div className="text-[0.75rem] font-medium text-[#ec4899]">moodboard</div>
      </div>
      <div className="text-[0.55rem] text-[#71717a] mb-1.5">Vibes</div>
      <div className="grid grid-cols-3 gap-[3px]" style={{ gridTemplateRows: '80px 80px' }}>
        {moodboard.map((src, i) => (
          <div
            key={src}
            className={`rounded bg-cover bg-center hover:opacity-80 transition-opacity ${i === 0 ? 'row-span-2' : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
    </div>
  )
}
