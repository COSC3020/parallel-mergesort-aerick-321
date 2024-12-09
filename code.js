function parallelMergesort(array) {
   if (array.length <= 1) {
        return Promise.resolve(array);
    }

    const mid = Math.floor(array.length / 2);
    const left = array.slice(0, mid);
    const right = array.slice(mid);

    return Promise.all([
        parallelMergesort(left),
        parallelMergesort(right)
    ]).then(([leftSorted, rightSorted]) => {
        return merge(leftSorted, rightSorted);
    });
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}
