function lengthOfLongestSubstring(s) {
    var repeatList = [];
    for (var i1 = 0; i1 < s.length; i1++) {
        for (var i2 = 1; i2 < s.length; i2++) {
            if (s[i1] == s[i2]) {
                while (s[i1] == s[i2]) {
                    repeatList[i1].push(s[i2]);
                    i2++;
                }
            }
        }
    }
    console.log(repeatList);
    return 5;
}
;
console.log(lengthOfLongestSubstring("abcabcbb"));
