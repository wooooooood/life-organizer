import {TARIFF} from './constants.js';

export default function DepositCalculator(){
    const $savingsResult = document.querySelector('#savings-result');
    const $depositResult = document.querySelector('#deposit-result');
    const $deposit = document.querySelector('#deposit');
    const $depositRate = document.querySelector('#deposit-rate');
    const $depositMonth = document.querySelector('#deposit-month');
    const $savings = document.querySelector('#savings');
    const $savingsRate = document.querySelector('#savings-rate');
    const $savingsMonth = document.querySelector('#savings-month');
    const $submitButton = document.querySelector('#submit');
    $submitButton.addEventListener('click', (e) => {
        $depositResult.innerHTML = `
        <ul>
            <li>원금: ${$deposit.value}</li>
            <li>세전이자: ${$deposit.value*($depositRate.value*$depositMonth.value/1200) }</li>
            <li>일반과세(${TARIFF.GENERAL * 100}%): ${Math.round($deposit.value*($depositRate.value*$depositMonth.value/1200) * TARIFF.GENERAL)}</li>
            <li>세후 수령액: ${Math.round($deposit.value*(1+$depositRate.value*$depositMonth.value/1200*(1 - TARIFF.GENERAL)))}</li>
        </ul>
        `;
        $savingsResult.innerHTML = `
        <ul>
            <li>원금: ${$savings.value}</li>
            <li>세전이자: ${($savings.value * $savingsMonth.value*(parseInt($savingsMonth.value)+1)/2 * $savingsRate.value/12*0.01)}</li>
            <li>일반과세(${TARIFF.GENERAL * 100}%): ${Math.round(($savings.value * $savingsMonth.value*(parseInt($savingsMonth.value)+1)/2 * $savingsRate.value/12*0.01) * TARIFF.GENERAL)}</li>
            <li>세후 수령액: ${($savings.value*$savingsMonth.value) + Math.round(($savings.value * $savingsMonth.value*(parseInt($savingsMonth.value)+1)/2 * $savingsRate.value/12*0.01)*(1 - TARIFF.GENERAL))}</li>
        </ul>
        `;
    });
}

new DepositCalculator();