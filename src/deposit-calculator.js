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
        <ul><li>예금만기 시: ${$deposit.value*(1+$depositRate.value*$depositMonth.value/1200) }</li></ul>
        `;
        $savingsResult.innerHTML = `
        <ul><li>적금만기 시: ${($savings.value*$savingsMonth.value) + ($savings.value * $savingsMonth.value*(parseInt($savingsMonth.value)+1)/2 * $savingsRate.value/12*0.01) }</li></ul>
        `;
    });
}

new DepositCalculator();