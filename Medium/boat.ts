function numRescueBoats(people: number[], limit: number): number {
    people.sort((a, b) => a - b);
    let left = 0;   
    let right = people.length - 1;
    let boats = 0;
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++; 
            right--;
        } else {
            right--; 
        }
        boats++;
        console.log(boats);
    }
    
    return boats;
}

console.log(numRescueBoats([3,2,2,1], 3));
