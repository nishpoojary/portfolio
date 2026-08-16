import Reveal from './Reveal.jsx'
import Counter from './Counter.jsx'
import { ABOUT_STATS } from '../data/content.js'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal className="eyebrow">02 / About</Reveal>
            <Reveal type="up" delay={0.05}>
              <h2 className="section-title">A little about my journey.</h2>
            </Reveal>
          </div>
        </div>

        <div className="about-grid">
          <Reveal type="left" as="p" className="about-lead">
            I'm an <b>MCA student</b> who builds things that actually <b>hold up under real use</b> — not
            just demos. <span className="muted-word">My interest sits at the intersection of clean
            engineering and security-minded thinking.</span>
          </Reveal>

          <Reveal type="right">
            <div className="about-body">
              <p>
                My path into development started with curiosity about how systems actually work under
                the hood — which eventually pulled me toward cybersecurity, network fundamentals, and
                building full-stack applications that are both functional and defensible.
              </p>
              <p>
                Through my MCA journey, I've moved from writing my first lines of Java to shipping full
                applications with React front-ends and Python, FastAPI back-ends — treating every
                project as a chance to write cleaner code, reason about edge cases, and understand the
                "why" behind a working system, not just the "how."
              </p>
              <p>
                My development philosophy is simple: build things that are robust, scalable, and honest
                about their trade-offs. I'd rather ship something smaller that works correctly than
                something large that's fragile.
              </p>
            </div>

            <div className="about-stats">
              {ABOUT_STATS.map((stat) => (
                <div className="about-stat" key={stat.label}>
                  <Counter target={stat.value} />
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
