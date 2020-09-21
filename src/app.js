export default function App(){
    const $result = document.querySelector('#result');
    const $deposit = document.querySelector('#deposit');
    const $depositRate = document.querySelector('#deposit-rate');
    const $depositMonth = document.querySelector('#deposit-month');
    const $savings = document.querySelector('#savings');
    const $savingsRate = document.querySelector('#savings-rate');
    const $savingsMonth = document.querySelector('#savings-month');
    const $submitButton = document.querySelector('#submit');
    $submitButton.addEventListener('click', (e) => {
        $result.innerHTML = `
        <ul>
        <li>예금: ${$deposit.value*(1+$depositRate.value*$depositMonth.value/1200) }</li>
        <li>적금: ${($savings.value*$savingsMonth.value) + ($savings.value * $savingsMonth.value*(parseInt($savingsMonth.value)+1)/2 * $savingsRate.value/12*0.01) }</li>
        </ul>
        `;
    });
}

new App();