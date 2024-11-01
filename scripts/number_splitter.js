document.getElementById('numberForm').addEventListener('submit', displayDozensAndOnes);


function displayDozensAndOnes(event) {
    event.preventDefault();

    let number = document.getElementById('number').value;
    let dozens = `Десятки: ${parseInt((number/10)%10)}`;
    let ones = `Единицы: ${number % 10}`;
    document.getElementById('resultNumberSplitter').innerHTML = `
        <p class="text">${dozens}</p>
        <p class="text">${ones}</p>
    `;
}