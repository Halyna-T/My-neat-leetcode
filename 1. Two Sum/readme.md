# Intuition
Two numbers should give `target` in sum, so `a1 + a2 = target`. We could use hash map to store number and his index and in this way we can chek do we alread yhave `a2 = target - a1` ?

# Approach
It turns out we can do it in one-pass. While we are iterating and inserting elements into the hash table, we also look back to check if current element's complement already exists in the hash table. If it exists, we have found a solution and return the indices immediately.

# Complexity
- Time complexity: O(n).
We traverse the list containing n elements only once. Each lookup in the table costs only O(1) time.

- Space complexity: O(n).
The extra space required depends on the number of items stored in the hash table, which stores at most n elements.