function numRescueBoats(people: number[], limit: number): number {
    let boat:number[][ ] = []
    let index:number = 0
    let jota:number = people.length - 1


    while (index <= jota) {
        if (people[index] + people[jota] >= limit) {
            boat.push([people[index]])
            index++
        }
        boat.push([jota])
    }
    return boat.length
}

console.log(numRescueBoats([3,2,2,1], 3));
