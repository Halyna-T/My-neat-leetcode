# Intuition
The key thing is in `arr` and that we store index of the next not repeating character there.
For example, we have a string 'abcdcd': `pointer` will be 0 until `i=4` (second char `c` in string), then `pointer=3` because it make sence to start new sliding window right after previous repeating char. 

# Approach
The key idea: `pointer` is the left boundary of the current window with no repeats. When a character is encountered that has already been seen within the current window (`arr[char] > pointer`), the window "shrinks" — `pointer` moves to just after the previous occurrence of that character. This is the window "sliding" — without an explicit `while` loop for shrinking, as you'd have in a classic two-pointer implementation.

# Complexity
- Time complexity: O(n)
A single pass through the string of length `n`, with each iteration doing O(1) operations (no nested loops or hidden O(n) operations like `splice`, which we discussed earlier). This is optimal — it's impossible to solve the problem faster than O(n), since you need to look at each character at least once.

- Space complexity: O(1)
Formally, if you generalize to any alphabet of size `k`, the memory would be O(k). But here `k = 128` is a fixed constant, explicitly set in the code (`new Int32Array(128)`), not a variable that depends on the input data. So in terms of Big O relative to `n` (the size of the input string), it is indeed O(1).

# Explanation of code:
`arr: number[] = new Array(128).fill(0);` 
- our array to check is character is unuq or not. For example, we meet in the string character `a` then we will store in arr[97] = i + 1. This `i+1` means that in case we meet char 97 again, then `pointer` will jump to index where previous `a` was + 1
`maxCount = 0;`
- this is a counter for our max length of substring w/o repeating characters
`pointer = 0;` 
- our left pointer that means start of substring w/o repeating characters

`i` in the for loop is an active right pointer, it will help go throw string and count maxCount as `Math.max(maxCount, i - pointer + 1)` and store indexes in `arr`: `arr[char] = i + 1`