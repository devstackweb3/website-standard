"use client"
import React from 'react'
import { Form, FormField, FormItem , FormControl, FormDescription} from '@/app/components/form'
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FieldValues, Control, Path, UseFormRegisterReturn } from 'react-hook-form'
import { Select, SelectTrigger, SelectValue, SelectContent } from '@/app/components/select';
import { Checkbox } from '@/app/components/checkbox';
import { z } from 'zod'

enum LoanDuration {
    SIX = "6",
    TWELVE = "12",
    TWENTYFOUR = "24",
    THIRTYSIX = "36",
    FOURTYEIGHT = "48",
    SIXTY = "60",
    SEVENTYTWO = "72", 
    EIGHTY = "80"
}

//FIXME check pourquoi le Object.values(LoanDuration) retourne tout
const loanDuration = ["6", "12", "24", "36", "48", "60", "72", "80"]

const formatedLoanDuration = loanDuration.map(d => ({value: d, label: `${d} mois`}))



//zod object
const ZLoanForm = z.object({ 
    montant_du_credit: z.number().min(100, { message: "le seuil accordé est de 100 CHF" }).max(400000, { message: "La limite de crédit privé accordée est de 400'000 CHF" }),
    duree_en_mois: z.nativeEnum(LoanDuration),
    prenom: z.string().min(3, { message: "Prénom est requis" }).max(15),
    nom: z.string().min(3, { message: "Nom est requis" }).max(15),
    naissance: z.date(), 
    rue: z.string().min(6).max(20),
    numero: z.number(),
    codepostal: z.number(),
    localite: z.string().min(3).max(15),
    email: z.string().min(4, { message: "l'e-mail est requis" }).email(),
    informations_juridiques: z.literal<boolean>(true),
    acceptationCGU: z.literal<boolean>(true),
    acceptationConsultation: z.literal<boolean>(true),
})

type TLoanForm = z.infer<typeof ZLoanForm>



function LoanForm() {
    
    const form = useForm<TLoanForm>(
        {
            defaultValues: {
                duree_en_mois: LoanDuration.SIX
            },
            resolver: zodResolver(ZLoanForm)
        }

        )
        
        console.log(form.watch())

//trigger data on submit formular 
    async function onSubmit(event:any) {
        event.preventDefault();
            
        const response = await fetch ('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form),
        })
            
        if (response.ok) {
            console.log('Message sent successfully !')
        }
            
        if (!response.ok) {
            console.log('Error sending the message !')
        }
    }

    


  return (
    <div className='mt-4 sm:ml-6'>



        <Form {...form}>

                <form onSubmit={form.handleSubmit(onSubmit)} className="xs:w-full sm:w-full w-[32rem]">
                    
                    <div className='flex flex-wrap -mx-3'>
                        <div className="min-w-1/2 px-3 mb-6 md:mb-0">
                            {/* modele a reproduire */}
                            <ControlledInput2<TLoanForm> register={form.register("montant_du_credit", {valueAsNumber: true})} name="montant_du_credit" label="Montant" type="number" step={100} placeholder="20'000 CHF" className='font-light italic bg-green-50 p-1' />
                        </div>
                        <div className="w-1/2 px-3 mb-6 md:mb-0">
                            <ControlledSelect<TLoanForm> control={form.control} name="duree_en_mois" label="Durée en mois" data={formatedLoanDuration} />
                        </div>
                    </div>
                    <div className='flex flex-wrap -mx-3'>   
                        <div className="min-w-1/2 px-3 mb-6 md:mb-0">
                            <ControlledInput<TLoanForm> control={form.control} name="prenom" label="Prenom" placeholder='Marc' className='font-light italic bg-green-50 p-1'/>
                        </div>
                        <div className="w-1/2 px-3 mb-6 md:mb-0">
                            <ControlledInput<TLoanForm> control={form.control} name="nom" label="Nom" placeholder='Schmidt' className='font-light italic bg-green-50 p-1'/>
                        </div>
                    </div> 
                    <ControlledInput2<TLoanForm> register={form.register("naissance", {valueAsDate: true})} name='naissance' label="Date de Naissance" type="date" />

                    <div className='flex flex-wrap -mx-3'>   
                        <div className="min-w-1/2 px-3 mb-6 md:mb-0">
                            <ControlledInput<TLoanForm> control={form.control} name="rue" label="Rue" placeholder='Avenue des Acacias' className='font-light italic bg-green-50 p-1'/>
                        </div>
                        <div className="w-1/2 px-3 mb-6 md:mb-0">
                            <ControlledInput<TLoanForm> control={form.control} name="numero" label="Numéro" placeholder='15' className='font-light italic bg-green-50 p-1'/>
                        </div>
                    </div> 

                    <div className='flex flex-wrap -mx-3'>   
                        <div className="min-w-1/2 px-3 mb-6 md:mb-0">
                            <ControlledInput<TLoanForm> control={form.control} name="codepostal" label="Code Postal" placeholder='1001' className='font-light italic bg-green-50 p-1' type="number"/>
                        </div>
                        <div className="w-1/2 px-3 mb-6 md:mb-0">
                            <ControlledInput<TLoanForm> control={form.control} name="localite" label="Localité" placeholder='Lausanne' className='font-light italic bg-green-50 p-1'/>
                        </div>
                    </div> 

                    <ControlledInput<TLoanForm> control={form.control} name="email" label="Email" placeholder='marcschmidt@gmail.com' className='font-light italic bg-green-50 p-1'/>
                    {/* <ControlledInput<TLoanForm> control={form.control} name="informations_juridiques" label="Montant" /> */}

                    <div className='grid justify-center'>
                        <div className='grid mt-4'>
                            <ControlledCheckbox<TLoanForm> control={form.control} name="informations_juridiques" label="Informations Juridiques" />
                            <span className='text-gray-700 text-xs font-light mb-2 px-3 max-w-[24rem]'>Je confirme par la présente, avoir lu les informations juridiques dans leur intégralité et déclare les accepter en tous points.</span>
                        </div>

                        <div className='grid'>
                            <ControlledCheckbox<TLoanForm> control={form.control} name='acceptationCGU' label="Conditions d'Utilisation" />
                            <span className='text-gray-700 text-xs font-light mb-2 px-3 max-w-[24rem]'>J'accepte par la présente que Go Credit traite ma demande de crédit auprès des banques en suisse, et me propose une offre sans engagement.</span>
                        </div>

                        <div className='grid mb-4'>
                            <ControlledCheckbox<TLoanForm> control={form.control} name='acceptationConsultation' label="Offre Consultation" />
                            <span className='text-gray-700 text-xs font-light mb-2 px-3 max-w-[24rem]'>Je souhaite bénéficier <span className='font-semibold'>gratuitement</span> de l'optimisation financière que me propose Go Credit (cette prestation permet à/aux bénéficiaire d'économiser en moyenne une somme de 1'600CHF/année).</span>
                        </div>
                    </div>
                    <button type="submit" className="shadow bg-gradient-to-br from-green-300 to-emerald-500 hover:bg-gradient-to-br hover:from-green-300 hover:to-emerald-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                        Envoyer
                    </button>
                
                </form>
        </Form>
    </div>
  )
}


export default LoanForm


// a dégager
type ControlledInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const ControlledInput =<T extends FieldValues> ({control, name, label, ...props}: ControlledInputProps<T>) => {
    return <FormField 
        control={control}
        name={name}
        render={({field, fieldState}) => (
            <FormItem>
                <div className='mt-2'>
                    {label ? <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">{label}</label> : null}
                    <input className='bg-green-50 rounded-md' value={field.value} onChange={ field.onChange} {...props}/>
                </div>
            </FormItem>

        )}
    />
}

//utiliser celui ci
type ControlledInputProps2<T extends FieldValues> = {
  register: UseFormRegisterReturn<Path<T>>
  name: Path<T>;
  label?: string;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const ControlledInput2 =<T extends FieldValues> ({register, name, label, ...props}: ControlledInputProps2<T>) => {
    return (<FormItem>
                    <div className='mt-2'>
                        {label ? <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">{label}</label> : null}
                        <input className='bg-green-50 rounded-md' {...register} {...props}/>
                    </div>
            </FormItem>)

}




type ControlledSelectProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
    data: {
        value: string | number,
        label: string
    }[]
};

const ControlledSelect =<T extends FieldValues> ({control, name, label, data}: ControlledSelectProps<T>) => {
    return <FormField 
        control={control}
        name={name}
        render={({field}) => (
            <FormItem>
                {label ? <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>{label}</label>:null}
                <select name={name} onChange={field.onChange} className='bg-green-50 p-1 rounded-md'> 
                    {data.map(d => <option value={d.value} className='bg-green-50'>{d.label}</option>)}
                </select>
            </FormItem>


        )}
    />
}

type ControlledCheckboxProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
};


const ControlledCheckbox =<T extends FieldValues> ({control, name, label}: ControlledCheckboxProps<T>) => {
    return <FormField 
        control={control}
        name={name}
        render={({field}) => (
              <FormItem>
                <FormControl>
                    <div className='flex flex-row gap-2'>
                    <input type="checkbox" id={name} checked={field.value} onChange={field.onChange} />
               
                    {label ? <label htmlFor={name} className="cursor-pointer block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1 mt-2">{label}</label> : null}
                    
                    </div>

                </FormControl>
            
            </FormItem>

        )}
    />
}
