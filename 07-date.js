let myDate = new Date();
console.log(myDate);
//2023-12-12T16:12:41.700Z

console.log(myDate.toString());
//Tue Dec 12 2023 21:44:07 GMT+0530 (India Standard Time)

console.log(myDate.toISOString());
//2023-12-12T16:14:07.186Z

console.log(myDate.toUTCString());
//Tue, 12 Dec 2023 16:14:07 GMT

console.log(myDate.toDateString());
//Tue Dec 12 2023

console.log(myDate.toLocaleString());
// 12/12/2023, 9:45:40 pm

console.log(myDate.toLocaleDateString());
// 12/12/2023

console.log(typeof myDate);
//object

let mycreateddate = new Date(2023,0,23);
console.log(mycreateddate.toDateString());
//Mon Jan 23 2023

let mycdate = new Date(2023,0,23,5,3);
console.log(mycdate.toLocaleString());
// 23/1/2023, 5:03:00 am

let mydate = new Date("01-14-2023");
console.log(mydate.toLocaleString());
//14/1/2023, 12:00:00 am

let mytime = Date.now();
console.log(mytime);
//1702398167940
console.log(mycdate.getTime());
//1674430380000

console.log(Math.floor(Date.now()/1000));
//1702398310

let newdate = new Date();
console.log(newdate);
//2023-12-12T16:25:58.128Z
console.log(newdate.getMonth());
//11

newdate.toLocaleString('default', {
    weekday:"long"
})