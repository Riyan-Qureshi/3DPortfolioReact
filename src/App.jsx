import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Testimonials from './sections/Testimonials'
import ContactMe from './sections/ContactMe'
import Footer from './sections/Footer'

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      {/* <Testimonials/> */}
      <ContactMe/>
      <Footer/>
    </main>
  )
}

export default App