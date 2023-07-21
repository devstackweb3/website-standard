import React from 'react'

const HeroSection = () => {
  return (
    <div>
      <div className="xs:flex-col sm:flex-col flex dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex xs:flex-col sm:flex-col xs:justify-center sm:justify-center p-6 mx-auto sm:py-12 lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left xl:text-left">
          <h1 className="text-5xl font-bold leadi sm:text-6xl lg:min-w-[32rem] self-center">Acquérez des
            <span className="text-green-700"> crédits</span> flexibles
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">Nous sommes spécialisés dans les prêts personnels, automobiles, étudiants ou hypothécaires. Vous y découvrirez des <span className='text-green-700 font-semibold'>taux compétitifs</span>, des conditions <span className='text-green-700 font-semibold'>flexibles</span> et un processus de demande <span className="text-green-700 font-semibold"> rapide</span> .
            
          </p>
          <div className="flex flex-wrap w-full items-center sm:items-center sm:justify-center sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Découvrir</a>
            <a rel="noopener noreferrer" href="/demande-de-credit" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100">Demande de Crédit</a>
          </div>
        </div>
        <div className="sm:invisible items-center justify-center md:p-6 md:mt-8 lg:mt-0 h-72 md:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src="@/app/public/heroimg.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default HeroSection