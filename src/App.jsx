import { useEffect, useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CursorProvider } from './hooks/CursorContext.jsx'
import { LenisProvider } from './hooks/LenisContext.jsx'

import CustomCursor from './components/CustomCursor.jsx'
import Preloader from './components/Preloader.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import ProjectModal from './components/ProjectModal.jsx'
import Timeline from './components/Timeline.jsx'
import Achievements from './components/Achievements.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [modalIndex, setModalIndex] = useState(null)

  useEffect(() => {
    if (!loading) {
      const t = setTimeout(() => ScrollTrigger.refresh(), 400)
      return () => clearTimeout(t)
    }
  }, [loading])

  return (
    <CursorProvider>
      <LenisProvider>
        <div className="grain" />
        <div className="vignette" />
        <CustomCursor />

        {loading && <Preloader onComplete={() => setLoading(false)} />}

        {!loading && (
          <>
            <ScrollProgress />
            <Navbar />
            <main>
              <Hero />
              <Marquee />
              <About />
              <Skills />
              <Projects onOpen={setModalIndex} />
              <Timeline />
              <Achievements />
              <Contact />
            </main>
            <Footer />
            <ProjectModal index={modalIndex} onClose={() => setModalIndex(null)} />
          </>
        )}
      </LenisProvider>
    </CursorProvider>
  )
}
