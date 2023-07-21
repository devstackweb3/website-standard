import React from 'react'
import NavBar from '@/app/components/Nav'
import HeroSection from '@/app/home/hero/page'
import ClaritySection from '@/app/home/clarity/page'
import ArgumentSection from '@/app/home/arguments/page'
import ProcessusSection from '@/app/home/processus/page'
import CardPreviewSection from '@/app/home/cardprocess/page.jsx'
import TestimonySection from '@/app/home/testimony/page'
import Newsletter from '@/app/home/newsletter/page'
import Footer from '@/app/components/Footer'

const page = () => {
  return (
    <body>
      <NavBar />
      <HeroSection />
      <ClaritySection />
      <ArgumentSection /> 
      <ProcessusSection />
      <CardPreviewSection />
      <TestimonySection />
      <Newsletter />
      <Footer />
    </body>
  )
}

export default page
