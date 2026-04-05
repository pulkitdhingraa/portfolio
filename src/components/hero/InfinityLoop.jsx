import { useRef, useEffect } from 'react'

const LABELS = [
  { t: 0, text: 'PLAN' }, { t: Math.PI * 0.35, text: 'CODE' },
  { t: Math.PI * 0.7, text: 'BUILD' }, { t: Math.PI, text: 'SEC' },
  { t: Math.PI * 1.3, text: 'TEST' }, { t: Math.PI * 1.65, text: 'DEPLOY' },
]

function getInfinityPoint(t, scale, cx, cy, tiltX, tiltY) {
  const denom = 1 + Math.sin(t) ** 2
  let x = (scale * Math.cos(t)) / denom
  let y = (scale * Math.sin(t) * Math.cos(t)) / denom
  const z = y * Math.sin(tiltX * 0.3)
  y = y * Math.cos(tiltX * 0.3)
  x = x * Math.cos(tiltY * 0.3) - z * Math.sin(tiltY * 0.3)
  const perspective = 600
  const projScale = perspective / (perspective + z * 0.5)
  return { x: cx + x * projScale, y: cy + y * projScale, z, scale: projScale }
}

export default function InfinityLoop() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    function resize() {
      const c = canvas.parentElement
      canvas.width = c.offsetWidth * 2
      canvas.height = c.offsetHeight * 2
      ctx.setTransform(2, 0, 0, 2, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    function draw() {
      const w = canvas.width / 2, h = canvas.height / 2
      ctx.clearRect(0, 0, w, h)
      timeRef.current += 0.008
      const time = timeRef.current
      const cx = w / 2, cy = h / 2, scale = Math.min(w, h) * 0.35
      const tiltX = mouseRef.current.y * 0.8 + Math.sin(time * 0.5) * 0.15
      const tiltY = mouseRef.current.x * 0.8 + Math.cos(time * 0.7) * 0.15

      const points = []
      for (let i = 0; i <= 200; i++) points.push(getInfinityPoint((i / 200) * Math.PI * 2, scale, cx, cy, tiltX, tiltY))

      // Multi-pass glow
      ctx.lineCap = 'round'; ctx.lineJoin = 'round'
      const widths = [12, 6, 2.5], alphas = [0.03, 0.06, 0.15]
      for (let pass = 0; pass < 3; pass++) {
        ctx.beginPath(); ctx.lineWidth = widths[pass]
        points.forEach((p, i) => { if (i === 0) ctx.moveTo(p.x, p.y); else ctx.lineTo(p.x, p.y) })
        ctx.strokeStyle = `rgba(13,148,136,${alphas[pass] * 0.5})`; ctx.stroke()
      }

      // Color-shifting line
      for (let i = 1; i < points.length; i++) {
        const p0 = points[i - 1], p1 = points[i], t = i / points.length
        ctx.beginPath(); ctx.moveTo(p0.x, p0.y); ctx.lineTo(p1.x, p1.y)
        ctx.strokeStyle = `rgba(${Math.floor(13 + Math.sin(t * Math.PI * 2) * 20)},${Math.floor(148 - Math.sin(t * Math.PI * 2) * 25)},${Math.floor(136 + Math.sin(t * Math.PI * 2) * 50)},${0.15 + p1.scale * 0.12})`
        ctx.lineWidth = 1.2 + p1.scale * 0.6; ctx.stroke()
      }

      // Teal orbiting dot
      const dotT = (time * 0.8) % (Math.PI * 2)
      const dotP = getInfinityPoint(dotT, scale, cx, cy, tiltX, tiltY)
      const dotGrad = ctx.createRadialGradient(dotP.x, dotP.y, 0, dotP.x, dotP.y, 16)
      dotGrad.addColorStop(0, 'rgba(13,148,136,0.15)'); dotGrad.addColorStop(1, 'rgba(13,148,136,0)')
      ctx.fillStyle = dotGrad; ctx.beginPath(); ctx.arc(dotP.x, dotP.y, 14, 0, Math.PI * 2); ctx.fill()
      ctx.beginPath(); ctx.arc(dotP.x, dotP.y, 2.5, 0, Math.PI * 2); ctx.fillStyle = 'rgba(13,148,136,0.6)'; ctx.fill()

      // Indigo orbiting dot
      const dot2T = (time * 0.8 + Math.PI) % (Math.PI * 2)
      const dot2P = getInfinityPoint(dot2T, scale, cx, cy, tiltX, tiltY)
      const dot2Grad = ctx.createRadialGradient(dot2P.x, dot2P.y, 0, dot2P.x, dot2P.y, 10)
      dot2Grad.addColorStop(0, 'rgba(99,102,241,0.12)'); dot2Grad.addColorStop(1, 'rgba(99,102,241,0)')
      ctx.fillStyle = dot2Grad; ctx.beginPath(); ctx.arc(dot2P.x, dot2P.y, 10, 0, Math.PI * 2); ctx.fill()
      ctx.beginPath(); ctx.arc(dot2P.x, dot2P.y, 2, 0, Math.PI * 2); ctx.fillStyle = 'rgba(99,102,241,0.5)'; ctx.fill()

      // Labels
      LABELS.forEach(label => {
        const lp = getInfinityPoint(label.t, scale, cx, cy, tiltX, tiltY)
        const ly = lp.y > cy ? lp.y + 22 : lp.y - 22
        ctx.font = '600 8px monospace'; ctx.textAlign = 'center'
        ctx.fillStyle = 'rgba(107,114,128,0.2)'; ctx.fillText(label.text, lp.x, ly)
      })

      // Bottom text
      ctx.font = '500 9px "Inter",sans-serif'
      ctx.fillStyle = 'rgba(13,148,136,0.15)'; ctx.textAlign = 'center'
      ctx.fillText('DEV \u221E SEC \u221E OPS', cx, cy + h * 0.42)

      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <div
      className="relative w-full h-[420px] flex items-center justify-center"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mouseRef.current = {
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
        }
      }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
