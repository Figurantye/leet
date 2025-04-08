function restoreMatrix(rowSum, colSum) {
    var matrix = [];
    var tryy = [];
    var sumIndexRow = 0;
    var sumIndexColumn = 0;
    while (matrix.length < rowSum.length) {
        matrix.push([]);
        while (matrix[matrix.length - 1].length < rowSum.length) {
            matrix[matrix.length - 1].push(0);
        }
    }
    for (var i = 0; i <= 2; i++) {
        console.log('tentativa: ', i);
        sumIndexRow = 0;
        for (var j = 0; j < colSum.length; j++) {
            sumIndexRow += matrix[i][j];
        }
        sumIndexColumn = 0;
        sumIndexColumn = 0;
        for (var j = 0; j < colSum.length; j++) {
            sumIndexColumn += matrix[j][i];
        }
        rowUp(sumIndexRow, rowSum, colSum, matrix, sumIndexColumn, i);
        columnUp(sumIndexRow, rowSum, colSum, matrix, sumIndexColumn, i);
        rowDown(sumIndexRow, rowSum, colSum, matrix, sumIndexColumn, i);
        columnDown(sumIndexRow, rowSum, colSum, matrix, sumIndexColumn, i);
        console.log('resultado: ');
        for (var j = 0; j < 3; j++) {
            console.log(matrix[j]);
        }
        if (i == 2) {
            i = -1;
        }
    }
    for (var i = 0; i < matrix.length; i++) {
        console.log(matrix[i]);
    }
    return matrix;
}
;
function updateMatrixRow(colSum, matrix, sumRow, i) {
    sumRow = 0;
    for (var j = 0; j < colSum.length; j++) {
        sumRow += matrix[i][j];
    }
    return sumRow;
}
function updateMatrixColumn(colSum, matrix, sumCol, i) {
    sumCol = 0;
    for (var j = 0; j < colSum.length; j++) {
        sumCol += matrix[j][i];
        console.log("SUMCOL: ".concat(sumCol, ", INDEX: ").concat(matrix[j][i], ", LINHA: ").concat(matrix[j]), j, i);
    }
    return sumCol;
}
function rowUp(sumIndexRow, rowSum, colSum, matrix, sumIndexColumn, i) {
    console.log('SIR+: ', sumIndexRow, 'CR: ', rowSum[i]);
    siru: for (var j = 0; sumIndexRow < rowSum[i]; j++) {
        if (j >= colSum.length) {
            break;
        }
        var dif = rowSum[i] - sumIndexRow;
        var dif2 = colSum[i] - sumIndexColumn;
        if (sumIndexColumn < colSum[j]) {
            for (var g = 0; g < dif || g < dif2; g++) {
                console.log("atualizando o elemento ".concat(matrix[i][j], " para ").concat(matrix[i][j] + 1, " porra ").concat(sumIndexRow, " ").concat(rowSum[i], " caralho ").concat(sumIndexColumn, " ").concat(matrix[j][i], " aaaaaaa"));
                var index = matrix[i].indexOf(matrix[i][j]);
                matrix[i].splice(index, 1, matrix[i][j] + 1);
                console.log('Atualizando linhas +: ', matrix);
                sumIndexRow = updateMatrixRow(colSum, matrix, sumIndexRow, i);
                if (sumIndexRow == rowSum[i]) {
                    break siru;
                }
                sumIndexColumn = updateMatrixColumn(colSum, matrix, sumIndexColumn, j);
                while (sumIndexColumn == colSum[j]) {
                    j++;
                    if (j >= colSum.length) {
                        break siru;
                    }
                }
            }
            break siru;
        }
        else {
            j++;
        }
    }
}
function columnUp(sumIndexRow, rowSum, colSum, matrix, sumIndexColumn, i) {
    console.log('SIC+: ', sumIndexColumn, 'CS: ', colSum[i]);
    sicu: for (var j = 0; sumIndexColumn < colSum[i]; j++) {
        if (j >= colSum.length) {
            break;
        }
        var dif = colSum[i] - sumIndexColumn;
        var dif2 = rowSum[i] - sumIndexRow;
        if (sumIndexRow < rowSum[j]) {
            for (var g = 0; g < dif || g < dif2; g++) {
                var index = matrix[j].indexOf(matrix[j][i]);
                matrix[j].splice(index, 1, matrix[j][i] + 1);
                console.log('Atualizando colunas +: ', matrix);
                sumIndexColumn = updateMatrixColumn(colSum, matrix, sumIndexColumn, i);
                if (sumIndexColumn === colSum[i]) {
                    break sicu;
                }
                sumIndexRow = updateMatrixRow(colSum, matrix, sumIndexRow, i);
                while (sumIndexRow == rowSum[j]) {
                    j++;
                    if (j >= colSum.length) {
                        break sicu;
                    }
                }
            }
            break sicu;
        }
        else {
            j++;
        }
    }
}
function rowDown(sumIndexRow, rowSum, colSum, matrix, sumIndexColumn, i) {
    console.log('SIR-: ', sumIndexRow, 'CR: ', rowSum[i]);
    sird: for (var j = 0; sumIndexRow > rowSum[i]; j++) {
        if (j >= colSum.length) {
            break;
        }
        var dif = sumIndexRow - rowSum[i];
        var dif2 = sumIndexColumn - colSum[i];
        if (sumIndexColumn > colSum[j]) {
            for (var g = 0; g < dif || g < dif2; g++) {
                console.log('num: ', matrix[i][j]);
                var index = matrix[i].indexOf(matrix[i][j]);
                matrix[i].splice(index, 1, matrix[i][j] - 1);
                if (matrix[i][j] < 0) {
                    matrix[i][j] *= -1;
                }
                console.log('Atualizando linhas -: ', matrix);
                sumIndexColumn = updateMatrixColumn(colSum, matrix, sumIndexColumn, i);
                sumIndexRow = updateMatrixRow(colSum, matrix, sumIndexRow, i);
                if (sumIndexRow == rowSum[i]) {
                    break sird;
                }
                while (sumIndexColumn == colSum[j] || matrix[i][j] <= 0) {
                    j++;
                    if (j >= colSum.length) {
                        break sird;
                    }
                }
            }
            break sird;
        }
        else {
            j++;
        }
    }
}
function columnDown(sumIndexRow, rowSum, colSum, matrix, sumIndexColumn, i) {
    console.log('SIC-: ', sumIndexColumn, 'CS: ', colSum[i]);
    sicd: for (var j = 0; sumIndexColumn > colSum[i]; j++) {
        if (j >= colSum.length) {
            break;
        }
        var dif = sumIndexColumn - colSum[i];
        var dif2 = sumIndexRow - rowSum[i];
        console.log('dif', dif);
        if (sumIndexRow > rowSum[j]) {
            for (var g = 0; g < dif || g < dif2; g++) {
                console.log('comparação no coluna -: sumIndexRow: ', sumIndexRow, 'rowSum: ', rowSum[j], 'SumColumn: ', sumIndexColumn);
                var index = matrix[j].indexOf(matrix[j][i]);
                matrix[j].splice(index, 1, matrix[j][i] - 1);
                if (matrix[j][i] < 0) {
                    matrix[j][i] *= -1;
                }
                console.log('Atualizando colunas -: ', matrix);
                sumIndexRow = updateMatrixRow(colSum, matrix, sumIndexRow, i);
                sumIndexColumn = updateMatrixColumn(colSum, matrix, sumIndexColumn, i);
                if (sumIndexColumn == colSum[i]) {
                    break sicd;
                }
                while (sumIndexRow == rowSum[j] || matrix[j][i] <= 0) {
                    j++;
                    if (j >= colSum.length) {
                        break sicd;
                    }
                }
            }
            break sicd;
        }
        else {
            j++;
        }
    }
}
restoreMatrix([5, 7, 10], [8, 6, 8]);
/*
ideal:
3 0
1 7
*/ 
