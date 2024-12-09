function parallelMergesort(array) {
    let arrsize = array.length;
    if (arrsize < 2){
        return array;
    }
    
        for (let size = 1; size < arrsize - 1; size = 2 * size) {
            array = array
                .map ((_,i) => {
                let left = i * 2 * size;
                if (left >= arrsize) return null;
                let mid = Math.min(left + size - 1, arrsize - 1);
                let right = Math.min(left + 2 * size - 1, arrsize - 1);
                return merge(array.slice(left, mid + 1), array.slice(mid + 1, right + 1));
            })
                .filter(x => x !== null); 
            array = array.reduce((acc, chunk) => acc.concat(chunk), []);
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
