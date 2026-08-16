import Reveal from './Reveal.jsx'
import { ACHIEVEMENTS } from '../data/content.js'

export default function Achievements() {
  return (
    <section className="section" id="achievements">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal className="eyebrow">06 / Recognition</Reveal>
            <Reveal type="up" delay={0.05}>
              <h2 className="section-title">Achievements &amp; certifications.</h2>
            </Reveal>
          </div>
        </div>

        <div className="ach-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal key={a.title} type="up" delay={(i % 2) * 0.06} className="ach-card">
              <div className="ach-top">
                <div className="ach-icon">{a.icon}</div>
                <div className="ach-year">{a.year}</div>
              </div>
              <div className="ach-title">{a.title}</div>
              <div className="ach-desc">{a.desc}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
