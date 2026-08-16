import { useRef } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

/**
 * Gives an element a magnetic pull toward the cursor on hover.
 * Usage: const { ref, style, handlers } = useMagnetic(0.3)
 * <motion.div ref={ref} style={style} {...handlers} />
 */
export default function useMagnetic(strength = 0.3) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 12, mass: 0.3 })
  const springY = useSpring(y, { stiffness: 150, damping: 12, mass: 0.3 })

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - rect.left - rect.width / 2
    const relY = e.clientY - rect.top - rect.height / 2
    x.set(relX * strength)
    y.set(relY * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return {
    ref,
    style: { x: springX, y: springY },
    handlers: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
    },
  }
}
