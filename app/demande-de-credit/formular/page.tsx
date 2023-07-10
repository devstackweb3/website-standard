'use client'
import React, { useRef } from 'react'

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
                                    <img className='sm:h-8 sm:w-8 h-16 w-16 self-center' src="@/app/public/free.svg" alt="free" />
                                </div>
                                <h2 className='font-semibold'>Gratuit</h2>
                            </div>
                            <div className='grid justify-center text-center'>
                                <div className='grid bg-gradient-to-br from-green-300 via-30% to-emerald-500 to-90% xs:w-16 xs:h-16 w-24 h-24 rounded-md place-content-center'>
                                    <img className='sm:h-8 sm:w-8 h-16 w-16 self-center' src="@/app/public/free.svg" alt="free" />
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
                                    <img className='sm:h-8 sm:w-8 h-16 w-16 self-center' src="@/app/public/free.svg" alt="free" />
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

  return (
    <div className=''>
        <div className='grid sm:p-4 place-content-center'>
        <h1 className='text-2xl mb-8 text-center'>Demandez votre crédit privé à <span className='font-semibold'> GoCredit </span></h1>
        <div className='grid w-full'>   
            <div className='grid grid-cols-4 my-4'>
                <div className='grid bg-gradient-to-br from-green-300 via-30% to-emerald-500 to-90% sm:w-16 sm:h-16 w-24 h-24 rounded-md place-content-center'>
                    <img className='sm:h-8 sm:w-8 h-16 w-16 self-center' src="@/app/public/free.svg" alt="free" />
                </div>
                <div className='grid bg-gradient-to-br from-green-300 via-30% to-emerald-500 to-90% sm:w-16 sm:h-16 w-24 h-24 rounded-md place-content-center'>
                    <img className='sm:h-8 sm:w-8 h-16 w-16 self-center' src="@/app/public/free.svg" alt="free" />
                </div>
                <div className='grid bg-gradient-to-br from-green-300 via-30% to-emerald-500 to-90% sm:w-16 sm:h-16 w-24 h-24 rounded-md place-content-center'>
                    <img className='sm:h-8 sm:w-8 h-16 w-16 self-center' src="@/app/public/free.svg" alt="free" />
                </div>
                <div className='grid bg-gradient-to-br from-green-300 via-30% to-emerald-500 to-90% sm:w-16 sm:h-16 w-24 h-24 rounded-md place-content-center'>
                    <img className='sm:h-8 sm:w-8 h-16 w-16 self-center' src="@/app/public/free.svg" alt="free" />
                </div>
            </div>
        </div> 
        <form className="xs:w-full sm:w-full w-[32rem]">

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='montantcredit'>
                    Montant du Crédit*
                </label>
                <input className="appearance-none block w-full bg-green-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" step="100" placeholder="20'000 CHF" id='montantcredit' autoComplete='off' required/>
                </div>
            </div>

            <div className="flex -mx-3 mb-6">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='dureecredit'>
                    Durée du Crédit*
                </label>
                <select name = "dropdown" id='dureecredit'>
                    <option value = "6 mois" selected>6 Mois</option>
                    <option value = "12 mois">12 Mois</option>
                    <option value = "24 mois">24 Mois</option>
                    <option value = "36 mois">36 Mois</option>
                    <option value = "48 mois">48 Mois</option>
                    <option value = "60 mois">60 Mois</option>
                    <option value = "72 mois">72 Mois</option>
                    <option value = "84 mois">84 Mois</option>
                </select>
                </div>
            </div>

            <div className="flex -mx-3">
                <div className="xs:w-full sm:w-full w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='prenom'>
                        Prénom
                    </label>
                    <input className="appearance-none block xs:w-full sm:w-full w-1/2 bg-green-50 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id='prenom' type="text" placeholder="Marck" autoComplete='off' required />
                    <p className="text-red-500 text-xs italic">Veuillez remplir ce champs.</p>
                </div>
                <div className="xs:w-full sm:w-full w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='nom'>
                        Nom de Famille 
                    </label>
                    <input className="appearance-none block xs:w-full sm:w-full w-1/2 bg-green-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id='nom' placeholder="Hamil" autoComplete='off' required/>
                </div>
            </div>

            <div className="-mx-3 mb-6">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='email'>
                    E-mail*
                </label>
                <input className="appearance-none block w-full bg-green-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" id='email' placeholder='marckhamil@gmail.com' autoComplete='off' required/>
                </div>
            </div>
            <div className="-mx-3 mb-6">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='borndate'>
                    Date de Naissance
                </label>
                <input className="appearance-none block w-full bg-green-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="date" id='borndate' autoComplete='off' required/>
                </div>
            </div>
            <div className="flex -mx-3 mb-6">
                <div className="w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='rue'>
                    Rue*
                </label>
                <input className="appearance-none block w-full bg-green-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id='rue' autoComplete='off' required/>
                </div>
                <div className="w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='numero'>
                    Numéro*
                </label>
                <input className="appearance-none block w-full bg-green-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" id='numero' autoComplete='off' required/>
                </div>
            </div>
            <div className="flex -mx-3 mb-6">
                <div className="w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='npa'>
                    NPA*
                </label>
                <input className="appearance-none block w-full bg-green-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" id='npa' autoComplete='off' required/>
                </div>
                <div className="w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor='localite'>
                    Localité*
                </label>
                <input className="appearance-none block w-full bg-green-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" id='localite' autoComplete='off' required/>
                </div>
            </div>
            <div className="-mx-3 mb-6">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Salaire net mensuel*
                </label>
                <input className="appearance-none block w-full bg-green-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" autoComplete='off' required/>
                </div>
            </div>
            <div className="-mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Revenus complémentaires
                    </label>
                    <div className='flex'>
                        <div className='flex flex-wrap w-1/2'>
                            <div>
                                <label className="text-gray-700 text-xs font-bold mb-2 px-3">NON</label>
                                <input type="checkbox" id='no' name="no" autoComplete='off'/>
                            </div>
                            <div>
                                <label className="text-gray-700 text-xs font-bold mb-2 px-3">OUI</label>
                                <input type="checkbox" id="yes" name="yes"/>
                            </div>
                        </div>
                        <div>
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Revenu Compl. mensuel
                    </label>
                    <input className="appearance-none block w-full bg-green-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="number" autoComplete='off'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex -mx-3 mb-6">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Poursuites ou Saisies en cours *
                </label>
                <select name = "dropdown">
                    <option value = "aucun" selected>Aucune</option>
                    <option value = "saisie">Saisie</option>
                    <option value = "poursuites">Poursuites</option>
                </select>
                </div>
            </div>
            <div className="flex -mx-3 mb-6">
                <div className="w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Etat Civil 
                </label>
                <select name = "dropdown">
                    <option value = "celibataire" selected>Célibataire</option>
                    <option value = "encouple">En Couple</option>
                    <option value = "marie">Marié</option>
                    <option value = "divorce">Divorcé</option>
                    <option value = "veuf">Veuf</option>
                </select>
                </div>
                <div className="w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Documents/Permis de Séjour *
                </label>
                <select name = "dropdown" required>
                    <option value = "suisse" selected>Suisse</option>
                    <option value = "permisB">Permis B</option>
                    <option value = "permisC">Permis C</option>
                    <option value = "permisG">Permis G (frontalier)</option>
                    <option value = "permisL">Permis L</option>
                </select>
                </div>
            </div>
        
            <div className="-mx-3 mb-6">
                <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    N° de Téléphone
                </label>
                <input className="appearance-none block w-full bg-green-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" autoComplete='off' required/>
                </div>
            </div>
            
            <div className="-mx-3 mb-6">
                <div className="max-w-[32rem] px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Informations Juridiques & Conditions d'Utilisation
                    </label>
                    <div className='flex'>
                        <input type="checkbox" id='infojur' name="informationsjuridiques" value='accepted' autoComplete='off' required/>
                        <label className="text-gray-700 text-xs font-light mb-2 px-3" htmlFor='infojur'>Je confirme par la présente, avoir lu les informations juridiques dans leur intégralité et déclare les accepter en tous points.</label>
                        <input type="checkbox" id="donneesprivees" name="donnéesprivées" value='accepted' required/>
                        <label className="text-gray-700 text-xs font-light mb-2 px-3" htmlFor='donneesprivees'>J'accepte par la présente que Go Credit traite ma demande de crédit auprès des banques en suisse, et me propose une offre sans engagement.</label>
                    </div>
                </div>
                //Ajouter event listener = if id="yes" then ... 
            </div>

            <div className="-mx-3 mb-6">
                <div className="max-w-[32rem] px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Offre Consultation
                    </label>
                        <input type="checkbox" id='informationsjuridiques' name="informationsjuridiques" autoComplete='off' required/>
                        <label className="text-gray-700 text-xs font-light mb-2 px-3">Je souhaite bénéficier <span className='font-semibold'>gratuitement</span> de l'optimisation financière que me propose Go Credit (cette prestation permet à aux bénéficiaire d'économiser en moyenne une somme de 1'600CHF/année.</label>
                </div>
            </div>

            <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                <button className="shadow bg-gradient-to-br from-green-300 to-emerald-500 hover:bg-gradient-to-br hover:from-green-300 hover:to-emerald-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                    Envoyer
                </button>
                </div>
                <div className="md:w-2/3"></div>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Formular