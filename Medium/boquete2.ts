function minDays(bloomDay: number[], m: number, k: number): number {
    const size:number = bloomDay.length
    const bouquets: number[][] = [];
    const bigger:number = Math.max(...bloomDay) + 1
    let lilflw:number = 0
    let indexLilflw:number = 0
    let bct:number = 0
    if (size < m * k) {
        bct = -1
        m = 0
    }
    baleia: while (m !== bouquets.length) {
        lilflw = Math.min(...bloomDay);
        if (lilflw != bigger) {
            bct = lilflw
        }
        indexLilflw = bloomDay.indexOf(lilflw);
        console.log(bloomDay);
        bloomDay.splice(indexLilflw, 1, bigger);
        if (k > 1) {
            let arRandom:number[] = [];
            let arRandomin:number[] = [];
            let arRandomax:number[] = [];
            let coringa:number = 0
            for (let i2 = 0; i2 < k; i2++) {
                arRandom.push(bloomDay[i2 + indexLilflw]);
                console.log('adicionando index: ', i2 + indexLilflw);
            }
            console.log('arrandom: ', arRandom);
            if (arRandom.every((elem) => elem == bigger)) {
                for (let i4 = 0; i4 < k; i4++) {
                    console.log('apagando: ', bloomDay[indexLilflw]);
                    bloomDay.splice(indexLilflw, 1)
                }
                bouquets.push(arRandom);
                console.log(bouquets);                
            }    
            if (bouquets.length == m) {
                break baleia
            }
            for (let i3 = 0; coringa < k; i3--) {
                console.log('adicionando index: ', i3 + indexLilflw)
                arRandomin.push(bloomDay[i3 + indexLilflw])
                coringa++
            }
            coringa = 0 
            console.log('arrandomin: ',arRandomin);
            if (arRandomin.every((elem) => elem == bigger)) {
                for (let i4 = 0; coringa < k; i4--) {
                    console.log('down');
                    console.log('apagando: ', bloomDay[indexLilflw + i4]);
                    
                    bloomDay.splice(indexLilflw + i4, 1);
                    coringa++
                }
                bouquets.push(arRandomin);
                console.log(bouquets); 
            }
            if (bouquets.length == m) {
                break baleia
            }
            let indexBigger = bloomDay.indexOf(bigger)
            for (let i2 = 0; i2 < k; i2++) {
                arRandomax.push(bloomDay[i2 + indexBigger]);
                console.log('adicionando index: ', i2 + indexBigger);
            }
            console.log('arrandomax: ', arRandomax);
            if (arRandomax.every((elem) => elem == bigger)) {
                for (let i4 = 0; i4 < k; i4++) {
                    console.log('apagando: ', bloomDay[indexBigger]);
                    bloomDay.splice(indexBigger, 1)
                }
                bouquets.push(arRandomax);
                console.log(bouquets);   
            }    
            if (bouquets.length == m) {
                break baleia
            }
        } else if(k == 1){
            let arRandom:number[] = [];
            arRandom.push(bloomDay[indexLilflw]);
            bloomDay.splice(indexLilflw, 1);
            console.log('down');
            
            bouquets.push(arRandom);
            console.log(bouquets);
        }
        console.log('bct: ',bct);
        console.log(m);
        console.log(bouquets.length);
    }
    return bct;
}
/*
function minDays(a:number[], b:number, c:number): number[] {
    let a2:number[] = a.sort((a, b) => a - b)

    return a2
}
*/

console.log(minDays([40,74,42,94,90,9,29,45,32,35,42,71,73,47,49,83,72,64,66,100,31,35,23,24,96,9,71,37,95,26,25,54,65,45,92,88,38,80], 2, 13));

/*
[5,37,55,92,22,52,31,62,99,64,92,53,34,84,93,50,28]
[[x,x],[x,x],[x,[x,x],x],99,[x,x],[x,x],[x,x],[x,x]]


[
   5, 22, 28, 31, 34, 37, 50,
  52, 53, 55, 62, 64, 84, 92,
  92, 93, 99
]
*/
