import React from 'react'
import NavBar from '@/app/components/Nav'
import HeroSection from '@/app/home/hero/page'
import ArgumentSection from '@/app/home/arguments/page'
import ProcessusSection from '@/app/home/processus/page'
import Newsletter from '@/app/home/newsletter/page'
import Footer from '@/app/components/Footer'

const page = () => {
  return (
    <body>
      <NavBar />
      <HeroSection />
      <ArgumentSection /> 
      <ProcessusSection />
      <Newsletter />
      <Footer />
    </body>
  )
}

export default page
