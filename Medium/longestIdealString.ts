function longestIdealString(s: string, k: number): number {
    const charToIndex = new Map<string, number>();
    for (let i = 0; i < 26; i++) {
        charToIndex.set(String.fromCharCode(97 + i), i);
    }
    const dp: number[] = [s.length].fill(0);
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        dp[i] = 1;
        for (let j = 0; j < i; j++) {
            const diff = Math.abs(charToIndex.get(s[i])! - charToIndex.get(s[j])!);
            if (diff <= k) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }   
        }       
        maxLength = Math.max(maxLength, dp[i]);
    }
    console.log(dp);
    
    return maxLength;
}

console.log(longestIdealString("abcdqrujioencsl", 3)); 

/*
function longestIdealString(s: string, k: number): number {
    const charToIndex: number[] = new Array(26);
    for (let i = 0; i < 26; i++) {
        charToIndex[i] = i;
    }

    const dp: number[] = new Array(s.length).fill(1);
    let maxLength = 1;

    for (let i = 1; i < s.length; i++) {
        for (let j = i - 1; j >= 0; j--) {
            const diff = Math.abs(charToIndex[s[i].charCodeAt(0) - 97] - charToIndex[s[j].charCodeAt(0) - 97]);
            if (diff <= k) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
                maxLength = Math.max(maxLength, dp[i]);
                break;
            }
        }
    }

    return maxLength;
}*/