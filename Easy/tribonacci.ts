function tribonacci(n: number): number {
    let tribo:number = 0;
    const sequence:number[] = [0, 0, 1];
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < sequence.length; j++){
            tribo = sequence[2]
            tribo += sequence[0] + sequence[1]
        }
        sequence.shift();
        sequence.push(tribo);
        
    } 
    if(n < 3 && n > 0){
        tribo = 1
    }
    return tribo
};

console.log(tribonacci(25));
