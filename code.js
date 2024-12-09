function parallelMergesort(array) {
    let arrsize = array.length;
    if (arrsize < 2){
        return array;
    }
    
        for (let size = 1; size <=arrsize - 1; size = 2 * size) {
            array = array.map ((_,i) => {
                let left = i * 2 * size;
                if (left >= arrsize) return null;
                let mid = Math.min(left + size - 1, arrsize - 1);
                let right = Math.min(left + 2 * size - 1, arrsize - 1);
                return merge(array, left, mid, right);
            }).filter(x => x !== null); 
        }  
    return array;
}

function merge(subarr, left, mid, right){
     let temp = [];
    let i = left, j = mid + 1;

    while (i <= mid && j <= right) {
        if (array[i] <= array[j]) {
            temp.push(array[i++]);
        } else {
            temp.push(array[j++]);
        }
    }

    while (i <= mid) temp.push(array[i++]);
    while (j <= right) temp.push(array[j++]);
    for (let k = 0; k < temp.length; k++) {
        array[left + k] = temp[k];
    }
}
