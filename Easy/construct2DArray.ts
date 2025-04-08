function construct2DArray(original: number[], m: number, n: number): number[][] {
    const result:number[][] = [];
    const row:number[] = [];
    let i2:number = 0

    if (m*n !== original.length) {
        return result;
    }
    for (let index:number = 0; index < m; index++) {
        for (let index2:number = i2; index2 < n; index2++) {
            row.splice(index2, 1, original[index2])
        }
        i2 += n
        result.push(row)
    }
    return result;
};

console.log(construct2DArray([1,2], 1, 1));
