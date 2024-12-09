function parallelMergesort(array) {
   if (arr.length <= 1) {
        return Promise.resolve(arr);
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return Promise.all([
        parallelMergeSort(left),
        parallelMergeSort(right)
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
