    function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
    const matrix:number[][] = [];
    const tryy:number[] = [];
    let sumIndexRow:number = 0;
    let sumIndexColumn:number = 0;

    
    while (matrix.length < rowSum.length) {
        matrix.push([])
        while(matrix[matrix.length - 1].length < rowSum.length){
            matrix[matrix.length - 1]. push(0)
        }
    }
    
    for (let i = 0; i <= 2; i++) {
        
        console.log('tentativa: ', i);
        

        sumIndexRow = 0;
        for (let j = 0; j < colSum.length; j++) {
            sumIndexRow += matrix[i][j]
        }
        sumIndexColumn = 0
        sumIndexColumn = 0;
        for (let j = 0; j < colSum.length; j++) {
            sumIndexColumn += matrix[j][i]
        }

        rowUp(sumIndexRow, rowSum, colSum, matrix, sumIndexColumn, i)

        columnUp(sumIndexRow, rowSum, colSum, matrix, sumIndexColumn, i)

        rowDown(sumIndexRow, rowSum, colSum, matrix, sumIndexColumn, i)

        columnDown(sumIndexRow, rowSum, colSum, matrix, sumIndexColumn, i)
        
        
        console.log('resultado: ');
        for (let j = 0; j < 3; j++) {
            console.log(matrix[j]);
        }
        if (i == 2) {
            i = -1
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i]);
    }

    return matrix

};

function updateMatrixRow(colSum:number[], matrix:number[][], sumRow:number, i:number):number {
    sumRow = 0;
    for (let j = 0; j < colSum.length; j++) {
        sumRow += matrix[i][j]
    }

    return sumRow
}

function updateMatrixColumn(colSum:number[], matrix:number[][], sumCol:number, i:number,): number {
    sumCol = 0;
    for (let j = 0; j < colSum.length; j++) {
        sumCol += matrix[j][i]
        console.log(`SUMCOL: ${sumCol}, INDEX: ${matrix[j][i]}, LINHA: ${matrix[j]}`, j, i);
    }

    return sumCol
}

function rowUp(sumIndexRow:number, rowSum:number[], colSum:number[], matrix:number[][], sumIndexColumn:number, i:number) {
    console.log('SIR+: ', sumIndexRow, 'CR: ', rowSum[i]);
    siru: for (let j = 0; sumIndexRow < rowSum[i]; j++) {
        if (j >= colSum.length) {
            break
        }
        const dif:number = rowSum[i] - sumIndexRow
        const dif2:number = colSum[i] - sumIndexColumn
        if (sumIndexColumn < colSum[j]) {
            for (let g = 0; g < dif || g < dif2; g++) {

                console.log(`atualizando o elemento ${matrix[i][j]} para ${matrix[i][j] + 1} porra ${sumIndexRow} ${rowSum[i]} caralho ${sumIndexColumn} ${matrix[j][i]} aaaaaaa`);
                
                let index = matrix[i].indexOf(matrix[i][j])
                matrix[i].splice(index,1,matrix[i][j] + 1)
                console.log('Atualizando linhas +: ', matrix);
                sumIndexRow = updateMatrixRow(colSum, matrix, sumIndexRow, i);
                if (sumIndexRow == rowSum[i]) {
                    break siru;
                }
                sumIndexColumn = updateMatrixColumn(colSum, matrix, sumIndexColumn, j);
                while (sumIndexColumn == colSum[j]) {
                    j++
                    if (j >= colSum.length) {
                        break siru
                    }
                }
            }
            break siru
        } else {
            j++
        }
    }
}

function columnUp(sumIndexRow:number, rowSum:number[], colSum:number[], matrix:number[][], sumIndexColumn:number, i:number) {
    console.log('SIC+: ', sumIndexColumn, 'CS: ', colSum[i]);
    sicu: for (let j = 0; sumIndexColumn < colSum[i]; j++) {
        if (j >= colSum.length) {
            break
        }
        const dif:number = colSum[i] - sumIndexColumn
        const dif2:number = rowSum[i] - sumIndexRow
        if (sumIndexRow < rowSum[j]) {
            for (let g = 0; g < dif || g < dif2; g++) {
                let index = matrix[j].indexOf(matrix[j][i])
                matrix[j].splice(index,1,matrix[j][i] + 1)
                console.log('Atualizando colunas +: ', matrix);
                
                sumIndexColumn = updateMatrixColumn(colSum, matrix, sumIndexColumn, i);
                if (sumIndexColumn === colSum[i]) {
                    break sicu;
                }
                sumIndexRow = updateMatrixRow(colSum, matrix, sumIndexRow, i);
                while (sumIndexRow == rowSum[j]) {
                    j++
                    if (j >= colSum.length) {
                        break sicu
                    }
                }
            }
            break sicu
        } else {
            j++
        }
    }
}

function rowDown(sumIndexRow:number, rowSum:number[], colSum:number[], matrix:number[][], sumIndexColumn:number, i:number) {
    console.log('SIR-: ', sumIndexRow, 'CR: ', rowSum[i]);
    sird: for (let j = 0; sumIndexRow > rowSum[i]; j++) {
        if (j >= colSum.length) {
            break
        }
        const dif:number = sumIndexRow - rowSum[i] 
        const dif2:number = sumIndexColumn - colSum[i] 
    
        if (sumIndexColumn > colSum[j]) {
            for (let g = 0; g < dif || g < dif2; g++) {
                console.log('num: ', matrix[i][j]);
                let index = matrix[i].indexOf(matrix[i][j])
                matrix[i].splice(index,1,matrix[i][j] - 1) 
                if (matrix[i][j] < 0) {
                    matrix[i][j] *= -1
                }
                console.log('Atualizando linhas -: ', matrix);
                
                sumIndexColumn = updateMatrixColumn(colSum, matrix, sumIndexColumn, i);
                sumIndexRow = updateMatrixRow(colSum, matrix, sumIndexRow, i);
                if (sumIndexRow == rowSum[i]) {
                    break sird;
                }
                while (sumIndexColumn == colSum[j] || matrix[i][j] <= 0) {
                    j++
                    if (j >= colSum.length) {
                        break sird
                    }
                }
            }
            break sird
        } else {
            j++
        }
    }   
}

function columnDown(sumIndexRow:number, rowSum:number[], colSum:number[], matrix:number[][], sumIndexColumn:number, i:number) {
    console.log('SIC-: ', sumIndexColumn, 'CS: ', colSum[i]);
    sicd: for (let j = 0; sumIndexColumn > colSum[i]; j++) {
        if (j >= colSum.length) {
            break 
        }
        const dif:number = sumIndexColumn - colSum[i] 
        const dif2:number = sumIndexRow - rowSum[i] 
        console.log('dif', dif);
        if (sumIndexRow > rowSum[j]) {
            for (let g = 0; g < dif || g < dif2; g++) {
                console.log('comparação no coluna -: sumIndexRow: ', sumIndexRow, 'rowSum: ', rowSum[j], 'SumColumn: ', sumIndexColumn);
                let index = matrix[j].indexOf(matrix[j][i])
                matrix[j].splice(index,1,matrix[j][i] - 1)
                if (matrix[j][i] < 0) {
                    matrix[j][i] *= -1
                }
                console.log('Atualizando colunas -: ', matrix);
                sumIndexRow = updateMatrixRow(colSum, matrix, sumIndexRow, i);
                sumIndexColumn = updateMatrixColumn(colSum, matrix, sumIndexColumn, i)
                if (sumIndexColumn == colSum[i]) {
                    break sicd;
                }
                while (sumIndexRow == rowSum[j] || matrix[j][i] <= 0) {
                    j++
                    if (j >= colSum.length) {
                        break sicd;
                    }
                }
            }
            break sicd
        } else {
            j++
        }
    }
    
}

restoreMatrix([5,7,10], [8,6,8])

/*
ideal: 
3 0
1 7
*/