import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiGithub, FiExternalLink } from 'react-icons/fi'
import Magnetic from './Magnetic.jsx'
import { useLenisInstance } from '../hooks/LenisContext.jsx'
import { PROJECTS } from '../data/content.js'

export default function ProjectModal({ index, onClose }) {
  const lenisRef = useLenisInstance()
  const project = index !== null ? PROJECTS[index] : null
  const [showScrollHint, setShowScrollHint] = useState(false)
  const modalRef = useRef(null)

  useEffect(() => {
    const lenis = lenisRef?.current
    if (project) {
      document.body.style.overflow = 'hidden'
      lenis?.stop()
    } else {
      document.body.style.overflow = ''
      lenis?.start()
    }
  }, [project, lenisRef])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    const modal = modalRef.current
    if (!modal) return undefined

    const updateHint = () => {
      setShowScrollHint(modal.scrollHeight > modal.clientHeight + 2)
    }

    updateHint()
    modal.addEventListener('scroll', updateHint)
    window.addEventListener('resize', updateHint)

    return () => {
      modal.removeEventListener('scroll', updateHint)
      window.removeEventListener('resize', updateHint)
    }
  }, [project])

  const handleScrollDown = () => {
    const modal = modalRef.current
    if (!modal) return
    modal.scrollBy({ top: modal.clientHeight * 0.6, left: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-overlay open"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose()
          }}
        >
          <motion.div
            ref={modalRef}
            className="modal"
            initial={{ y: 30, scale: 0.97, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 30, scale: 0.97, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="modal-top">
              <h3 className="modal-title">{project.name}</h3>
              <div className="modal-top-actions">
                <button type="button" className="modal-scroll-top" onClick={handleScrollDown}>
                  Scroll
                </button>
                <Magnetic tag="button" className="modal-close" onClick={onClose} aria-label="Close">
                  <FiX size={16} />
                </Magnetic>
              </div>
            </div>

            <div className="modal-cover">
              {project.image && <img src={project.image} alt={`${project.name} screenshot`} />}
              <div className="modal-cover-tag">
                <span>{project.tag}</span>
              </div>
              <div className="modal-cover-overlay">
                <Magnetic
                  tag="a"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="cover-action"
                  aria-label="View GitHub repository"
                >
                  <FiGithub />
                </Magnetic>
                <Magnetic
                  tag="a"
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="cover-action"
                  aria-label="View live demo"
                >
                  <FiExternalLink />
                </Magnetic>
              </div>
            </div>

            <p className="modal-desc">{project.desc}</p>

            <div className="modal-meta">
              <div>
                <h4>Features</h4>
                <ul>
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>Technologies</h4>
                <div className="modal-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-links">
              <Magnetic tag="a" href={project.github} target="_blank" rel="noreferrer" className="btn btn-primary">
                <FiGithub /> View on GitHub
              </Magnetic>
              <Magnetic tag="a" href={project.demo} target="_blank" rel="noreferrer" className="btn btn-ghost">
                <FiExternalLink /> Live Demo
              </Magnetic>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
