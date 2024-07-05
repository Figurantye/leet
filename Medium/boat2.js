function numRescueBoats(people, limit) {
    var boat = 0;
    var index = 0;
    var jota = people.length - 1;
    while (index <= jota) {
        if (people[index] + people[jota] >= limit) {
            index++;
        }
        jota--;
        boat++;
    }
    return boat;
}
console.log(numRescueBoats([3, 2, 2, 1], 3));
