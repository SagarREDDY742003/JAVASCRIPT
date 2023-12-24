//1
function addnos(num1,num2){  // pass parameters
    console.log( num1 + num2);//3
}
addnos(1,2) //pass arguments

//2
function addnum(n1,n2){
    res = n1 + n2 ;
    return res;
}
const reasult = addnum(2,3)
console.log(reasult);//5

//3
function addnum(n1,n2){
   return  n1 + n2 ;
}
const reas = addnum(2,3)
console.log(reas);//5

//4
function usermsg(uname){
    return `${uname} just logged in`
}
console.log(usermsg("sagar"));//sagar just logged in
console.log(usermsg(""));//just logged in
console.log(usermsg());//undefined just logged in


function umsg(uname){
    if(!uname){
        console.log("please enter user name");
        return
    }
    return `${uname} just logged in`;
}
console.log(umsg());
//please enter user name
//undefined


function umsg(uname = "sam"){
    if(!uname){
        console.log("please enter user name");
        return
    }
    return `${uname} just logged in`;
}
console.log(umsg());//sam just logged in
console.log(umsg("reddy"));//reddy just logged in

////////////functions with objects///////////////////////////

//conversion of input values into array
function calcprice(...p1){
    return p1
}
console.log(calcprice(2,3,4,5));//[ 2, 3, 4, 5 ]

//adding unknown number of values
function calprice(...p1){
    let sum = 0;
    for (let i = 0; i < p1.length; i++) {
       sum = sum + p1[i];
    }
    return sum;
}
console.log(calprice(2,3,4,5));//14

function calc(v1,v2,...n){
    return n;
}
console.log(calc(100,200,300,400,500));//[ 300, 400, 500 ]

// passing of objects into function /////////////////////////////

const person = {
    name: "sagar",
    price: 299
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
}
handleObject(person);//username is sagar and price is 299
//      OR
handleObject({
    name: "reddy",
    price: 199
});//username is reddy and price is 199


// passing of arrays into function ///////////////////////////////////////

const myArray = [100,200,300,400]
function returnSecondValue(getArray){
    return getArray[1];

}
console.log(returnSecondValue(myArray));//200


///////////////////// THIS/////////////////////////////////////////////////////////////

//This will work in the objects
// This will not work in the functions
const user = {
    name:"sagar",
    price:999,
    msg: function(){
        console.log(`${this.name}, welcome to website`);
        console.log(this);//{ name: 'sagar', price: 999, msg: [Function: msg] }
    }
}
user.msg();//sagar, welcome to website
console.log(this);//{}
user.name = 'reddy';
user.msg();//reddy, welcome to website

function chai(){
    let name = 'sagar'
    console.log(this.name);//undefined
}
chai()

//////////////////////ARROW FUNCTIONS////////////////////////////////////////////////////////////////////////////////

const bubble = () => {
    console.log(this);//{}
}

bubble()

// const addTwo = (n1,n2) => {
//     return n1 + n2 
// }
// console.log(addTwo(1,2));//3

           //or//

// const addTwo = (n1,n2) => n1 + n2 
// console.log(addTwo(1,2));//3

           //or//

// const addTwo = (n1,n2) => (n1 + n2) 
// console.log(addTwo(1,2));//3


const addTwo = (n1,n2) => ({usname:'vidya'}) 
console.log(addTwo(1,2))//{ usname: 'vidya' }


////////// immediately invoked function////////////////////////////

//this method is used to reduce the pollution created by global scope variables 
(function sag(){
    console.log(`DB CONNECTED`);
})();

( () => {
    console.log(`DB CONNECTED TWO`);
} )();