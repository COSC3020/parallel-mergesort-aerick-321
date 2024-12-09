function mergesort(array) {
    if (array.length < 2){
        return array;
    }
    
        for (let size = 1; size <=array.length - 1; size = 2 * size) {
            array = array.map ((_,i) => {
                let left = i * 2 * size;
                if (left >= n) return null;
                let mid = Math.min(left + size - 1, array.length - 1);
                let right = Math.min(left + 2 * size - 1, array.length - 1);
                return merge(array, left, mid, right);
            }).filter(x => x !== null); 
        }  
    return array;
}

function merge(subarr, left, mid, right){
    let top = mid +1;
       subarr.reduce(){
           while(left <= mid && top <= right){
            if (subarr[left] <= subarr[top]){
               left++;
            }
            else{
              let value = subarr[top];
                for(let i = top; i > left; i--){
                    subarr[i] = subarr[i-1];
                }   
                subarr[left] = value;
                left++;
                mid++;
                top++;
            }
        }
    }
}
