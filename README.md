# Parallel Mergesort

Implement a parallel version of mergesort (both the original recursive and the
iterative in-place version from a previous exercise are fine). You may use any
parallelization framework or method.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the span of the parallel program, in terms of worst-case $\Theta$? Hint:
It may help to consider the DAG of the parallel program.

The worst case for work is in O(nlogn) because it is similar to my other mergesort but the merge function takes place in parallel so it only runs at O(n) instead of O(n^2).
The span is also O(nlogn) because parallelizing the merge of the subarrays is O(n) and the contantly spliting the arrays into two has a depth of O(logn).

Used the test code from https://github.com/COSC3020/parallel-mergesort-Hrics12-1/blob/main/code.test.js. Used this https://www.geeksforgeeks.org/async-await-function-in-javascript/ learning more about aync functions. And used my mergresort as a base. “I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.”
