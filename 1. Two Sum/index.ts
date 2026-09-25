/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums: number[], target: number): number[] {
    const map: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement: number  = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement) || 0, i];
        }
        map.set(nums[i], i);
    }
    // Return an empty array if no solution is found
    return [];
};