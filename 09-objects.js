// Singleton

// object literals
//an object is a key value pairs

const mysym = Symbol("key1")

const user = {
    name: "sagar",
    "full name": "vidya sagar reddy",
    [mysym]: "mykey1",
    age: 20,
    location: "chennai",
    mail: "sagar@gmail.com",
    lastLoginDays: ["monday","wednesday"]
}

console.log(user.age);//20
console.log(user["age"]);//20
console.log(user["full name"]);//vidya sagar reddy
console.log(user[mysym]);//mykey1

user.mail = "vidya@gmail.com";
console.log(user);
/* {
  name: 'sagar',
  'full name': 'vidya sagar reddy',
  age: 20,
  location: 'chennai',
  mail: 'vidya@gmail.com',
  lastLoginDays: [ 'monday', 'wednesday' ],
  [Symbol(key1)]: 'mykey1'
} */

// Object.freeze(user);
user.mail = "reddy@gmail.com";
console.log(user);
/* {
  name: 'sagar',
  'full name': 'vidya sagar reddy',
  age: 20,
  location: 'chennai',
  mail: 'vidya@gmail.com',
  lastLoginDays: [ 'monday', 'wednesday' ],
  [Symbol(key1)]: 'mykey1'
} */

user.greeting = function(){
    console.log("Hello JS user");
}
console.log(user.greeting);// [Function (anonymous)]
console.log(user.greeting());
//Hello JS user
//undefined

user.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`);
}
console.log(user.greetingTwo);// [Function (anonymous)]
console.log(user.greetingTwo());
//Hello JS user sagar
//undefined