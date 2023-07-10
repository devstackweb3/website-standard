"use client"
import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'



const MainSection = () => {
    //document.getElementById('#slider_amount_credit').addEventListener('input', function(e) {
    //    let amount = e.target.value;
    //    document.getElementById('#amount_credit').value = Math.floor(amount);
    //})

    // const slider_amount_credit = useState<HTMLInputElement>(null);
    // const amount_credit = useState<HTMLInputElement>(null);
    // useEffect(() => {
    //     const sliderAmC = slider_amount_credit.current;

    //     if (sliderAmC != null) { sliderAmC.addEventListener('input', function(e) {
    //         const amountC = amount_credit.current;
    //         const target = e.target as HTMLInputElement;
    //         let amount = target.valueAsNumber;


    //         if (amountC != null) amountC.valueAsNumber = Math.floor(amount);})}
    // })
    
    // //document.getElementById('#slider_interest_rate').addEventListener('input', function(e) {
    // //    let amount = e.target.value;
    // //    document.getElementById('#interest_rate_credit').value = amount;
    // //})

    // const slider_interest_rate = useRef<HTMLInputElement>(null)
    // const interest_rate_credit = useRef<HTMLInputElement>(null)

    // useEffect(() => {
    //     const sliderInR = slider_interest_rate.current 
    //     if (sliderInR != null) sliderInR.addEventListener('input', function(e) {
    //         const intRaC = interest_rate_credit.current;
    //         const target = e.target as HTMLInputElement;
    //         let amount = target.valueAsNumber;

    //         if (intRaC != null) intRaC.valueAsNumber = amount
    //     })

    // })


    // function computeLoan() {
    // //const amount = document.getElementById('#amount_credit').value; 

    // const amount_credit = useRef<HTMLInputElement>(null)
    // const amount_c = amount_credit.current;
    
    // if (amount_c != null) amount_c.valueAsNumber = amount_cN 
    
    

    // const months = document.getElementById('#months_credit').value;
    // //The global constants of some class functions(value) are determined using the following three line codes
    
    // const months_credit = useRef<HTMLInputElement>(null)
    // const months_c = months_credit.current;
    // if (months_c != null) {
    //     const months_creditAsNumber = months_c.valueAsNumber
    //     return months_creditAsNumber
    // } 

    // const interest = document.getElementById('#interest_rate_credit').value;
    
    // const interest_rate = interest * 0.01;
    
    // const currentMonth = 1;
    
    // let payment = (amount/months * (1 + interest_rate/12 * (months - currentMonth + 1))).toFixed(2);
    // let paymentT = (amountCreditNumber()/months_creditAsNumber)

    // //regedit to add a comma after every three digits
    // //That is, a comma (') will be added after every three numbers.
    // //Example 50'000
    // payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'"); 
    
    // //With the help of innerHTML, the information stored in the "payment" is displayed on the webpage.
    // document.getElementById('paymentcrediti').textContent = `Paiement Mensuel ${payment} CHF`;
    
    // }

    // function constantAmortizationLoan() {

    // const amount = document.getElementById("amount_credit").value;
    
    // const nbMonths = document.getElementById("months_credit").value;

    // const currentMonth = 1; 

    // const interest_rate = 3.95 * 0.01;
    
    // const interest_insurance_rate = 7.89 * 0.01; 

    // let firstMonthlyDue = (amount/nbMonths * (1 + interest_rate/12 * (nbMonths - currentMonth + 1))).toFixed(2);

    // /*halfMonthlyDue = amount/months[1 + interest_rate/12 * (months - halfBorrowedTimestamp + 1)];*/

    // let guaranteeInterest = (firstMonthlyDue * interest_insurance_rate).toFixed(2);
    
    // const firstMonthlyDueFormated = firstMonthlyDue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
    
    // const guaranteeInterestFormated = guaranteeInterest.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");

    // document.getElementById('paymentc').textContent = `${firstMonthlyDueFormated}`;

    
    
    // if($('.checkbox_insurance').is(":checked")) { 
    
    //     const monthlyDueUpdate = (+firstMonthlyDue + +guaranteeInterest).toFixed(2);  
        
    //     const monthlyDueUpdateFormated = monthlyDueUpdate.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "'");
        
    //     document.getElementById('paymentc').textContent = `${monthlyDueUpdateFormated} CHF`;
    //     $(".card_insurance").show();
    // } else {
    //     $(".card_insurance").hide();
    // }

    // document.querySelector('.credit_guarante').textContent = `${guaranteeInterestFormated}`;

    // }


    return <div>
            
        </div>


//   return (
//     <div className='' id=''>
//         <div className="credit_calculator_card">
//         <h2>Calculateur de Crédit</h2>
//         <div className="input_credit">
//             <div className="input_credit_subtitles">Capital: CHF</div>
//                 <input ref={amount_credit} className="input_background" type="number" min="50" value="20000" max="350000" onChange={e => {computeLoan; constantAmortizationLoan}}/>
//                 <input ref={slider_amount_credit} type="range" className="w-4/5 h-[8px] bg-white rounded" min="50" max="350000" value="50" step="50" onChange={e => {computeLoan; constantAmortizationLoan}}/>
//             <div className="input_credit_subtitles">Taux d'intérêts: %</div>
//                 <input ref={interest_rate_credit} type="number" className="input_background" min="0" max="100" value="3.95" step="0.1" onChange={computeLoan}/>
//                 <input ref={slider_interest_rate} type="range" className="w-4/5 h-[8px] bg-white rounded" min="3.95" max="10.95" value="3.9" step="0.05" onChange={e => {computeLoan; constantAmortizationLoan}}/>
//             <div className="input_credit_subtitles">Paiements Mensuels: </div>
//                 <input ref={months_credit} className="input_background" type="number" min="12" max="84" value="12" step="12" onChange={e => {computeLoan; constantAmortizationLoan}}/>
//             <div className="credit_result">
//                 <h3 id="paymentcrediti">Paiement Mensuel 1'849.17 CHF</h3>
//             </div>
                                
//                 <input className="checkbox_insurance" type="checkbox" value="1" onChange={constantAmortizationLoan}/><span>Assurance de Crédit</span>
//             </div>
//         </div>

//     </div>
//   )
}

export default MainSection