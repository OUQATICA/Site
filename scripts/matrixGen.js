let numbersArray = [];

document.getElementById('submitMatrixGen').addEventListener('click', MatrixGen);
document.getElementById('submitNArray').addEventListener('click', function(event) {
    event.preventDefault(); 
    let number = parseFloat(document.getElementById('number').value);
    let N = document.getElementById('N').value;
    
    if (numbersArray.length < N) {
        if (!isNaN(number)) {
            numbersArray.push(number);
        }
        document.getElementById('number').value = '';
    } else {
        document.getElementById('submitNArray').disabled = true;
        document.getElementById('number').disabled = true;
    }
});

function MatrixGen(event) {
    event.preventDefault();
    let N = parseInt(document.getElementById('N').value);
    let M = parseInt(document.getElementById('M').value);
    let D = parseFloat(document.getElementById('D').value);
    let matrix = [];
    for (let i = 0; i < M; i++) {
        if (i === 0) {
            matrix.push(numbersArray);
        } else {
            let newRow = matrix[i - 1].map(value => value * D); 
            matrix.push(newRow);
        }
    }
    let tableContainer = '<div style="overflow: auto; max-height: 400px; max-width: 600px;">';
    tableContainer += '<table border="1">';

    for (let i = 0; i < M; i++) {
        tableContainer += '<tr>';
        for (let j = 0; j < N; j++) {
            if (!(matrix[i][j] === undefined)) {
                tableContainer += `<td>${matrix[i][j]}</td>`;
            } else {
                tableContainer += `<td></td>`;
            }
        }
        tableContainer += '</tr>';
    }
    tableContainer += '</table></div>';
    
    document.getElementById('matrixGenResult').innerHTML = tableContainer;
}