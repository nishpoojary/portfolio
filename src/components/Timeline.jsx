import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from './Reveal.jsx'
import { TIMELINE } from '../data/content.js'

gsap.registerPlugin(ScrollTrigger)

export default function Timeline() {
  const wrapRef = useRef(null)
  const fillRef = useRef(null)
  const [activeCount, setActiveCount] = useState(0)

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: wrapRef.current,
      start: 'top 70%',
      end: 'bottom 60%',
      scrub: 0.6,
      onUpdate: (self) => {
        if (fillRef.current) fillRef.current.style.height = `${self.progress * 100}%`
        setActiveCount(Math.floor(self.progress * TIMELINE.length + TIMELINE.length * 0.05))
      },
    })
    return () => trigger.kill()
  }, [])

  return (
    <section className="section" id="journey">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal className="eyebrow">05 / Education</Reveal>
            <Reveal type="up" delay={0.05}>
              <h2 className="section-title">The journey so far.</h2>
            </Reveal>
          </div>
        </div>

        <div className="timeline" ref={wrapRef}>
          <div className="timeline-line" />
          <div className="timeline-fill" ref={fillRef} />
          <div>
            {TIMELINE.map((item, i) => (
              <Reveal
                key={item.title}
                type="up"
                delay={i * 0.05}
                className={`timeline-item ${i < activeCount ? 'active' : ''}`}
              >
                <div className="timeline-node">
                  <i />
                </div>
                <div className="timeline-year">{item.year}</div>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-desc">{item.desc}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
