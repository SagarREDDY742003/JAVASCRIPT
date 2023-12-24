// for
let myarr = ["sagar","basha","sushanth"];
console.log(myarr.length);
for (let i = 0; i < myarr.length; i++) {
    const element = myarr[i];
    console.log(element);
}
/*
3
sagar
basha
sushanth
*/

const arr = [1,2,3,4,5,6]
for ( const num of arr){
    console.log(num);
}

// Maps 
//map is an object and it holds key value
const map = new Map();
map.set('IN', "India");
map.set('IN', "India");
map.set('FR', "France");
map.set('USA', "United States Of America");
console.log(map);
/*
Map(3) {
  'IN' => 'India',
  'FR' => 'France',
  'USA' => 'United States Of America'
}
*/
for (const key of map){
    console.log(key);
}
/*
[ 'IN', 'India' ]
[ 'FR', 'France' ]
[ 'USA', 'United States Of America' ]
*/
for (const [key, value] of map){
    console.log(key, ':-', value);
}
/*
IN :- India
FR :- France
USA :- United States Of America
*/

//////////////////////////////////////////////////
const myobj = {
    js: 'javascript',
    cpp:'C++',
    rb:'ruby',
    swift:'swift by apple'

}
for (const key in myobj) {
    console.log(key);
}
/*
js
cpp
rb
swift
*/
for (const key in myobj) {
    console.log(myobj[key]);
}
/*
javascript
C++
ruby
swift by apple
*/
for (const key in myobj) {
    console.log(`${key} shortcut is for ${myobj[key]}`);
}
/*
js shortcut is for javascript
cpp shortcut is for C++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/

const prog = ["js","rb","py","java","cpp"];
for (const key in prog) {
    console.log(key);
}
/*
0
1
2
3
4
*/
for (const key in prog) {
    console.log(prog[key]);
}
/*
js
rb
py
java
cpp
*/

///////////////////////////////////////////////////////////////
const coading = ["js", "c", "c++", "python", "java"]
coading.forEach( (item) => {
    console.log(item);
});
/*
js
c
c++
python
java
*/
function printMe(item){
    console.log(item);
}
coading.forEach(printMe);
/*
js
c
c++
python
java
*/

coading.forEach( (item, index, arr) => {
    console.log(item, index, arr);
});
/*
js 0 [ 'js', 'c', 'c++', 'python', 'java' ]
c 1 [ 'js', 'c', 'c++', 'python', 'java' ]
c++ 2 [ 'js', 'c', 'c++', 'python', 'java' ]
python 3 [ 'js', 'c', 'c++', 'python', 'java' ]
java 4 [ 'js', 'c', 'c++', 'python', 'java' ]
*/

const mycod = [
    {
        id:2,
        name:"sagar"
    },
    {
        id:2,
        name:"basha"
    },
    {
        id:3,
        name:"chiru"
    }
]

mycod.forEach( (item) => {
    console.log(item.name);
})

///////////////////////////////////////////////////////////////
const coad = ["js", "c", "c++", "python", "java"];

const values = coad.forEach( (item) => {
    console.log(item);
    return item;
})
/*
js
c
c++
python
java
*/
console.log(values);//undefined

const numb = [1,2,3,4,5,6,7]

let newnum = numb.filter( (n) => {
    return n > 5;
} );
console.log(newnum);//[ 6, 7 ]


const newnums = [];
numb.forEach( (num) => {
    if(num > 4){
        newnums.push(num);
    }
})
console.log(newnums);//[ 5, 6, 7 ]

//////////////////////////////////////////////////////////////////

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === 'History');
console.log(userBooks);
/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
*/

userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
});
console.log(userBooks);
/*
[
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  }
]
*/

//////////////////////////////////////////////////////////////

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumers.map( (num) => { return num + 10});
console.log(newNums);
/*
[
  11, 12, 13, 14, 15,
  16, 17, 18, 19, 20
]
*/

const newNum = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNum);
/*
[
  41, 51,  61, 71,
  81, 91, 101
]
*/


/////////////////////////////////////////////////////////////////

const myNums = [1, 2, 3]

const mytotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
console.log(mytotal);
/*
acc: 0 and currval: 1
acc: 1 and currval: 2
acc: 3 and currval: 3
6
*/

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)
console.log(myTotal);//6


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);//22996