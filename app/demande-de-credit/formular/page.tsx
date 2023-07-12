'use client'
import React, { useRef } from 'react'
import free from '@/app/public/free.svg'
import time from '@/app/public/time.svg'

import step from '@/app/public/Step.svg'

import LoanForm from './components/LoanForm';


const Formular = () => {
    const form = useRef(); 

    const sendEmail = () => {
    
    }

    return (
        <div>
            <div className='grid sm:p-4 place-content-center'>
                <h1 className='text-2xl mb-8 text-center'>Demandez votre crédit privé à <span className='font-semibold'> GoCredit </span></h1>
                <div className='grid sm:place-content-center'>
                    <div className='grid sm:w-fit w-full'>   
                        <div className='grid sm:grid-cols-2 grid-cols-4 xs:w-[12rem] xs:h-[12rem] xxs:w-[16rem] xxs:h-[16rem] my-4'>
                            <div className='grid justify-center text-center'>
                                <div className='grid bg-gradient-to-br from-green-300 via-30% to-emerald-500 to-90% xs:w-16 xs:h-16 w-24 h-24 rounded-md place-content-center'>
                                    <img className='sm:h-8 sm:w-8 h-16 w-16 self-center' src={free.src} alt="free" />
                                </div>
                                <h2 className='font-semibold'>Gratuit</h2>
                            </div>
                            <div className='grid justify-center text-center'>
                                <div className='grid bg-gradient-to-br from-green-300 via-30% to-emerald-500 to-90% xs:w-16 xs:h-16 w-24 h-24 rounded-md place-content-center'>
                                    <img className='sm:h-8 sm:w-8 h-16 w-16 self-center' src={time.src} alt="free" />
                                </div>
                                <h2 className='font-semibold'>24h</h2>
                            </div>
                            <div className='grid justify-center text-center'>
                                <div className='grid bg-gradient-to-br from-green-300 via-30% to-emerald-500 to-90% xs:w-16 xs:h-16 w-24 h-24 rounded-md place-content-center'>
                                    <img className='sm:h-8 sm:w-8 h-16 w-16 self-center' src="@/app/public/free.svg" alt="free" />
                                </div>
                                <h2 className='font-semibold'>Libre</h2>
                            </div>
                            <div className='grid justify-center text-center'>
                                <div className='grid bg-gradient-to-br from-green-300 via-30% to-emerald-500 to-90% xs:w-16 xs:h-16 w-24 h-24 rounded-md place-content-center'>
                                    <img className='sm:h-8 sm:w-8 h-16 w-16 self-center' src={step.src} alt="free" />
                                </div>
                                <h2 className='font-semibold'>1 Etape</h2>
                            </div>
                        </div>
                    </div> 
                </div>
                <LoanForm />
            </div>
            <div className='container mt-8 mb-8 justify-center mx-auto p-4'>
                <span className='italic font-light text-justify'>Exemple de calcul: emprunt de CHF 10'000. Un taux d’intérêt annuel effectif entre 3.9% et 9,95% et une durée de 12 mois engendrent des intérêts totaux entre CHF 275 et CHF 522. Durée: 6-120 mois; Taux d'intérêt annuel maximum (y compris tous les frais du crédit) 9,95%. L'octroi d’un crédit est interdit, s'il entraîne le surendettement du consommateur. (Art. 3 LCD)</span>
            </div>
        </div>
    )
}

export default Formular