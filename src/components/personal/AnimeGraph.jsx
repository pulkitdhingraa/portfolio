import { useMemo } from 'react'

const LEVELS = ['', 'l1', 'l2', 'l3', 'l4']
const LEVEL_COLORS = {
  '': 'bg-[#27272a]',
  l1: 'bg-[#0e4429]',
  l2: 'bg-[#006d32]',
  l3: 'bg-[#26a641]',
  l4: 'bg-[#39d353]',
}

export default function AnimeGraph() {
  const weeks = useMemo(() => {
    const w = []
    for (let wi = 0; wi < 26; wi++) {
      const days = []
      for (let d = 0; d < 7; d++) {
        const r = Math.random()
        const level = r > 0.6 ? LEVELS[Math.ceil(Math.random() * 4)] : ''
        days.push(level)
      }
      w.push(days)
    }
    return w
  }, [])

  return (
    <div className="pp-card col-span-2 h-[176px]">
      <div className="flex gap-0.5 mb-2 overflow-hidden">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-0.5">
            {week.map((level, di) => (
              <div
                key={di}
                className={`w-2.5 h-2.5 rounded-sm hover:scale-[1.2] transition-transform ${LEVEL_COLORS[level]}`}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-1 border-t border-[#27272a] mt-2 pt-2">
        {[
          { num: '131', label: 'Completed' },
          { num: '45', label: 'Days' },
          { num: '2673', label: 'Episodes' },
          { num: '7.5', label: 'Mean' },
        ].map(s => (
          <div key={s.label} className="text-center">
            <div className="text-[0.85rem] font-semibold text-[#fafafa]">{s.num}</div>
            <div className="text-[0.5rem] uppercase text-[#71717a] tracking-[0.05em]">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
