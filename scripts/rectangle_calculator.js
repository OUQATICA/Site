document.getElementById('rectangleForm').addEventListener('submit', displaySurfaceAndVolume);

function displaySurfaceAndVolume(event) {
    event.preventDefault();
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let s = 2*(a*b + b*c + a*c);
    let v = a*b*c; 
    let sFormula = `Площадь = 2*(a*b + b*c + a*c) = 2*(${a}*${b} + ${b}*${c} + ${a}*${c}) = ${s}`;
    let vFormula
    if (!(a === 0 || b === 0 || c === 0)){
        vFormula = `Объем = a*b*c = ${a}*${b}*${c} = ${v}`;
    } else {
        vFormula = 'Чтобы тело имело объем, все его стороны должны быть ненулевой длины.'
    }
    document.getElementById('resultRectangleCalculator').innerHTML = `
        <p class="text">${sFormula}</p>
        <p class="text">${vFormula}</p>
    `;
}
