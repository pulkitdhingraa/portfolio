import { useRef, useEffect } from 'react'

const GLITCH_COLORS = [[255,0,64],[255,136,0],[255,238,0],[0,255,136],[0,204,255],[170,68,255]]

export default function GlitchTransition({ active, onComplete }) {
  const canvasRef = useRef(null)
  const runningRef = useRef(false)

  useEffect(() => {
    if (!active || runningRef.current) return
    runningRef.current = true

    const gc = canvasRef.current
    const gx = gc.getContext('2d')
    gc.width = window.innerWidth
    gc.height = window.innerHeight
    gc.style.opacity = '1'
    gc.style.pointerEvents = 'auto'

    const w = gc.width, h = gc.height
    let step = 0
    const total = 45

    document.documentElement.style.overflow = 'hidden'

    function tick() {
      const t = step / total
      gx.clearRect(0, 0, w, h)

      // Dark base
      gx.fillStyle = `rgba(10,10,10,${0.4 + t * 0.6})`
      gx.fillRect(0, 0, w, h)

      // Torn strips
      const sliceCount = 25
      for (let i = 0; i < sliceCount; i++) {
        const y = (i / sliceCount) * h
        const sh = h / sliceCount + 1
        const offset = (Math.random() - 0.5) * t * 300
        const skew = (Math.random() - 0.5) * t * 20

        if (t < 0.5 && Math.random() < (1 - t * 1.8)) {
          gx.fillStyle = `rgba(250,250,250,${0.5 - t * 0.9})`
          gx.save()
          gx.transform(1, 0, Math.tan(skew * Math.PI / 180), 1, offset, 0)
          gx.fillRect(0, y, w, sh)
          gx.restore()
        }

        if (Math.random() < t * 0.8) {
          const col = GLITCH_COLORS[Math.floor(Math.random() * 6)]
          gx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${0.2 + t * 0.5})`
          gx.save()
          gx.transform(1, 0, Math.tan(skew * Math.PI / 180), 1, offset, 0)
          gx.fillRect(0, y, w, sh)
          gx.restore()
        }
      }

      // Scanlines
      for (let y = 0; y < h; y += 3) {
        gx.fillStyle = `rgba(0,0,0,${0.03 + t * 0.07})`
        gx.fillRect(0, y, w, 1)
      }

      // Block artifacts
      if (t > 0.2) {
        for (let i = 0; i < Math.floor(t * 25); i++) {
          const col = GLITCH_COLORS[Math.floor(Math.random() * 6)]
          gx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${0.1 + Math.random() * 0.4})`
          const bw = 20 + Math.random() * 200, bh = 2 + Math.random() * 8
          gx.fillRect(Math.random() * w, Math.random() * h, bw, bh)
        }
      }

      // Shake
      if (t > 0.15) {
        const sx = (Math.random() - 0.5) * t * 20
        const sy = (Math.random() - 0.5) * t * 10
        gc.style.left = sx + 'px'
        gc.style.top = sy + 'px'
      }

      // Flicker
      if (Math.random() < 0.12) {
        gx.fillStyle = `rgba(255,255,255,${0.05 + Math.random() * 0.15})`
        gx.fillRect(0, 0, w, h)
      }

      step++
      if (step <= total) {
        setTimeout(tick, 25 + Math.random() * 25)
      } else {
        gx.fillStyle = '#0a0a0a'
        gx.fillRect(0, 0, w, h)
        gc.style.left = '0'
        gc.style.top = '0'

        // Fade out canvas
        let f = 1
        function fade() {
          f -= 0.06
          gc.style.opacity = Math.max(0, f)
          if (f > 0) {
            requestAnimationFrame(fade)
          } else {
            gc.style.opacity = '0'
            gc.style.pointerEvents = 'none'
            runningRef.current = false
            onComplete()
          }
        }
        requestAnimationFrame(() => requestAnimationFrame(fade))
      }
    }
    tick()
  }, [active, onComplete])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[500] pointer-events-none"
      style={{ opacity: 0 }}
    />
  )
}
