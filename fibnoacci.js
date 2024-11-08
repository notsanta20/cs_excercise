//Fibonacci Sequence using iteration
const fibs = function(x){
    let arr = [];
    for(let i = 0; i < x; i++){
        if(i === 0 ){
            arr.push(0);
        }
        else if(i === 1){
            arr.push(1);
        }
        else{
            let tempNum = (arr[i - 1]) + (arr[i - 2]);
            arr.push(tempNum);
        }
    }
    return arr;
}

//Fibonacci Sequence using Recursion
const fibsRec = function(y){
    let arr = [];
    function rec(z){
        if(z === 1)return 0;
        if(z === 2)return 1;
        else return rec(z-1) + rec(z-2);
    }
    for(let m = 1; m <= y; m++){
        arr.push(rec(m))
    }
    return arr;
}