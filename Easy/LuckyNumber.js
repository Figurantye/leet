function luckyNumbers(matrix) {
    var row = [];
    var column = [];
    for (var i = 0; i < matrix.length; i++) {
        row.push(Math.min.apply(Math, matrix[i]));
    }
    var max = [Math.max.apply(Math, row)];
    for (var i = 0; i < matrix[0].length; i++) {
        column.push([]);
        for (var j = 0; j < matrix.length; j++) {
            column[i].push(matrix[j][i]);
        }
    }
    var min = column.find(function (subArray) { return subArray.includes(max[0]); });
    if (max[0] !== Math.max.apply(Math, min)) {
        max.shift();
    }
    console.log(min, column);
    return max;
}
;
console.log(luckyNumbers([[3, 6], [7, 1], [5, 2], [4, 8]]));
