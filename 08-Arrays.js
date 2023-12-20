//array is a collection of items
// js arrays can be resizable
const myarr1 = [0,1,2,3,4,5];
console.log(myarr1);//[ 0, 1, 2, 3, 4, 5 ]

const myarr2 = ['ironman','thor','hulk'];

const myarr3 = new Array(6,7,8,9);

// methods

myarr1.push(6);
console.log(myarr1);//[ 0, 1, 2, 3, 4, 5 ,6]

myarr1.pop();
console.log(myarr1);//[ 0, 1, 2, 3, 4, 5 ]

myarr1.unshift(9);
console.log(myarr1);//[ 9, 0, 1, 2, 3, 4, 5]

myarr1.shift();
console.log(myarr1);//[ 0, 1, 2, 3, 4, 5]

console.log(myarr1.includes(9));//false

console.log(myarr1.indexOf(9));//-1

const newarr = myarr1.join();//join will combine array items and convert it into string with comma seperated
console.log(newarr);// 0,1,2,3,4,5

//////////////////slice///////////////////////
const myarr = [0,1,2,3,4,5]
console.log(myarr);//[ 0, 1, 2, 3, 4, 5 ]
const myn1 = myarr.slice(1,3);
console.log(myn1);//[ 1, 2 ]

//////////////////splice///////////////////////
const mysplice = [0,1,2,3,4,5]
console.log(mysplice);//[ 0, 1, 2, 3, 4, 5 ]
const myn2 = mysplice.splice(1,3);
console.log(myn2);//[ 1, 2, 3 ]
console.log(mysplice);//[ 0, 4, 5 ]

///////////////////////////////////////////////////////////////////
const marvel = ['ironman','thor','hulk'];
const dc = ['flash','batman','superman'];

marvel.push(dc);
console.log(marvel);//[ 'ironman', 'thor', 'hulk', [ 'flash', 'batman', 'superman' ] ]
console.log(marvel[3]);//[ 'flash', 'batman', 'superman' ]
console.log(marvel[3][1]);//batman

const heros = marvel.concat(dc);
console.log(heros);//[ 'ironman', 'thor', 'hulk', 'flash', 'batman', 'superman' ]

// spread operator
const all_heros = [...marvel, ...dc]
console.log(all_heros);//[ 'ironman', 'thor', 'hulk', 'flash', 'batman', 'superman' ]

const arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const arr1 = arr.flat();
console.log(arr1);//[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 4, 5 ] ]
const arr2 = arr.flat(Infinity);
console.log(arr2);//[ 1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("sagar"));//false

console.log(Array.from("sagar"));//[ 's', 'a', 'g', 'a', 'r' ]
console.log(Array.from({name: "sagar"}));//[]

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ]