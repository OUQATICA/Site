document.getElementById('candyCostForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let cost = parseFloat(document.getElementById('candyCost').value);
    let pasteDiv = document.getElementById('resultCandyCost');
    let result, divCost;
    pasteDiv.innerHTML = '';
    for (let weight = 2; weight >= 1; weight -= 0.2) {
        result = `Цена ${weight.toFixed(1)} кг конфет = ${(cost * weight).toFixed(2)}р.`;
        divCost = document.createElement('div');
        divCost.textContent = result;
        divCost.className = 'card';
        pasteDiv.insertBefore(divCost, pasteDiv.firstChild);
    }
});
