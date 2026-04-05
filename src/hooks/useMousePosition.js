import { useState, useCallback } from 'react'

export function useMousePosition() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 })

  const onMouseMove = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }, [])

  const onMouseLeave = useCallback(() => {
    setPos({ x: -1000, y: -1000 })
  }, [])

  return { pos, onMouseMove, onMouseLeave }
}
