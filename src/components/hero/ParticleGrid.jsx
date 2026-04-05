import { useRef, useEffect } from 'react'

export default function ParticleGrid() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const GRID = 50, GLOW = 120
    let animId

    function resize() {
      canvas.width = canvas.parentElement.offsetWidth
      canvas.height = canvas.parentElement.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function draw() {
      const { width: w, height: h } = canvas
      const { x: mx, y: my } = mouseRef.current
      ctx.clearRect(0, 0, w, h)

      // Base grid
      ctx.strokeStyle = 'rgba(13,148,136,0.10)'
      ctx.lineWidth = 0.6
      for (let y = 0; y <= h; y += GRID) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke() }
      for (let x = 0; x <= w; x += GRID) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke() }

      // Glow on horizontal lines
      for (let y = 0; y <= h; y += GRID) {
        for (let x = 0; x < w; x += 3) {
          const d = Math.sqrt((mx - x) ** 2 + (my - y) ** 2)
          if (d < GLOW) {
            const p = 1 - d / GLOW
            ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + 3, y)
            ctx.strokeStyle = `rgba(13,148,136,${p * 0.35})`
            ctx.lineWidth = 1; ctx.stroke()
          }
        }
      }

      // Glow on vertical lines
      for (let x = 0; x <= w; x += GRID) {
        for (let y = 0; y < h; y += 3) {
          const d = Math.sqrt((mx - x) ** 2 + (my - y) ** 2)
          if (d < GLOW) {
            const p = 1 - d / GLOW
            ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x, y + 3)
            ctx.strokeStyle = `rgba(13,148,136,${p * 0.35})`
            ctx.lineWidth = 1; ctx.stroke()
          }
        }
      }

      // Intersection dots
      for (let x = 0; x <= w; x += GRID) {
        for (let y = 0; y <= h; y += GRID) {
          const d = Math.sqrt((mx - x) ** 2 + (my - y) ** 2)
          if (d < GLOW) {
            const p = 1 - d / GLOW
            ctx.beginPath(); ctx.arc(x, y, 1 + p * 2.5, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(13,148,136,${p * 0.5})`; ctx.fill()
          }
        }
      }

      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0"
      onMouseMove={(e) => {
        const rect = canvasRef.current.getBoundingClientRect()
        mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
      }}
      onMouseLeave={() => { mouseRef.current = { x: -1000, y: -1000 } }}
    />
  )
}
