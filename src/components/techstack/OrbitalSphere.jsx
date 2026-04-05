import { useRef, useEffect } from 'react'
import { tools, INNER_COUNT } from '../../data/tools'

function fibSphere(count) {
  const pts = []
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(1 - 2 * (i + 0.5) / count)
    const theta = Math.PI * (1 + Math.sqrt(5)) * i
    pts.push({ phi, theta })
  }
  return pts
}

function rotPt(phi, theta, r, ax, ay) {
  let x = r * Math.sin(phi) * Math.cos(theta)
  let y = r * Math.cos(phi)
  let z = r * Math.sin(phi) * Math.sin(theta)
  let y2 = y * Math.cos(ax) - z * Math.sin(ax)
  let z2 = y * Math.sin(ax) + z * Math.cos(ax)
  let x2 = x * Math.cos(ay) + z2 * Math.sin(ay)
  z2 = -x * Math.sin(ay) + z2 * Math.cos(ay)
  return { x: x2, y: y2, z: z2 }
}

export default function OrbitalSphere() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const tooltipRef = useRef(null)
  const stateRef = useRef({ angleX: 0.25, angleY: 0, dragging: false, lastX: 0, lastY: 0, hovered: null })
  const nodesRef = useRef([])

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const tooltip = tooltipRef.current

    const innerR = 100, outerR = 180
    const outerCount = tools.length - INNER_COUNT
    const innerPos = fibSphere(INNER_COUNT)
    const outerPos = fibSphere(outerCount)
    const state = stateRef.current

    // Create DOM nodes
    const items = tools.map((tool, i) => {
      const isInner = i < INNER_COUNT
      const pos = isInner ? innerPos[i] : outerPos[i - INNER_COUNT]
      const size = isInner ? 38 : 46
      const imgSize = isInner ? 22 : 28

      const el = document.createElement('div')
      el.className = 'sphere-node'
      el.style.cssText = `
        position:absolute;display:flex;align-items:center;justify-content:center;
        background:white;cursor:pointer;z-index:5;
        width:${size}px;height:${size}px;border-radius:${isInner ? '8px' : '12px'};
        border:1.5px solid ${isInner ? '#E0E7FF' : '#E5E7EB'};
        transition:border-color 0.15s, box-shadow 0.15s;
      `
      const img = document.createElement('img')
      img.src = tool.img
      img.alt = tool.name
      img.style.cssText = `width:${imgSize}px;height:${imgSize}px;object-fit:contain;pointer-events:none;`
      el.appendChild(img)
      container.appendChild(el)

      el.addEventListener('mouseenter', () => {
        state.hovered = i
        tooltip.textContent = tool.name
        tooltip.style.opacity = '1'
        el.style.borderColor = '#0D9488'
        el.style.boxShadow = '0 0 22px rgba(13,148,136,0.3)'
      })
      el.addEventListener('mouseleave', () => {
        state.hovered = null
        tooltip.style.opacity = '0'
        el.style.borderColor = isInner ? '#E0E7FF' : '#E5E7EB'
        el.style.boxShadow = 'none'
      })

      return { ...tool, ...pos, r: isInner ? innerR : outerR, isInner, el, px: 0, py: 0, pz: 0 }
    })
    nodesRef.current = items

    // Event handlers
    const onMouseDown = (e) => { state.dragging = true; state.lastX = e.clientX; state.lastY = e.clientY }
    const onMouseUp = () => { state.dragging = false }
    const onMouseMove = (e) => {
      if (state.dragging) {
        state.angleY += (e.clientX - state.lastX) * 0.008
        state.angleX += (e.clientY - state.lastY) * 0.008
        state.lastX = e.clientX; state.lastY = e.clientY
      }
      if (state.hovered !== null) {
        const r = container.getBoundingClientRect()
        tooltip.style.left = (e.clientX - r.left + 14) + 'px'
        tooltip.style.top = (e.clientY - r.top - 32) + 'px'
      }
    }

    container.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    container.addEventListener('mousemove', onMouseMove)

    function resizeSphere() {
      canvas.width = container.offsetWidth * 2
      canvas.height = container.offsetHeight * 2
      ctx.setTransform(2, 0, 0, 2, 0, 0)
    }
    resizeSphere()
    window.addEventListener('resize', resizeSphere)

    let animId
    function animate() {
      if (!state.dragging) state.angleY += 0.003
      const cx = container.offsetWidth / 2, cy = container.offsetHeight / 2
      const w = container.offsetWidth, h = container.offsetHeight
      ctx.clearRect(0, 0, w, h)

      items.forEach(item => {
        const p = rotPt(item.phi, item.theta, item.r, state.angleX, state.angleY)
        item.px = cx + p.x; item.py = cy + p.y; item.pz = p.z
        const maxR = item.isInner ? innerR : outerR
        const scale = (p.z + maxR * 2) / (maxR * 3)
        item.el.style.left = item.px + 'px'
        item.el.style.top = item.py + 'px'
        item.el.style.transform = `translate(-50%,-50%) scale(${0.5 + scale * 0.6})`
        item.el.style.opacity = 0.25 + scale * 0.75
        item.el.style.zIndex = Math.round(p.z + outerR) + 5
      })

      // Cross-shell connections
      for (let i = 0; i < INNER_COUNT; i++) {
        for (let j = INNER_COUNT; j < items.length; j++) {
          const dx = items[i].px - items[j].px, dy = items[i].py - items[j].py
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 150) {
            const avgZ = (items[i].pz + items[j].pz) / 2
            const zFade = (avgZ + outerR) / (outerR * 2)
            const isHover = state.hovered !== null && (i === state.hovered || j === state.hovered)
            const alpha = isHover ? 0.35 * zFade : (1 - dist / 150) * 0.08 * zFade
            ctx.beginPath(); ctx.moveTo(items[i].px, items[i].py); ctx.lineTo(items[j].px, items[j].py)
            ctx.strokeStyle = isHover ? `rgba(13,148,136,${alpha})` : `rgba(99,102,241,${alpha})`
            ctx.lineWidth = isHover ? 1.5 : 0.5
            ctx.setLineDash(isHover ? [] : [3, 4])
            ctx.stroke(); ctx.setLineDash([])
          }
        }
      }

      // Same-shell connections
      for (let i = 0; i < items.length; i++) {
        for (let j = i + 1; j < items.length; j++) {
          if (items[i].isInner !== items[j].isInner) continue
          const dx = items[i].px - items[j].px, dy = items[i].py - items[j].py
          const dist = Math.sqrt(dx * dx + dy * dy)
          const maxDist = items[i].isInner ? 100 : 120
          if (dist < maxDist) {
            const avgZ = (items[i].pz + items[j].pz) / 2
            const zFade = (avgZ + outerR) / (outerR * 2)
            const alpha = (1 - dist / maxDist) * 0.06 * zFade
            ctx.beginPath(); ctx.moveTo(items[i].px, items[i].py); ctx.lineTo(items[j].px, items[j].py)
            ctx.strokeStyle = items[i].isInner ? `rgba(99,102,241,${alpha})` : `rgba(156,163,175,${alpha})`
            ctx.lineWidth = 0.4; ctx.stroke()
          }
        }
      }

      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      container.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      container.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', resizeSphere)
      items.forEach(item => item.el.remove())
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500px] max-w-[1200px] mx-auto overflow-hidden cursor-grab active:cursor-grabbing"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div
        ref={tooltipRef}
        className="absolute bg-[#1A1A1A] text-white px-3.5 py-1.5 rounded-md text-xs font-semibold pointer-events-none opacity-0 transition-opacity whitespace-nowrap z-[100]"
      />
    </div>
  )
}
