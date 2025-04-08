function numRescueBoats(people, limit) {
    people.sort(function (a, b) { return a - b; });
    var left = 0;
    var right = people.length - 1;
    var boats = 0;
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
            right--;
        }
        else {
            right--;
        }
        boats++;
        console.log(boats);
    }
    return boats;
}
console.log(numRescueBoats([3, 2, 2, 1], 3));
