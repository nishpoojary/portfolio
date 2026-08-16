import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const rootRef = useRef(null)
  const doneRef = useRef(false)

  useEffect(() => {
    let raf
    const tick = () => {
      setProgress((p) => {
        if (p >= 100) return 100
        const next = Math.min(100, p + Math.random() * 18)
        return next
      })
      raf = setTimeout(tick, 140)
    }
    tick()
    return () => clearTimeout(raf)
  }, [])

  useEffect(() => {
    if (progress >= 100 && !doneRef.current) {
      doneRef.current = true
      const t = setTimeout(() => {
        gsap.to(rootRef.current, {
          yPercent: -100,
          duration: 1,
          ease: 'power4.inOut',
          onComplete,
        })
      }, 250)
      return () => clearTimeout(t)
    }
  }, [progress, onComplete])

  return (
    <div className="preloader" ref={rootRef}>
      <div className="preloader-word">NISHMITHA N</div>
      <div className="preloader-bar">
        <span style={{ width: `${progress}%` }} />
      </div>
      <div className="preloader-pct">{Math.floor(progress)}%</div>
    </div>
  )
}
