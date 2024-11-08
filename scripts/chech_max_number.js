document.getElementById('maxNumberForm').addEventListener('submit', checkMaxNumber);


function checkMaxNumber(event) {
    event.preventDefault();
    let a = parseFloat(document.getElementById('firstNum').value);
    let b = parseFloat(document.getElementById('secondNum').value);
    if (a > b){
        document.getElementById('resulMaxtNumber').innerHTML = `
            <p>${a}</p>
        `;
    } else {
        document.getElementById('resulMaxtNumber').innerHTML = `
            <p>${b}</p>
        `;
    }
}