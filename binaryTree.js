function node(data, left = null, right = null){
    return{
        data: data,
        left: left,
        right: right
    }
}

function mergeSort(arr){
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

function buildTree(arr){
  const sortedArr = mergeSort(arr);

  function tree(array, start = 0, end = array.length - 1){
    if(start > end) return null;

    const mid = Math.floor((start+end)/2);
    const root = node(array[mid]);
    root.left = tree(array, start, mid-1);
    root.right = tree(array, mid+1, end);

    return root;
  }

  return tree(sortedArr);
}

const insertValue = (value,root) => {
  if(root === null){
    return node(value);
  }

  if(value === root.data) return root;

  if(value > root.data){
    root.right = insertValue(value,root.right);
  }
  else{
    root.left = insertValue(value,root.left);
  }
  return root;
}

const getSuccessor = (curr) => {
  curr = curr.right;
  while (curr !== null && curr.left !== null) {
      curr = curr.left;
  }
  return curr;
}

const deleteValue = (value,root) => {
  if(root === null){
    console.log(root);
    return root;
  }

  if(root.data === value){
    if(root.left === null){
      return root.right;
    }
    else if(root.right === null){
      return root.left;
    }
    else if(root.left === null && root.right === null){
      return null;
    }
    else{
      let succ = getSuccessor(root);
      root.data = succ.data;
      root.right = deleteValue(succ.data,root.right);
    }
    return root;
  }

  if(value > root.data){
    root.right = deleteValue(value,root.right);
  }
  else{
    root.left = deleteValue(value,root.left);
  }
  
  return root;
}

const findValue = (value,root) =>{
  if(root === null){
    return null;
  }
  let item;
  if(root.data === value){
    item = root;
    return item;
  }
  
  if(value > root.data){
    item = findValue(value,root.right);
  }
  else{
    item = findValue(value, root.left);
  }
  return item;
}

const levelOrder = (root,callback = null) =>{
  if(typeof callback !== `function`){
    console.error(`Pass a Valid Callback Function`);
  }  
  if(root === null) return null;
  const arr = [];
  arr.push(root);
  while(arr.length > 0){
    const node = arr.shift();
    callback(node.data);
    if(node.left !== null)arr.push(node.left);
    if(node.right !== null)arr.push(node.right);
  }
}

const preOrder = (root,callback = null) =>{
  if(typeof callback !== `function`){
    console.error(`Pass a Valid Callback Function`);
  }  
  if(root === null) return;
  callback(root.data);
  preOrder(root.left, callback);
  preOrder(root.right, callback);
}

const inOrder = (root,callback = null) =>{
  if(typeof callback !== `function`){
    console.error(`Pass a Valid Callback Function`);
  }  
  if(root === null) return;

  
  inOrder(root.left, callback);
  callback(root.data);
  inOrder(root.right, callback);
}

const postOrder = (root,callback = null) =>{
  if(typeof callback !== `function`){
    console.error(`Pass a Valid Callback Function`);
  }  
  if(root === null) return;

  postOrder(root.left, callback);
  postOrder(root.right, callback);
  callback(root.data);
}

const getHeight = (node,root) =>{
  let item = findValue(node, root);
  function findH(node){
    let num = 0;
    let a = 0;
    let b = 0;
    num++;
    if(node.left !== null){
      a = findH(node.left);
    }
    if(node.right !== null){
      b = findH(node.right);
    }
    if(a > b){
      num+= a;
    }
    else if(b > a){
      num+= b;
    }
    else{
      num+= a;
    }
    return num;

  }
  let num = findH(item);
  num--;
  return num;
}

const getDepth = (node,root) =>{
  if(root === null) return 0;
  let num = 0;
  if(root.data === node) return num;
  num++;
  if(node > root.data){
    num+=getDepth(node, root.right);
  }
  else{
    num+=getDepth(node, root.left)
  }
  return num;
}

const isBalanced = (root) =>{
  let l = getHeight(root.left.data, root.left);
  let r = getHeight(root.right.data, root.right);

  const val = l - r;
  if(val >= -1 && val <= 1){
    return true;
  }
  else{
    return false;
  }
}

const reBalanced = (node) =>{
  const arr = [];
  function buildArr(root){
    if(root === null) return;
    arr.push(root.data);
    buildArr(root.left);
    buildArr(root.right);
  }
  buildArr(node);
  return buildTree(arr);
}


const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
}

//Callback function for traversal
function test(data){
  console.log(data);
};
let ranArr = [];
for(let i =0; i < 100; i++){
  ranArr.push(i);
}

let root = buildTree(ranArr);
console.log(`isBalanced - ${isBalanced(root)}`);
console.log(`Level Order Traversal`);
levelOrder(root,test);
console.log(`Pre Order Traversal`);
preOrder(root,test);
console.log(`In Order Traversal`);
inOrder(root,test);
console.log(`Post Order Traversal`);
postOrder(root,test);
insertValue(107,root);
insertValue(108,root);
insertValue(109,root);
insertValue(110,root);
insertValue(111,root);
insertValue(112,root);
insertValue(113,root);
insertValue(114,root);
insertValue(115,root);
insertValue(116,root);
console.log(`isBalanced - ${isBalanced(root)}`);
root = reBalanced(root);
console.log(`isBalanced - ${isBalanced(root)}`);
console.log(`Level Order Traversal`);
levelOrder(root,test);
console.log(`Pre Order Traversal`);
preOrder(root,test);
console.log(`In Order Traversal`);
inOrder(root,test);
console.log(`Post Order Traversal`);
postOrder(root,test);