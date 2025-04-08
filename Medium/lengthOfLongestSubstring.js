function lengthOfLongestSubstring(s) {
    var arr = s.split("");
    var attempt = [];
    for (var i = 0; i < arr.length; i++) {
        attempt.push(0);
        var clone = i;
        for (var j = 1; !arr.includes(arr[i]); j++) {
            attempt[i]++;
            console.log(arr[clone], arr[j], attempt[i]);
        }
    }
    console.log(arr);
    console.log(attempt);
    return 0;
}
;
console.log(lengthOfLongestSubstring("abcabcbb"));
