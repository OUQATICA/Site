document.getElementById('maxNumberForm').addEventListener('submit', checkMaxNumber);


function checkMaxNumber(event) {
    event.preventDefault();
    let a = parseFloat(document.getElementById('firstNum').value);
    let b = parseFloat(document.getElementById('secondNum').value);
    if (a > b){
        document.getElementById('resulMaxtNumber').innerHTML = `
            <p class="text">A > B: TRUE</p>
        `;
    } else {
        document.getElementById('resulMaxtNumber').innerHTML = `
            <p class="text">A > B: FALSE</p>
        `;
    }
}