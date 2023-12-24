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

//////////////////// Singleton///////////////////////////////////

/*   DECLERATION

const tinder = new Object();
console.log(tinder);//{}

       or

const tinder = {};
console.log(tinder);//{}

*/

const tinder = {};
tinder.id = "123";
tinder.name = "sagar";
tinder.age = 20;

console.log(tinder);console.log(tinder);//{ id: '123', name: 'sagar', age: 20 }
console.log(Object.keys(tinder));//[ 'id', 'name', 'age' ]
console.log(Object.values(tinder));//[ '123', 'sagar', 20 ]
console.log(Object.entries(tinder));//[ [ 'id', '123' ], [ 'name', 'sagar' ], [ 'age', 20 ] ]
console.log(tinder.hasOwnProperty('id'));//true


const insta = {
  email: "sagar@gmail.com",
  fullname: {
    userfullname:{
      firstname: "sagar",
      lastname: "reddy"
    }
  }
}
console.log(insta.email);//sagar@gmail.com
console.log(insta['email']);//sagar@gmail.com
console.log(insta.fullname);//{ userfullname: { firstname: 'sagar', lastname: 'reddy' } }
console.log(insta.fullname.userfullname);//{ firstname: 'sagar', lastname: 'reddy' }
console.log(insta.fullname.userfullname.firstname);//sagar

// Adding of two objects
//4 is the best solution
const obj1 = {
  1:"a",
  2: "b"
}
const obj2 = {
  3: "c",
  4: "d"
}

//1 this method is not accepted/good
const obj3 = {obj1,obj2};
console.log(obj3);// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

//2 all the content in the obj2 will copy to obj1
const obj4 = Object.assign(obj1,obj2);
console.log(obj4);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj1);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//3 all the content in the obj1 and obj2 will be copied to {}
const obj5 = Object.assign({},obj1,obj2);
console.log(obj5);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//4 spread operator
const obj6 = {...obj1,...obj2};
console.log(obj6);//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//5 
const users = [
  {
    id: 1,
    email: "sagar@gmail.com"
  },
  {
    id: 2,
    email: "vidya@gmail.com"
  }
]
console.log(users[0].email);//sagar@gmail.com
console.log(users[1].email);//vidya@gmail.com


//////////////////////////////////////////////////////////////////////////////////////////

///////DESTRUCTERING///////

const course = {
  name: "js",
  price: 99,
  instructor: "Hitesh"
}
console.log(course.instructor);//Hitesh
console.log(course['instructor']);//Hitesh

const {instructor} = course
console.log(instructor);//Hitesh

const {instructor: a} = course
console.log(a);//Hitesh



