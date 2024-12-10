async function parallelmergesort(array) {
    if (array.length < 2){
        return array;
    }
        for (let size = 1; size <=array.length - 1; size = 2 * size) {
           const mergeprom = [];
            for (let left = 0; left < array.length - 1; left += 2 * size){
               let mid = Math.min(left + size - 1, array.length - 1);
                let right = Math.min(left + 2 * size - 1, array.length - 1);
                mergeprom.push(merge(array, left, mid, right));
            }
           await Promise.all(mergeprom);
        }    
    return array;
}

async function merge(subarr, left, mid, right){
   return new Promise((resolve) => {
      let top = mid +1;
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
       resolve();
    });
}
