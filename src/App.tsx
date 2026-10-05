import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import MobileNav from './components/layout/MobileNav'
import SkipLink from './components/layout/SkipLink'
import Contact from './components/sections/Contact'
import Hero from './components/sections/Hero'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import { useFullPageScroll } from './hooks/useFullPageScroll'

export default function App() {
  useFullPageScroll()

  return (
    <div id="top" className="flex min-h-screen flex-col pb-24 md:pb-0">
      <SkipLink />
      <Header />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <MobileNav />
    </div>
  )
}
