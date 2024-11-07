document.getElementById('resultCheckInequality').addEventListener('submit', checkInequality);


function checkInequality(event) {
    event.preventDefault();
    let a = parseInt(document.getElementById('a').value);
    let b = parseInt(document.getElementById('b').value);
    let c = parseInt(document.getElementById('c').value);
    if (a < b && b < c){
        document.getElementById('resultCheckInequality').innerHTML = `
            <p class="text">A < B < C: TRUE</p>
        `;
    } else {
        document.getElementById('resultCheckInequality').innerHTML = `
            <p class="text">A < B < C: FALSE</p>
        `;
    }
}