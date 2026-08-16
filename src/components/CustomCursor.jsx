import { useEffect, useRef } from 'react'
import { useCursor } from '../hooks/CursorContext.jsx'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const { variant } = useCursor()

  const mouse = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    const handleMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`
        dotRef.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', handleMove)

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.16
      ring.current.y += (mouse.current.y - ring.current.y) * 0.16
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`
        ringRef.current.style.top = `${ring.current.y}px`
      }
      raf.current = requestAnimationFrame(animate)
    }
    raf.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div
        ref={ringRef}
        className={`cursor-ring ${variant === 'hover' ? 'hover' : ''} ${variant === 'view' ? 'view' : ''}`}
      >
        <span className="cursor-label">View</span>
      </div>
    </>
  )
}
