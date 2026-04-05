import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    function onScroll() {
      const scrollY = window.scrollY + window.innerHeight * 0.35
      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) current = id
      }
      setActiveId(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds])

  return activeId
}
