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
            <li>일반과세(15.4%): ${Math.round($deposit.value*($depositRate.value*$depositMonth.value/1200) * 0.154)}</li>
            <li>세후 수령액: ${Math.round($deposit.value*(1+$depositRate.value*$depositMonth.value/1200*0.846))}</li>
        </ul>
        `;
        $savingsResult.innerHTML = `
        <ul>
            <li>원금: ${$savings.value}</li>
            <li>세전이자: ${($savings.value * $savingsMonth.value*(parseInt($savingsMonth.value)+1)/2 * $savingsRate.value/12*0.01)}</li>
            <li>일반과세(15.4%): ${Math.round(($savings.value * $savingsMonth.value*(parseInt($savingsMonth.value)+1)/2 * $savingsRate.value/12*0.01) * 0.154)}</li>
            <li>세후 수령액: ${($savings.value*$savingsMonth.value) + Math.round(($savings.value * $savingsMonth.value*(parseInt($savingsMonth.value)+1)/2 * $savingsRate.value/12*0.01)*0.846)}</li>
        </ul>
        `;
    });
}

new DepositCalculator();