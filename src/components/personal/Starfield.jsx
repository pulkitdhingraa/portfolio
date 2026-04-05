import { useRef, useEffect } from 'react'

const COLORS = [
  [255,255,255],[255,255,255],[255,255,255],[255,255,255],[255,255,255],
  [255,80,120],[80,200,255],[180,100,255],[255,200,80],[100,255,180]
]
const COUNT = 400, MAX_Z = 3, SPEED = 0.005

export default function Starfield() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const c = canvasRef.current
    const ctx = c.getContext('2d')
    let animId

    const stars = []
    for (let i = 0; i < COUNT; i++) {
      const col = COLORS[Math.floor(Math.random() * COLORS.length)]
      stars.push({
        x: (Math.random() - 0.5) * 2.5,
        y: (Math.random() - 0.5) * 2.5,
        z: Math.random() * MAX_Z + 0.01,
        pz: 0,
        r: col[0], g: col[1], b: col[2],
      })
    }

    function resize() {
      c.width = window.innerWidth
      c.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function draw() {
      ctx.fillStyle = 'rgba(9,9,11,0.08)'
      ctx.fillRect(0, 0, c.width, c.height)
      const cx = c.width / 2, cy = c.height / 2

      for (const s of stars) {
        s.pz = s.z
        s.z -= SPEED
        if (s.z <= 0.001) {
          const col = COLORS[Math.floor(Math.random() * COLORS.length)]
          s.x = (Math.random() - 0.5) * 2.5
          s.y = (Math.random() - 0.5) * 2.5
          s.z = MAX_Z; s.pz = MAX_Z
          s.r = col[0]; s.g = col[1]; s.b = col[2]
          continue
        }
        const sx = (s.x / s.z) * cx + cx
        const sy = (s.y / s.z) * cy + cy
        const px = (s.x / s.pz) * cx + cx
        const py = (s.y / s.pz) * cy + cy
        const progress = 1 - s.z / MAX_Z
        const size = progress * 2
        const alpha = progress * 0.7

        ctx.strokeStyle = `rgba(${s.r},${s.g},${s.b},${alpha})`
        ctx.lineWidth = size
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(sx, sy); ctx.stroke()

        if (progress > 0.4 && !(s.r === 255 && s.g === 255 && s.b === 255)) {
          ctx.fillStyle = `rgba(${s.r},${s.g},${s.b},${alpha * 0.4})`
          ctx.beginPath(); ctx.arc(sx, sy, size * 1.2, 0, Math.PI * 2); ctx.fill()
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />
}
