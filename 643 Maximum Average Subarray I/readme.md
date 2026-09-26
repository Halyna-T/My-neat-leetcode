# Intuition
sliding window

# Approach
We can simply traverse over nums just once, and on the go keep on determining the sums possible for the subarrays of length `k`. To understand the idea, assume that we already know the sum of elements from index `i` to index `i+k`, say it is `x`.

Now, to determine the sum of elements from the index `i+1` to the index `i+k+1`, all we need to do is to subtract the element `nums[i]` from `x` and to add the element `nums[i+k+1]` to `x`. We can carry out our process based on this idea and determine the maximum possible average.

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Explanation of code:
For example, we have data nums = [1,12,-5,-6,50,3], k = 4
first `for` cycle will count sum of our window:
``
for (let i = 0; i < k; i++) {
        sum += nums[i];
    }
``
sum = 2 (sum from nums[0] to nums[3])

second `for` cycle will count sum with sliding window approach:
``
for (let i = k; i < nums.length; i++) {
         sum += nums[i] - nums[i - k];
         if (sum > maxs) maxs = sum;
    }
``
sum = 2 (from previous calculation) + nums[4] - nums[4-4] = 2 + 50 - 1 = 51
sum = 51 + nums[5] - nums[5-4] = ...

so with fixed sliding window size we can add next element to sum and remove last element is sliding window from the sum.

If sum is bigger then maximum then save new maximum. 
