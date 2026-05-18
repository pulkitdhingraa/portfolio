import { useState, Fragment } from 'react'
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
import { sections } from './config/sections'

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
    document.documentElement.style.overflow = ''
    setPage('pro')
    window.scrollTo(0, 0)
  }

  const { main } = sections

  // Build the ordered list of enabled sections, then interleave dividers.
  const sectionNodes = [
    main.hero && <Hero key="hero" />,
    main.about && <About key="about" />,
    main.techStack && <TechStack key="techstack" />,
    main.projects && <Projects key="projects" />,
    main.experience && <Experience key="experience" />,
    main.certifications && <Certifications key="certifications" />,
    main.blog && <Blog key="blog" />,
    main.contact && <Contact key="contact" />,
  ].filter(Boolean)

  return (
    <>
      {page !== 'personal' && (
        <div className="pro-root" style={{ visibility: page === 'transitioning' ? 'hidden' : 'visible' }}>
          <Navbar onSecretClick={handleSecretClick} />
          {main.socialStrip && <SocialStrip />}
          {sectionNodes.map((node, i) => (
            <Fragment key={node.key}>
              {i > 0 && <SectionDivider />}
              {node}
            </Fragment>
          ))}
          {main.footer && <Footer onSecretClick={handleSecretClick} />}
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
