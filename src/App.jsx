import { motion, useScroll, useTransform } from 'framer-motion'
import ghostVideo from './Data/ghost-in-modern-warfare-2.1920x1080.mp4'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Editions from './components/Editions'
import Features from './components/Features'
import Cursor from './components/Cursor'
import logo from './Data/Logo.jpg'
import HorizontalScroll from './components/HorizontalScroll'

function App() {
  const HeroPinnedScroll = () => {
    const { scrollY } = useScroll()

    const scale = useTransform(
      scrollY,
      [0, 800],
      [1, 1.3]
    )

    const opacity = useTransform(
      scrollY,
      [0, 800],
      [1, 0]
    )

    return (
      <motion.div
        className="sticky top-0 h-screen w-screen overflow-hidden"
        style={{ scale, opacity }}
      >
        <img
          src={logo}
          alt="Hero"
          className="h-full w-full object-cover"
        />
      </motion.div>
    )
  }

  return (
    <>
      <Cursor />
      <div className="relative h-[200vh]">
        <HeroPinnedScroll />
      </div>
      <video className="fixed top-0 left-0 min-w-full min-h-full -z-10 object-cover brightness-75 contrast-110" autoPlay muted loop playsInline>
        <source src={ghostVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Navbar />
      <Hero />
      <Features />
      <HorizontalScroll />
      <Editions />
      <Footer />
    </>
  )
}

export default App


