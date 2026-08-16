import { FiArrowUpRight } from 'react-icons/fi'
import Reveal from './Reveal.jsx'
import { useCursor } from '../hooks/CursorContext.jsx'
import { PROJECTS } from '../data/content.js'

export default function Projects({ onOpen }) {
  const { setView, resetCursor } = useCursor()

  return (
    <section className="section" id="work">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal className="eyebrow">04 / Selected Work</Reveal>
            <Reveal type="up" delay={0.05}>
              <h2 className="section-title">Things I've built.</h2>
            </Reveal>
          </div>
          <Reveal type="up" delay={0.1} as="p" className="section-note">
            Five projects spanning AI security, agri-tech, productivity, hospitality systems, and
            utility tools.
          </Reveal>
        </div>

        <div className="projects-list">
          {PROJECTS.map((project, i) => (
            <Reveal
              key={project.name}
              type="up"
              delay={i * 0.04}
              as="div"
              className="project-row"
              onClick={() => onOpen(i)}
              onMouseEnter={setView}
              onMouseLeave={resetCursor}
            >
              <span className="project-num">{String(i + 1).padStart(2, '0')}</span>
              <span className="project-name">{project.name}</span>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-arrow">
                <FiArrowUpRight />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
