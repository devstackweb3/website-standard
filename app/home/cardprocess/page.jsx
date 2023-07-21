'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

//import creditDelivery from '@/public/creditdelivery.png'

const CardPreviewSection = () => {
  
    const [expandedIndex, setExpandedIndex] = useState(null)

    const handleCardClick = (index) => {
        setExpandedIndex(index === expandedIndex ? -1 : index)
    }
  
    const cardVariants = {
        expanded: {
            width: "350px"
        },
        collapsed: {
            width: "200px"
        }
    }

    const cardImages = ["/ask.jpg", "/formular.jpg", "/validation.jpg", "/contract.jpg"]


    const cardSubtitles = [
        'Transmission Formulaire',
        'Réponse en 24h',
        'Validation Prise de Crédit',
        'Transmission Contrat'
    ]

    const cardDescriptions = [
        'Remplissez le formulaire en moins de 3 minutes.',
        'Premier contact effectué sous 24 heures (jours ouvrables), suivant votre demande.',
        "Lorsque toutes les zones d'ombres sont clairement clarifiées et considérées par vos soins, nous réceptionnons votre confirmation d'engagement.",
        'Le contrat de crédit vous est envoyé par voie électronique attendant votre signature.',
    ]

    return (
    <div className='py-16 pb-[300px] bg-gradient-to-r from-green-300 to-emerald-800 sm:hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-extrabold text-white text-center'>Acquisition de Crédit</h1>
            <p className='mt-4 text-xl text-gray-300 text-center'>Un processus d'engagement simple</p>
        </div>
        <div className='mt-12 flex flex-row justify-center items-center gap-5'>
            {[0, 1, 2, 3].map((index) => (
                <motion.div
                key={index}
                className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${index === expandedIndex ? 'expanded': ''}`}
                variants={cardVariants}
                initial='collapsed'
                animate={index === expandedIndex ? 'expanded': 'collapsed'}
                transition={{duration: 0.5}}
                onClick={() => handleCardClick(index)}
                style={{
                    backgroundImage: `url(${cardImages[index]})`,
                    justifyItems: 'center'
                }}
                >
                    <div className='card-content h-full flex flex-col justify-end'>
                        <div className='card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center'>
                            <h3 className='text-s tracki uppercase font-semibold text-white text-center'>Etape {index + 1}</h3>
                            <div className="divide-y divide-green-500 grid items-center p-4">
                                <span className='text-xs uppercase font-light text-white text-center'>{cardSubtitles[index]}</span>
                                {index === expandedIndex && (
                                    <p className='mt-4 text-gray-300 text-center mb-4'>{cardDescriptions[index]}</p>
                                    )}
                            </div>
                        </div>

                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}


export default CardPreviewSection