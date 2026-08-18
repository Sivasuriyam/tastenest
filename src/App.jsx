import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import WorkingHours from './components/WorkingHours'
import Testimonials from './components/Testimonials'
import Stats from './components/Stats'
import AppPromo from './components/AppPromo'
import Menu from './components/Menu'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <WorkingHours />
        <Testimonials />
        <Stats />
        <AppPromo />
        <Menu />
        <Newsletter />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
