function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
    const matrix:number[][] = []
    
    while (matrix.length < rowSum.length) {
        matrix.push([])
        while(matrix[matrix.length - 1].length < rowSum.length){
            matrix[matrix.length - 1]. push(0)
        }
    }


    
    return matrix
}
restoreMatrix([5,7,10], [8,6,8])
