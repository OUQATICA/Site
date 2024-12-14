document.getElementById('swapMatrixForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let B = parseInt(document.getElementById('B').value);
    let A = parseInt(document.getElementById('A').value);
    let matrix = [];
    for (let i = 0; i < A; i++) {
        let row = [];
        for (let j = 0; j < B; j++) {
            row.push(Math.floor(Math.random() * 100)); 
        }
        matrix.push(row);
    }
    let matrixContainer = '<div style="overflow: auto; max-height: 400px; max-width: 600px;">';
    matrixContainer += '<table border="1">';
    for (let i = 0; i < A; i++) {
        matrixContainer += '<tr>';
        for (let j = 0; j < B; j++) {
            matrixContainer += `<td>${matrix[i][j]}</td>`;
        }
        matrixContainer += '</tr>';
    }
    matrixContainer += '</table></div>';
    document.getElementById('matrix').innerHTML = matrixContainer;

    for (let i = 0; i < A; i++) {
        for (let j = 0; j < B / 2; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[i][B/2 + j];
            matrix[i][B/2 + j] = temp;
        }
    }
    let tableContainer = '<div style="overflow: auto; max-height: 400px; max-width: 600px;">';
    tableContainer += '<table border="1">';
    for (let i = 0; i < A; i++) {
        tableContainer += '<tr>';
        for (let j = 0; j < B; j++) {
            tableContainer += `<td>${matrix[i][j]}</td>`;
        }
        tableContainer += '</tr>';
    }
    tableContainer += '</table></div>';
    document.getElementById('swapMatrixResult').innerHTML = tableContainer;
});