import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const VARIANTS = {
  up: { from: { opacity: 0, y: 36 }, to: { opacity: 1, y: 0 } },
  left: { from: { opacity: 0, x: -36 }, to: { opacity: 1, x: 0 } },
  right: { from: { opacity: 0, x: 36 }, to: { opacity: 1, x: 0 } },
  scale: { from: { opacity: 0, scale: 0.92 }, to: { opacity: 1, scale: 1 } },
}

/**
 * Wraps any block-level content and reveals it with GSAP + ScrollTrigger
 * as it scrolls into view. `type` selects the motion direction.
 */
export default function Reveal({ children, type = 'up', delay = 0, className = '', as = 'div', start = 'top 88%', ...rest }) {
  const ref = useRef(null)
  const Tag = as

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const { from, to } = VARIANTS[type] || VARIANTS.up
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        from,
        {
          ...to,
          duration: 1,
          delay,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start },
        }
      )
    })
    return () => ctx.revert()
  }, [type, delay, start])

  return (
    <Tag ref={ref} className={className} {...rest}>
      {children}
    </Tag>
  )
}
