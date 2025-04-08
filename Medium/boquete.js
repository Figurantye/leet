function minDays(bloomDay, m, k) {
    var flowerDay = [];
    var bouquets = [];
    var bqt = 0;
    var stop = 0;
    for (var i = 0; i < bloomDay.length; i++) {
        stop = 0;
        try {
            if (bloomDay[i] = bloomDay[i + 1]) {
                for (var j = 0; bloomDay[j] === bloomDay[i]; j++) {
                    flowerDay.push([]);
                    while (bloomDay[j] === bloomDay[i]) {
                        flowerDay[flowerDay.length - 1].push(bloomDay[j]);
                        console.log(flowerDay);
                        if (flowerDay[j].length + 1 == k) {
                            bouquets.push(bloomDay[i]);
                            i = j;
                        }
                        j++;
                    }
                }
            }
            else {
                i++;
            }
        }
        catch (error) {
            console.log("deu merda kkkk");
            break;
        }
        bqt = Math.max.apply(Math, bouquets);
        if (bqt == m) {
            break;
        }
        else if (i == bloomDay.length - 1 && bqt != m) {
            bqt = -1;
        }
        else {
            console.log("deu merda");
        }
    }
    return bqt;
}
;
console.log(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3));
