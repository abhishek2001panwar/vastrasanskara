import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/sections/hero'
import Top from './components/sections/top'
import Explore from './components/sections/explore'
import Services from './components/sections/services'
import Work from './components/sections/work'
import StayInspired from './components/sections/cta'
import Footer from './components/sections/footer'

function page() {
  return (
    <div>
      <Top  />
      <Navbar />
      <Hero />
      <Explore />
      <Services />
      <Work />
      <StayInspired />
      <Footer />
    </div>
  )
}

export default page