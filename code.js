function parallelMergesort(array) {
    let arrsize = array.length;
    if (arrsize < 2){
        return array;
    }
    
        for (let size = 1; size < arrsize - 1; size = 2 * size) {
            array = array
                .reduce((acc, _, i) => {
                let leftStart = i * 2 * size;
                let rightStart = leftStart + size;

                if (leftStart >= arrsize) {
                    // No more merges left, just push the remaining values
                    acc.push(array.slice(leftStart));
                } else {
                    let leftEnd = Math.min(leftStart + size, arrsize);
                    let rightEnd = Math.min(rightStart + size, arrsize);
                    acc.push(merge(array.slice(leftStart, leftEnd), array.slice(leftEnd, rightEnd)));
                }

                return acc;
            }, [])
            .reduce((acc, chunk) => acc.concat(chunk), []);
        }  
    return array;
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
