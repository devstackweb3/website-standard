import React from 'react'
import ask from '@/app/public/ask.png'
import info from '@/app/public/info.png'
import validation from '@/app/public/validation.png'
import contract from '@/app/public/contract.png'

const ProcessusSection = () => {
  return (
<div className="dark:bg-gray-800 dark:text-gray-100 md:hidden lg:hidden xl:hidden">
	<div className="container mx-auto flex flex-col p-6">
		<h2 className="py-4 text-3xl font-bold text-center">Acquisition de Crédit</h2>
		<div className="divide-y divide-gray-700">
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center sm:col-span-full md:col-span-full">
					<img className='h-28 w-28 self-center' src={ask.src} alt="ask" />
				</div>
				<div className="flex flex-col justify-center max-w-2xl text-center col-span-full xl:col-span-3 lg:col-span-3 lg:text-left xl:text-left">
					<span className="text-xs tracki uppercase dark:text-violet-400">Etape 1 - Transmission E-Formulaire</span>
					<span className="text-xl font-bold md:text-2xl">Demande d'informations gratuite</span>
					<span className="mt-4 dark:text-gray-300">Remplissez le formulaire dédié à votre demande de crédit privée en moins de 3 minutes.</span>
				</div>
			</div>
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center sm:col-span-full md:col-span-full">
					<img className='h-28 w-28 self-center' src={info.src} alt="info" />
				</div>
				<div className="flex flex-col justify-center max-w-2xl text-center col-span-full xl:col-span-3 lg:col-span-3 lg:text-left xl:text-left">
					<span className="text-xs tracki uppercase dark:text-violet-400">Etape 2 - Réponse en 24h</span>
					<span className="text-xl font-bold md:text-2xl">Service d'informations & orientations</span>
					<span className="mt-4 dark:text-gray-300">Notre équipe se charge de vous contacter au cours des prochaines 24 heures (jours ouvrables), suivant votre demande.</span>
				</div>
			</div>
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center sm:col-span-full md:col-span-full">
					<img className='h-28 w-28 self-center' src={validation.src} alt="validation" />
				</div>
				<div className="flex flex-col justify-center max-w-2xl text-center col-span-full xl:col-span-3 lg:col-span-3 lg:text-left xl:text-left">
					<span className="text-xs tracki uppercase dark:text-violet-400">Etape 3 - Validation Prise de Crédit</span>
					<span className="text-xl font-bold md:text-2xl">Réception de votre requête confirmée</span>
					<span className="mt-4 dark:bg-gray-800 dark:text-gray-300">Si toutes les zones d'ombres sont clairement clarifiées et considérées par vos soins, nous réceptionnons votre confirmation d'engagement.</span>
				</div>
			</div>
			<div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
				<div className="flex items-center justify-center sm:col-span-full md:col-span-full">
					<img className='h-28 w-28 self-center' src={contract.src} alt="contract" />
				</div>
				<div className="flex flex-col justify-center max-w-2xl text-center col-span-full xl:col-span-3 lg:col-span-3 lg:text-left xl:text-left">
					<span className="text-xs tracki uppercase dark:text-violet-400">Etape 4 - Délivrance Contrat de Crédit</span>
					<span className="text-xl font-bold md:text-2xl">Transmission contrat de crédit privé</span>
					<span className="mt-4 dark:text-gray-300">Le contrat de crédit vous est envoyé par voie électronique attendant votre signature.</span>
				</div>
			</div>
		</div>
	</div>
</div>
  )
}

export default ProcessusSection