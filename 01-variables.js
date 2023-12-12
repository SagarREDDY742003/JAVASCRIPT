const accId = 15276;
//once declared and initialized the values cannot be changed and redeclared
let accEmail = 'sagar@gmail.com';
//once declared and initialized the values can be changed
var accPass = "12345678"; 
//because of issue in block scope and function scope var is avoided
accCity = "chennai";

let accState;
//if variable is declared and not initialized then its value will be UNDEFINED

// accId = 2; //not allowed

accEmail = 'yy@gmail.com';
accPass = "54647474";
accCity = "mumbai";

console.table([accId,accEmail,accPass,accCity,accState])