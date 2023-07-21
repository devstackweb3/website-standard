import React from 'react'

const ClaritySection = () => {
  return (
    <div>
      <div className="xs:flex-col sm:flex-col flex dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex xs:flex-col sm:flex-col xs:justify-center sm:justify-center p-6 mx-auto sm:py-12 justify-between">
        
        <div className="sm:invisible items-left justify-center md:p-6 md:mt-8 lg:mt-0 h-72 md:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img src="@/app/public/heroimg.png" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-right xl:text-right">
          <h1 className="text-5xl font-bold leadi sm:text-6xl lg:min-w-[32rem] self-center">Concrétisez vos
            <span className="text-green-700"> projets</span> en toute <p className='text-green-700'>sérénité</p>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">Obtenez dès maintenant votre crédit financier sur mesure et réalisez vos projets en un clin d'œil! Demandez votre devis et profitez d'une réponse rapide ainsi que de taux d'intérêts avantageux.
            
          </p>
          
        </div>
      </div>
    </div>
    </div>
  )
}

export default ClaritySection