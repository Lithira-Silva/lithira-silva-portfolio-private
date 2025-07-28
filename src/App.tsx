import { useEffect } from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Footer from './sections/Footer'
import StarField from './components/StarField'
import ScrollProgress from './components/ScrollProgress'
import './styles/globals.css'

function App() {
  // Ensure page loads at the top
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen text-white transition-colors duration-300 bg-black">
      <ScrollProgress />
      <StarField />
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
