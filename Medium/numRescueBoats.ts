function numRescueBoats(people: number[], limit: number): number {
    const boat:number[] = []
    const arrBoat:number[][] = []
    for (let i = 0; i < limit; i++) {
        for (let j = 1; j < people.length; j++) {
            if (people[i] >= limit) {
                boat.push(i)
                i++
            } else if(people[i] < limit && people[i] + people[j] > limit){
                boat.push(i)
                i++
            }else if(people[i] + people[j] >= limit){
                boat.push(i)
                i = j
            }
        }
        
    }
    console.log(boat);
    
    return boat.length
};

console.log(numRescueBoats([3,5,3,4], 5));