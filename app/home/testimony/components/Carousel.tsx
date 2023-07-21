'use client'
import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

type Props = {
  items: {href: string, title: string, text:string}[],
  autoSlide?: boolean,
  autoSlideInterval?: number
}

export default function Carousel({items, autoSlide = false, autoSlideInterval = 3000}: Props) {
  const [curr, setCurr] = useState(0)

  const prev = () => setCurr((curr) => (curr === 0 ? items.length - 1 : curr - 1))

  const next = () => setCurr((curr) => (curr === items.length - 1 ? 0 : curr + 1))

  useEffect(() => {
    if (!autoSlide) return 
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])

  return (
    <div className='overflow-hidden relative'>
      <div className='flex transition-transform ease-out duration-500 flex-row' style={{transform: `translateX(-${curr*100}%)`}}>


      {items.map(s => (
          <div key={s.href} className='min-w-full min-h-full relative'>
            <div className='absolute bg-gray-900/50 inset-0 grid grid-cols-1 place-content-center text-white'>
              <span className='text-white text-center font-semibold'>{s.title}</span>
              <span className='text-center'>{s.text}</span>
            </div>
            <img className='w-full h-full' src={s.href} />
          </div>
          )
        )
      }

      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
          <button onClick={prev} className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white">
            <ChevronLeft size={20}/>
          </button>
          <button onClick={next} className="p-1 rounded-full shadow bg-white-80 text-gray-800 hover:bg-white">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className='absolute bottom-4 right-0 left-0'>
          <div className='flex items-center justify-center gap-2'>
            {items.map((item, i) => (
              <div
                key={item.href}
                className={`
                transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}`}/>
            ))}
          </div>
        </div>
    </div>
  )
}
