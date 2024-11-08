import { LinkedList } from "./linkedList.js";
import { HashMap } from "./hashMap.js";

const n = new LinkedList();

n.prepend(100);
n.append(200);
n.append(300);
n.append(500);
n.append(600);

n.insertAt(400, 3);
n.toString(); // print ( 100 ) - > ( 200 ) - > ( 300 ) - > ( 400 ) - > ( 500 ) - > ( 600 ) - > null

console.log(``);
console.log(`-----------------------------------------------------------------------`);
console.log(``);

const m = new HashMap;

m.set('apple', 'red');
m.set('banana', 'yellow');
m.set('carrot', 'orange');
m.set('dog', 'brown');
m.set('elephant', 'gray');
m.set('frog', 'green');
m.set('grape', 'purple');
m.set('hat', 'black');
m.set('ice cream', 'white');
m.set('jacket', 'blue');
m.set('kite', 'pink');
m.set('lion', 'golden');
m.set('moon', 'silver');

m.entries(); //['apple', 'red'], ['banana', 'yellow']...]

console.log(``);
console.log(`-----------------------------------------------------------------------`);
console.log(``);

