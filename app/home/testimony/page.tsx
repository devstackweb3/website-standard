'use client'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'
import React from 'react';
import Carousel from './components/Carousel'
import Image from 'next/image'

const slides = [
    {href: '/jura.jpg', title: "Alex", text: "Excellente écoute & orientation ! Je recommande vivement!"},
   {href:  '/creux.jpg',title: "Hugo", text: 'Approche moderne, simple, et intuitive.'},
]


const TestimonySection = () => {
  return (
    <div className='grid sm:justify-center md:hidden lg:hidden'>
        <div className='w-full max-w-4xl mx-auto'>
        <Carousel items={slides}  />           

        </div>
    </div>
  )
}

export default TestimonySection

