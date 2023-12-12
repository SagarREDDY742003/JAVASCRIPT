//STRING - key value pairs

const a = "Hello";
const b = "sagar";

console.log(`${a} ${b} how are you.`); //Hello sagar how are you.

const gname = new String('Sagar reddy');

console.log(gname); //[String: 'Sagar reddy']
console.log(gname[0]); //S
console.log(gname.__proto__); //{}
console.log(gname.length); // 5
console.log(gname.toLocaleLowerCase());//sagar
console.log(gname.toUpperCase());//SAGAR REDDY
console.log(gname.charAt(3)); // a
console.log(gname.indexOf('g'));//2
console.log(gname.slice(1,4));//aga
console.log(gname.slice(-8,8));//ar re

const newstr = gname.substring(0,4);
console.log(newstr);//Saga

const str1 = "   sagar     "
console.log(str1)//   sagar     
console.log(str1.trim())//sagar     remove starting and ending spaces

const url = "https//sagae.com/sagar%20reddy"
console.log(url.replace('%20','-'));// https//sagae.com/sagar-reddy
console.log(url.includes("sagar")); //true

const str2 = "vidya-sagar-reddy"
console.log(str2.split('-'));//[ 'vidya', 'sagar', 'reddy' ]
console.log(str2.concat("-pothireddy"));//vidya-sagar-reddy-pothireddy

