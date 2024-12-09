const fs = require('fs');
const jsc = require('jsverify');
eval(fs.readFileSync('code.js'));

// Modify test to check parallel merge sort
const testParallelSort = jsc.forall("array nat", function(arr) {
    var original = JSON.parse(JSON.stringify(arr)); // Deep copy for fairness
    var sortedByParallel = parallelMergesort(original); // Parallel version result
    var sortedByStandard = original.slice().sort((a, b) => a - b); // Native sort
    return JSON.stringify(sortedByParallel) === JSON.stringify(sortedByStandard);
});

// Assert the correctness of the parallel merge sort
jsc.assert(testParallelSort);
