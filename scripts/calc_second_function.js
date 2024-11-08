document.getElementById('secondFunctionForm').addEventListener('submit', calcValue);


function calcValue(event) {
    event.preventDefault();
    let y = parseFloat(document.getElementById('y').value);
    let a = 7.1;
    let b = 4.2;
    let result, func;
    switch (y) {
        case 3:
            result = roundValue(b - y**2 - 1);
            func = `${b} - x² - 1 = `;
            break;
        case 8:
            result = Math.sqrt(Math.log(y) + a);
            func = `√(ln(x) + ${a}) = `;
            break;
        case 7:
            result = Math.cos((a*y**2) + 3)**2;
            func = `cos(${a} ∙ x²) + 3 = `;
            break;
        default:
            result = 'Ошибка: значение x не поддерживается';
            func = '';
    }
    document.getElementById('resulSecondFunction').innerHTML = `
            <p class="text">${func}${result}</p>
        `;

}