import { useState } from 'react'
import Navbar from './components/Navbar'
import SocialStrip from './components/SocialStrip'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import SectionDivider from './components/SectionDivider'
import TechStack from './components/techstack/TechStack'
import Projects from './components/projects/Projects'
import Experience from './components/experience/Experience'
import Certifications from './components/certifications/Certifications'
import Blog from './components/blog/Blog'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import GlitchTransition from './components/personal/GlitchTransition'
import PersonalPage from './components/personal/PersonalPage'

export default function App() {
  const [page, setPage] = useState('pro') // 'pro' | 'transitioning' | 'personal'

  const handleSecretClick = () => {
    if (page !== 'pro') return
    setPage('transitioning')
  }

  const handleGlitchComplete = () => {
    setPage('personal')
  }

  const handleExitPersonal = () => {
    setPage('pro')
    window.scrollTo(0, 0)
  }

  return (
    <>
      {page !== 'personal' && (
        <div style={{ visibility: page === 'transitioning' ? 'hidden' : 'visible' }}>
          <Navbar onSecretClick={handleSecretClick} />
          <SocialStrip />
          <Hero />
          <About />
          <SectionDivider />
          <TechStack />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Experience />
          <SectionDivider />
          <Certifications />
          <SectionDivider />
          <Blog />
          <SectionDivider />
          <Contact />
          <Footer onSecretClick={handleSecretClick} />
        </div>
      )}

      <GlitchTransition
        active={page === 'transitioning'}
        onComplete={handleGlitchComplete}
      />

      {(page === 'transitioning' || page === 'personal') && (
        <PersonalPage
          visible={page === 'personal'}
          onExit={handleExitPersonal}
        />
      )}
    </>
  )
}
