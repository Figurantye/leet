function restoreMatrix(rowSum, colSum) {
    var matrix = [];
    var tryy = [];
    while (matrix.length < rowSum.length) {
        matrix.push([]);
        while (matrix[matrix.length - 1].length < rowSum.length) {
            matrix[matrix.length - 1].push(0);
        }
    }
    for (var i = 0; i <= 2; i++) {
        console.log('tentativa: ', i);
        var sumIndexRow = 0;
        var sumIndexColumn = 0;
        for (var g = 0; g < colSum.length; g++) {
            sumIndexRow += matrix[i][g];
        }
        for (var j = 0; j < colSum.length; j++) {
            sumIndexColumn += matrix[j][i];
        }
        console.log('SIR+: ', sumIndexRow, 'CR: ', rowSum[i]);
        for (var j = 0; sumIndexRow < rowSum[i]; j++) {
            if (j >= colSum.length) {
                break;
            }
            var dif = rowSum[i] - sumIndexRow;
            sumIndexColumn = 0;
            for (var g = 0; g < colSum.length; g++) {
                sumIndexColumn += matrix[g][j];
            }
            if (sumIndexColumn != colSum[j]) {
                console.log('atualizando o elemento ', matrix[i][j], 'para ', matrix[i][j] + dif, 'porra', sumIndexColumn, colSum[j]);
                var index = matrix[i].indexOf(matrix[i][j]);
                matrix[i].splice(index, 1, matrix[i][j] + dif);
                if (matrix[i][j] < 0) {
                    matrix[i][j] *= -1;
                }
                console.log('Atualizando linhas +: ', matrix);
            }
            else {
                j++;
            }
            sumIndexRow = 0;
            sumIndexRow = matrix[j].reduce(function (accumulator, currentValue) { return accumulator + currentValue; });
        }
        console.log('SIC+: ', sumIndexColumn, 'CS: ', colSum[i]);
        for (var j = 0; sumIndexColumn < colSum[i]; j++) {
            if (j >= colSum.length) {
                break;
            }
            var dif = colSum[i] - sumIndexColumn;
            sumIndexRow = 0;
            sumIndexRow = matrix[j].reduce(function (accumulator, currentValue) { return accumulator + currentValue; });
            if (sumIndexRow != rowSum[j]) {
                var index = matrix[j].indexOf(matrix[j][i]);
                matrix[j].splice(index, 1, matrix[j][i] + dif);
                console.log('Atualizando colunas +: ', matrix);
                if (matrix[j][i] < 0) {
                    matrix[j][i] *= -1;
                }
            }
            else {
                j++;
            }
            sumIndexColumn = 0;
            for (var g = 0; g < colSum.length; g++) {
                sumIndexColumn += matrix[g][j];
            }
        }
        console.log('SIR-: ', sumIndexRow, 'CR: ', rowSum[i]);
        for (var j = 0; sumIndexRow > rowSum[i]; j++) {
            if (j >= colSum.length) {
                break;
            }
            var dif = sumIndexRow - rowSum[i];
            sumIndexColumn = 0;
            for (var g = 0; g < colSum.length; g++) {
                sumIndexColumn += matrix[g][j];
            }
            if (sumIndexColumn != colSum[j]) {
                console.log('num: ', matrix[i][j]);
                var index = matrix[i].indexOf(matrix[i][j]);
                matrix[i].splice(index, 1, matrix[i][j] - dif);
                if (matrix[i][j] < 0) {
                    matrix[i][j] *= -1;
                }
                console.log('Atualizando linhas -: ', matrix);
            }
            else {
                j++;
            }
            sumIndexRow = matrix[j].reduce(function (accumulator, currentValue) { return accumulator + currentValue; });
        }
        console.log('SIR-: ', sumIndexRow, 'CR: ', rowSum[i]);
        console.log('SIC-: ', sumIndexColumn, 'CS: ', colSum[i]);
        for (var j = 0; sumIndexColumn > colSum[i]; j++) {
            if (j >= colSum.length) {
                break;
            }
            var dif = sumIndexColumn - colSum[i];
            console.log('dif', dif);
            sumIndexRow = 0;
            sumIndexRow = matrix[j].reduce(function (accumulator, currentValue) { return accumulator + currentValue; });
            if (sumIndexRow != rowSum[j]) {
                console.log('comparação no coluna -: sumIndexRow: ', sumIndexRow, 'rowSum: ', rowSum[j], 'j: ', j);
                var index = matrix[j].indexOf(matrix[j][i]);
                matrix[j].splice(index, 1, matrix[j][i] - dif);
                console.log('Atualizando colunas -: ', matrix);
                if (matrix[j][i] < 0) {
                    matrix[j][i] *= -1;
                }
            }
            else {
                j++;
            }
            sumIndexColumn = 0;
            for (var g = 0; g < colSum.length; g++) {
                sumIndexColumn += matrix[g][j];
            }
        }
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
restoreMatrix([5, 7, 10], [8, 6, 8]);
/*
ideal:
3 0
1 7
*/ 
