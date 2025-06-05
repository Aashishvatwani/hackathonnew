export const questionsData = [
  {
    id: 1,
    Array: true,
    title: "Find Max Product Pair",
    description: `You're given an array of integers. Find the maximum product that can be formed by multiplying any two distinct elements.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers — the elements of the array
    `,
    outputFormat: `
One line per test case: the maximum product of any two numbers in the array.
    `,
    difficulty: "Easy",
    avgTime: "8 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(1)",
    },
    qinput: `2
5
1 10 2 6 5
4
-10 -20 5 6
`,
    expectedOutput: `
60
200`,
  },
  {
    id: 2,
    Array: true,
    title: "Check Array Palindrome",
    description: `You're given an array. Determine if it is a palindrome (reads the same forward and backward).`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers — the elements of the array
    `,
    outputFormat: `
One line per test case: "YES" if the array is a palindrome, otherwise "NO".
    `,
    difficulty: "Easy",
    avgTime: "7 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(1)",
    },
    qinput: `2
5
1 2 3 2 1
4
1 2 2 3
`,
    expectedOutput: `
YES
NO`,
  },
  {
    id: 3,
    Array: true,
    title: "Count Even and Odd",
    description: `You're given an array of integers. Count how many are even and how many are odd.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — size of the array  
2. n space-separated integers
    `,
    outputFormat: `
One line per test case: two integers — count of even numbers and count of odd numbers.
    `,
    difficulty: "Easy",
    avgTime: "6 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(1)",
    },
    qinput: `2
6
1 2 3 4 5 6
5
1 3 5 7 9
`,
    expectedOutput: `
3 3
0 5`,
  },
  {
    id: 4,
    Array: true,
    title: "Array Rotation",
    description: `Rotate the given array to the right by k steps.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — size of the array  
2. n space-separated integers  
3. An integer k — number of steps to rotate
    `,
    outputFormat: `
One line per test case: the rotated array.
    `,
    difficulty: "Medium",
    avgTime: "12 min",
    totalarray: 1,
    totalint: 1,
    complexity: {
      time: "O(n)",
      space: "O(n)",
    },
    qinput: `2
5
1 2 3 4 5
2
4
10 20 30 40
1
`,
    expectedOutput: `
4 5 1 2 3
40 10 20 30`,
  },
  {
    id: 5,
    Array: true,
    title: "Find Second Largest",
    description: `You're given an array. Find the second largest element in it.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — size of the array  
2. n space-separated integers
    `,
    outputFormat: `
One line per test case: the second largest element.
    `,
    difficulty: "Easy",
    avgTime: "6 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(1)",
    },
    qinput: `2
5
1 5 3 9 2
4
8 8 8 7
`,
    expectedOutput: `
5
7`,
  },
  {
    id: 6,
    Array: true,
    title: "Sum of Positive Numbers",
    description: `You're given an array. Calculate the sum of all positive integers in it.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n  
2. n space-separated integers
    `,
    outputFormat: `
One line per test case: the sum of all positive numbers.
    `,
    difficulty: "Easy",
    avgTime: "5 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(1)",
    },
    qinput: `2
4
1 -2 3 4
3
-1 -2 -3
`,
    expectedOutput: `
8
0`,
  },
  {
    id: 7,
    Array: true,
    title: "Count Unique Elements",
    description: `You're given an array. Count the number of unique elements.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n  
2. n space-separated integers
    `,
    outputFormat: `
One line per test case: the number of unique elements.
    `,
    difficulty: "Easy",
    avgTime: "8 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(n)",
    },
    qinput: `2
5
1 2 2 3 4
4
5 5 5 5
`,
    expectedOutput: `
4
1`,
  },
  {
    id: 9,
    Array: true,
    title: "Find Missing Number",
    description: `You're given an array of size n−1 containing numbers from 1 to n with one number missing. Find the missing number.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n  
2. n−1 space-separated integers from 1 to n
    `,
    outputFormat: `
One line per test case: the missing number.
    `,
    difficulty: "Medium",
    avgTime: "10 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(1)",
    },
    qinput: `2
5
1 2 4 5
3
1 3
`,
    expectedOutput: `
3
2`,
  },
  {
    id: 10,
    Array: true,
    title: "Sum of Elements at Even Indexes",
    description: `You're given an array. Find the sum of elements at even indexes.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n  
2. n space-separated integers
    `,
    outputFormat: `
One line per test case: the sum of elements at even indexes.
    `,
    difficulty: "Easy",
    avgTime: "5 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(1)",
    },
    qinput: `2
6
10 20 30 40 50 60
5
5 10 15 20 25
`,
    expectedOutput: `
90
45`,
  },
  {
    id: 11,
    Array: true,
    title: "Compare Sum of Two Arrays",
    description: `Given two arrays, compare their sums. Return "A" if array A has a higher sum, "B" if array B has a higher sum, and "Equal" if the sums are the same.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n1  
2. n1 integers  
3. An integer n2  
4. n2 integers
    `,
    outputFormat: `
One line per test case: "A", "B", or "Equal"
    `,
    difficulty: "Easy",
    avgTime: "8 min",
    totalarray: 2,
    totalint: 0,
    complexity: {
      time: "O(n+m)",
      space: "O(1)",
    },
    qinput: `3
3
1 2 3
3
4 0 1
2
2 2
2
2 2
2
1 1
2
2 0
`,
    expectedOutput: `
A
Equal
B`,
  },
   {
    id: 12,
    Array: true,
    title: "Find Pair with Given Sum",
    description: `Given an array of integers and a target sum, determine if there exists a pair of elements in the array that sum up to the target.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers — the elements of the array
3. An integer target — the target sum
    `,
    outputFormat: `
One line per test case: "YES" if such a pair exists, otherwise "NO".
    `,
    difficulty: "Easy",
    avgTime: "8 min",
    totalarray: 1,
    totalint: 1,
    complexity: {
      time: "O(n)",
      space: "O(n)",
    },
    qinput: `10
5
1 2 3 4 5
7
4
10 20 30 40
50
6
-1 2 3 4 5 6
1
3
7 8 9
15
2
1 5
6
5
1 2 3 4 5
10
10
1 2 3 4 5 6 7 8 9 10
11
4
0 0 0 0
0
3
-5 0 5
0
7
1 2 3 4 5 6 7
100
2
10 20
30
`,
    expectedOutput: `
YES
YES
YES
YES
YES
NO
YES
YES
YES
YES`,
  },
  {
    id: 13,
    Array: true,
    title: "Maximum Subarray Sum",
    description: `Given an integer array, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers — the elements of the array
    `,
    outputFormat: `
One line per test case: the maximum subarray sum.
    `,
    difficulty: "Medium",
    avgTime: "15 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(1)",
    },
    qinput: `10
9
-2 1 -3 4 -1 2 1 -5 4
5
1 2 3 -2 5
4
-1 -2 -3 -4
1
100
3
5 4 -1
6
2 -3
-1
7
-1 2 -3 4 -5 6 -7
6
8
-1 0 -2 0 -3 0 -4 0
0
5
2 2 -1 2 2
7
4
1 1 -1 1
2
9
10 20 -5 1 2 -3 4 5 6
38
`,
    expectedOutput: `
6
9
-1
100
8
-1
6
0
7
2
38`,
  },
  {
    id: 19,
    Array: true,
    title: "Find Common Elements in Two Arrays",
    description: `Given two arrays, find and print all common elements between them. The order of elements in the output doesn't matter.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n1 — size of the first array  
2. n1 space-separated integers — elements of the first array
3. An integer n2 — size of the second array  
4. n2 space-separated integers — elements of the second array
    `,
    outputFormat: `
One line per test case: space-separated common elements. If no common elements, print an empty line or "NONE".
    `,
    difficulty: "Easy",
    avgTime: "10 min",
    totalarray: 2,
    totalint: 0,
    complexity: {
      time: "O(n + m)",
      space: "O(min(n, m))",
    },
    qinput: `10
5
1 2 3 4 5
4
3 4 5 6
3
10 20 30
2
20 40
4
1 2 3 4
3
5 6 7
5
1 1 2 2 3
4
1 2 3 4
6
7 8 9 10 11 12
3
9 10 13
2
-1 -2
2
-2 -3
1
100
1
100
3
1 2 3
3
1 2 3
5
1 2 3 4 5
5
1 2 3 4 5
4
1 2 3 4
4
4 3 2 1
`,
    expectedOutput: `
3 4 5
20

1 2 3
9 10
-2
100
1 2 3
1 2 3 4 5
1 2 3 4`,
  },
  {
    id: 20,
    Array: true,
    title: "Reverse Array In-Place",
    description: `Given an array, reverse its elements in-place. You must modify the input array directly.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers — the elements of the array
    `,
    outputFormat: `
One line per test case: the reversed array.
    `,
    difficulty: "Easy",
    avgTime: "5 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(1)",
    },
    qinput: `10
5
1 2 3 4 5
4
10 20 30 40
3
-1 0 1
1
99
6
a b c d e f
0

7
7 6 5 4 3 2 1
5
1 1 1 1 1
2
1 2
8
8 7 6 5 4 3 2 1
`,
    expectedOutput: `
5 4 3 2 1
40 30 20 10
1 0 -1
99

1 2 3 4 5 6 7
1 1 1 1 1
2 1
1 2 3 4 5 6 7 8`,
  },
  {
    id: 21,
    Array: true,
    title: "Find Smallest and Largest Elements",
    description: `Given an array of integers, find the smallest and largest elements in it.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers — the elements of the array
    `,
    outputFormat: `
One line per test case: two integers — the smallest and largest elements, space-separated.
    `,
    difficulty: "Easy",
    avgTime: "6 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(1)",
    },
    qinput: `10
5
1 5 3 9 2
4
100 20 5 80
3
-10 -5 -20
1
7
6
-1 0 1 2 -2 3
2
50 50
7
1 2 3 4 5 6 7
8
10 9 8 7 6 5 4 3
2
-100 100
5
1 1 1 1 1
`,
    expectedOutput: `
1 9
5 100
-20 -5
7 7
-2 3
50 50
1 7
3 10
-100 100
1 1`,
  },
  {
    id: 22,
    Array: true,
    title: "Left Rotate Array by D Positions",
    description: `Given an array of integers and a number D, left rotate the array by D positions.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers — the elements of the array
3. An integer D — the number of positions to rotate
    `,
    outputFormat: `
One line per test case: the left-rotated array.
    `,
    difficulty: "Medium",
    avgTime: "12 min",
    totalarray: 1,
    totalint: 1,
    complexity: {
      time: "O(n)",
      space: "O(1)", // Or O(n) if auxiliary array is allowed
    },
    qinput: `10
5
1 2 3 4 5
2
4
10 20 30 40
1
3
a b c
1
7
1 2 3 4 5 6 7
7
5
1 2 3 4 5
0
4
10 20 30 40
4
6
1 2 3 4 5 6
3
8
1 2 3 4 5 6 7 8
5
2
1 2
1
3
1 2 3
0
`,
    expectedOutput: `
3 4 5 1 2
20 30 40 10
b c a
1 2 3 4 5 6 7
1 2 3 4 5
10 20 30 40
4 5 6 1 2 3
6 7 8 1 2 3 4 5
2 1
1 2 3`,
  },
  {
    id: 23,
    Array: true,
    title: "Check if Array is Sorted",
    description: `Given an array, determine if it is sorted in non-decreasing order.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers — the elements of the array
    `,
    outputFormat: `
One line per test case: "YES" if sorted, otherwise "NO".
    `,
    difficulty: "Easy",
    avgTime: "5 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(1)",
    },
    qinput: `10
5
1 2 3 4 5
4
5 4 3 2
6
10 20 20 30 40 50
3
1 3 2
1
100
0

5
-5 -4 -3 -2 -1
7
1 1 1 1 1 1 1
2
10 5
4
1 2 2 1
`,
    expectedOutput: `
YES
NO
YES
NO
YES
YES
YES
NO
NO`,
  },
  {
    id: 24,
    Array: true,
    title: "Count Element Frequency",
    description: `Given an array of integers, count the frequency of each element. Print each unique element and its count.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers — the elements of the array
    `,
    outputFormat: `
One line per test case: unique elements and their counts, space-separated as "element:count". Order of elements doesn't matter.
    `,
    difficulty: "Medium",
    avgTime: "10 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(n)",
    },
    qinput: `10
5
1 2 2 3 1
6
10 20 10 30 20 10
4
5 5 5 5
3
1 2 3
1
7
0

7
-1 -1 0 0 1 1 2
5
1 2 3 2 1
8
1 2 3 4 5 6 7 8
9
1 1 1 2 2 2 3 3 3
2
4 4
`,
    expectedOutput: `
1:2 2:2 3:1
10:3 20:2 30:1
5:4
1:1 2:1 3:1
7:1

-1:2 0:2 1:2 2:1
1:2 2:2 3:1
1:1 2:1 3:1 4:1 5:1 6:1 7:1 8:1
1:3 2:3 3:3
4:2`,
  },
  {
    id: 25,
    Array: true,
    title: "Find Majority Element",
    description: `Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the array is non-empty and the majority element always exist in the array.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers — the elements of the array
    `,
    outputFormat: `
One line per test case: the majority element.
    `,
    difficulty: "Easy",
    avgTime: "7 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(1)",
    },
    qinput: `10
3
3 2 3
7
2 2 1 1 1 2 2
5
6 6 6 7 6
1
100
9
1 2 3 1 1 1 1 4 1
2
2 2
4
7 7 7 1
6
1 1 1 2 2 1
5
-1 -1 -1 0 1
3
5 5 5
8
10 10 10 10 1 2 3 4
`,
    expectedOutput: `
3
2
6
100
1
2
7
1
-1
5
10`,
  },
  {
    id: 26,
    Array: true,
    title: "Kadane's Algorithm - Max Sum Subarray (Again)",
    description: `This is a revisit to Maximum Subarray Sum, but ensure you are implementing Kadane's algorithm specifically for efficiency. Given an integer array, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers — the elements of the array
    `,
    outputFormat: `
One line per test case: the maximum subarray sum using Kadane's.
    `,
    difficulty: "Medium",
    avgTime: "15 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(1)",
    },
    qinput: `10
9
-2 1 -3 4 -1 2 1 -5 4
5
1 2 3 -2 5
4
-1 -2 -3 -4
1
100
3
5 4 -1
6
2 -3
-1
7
-1 2 -3 4 -5 6 -7
6
8
-1 0 -2 0 -3 0 -4 0
0
5
2 2 -1 2 2
7
4
1 1 -1 1
2
9
10 20 -5 1 2 -3 4 5 6
38
`,
    expectedOutput: `
6
9
-1
100
8
-1
6
0
7
2
38`,
  },
  {
    id: 27,
    Array: true,
    title: "Find Peak Element",
    description: `A peak element is an element that is strictly greater than its neighbors. Given an integer array, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks. You may imagine that num[-1] = num[n] = -∞.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers — the elements of the array
    `,
    outputFormat: `
One line per test case: the index of a peak element.
    `,
    difficulty: "Medium",
    avgTime: "15 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(log n)",
      space: "O(1)",
    },
    qinput: `10
3
1 2 3
5
1 2 1 3 5 6 4
2
10 9
4
1 2 3 4
4
1 10 5 2
1
7
5
3 5 1 2 4
6
1 2 3 4 5 6
5
6 5 4 3 2 1
4
2 1 3 2
`,
    expectedOutput: `
2
5
0
3
1
0
1
5
0
2`,
  },
  {
    id: 28,
    Array: true,
    title: "Contains Duplicate",
    description: `Given an integer array, return true if any value appears at least twice in the array, and return false if every element is distinct.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers — the elements of the array
    `,
    outputFormat: `
One line per test case: "true" if duplicates exist, "false" otherwise.
    `,
    difficulty: "Easy",
    avgTime: "8 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(n)",
    },
    qinput: `10
4
1 2 3 1
4
1 2 3 4
5
1 1 1 3 3
1
100
0

6
7 8 9 10 11 12
3
-1 -2 -1
5
0 0 0 0 0
2
5 6
7
1 2 3 4 5 6 7
`,
    expectedOutput: `
true
false
true
false
false
false
true
true
false
false`,
  },
  {
    id: 29,
    Array: true,
    title: "Find Single Number",
    description: `Given a non-empty array of integers, every element appears twice except for one. Find that single one. Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers — the elements of the array
    `,
    outputFormat: `
One line per test case: the single number.
    `,
    difficulty: "Medium",
    avgTime: "10 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(1)",
    },
    qinput: `10
3
2 2 1
5
4 1 2 1 2
1
5
5
1 0 1
0
7
-1 -2 -1 -3 -2 -3 4
9
10 20 10 30 20 30 40 50 40
11
1 2 3 4 5 6 7 8 9 10 1
3
7 7 8
5
1 1 2 2 3
`,
    expectedOutput: `
1
4
5
0
4
50
2 3 4 5 6 7 8 9 10
8
3`,
  },
  {
    id: 30,
    Array: true,
    title: "Move Zeros",
    description: `Given an integer array, move all 0's to the end of it while maintaining the relative order of the non-zero elements. You must do this in-place without making a copy of the array.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers — the elements of the array
    `,
    outputFormat: `
One line per test case: the array with zeros moved to the end.
    `,
    difficulty: "Easy",
    avgTime: "10 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(1)",
    },
    qinput: `10
5
0 1 0 3 12
4
0 0 0 1
3
1 2 3
1
0
6
0 0 0 0 0 0
7
1 0 2 0 3 0 4
5
10 0 20 0 30
2
0 5
8
1 0 2 0 3 0 4 0
4
5 0 1 0
`,
    expectedOutput: `
1 3 12 0 0
1 0 0 0
1 2 3
0
0 0 0 0 0 0
1 2 3 4 0 0 0
10 20 30 0 0
5 0
1 2 3 4 0 0 0 0
5 1 0 0`,
  },
  {
    id: 31,
    Array: true,
    title: "Plus One",
    description: `You are given a large integer represented as an integer array, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's, except for the number 0 itself. Increment the large integer by one and return the resulting array of digits.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers — the digits of the integer
    `,
    outputFormat: `
One line per test case: the array of digits after incrementing by one.
    `,
    difficulty: "Easy",
    avgTime: "10 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(n) in worst case (all 9s), O(1) otherwise",
    },
    qinput: `10
3
1 2 3
3
4 3 2
1
9
2
9 9
4
1 2 9 9
5
9 9 9 9 9
1
0
3
8 9 9
4
9 9 9 8
1
1
2
2 9
`,
    expectedOutput: `
1 2 4
4 3 3
10
1 0 0
1 3 0 0
1 0 0 0 0 0
1
9 0 0
9 9 9 9
2
3 0`,
  },
  {
    id: 32,
    Array: true,
    title: "Two Sum",
    description: `Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers — the elements of the array
3. An integer target — the target sum
    `,
    outputFormat: `
One line per test case: two space-separated indices (0-based) of the numbers. The order of indices doesn't matter.
    `,
    difficulty: "Easy",
    avgTime: "10 min",
    totalarray: 1,
    totalint: 1,
    complexity: {
      time: "O(n)",
      space: "O(n)",
    },
    qinput: `10
4
2 7 11 15
9
3
3 2 4
6
2
3 3
6
5
1 2 3 4 5
9
4
-1 0 1 2
-1
6
-10 -20 1 2 3 4
-16
7
1 2 3 4 5 6 7
13
8
10 20 30 40 50 60 70 80
150
2
5 5
10
3
100 200 300
500
`,
    expectedOutput: `
0 1
1 2
0 1
3 4
0 2
0 4
5 6
6 7
0 1
1 2`,
  },
  {
    id: 33,
    Array: true,
    title: "Best Time to Buy and Sell Stock",
    description: `You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock. Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers — the stock prices on consecutive days
    `,
    outputFormat: `
One line per test case: the maximum profit.
    `,
    difficulty: "Easy",
    avgTime: "10 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(1)",
    },
    qinput: `10
6
7 1 5 3 6 4
5
7 6 4 3 1
5
1 2 3 4 5
1
100
3
2 1 2
4
2 4 1 7
8
7 2 4 1 8 3 9 0
3
1 1 1
5
10 15 5 20 8
4
1 5 3 6
`,
    expectedOutput: `
5
0
4
0
1
6
8
0
15
5`,
  },
  {
    id: 34,
    Array: true,
    title: "Search Insert Position",
    description: `Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order. You must write an algorithm with O(log n) runtime complexity.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers — the elements of the sorted array
3. An integer target — the target value
    `,
    outputFormat: `
One line per test case: the insert position.
    `,
    difficulty: "Easy",
    avgTime: "8 min",
    totalarray: 1,
    totalint: 1,
    complexity: {
      time: "O(log n)",
      space: "O(1)",
    },
    qinput: `10
4
1 3 5 6
5
4
1 3 5 6
2
4
1 3 5 6
7
4
1 3 5 6
0
1
100
100
5
10 20 30 40 50
25
3
1 2 4
3
6
1 2 3 4 5 6
0
2
1 2
3
7
1 2 3 4 5 6 7
8
`,
    expectedOutput: `
2
1
4
0
0
2
2
0
2
7`,
  },
  {
    id: 35,
    Array: true,
    title: "Remove Element",
    description: `Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed. Return the number of elements in nums which are not equal to val.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers — the elements of the array
3. An integer val — the value to remove
    `,
    outputFormat: `
One line per test case: the new length of the array.
    `,
    difficulty: "Easy",
    avgTime: "8 min",
    totalarray: 1,
    totalint: 1,
    complexity: {
      time: "O(n)",
      space: "O(1)",
    },
    qinput: `10
4
3 2 2 3
3
7
0 1 2 2 3 0 4 2
2
5
1 2 3 4 5
10
1
7
7
0

3
1 1 1
1
4
10 20 30 40
50
2
5 5
5
6
1 2 3 4 5 6
0
3
1 2 3
1
`,
    expectedOutput: `
2
5
5
0
0
0
4
0
6
2`,
  },
  {
    id: 36,
    Array: true,
    title: "Missing Ranges",
    description: `Given a sorted integer array nums, where the range of elements is [lower, upper] inclusive, return its missing ranges. A range like [a,b] is represented as "a->b" if a != b and "a" if a == b.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers — the elements of the sorted array
3. An integer lower — the lower bound of the range
4. An integer upper — the upper bound of the range
    `,
    outputFormat: `
One line per test case: space-separated missing ranges. If no ranges, print "NONE".
    `,
    difficulty: "Medium",
    avgTime: "15 min",
    totalarray: 1,
    totalint: 2,
    complexity: {
      time: "O(n)",
      space: "O(1)",
    },
    qinput: `10
4
0 1 3 50 75
0
99
0

0
1
1
0
0
0
10
1 2 3 4 5 6 7 8 9 10
1
10
5
1 5 10 15 20
1
20
3
-5 -2 0
-10
5
3
1 2 3
1
5
4
10 12 15 16
5
20
1
10
10
10
2
-1 1
-2
2
`,
    expectedOutput: `
2 4->49 51->74 76->99
0->0
NONE
NONE
NONE
2->4 6->9 11->14 16->19
-10->-6 -4->-3 -1
4->5
6->9 11 13->14 17->19
NONE
-2`,
  },
  {
    id: 37,
    Array: true,
    title: "Find Duplicate Number",
    description: `Given an array nums containing n + 1 integers where each integer is between 1 and n inclusive. Prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one. You must solve the problem without modifying the array nums and uses only constant extra space.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n_plus_1 — the size of the array (n + 1)
2. n_plus_1 space-separated integers — the elements of the array
    `,
    outputFormat: `
One line per test case: the duplicate number.
    `,
    difficulty: "Hard",
    avgTime: "20 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(1)",
    },
    qinput: `10
5
1 3 4 2 2
4
1 3 4 2
7
3 1 3 4 2 5 3
2
1 1
6
2 5 4 3 1 5
8
1 2 3 4 5 6 7 7
3
2 2 2
4
1 1 1 1
9
1 2 3 4 5 6 7 8 8
5
3 3 3 3 3
`,
    expectedOutput: `
2
3
3
1
5
7
2
1
8
3`,
  },
  {
    id: 38,
    Array: true,
    title: "Sort Colors",
    description: `Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue. We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively. You must solve this problem without using the library's sort function.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers (0, 1, or 2) — the elements of the array
    `,
    outputFormat: `
One line per test case: the sorted array.
    `,
    difficulty: "Medium",
    avgTime: "15 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(1)",
    },
    qinput: `10
6
2 0 2 1 1 0
3
2 0 1
1
0
5
0 0 0 0 0
4
1 1 1 1
7
2 1 0 2 1 0 2
2
0 2
8
2 1 0 1 2 0 1 2
5
1 0 2 0 1
9
0 2 1 2 0 1 2 0 1
`,
    expectedOutput: `
0 0 1 1 2 2
0 1 2
0
0 0 0 0 0
1 1 1 1
0 0 1 1 2 2 2
0 2
0 0 1 1 1 2 2 2
0 0 1 1 2
0 0 0 1 1 1 2 2 2`,
  },
  {
    id: 39,
    Array: true,
    title: "Container With Most Water",
    description: `Given n non-negative integers a1, a2, ..., an where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which, together with x-axis forms a container, such that the container contains the most water. Return the maximum amount of water a container can store. Notice that you may not slant the container.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the number of lines  
2. n space-separated integers — the heights of the lines
    `,
    outputFormat: `
One line per test case: the maximum water that can be contained.
    `,
    difficulty: "Medium",
    avgTime: "20 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(1)",
    },
    qinput: `10
9
1 8 6 2 5 4 8 3 7
2
1 1
7
4 3 2 1 4 5 6
4
1 2 1 3
5
1 5 4 3 2
6
1 2 3 4 5 6
3
3 1 2
4
6 9 3 4
5
10 9 8 7 6
3
1 5 10
4
1 2 3 4 5 6 7 8
`,
    expectedOutput: `
49
1
12
4
8
9
2
9
10
16`,
  },
  {
    id: 40,
    Array: true,
    title: "Find First and Last Position of Element in Sorted Array",
    description: `Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1]. You must write an algorithm with O(log n) runtime complexity.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers — the elements of the sorted array
3. An integer target — the target value
    `,
    outputFormat: `
One line per test case: two space-separated integers — the start and end indices.
    `,
    difficulty: "Medium",
    avgTime: "18 min",
    totalarray: 1,
    totalint: 1,
    complexity: {
      time: "O(log n)",
      space: "O(1)",
    },
    qinput: `10
6
5 7 7 8 8 10
8
6
5 7 7 8 8 10
6
6
5 7 7 8 8 10
9
1
1
0
4
1 2 3 4
5
5
1 1 1 1 1
1
7
1 2 3 4 5 6 7
1
7
1 2 3 4 5 6 7
7
5
10 20 30 30 40
30
2
10 10
10
`,
    expectedOutput: `
3 4
-1 -1
-1 -1
-1 -1
0 0
0 0
6 6
2 3
0 1`,
  },
  {
    id: 41,
    Array: true,
    title: "Find All Duplicates in an Array",
    description: `Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice. You must write an algorithm that runs in O(n) time and uses only constant extra space.`,
    inputFormat: `
The input consists of multiple test cases.

For each test case:
1. An integer n — the size of the array  
2. n space-separated integers — the elements of the array
    `,
    outputFormat: `
One line per test case: space-separated duplicate numbers in any order. If no duplicates, print "NONE".
    `,
    difficulty: "Medium",
    avgTime: "15 min",
    totalarray: 1,
    totalint: 0,
    complexity: {
      time: "O(n)",
      space: "O(1)",
    },
    qinput: `10
8
4 3 2 7 8 2 3 1
7
1 1 2 3 4 5 6
5
1 2 3 4 5
6
1 1 1 1 1 1
4
2 2 2 2
3
1 2 3
9
1 2 3 4 5 6 7 8 1
10
10 1 2 3 4 5 6 7 8 9 10
6
6 5 4 3 2 1
10
1 1 2 2 3 3 4 4 5 5
`,
    expectedOutput: `
2 3
1
NONE
1
2
NONE
1
10
NONE
1 2 3 4 5`,
  },
];
