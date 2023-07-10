import React from 'react'
import NavBar from '@/app/components/Nav'
import HeroSection from '@/app/a-propos/hero/page'
import MainSection from '@/app/a-propos/main/page'
import Footer from '@/app/components/Footer'

const About = () => {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <MainSection />
      <Footer />
    </div>
  )
}

export default About