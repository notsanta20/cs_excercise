//MergeSort
const mergeSort = function(arr){
    if(arr.length  === 1) return arr;
    while(arr.length > 1){
        let mid = arr.length / 2;
        let arrL = arr.slice(0,mid);
        let arrR = arr.slice(mid);
        return merge(mergeSort(arrL), mergeSort(arrR));
    }

    function merge(left, right){
        let i = 0;
        let j = 0;
        let m = left.length;
        let n =  right.length;
        let newArr = [];

        while(i < m && j < n){
            if(left[i] < right[j]){
                newArr.push(left[i++]);
            }
            else{
                newArr.push(right[j++]);
            }
        }
        for(; i < m; i++){
            newArr.push(left[i]);
        }
        for(; j < n; j++){
            newArr.push(right[j]);
        }
        return newArr;
    }
}

