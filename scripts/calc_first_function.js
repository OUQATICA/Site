document.getElementById('firstFunctionForm').addEventListener('submit', calcValue);


function calcValue(event) {
    event.preventDefault();
    let x = parseFloat(document.getElementById('x').value);
    let a = 7.1;
    let b = 4.2;
    let result, func;
    if (x <= 3){
        result = roundValue(b - x**2 - 1);
        func = `${b} - x² - 1`;
    } else if (x >= 8) {
        result = Math.sqrt(Math.log(x) + a);
        func = `√(ln(x) + ${a})`;
    } else if (x > 3 && x < 8) {
        result = Math.cos(a*x**2)**2 + 3;
        func = `cos(${a} ∙ x²) + 3`;
    }
    document.getElementById('resultFirstFunction').innerHTML = `
            <p class="text">${func} = ${result}</p>
        `;

}
function roundValue(number) {  //округляет число до 1 знака после запятой по мат. правилам
    if (number > 0) {
        return Math.round(number * 10) / 10;
    } else {
        return -Math.abs(Math.round(number * 10) / 10);
    }
}