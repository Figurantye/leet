function twoSum(nums: number[], target: number): number[] {
    const arr:number[] = [];
    var menu: boolean = true;
    for (let i = 0; menu; i++) {
        for (let j = 1; nums[i] + nums[j] === target && i !== j; j++) {
            if (nums[i] + nums[j] === target && i !== j) {
                arr.push(i, j);
                menu = false;
            }
        }
    }
    return arr;
};

twoSum([2,7,11,15], 9)