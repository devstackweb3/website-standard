import React from 'react'
import NavBar from '@/app/components/Nav'
import HeroSection from '@/app/demande-de-credit/hero/page'
import MainSection from '@/app/demande-de-credit/main/page'
import Formular from '@/app/demande-de-credit/formular/page'
import Footer from '@/app/components/Footer'

const DemandeDeCredit = () => {
  return (
    <div className='w-full'>
        <NavBar />
        <MainSection />
        <HeroSection />
        <Formular />
        <Footer />
    </div>
  )
}

export default DemandeDeCredit