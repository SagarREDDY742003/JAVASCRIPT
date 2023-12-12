const a = 1234.563;
console.log(a); //1234.563

const b = new Number(100);
console.log(b); //[Number: 100]

console.log(a.toFixed());//1234
console.log(a.toFixed(1));//1234.6

console.log(b.toString());//100

console.log(a.toPrecision(5));//1234.6

const h = 100000000;
console.log(h.toLocaleString());//10,00,00,000



//******* MATHS*********************/

console.log(Math);//Object [Math] {}

console.log(Math.abs(-4));//4 convert negative values to positive

console.log(Math.round(4.6));//5

console.log(Math.ceil(4.5));//5

console.log(Math.floor(4.5));//4

const num = 16;
console.log(Math.sqrt(num));//4

console.log(Math.max(1,2,3,4,5));//5

console.log(Math.min(1,2,3,4));//1

console.log(Math.random());//0.21162942712295552

console.log(Math.random()*10 + 1);//8.018243427491369

console.log(Math.floor(Math.random()*10));//7

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);//14


