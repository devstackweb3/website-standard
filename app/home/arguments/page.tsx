import React from 'react'

const ArgumentSection = () => {
  return (
<section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto p-4 my-6 space-y-2 text-center">
		<h2 className="text-5xl font-bold">Conçu pour vous simplifier l'accès</h2>
		<p className="dark:text-gray-400">Libero minima optio qui</p>
	</div>
	<div className="container mx-auto grid  gap-4 sm:grid-cols-1 grid-cols-3">
		<div className="flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
  				<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Simple</h3>
			<div className="space-y-1 leadi text-center">
                <span>Go Credit prend en charge votre demande sans frais. Aucun besoin de déplacement.</span>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
  				<path stroke-linecap="round" stroke-linejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Rapide</h3>
			<div className="space-y-1 leadi text-center">
                <span>Votre demande en ligne ne nécessite que 3 minutes de votre temps</span>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10">
  				<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Flexible</h3>
			<div className="space-y-1 leadi text-center">
				<span>Nous vous proposons de larges choix allant de 5,95% à 9,95%. De 6 à 120 mois de durée d'engagement.</span>
			</div>
		</div>
		
	</div>
</section>
  )
}

export default ArgumentSection