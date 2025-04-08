function luckyNumbers (matrix: number[][]): number[] {
    const row:number[] = [];
    const column:number[][] = [];
    
    for (let i = 0; i < matrix.length; i++) {
        row.push(Math.min(...matrix[i]));
    }
    
    const max:number[] = [Math.max(...row)];
    
    for (let i = 0; i < matrix[0].length; i++) {
        column.push([])
        for (let j = 0; j < matrix.length; j++) {
            column[i].push(matrix[j][i]);
        }
    }

    let min = column.find(subArray => subArray.includes(max[0]));
    
    if (max[0] !== Math.max(...min)) {
        max.shift()
    }

    return max
};

console.log(luckyNumbers([[3,6],[7,1],[5,2],[4,8]]));

