function construct2DArray(original, m, n) {
    var result = [];
    for (var index = 0; index < m; index++) {
        if (m * n < original.length) {
            break;
        }
        var row = [];
        for (var index2 = 0; index2 < n; index2++) {
            row.splice(index2, 1, original[0]);
            console.log('for2: ', row);
            original.shift();
            console.log('for2 2: ', row);
        }
        result.push(row);
        console.log('result: ', result);
    }
    return result;
}
;
console.log(construct2DArray([1, 2], 1, 1));
