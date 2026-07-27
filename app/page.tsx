import React from 'react'

import Hero from './components/sections/hero'
import Top from './components/sections/top'
import Explore from './components/sections/explore'
import Services from './components/sections/services'
import Work from './components/sections/work'
import StayInspired from './components/sections/cta'
import Footer from './components/sections/footer'
import TestimonialSection from './components/sections/testimonial'

function page() {
  return (
    <div>
     
      <Hero />
      <Explore />
      <Services />
      <Work />
      <TestimonialSection />
      <StayInspired />
      <Footer />
    </div>
  )
}

export default page