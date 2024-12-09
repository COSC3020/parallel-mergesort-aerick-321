const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const propSortsCorrectly = jsc.property("sorts correctly", "array", async (arr) => {
    const sortedExpected = [...arr].sort((a, b) => a - b);
    const result = await parallelMergesort(arr);
    return JSON.stringify(result) === JSON.stringify(sortedExpected);
});
