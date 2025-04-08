function minDays(bloomDay: number[], m: number, k: number): number {
    const flowerDay: number[][] = [];
    const bouquets: number[] = [];
    let bqt: number = 0
    let stop = 0

    for (let i = 0; i < bloomDay.length; i++) {
        stop = 0
        try {
            if (bloomDay[i] = bloomDay[i + 1]) {
                for (let j = 0; bloomDay[j] === bloomDay[i]; j++) {
                    flowerDay.push([]);
                    while (bloomDay[j] === bloomDay[i]) {
                        flowerDay[flowerDay.length - 1].push(bloomDay[j]);
                        console.log(flowerDay);
                        j++
                    }
                    if (flowerDay[j].length == k) {
                        bouquets.push(bloomDay[i])
                        i = j
                    } else {
                        i = j
                    }
                }
            } else {
                i++
            }
        } catch (error) {
            console.log("deu merda kkkk");
            break;
        }
        bqt = Math.max(...bouquets)
        if (bqt == m) {
            break;
        } else if (i == bloomDay.length - 1 && bqt != m) {
            bqt = -1
        } else {
            console.log("deu merda");
        }
    }
    return bqt
};

console.log(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3));