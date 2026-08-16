import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from './Reveal.jsx'
import { SKILLS } from '../data/content.js'

gsap.registerPlugin(ScrollTrigger)

function SkillCard({ skill, index }) {
  const barRef = useRef(null)

  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      onEnter: () => gsap.to(el, { width: `${skill.level}%`, duration: 1.2, ease: 'power3.out' }),
    })
    return () => trigger.kill()
  }, [skill.level])

  return (
    <Reveal type="up" delay={(index % 4) * 0.04} className="skill-card">
      <span className="skill-index">{String(index + 1).padStart(2, '0')}</span>
      <div>
        <div className="skill-name">{skill.name}</div>
        <div className="skill-bar">
          <i ref={barRef} />
        </div>
      </div>
    </Reveal>
  )
}

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal className="eyebrow">03 / Capabilities</Reveal>
            <Reveal type="up" delay={0.05}>
              <h2 className="section-title">Tools I build with.</h2>
            </Reveal>
          </div>
          <Reveal type="up" delay={0.1} as="p" className="section-note">
            A working stack spanning front-end interfaces, back-end systems, data, and security
            fundamentals.
          </Reveal>
        </div>

        <div className="skills-grid">
          {SKILLS.map((skill, i) => (
            <SkillCard skill={skill} index={i} key={skill.name} />
          ))}
        </div>
      </div>
    </section>
  )
}
