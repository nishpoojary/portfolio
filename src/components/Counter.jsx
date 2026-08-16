import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Counter({ target }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const obj = { val: 0 }
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 1.6,
          ease: 'power2.out',
          onUpdate: () => {
            if (el) el.textContent = Math.floor(obj.val)
          },
        })
      },
    })
    return () => trigger.kill()
  }, [target])

  return <b ref={ref}>0</b>
}
