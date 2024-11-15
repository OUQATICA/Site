document.getElementById('RoundNumbersForm').addEventListener('submit', handleCountInput);


function handleCountInput(event) {
    event.preventDefault();
    let sum = 0; 
    let count = 0; 
    let number, rounded;
    count = parseInt(document.getElementById('count').value);
    document.getElementById('inputNumber').innerHTML = `
        <input class="card__input" type="number" id="number" step="any" required>
        <button class="card__button card__button_text" id="submitNumber" type="click">Ввести</button>
    `;
    
    document.getElementById('resultRoundNumbersForm').innerHTML = '';
    document.getElementById('sumRoundNumbersForm').innerHTML = '';
    document.getElementById('countInput').disabled = true;
    document.getElementById('submitNumber').addEventListener('click', function() {
        if (count > 0) {
            number = parseFloat(document.getElementById('number').value);
            rounded = roundValue(number);
            document.getElementById('resultRoundNumbersForm').innerHTML += `<div>${rounded}</div>`;
            sum += rounded;
            document.getElementById('sumRoundNumbersForm').innerHTML = `Сумма: ${sum}`;
            document.getElementById('number').value = '';
            count--;
        }
        if (count == 0) document.getElementById('inputNumber').innerHTML = '';
        document.getElementById('countInput').disabled = false;
    });
}

function roundValue(number) {  //правильно округляет число
    if (number > 0) {
        return Math.round(number);
    } else {
        return -Math.abs(Math.round(number ));
    }
}