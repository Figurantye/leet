function lengthOfLongestSubstring(s: string): number {
    const arr:string[] = s.split("")
    const attempt:number[] = []
    
    for (let i = 0; i < arr.length; i++) {
        attempt.push(0)
        let clone:number = i
        for (let j = 1; arr[clone] != arr[j]; j++) {
            arr.map((x) => x == arr[j]);
            attempt[i]++
            console.log(arr[clone], arr[j], attempt[i]);               
        }
    }
    console.log(arr);
    console.log(attempt);


    return 0
};

console.log(lengthOfLongestSubstring("abcabcbb"));
