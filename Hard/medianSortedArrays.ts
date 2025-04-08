function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const nums3:number[] = nums1.concat(nums2);
    const arrMerged:number[] = nums3.sort((a,b) => a - b);
    let median:number = 0;
    
    for (let index = 0; index < arrMerged.length; index++) {
        median = index
        
    }
};