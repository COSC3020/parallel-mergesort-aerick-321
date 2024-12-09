const fs = require('fs');
const jsc = require('jsverify');
const async = require('async');  // Add this line to import async

// Load the code (your mergesort implementation)
eval(fs.readFileSync('code.js') + '');

// Test to verify that parallel mergesort produces the same results as the built-in sort
const testSort = jsc.forall("array nat", async function(arr) {
    // Make two copies of the array
    var a1 = JSON.parse(JSON.stringify(arr));
    var a2 = JSON.parse(JSON.stringify(arr));

    // Sort using parallel mergesort
    await parallelMergesort(a1);

    // Sort using built-in JavaScript sort
    a2.sort(function(a, b) { return a - b; });

    // Compare both sorted arrays
    return JSON.stringify(a1) === JSON.stringify(a2);
});

// Assert the test
jsc.assert(testSort);
