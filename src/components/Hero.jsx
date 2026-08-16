import { useState } from 'react'
import { motion } from 'framer-motion'
import Magnetic from './Magnetic.jsx'
import { useCursor } from '../hooks/CursorContext.jsx'

import profilePic from '../assets/images/NISH.jpeg'
import cvFile from '../assets/documents/CV_OF_NISHMITHA_N.pdf'

const NAME = 'Nishmitha N'

const nameContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.022, delayChildren: 0.1 },
  },
}

const charVariant = {
  hidden: { yPercent: 130, opacity: 0 },
  show: {
    yPercent: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 0.84, 0.44, 1],
    },
  },
}

export default function Hero() {
  const [spot, setSpot] = useState({ x: 50, y: 50 })
  const [hasImg, setHasImg] = useState(false)

  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <motion.div
            className="hero-eyebrow-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className="dot" />
            <span
              className="eyebrow"
              style={{ marginBottom: 0 }}
            >
              Hey there, I'm
            </span>
          </motion.div>

          <h1 className="hero-name">
            <motion.span
              className="line"
              variants={nameContainer}
              initial="hidden"
              animate="show"
              style={{ display: 'inline-block' }}
            >
              {[...NAME].map((ch, i) => (
                <motion.span
                  key={i}
                  className="char"
                  variants={charVariant}
                  style={{ display: 'inline-block' }}
                >
                  {ch === ' ' ? '\u00A0' : ch}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          <motion.div
            className="hero-role"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.75,
              duration: 0.7,
              ease: [0.16, 0.84, 0.44, 1],
            }}
          >
            <span>
              MCA Student — Developer — Tech Enthusiast
            </span>
          </motion.div>

          <motion.div
            className="hero-desc"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.9,
              duration: 0.8,
              ease: [0.16, 0.84, 0.44, 1],
            }}
          >
            <p>
              Crafting robust and scalable digital experiences
              through modern technologies, innovative problem
              solving, and continuous learning.
            </p>
          </motion.div>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7 }}
          >
            <Magnetic
              tag="a"
              href={cvFile}
              download="Nishmitha_N_CV.pdf"
              className="btn btn-primary"
            >
              Download CV
            </Magnetic>

            <Magnetic
              tag="a"
              href="#contact"
              className="btn btn-ghost"
            >
              Contact Me
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          className="hero-side"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.5,
            duration: 1,
            ease: [0.16, 0.84, 0.44, 1],
          }}
        >
          <HeroPhoto
            hasImg={hasImg}
            setHasImg={setHasImg}
            spot={spot}
            setSpot={setSpot}
          />

          <p className="hero-photo-tag">
            Nishmitha N — Developer
          </p>
        </motion.div>
      </div>

      <div className="hero-scroll">
        <div className="line">
          <span />
        </div>
        Scroll
      </div>

      <div className="hero-index">
        01 — INDEX
      </div>
    </section>
  )
}

function HeroPhoto({
  hasImg,
  setHasImg,
  spot,
  setSpot,
}) {
  const { setHover, resetCursor } = useCursor()

  const handleMove = (e) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()

    setSpot({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    })
  }

  return (
    <div
      className={`hero-photo ${
        hasImg ? 'has-img' : ''
      }`}
      onMouseMove={handleMove}
      onMouseEnter={setHover}
      onMouseLeave={resetCursor}
    >
      <img
        src={profilePic}
        alt="Nishmitha N"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
        onLoad={() => setHasImg(true)}
      />

      <div className="hero-photo-placeholder">
        <span className="big">N.</span>
        <span>Add your photo</span>
      </div>

      <div
        className="hero-photo-fill"
        style={{
          '--mx': `${spot.x}%`,
          '--my': `${spot.y}%`,
        }}
      />
    </div>
  )
}