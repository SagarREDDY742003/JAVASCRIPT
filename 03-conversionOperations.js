// Conversion to number ------------------------

let score = 123;
console.log(typeof(score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);//number

let a = "123aaa";
let aa = Number(a);
console.log(typeof aa);//number
console.log(aa)//nan

let b = null;
let bb = Number(b);
console.log(typeof bb);//number
console.log(bb)//0

let c = undefined;
let cc = Number(c);
console.log(typeof cc);//number
console.log(cc)//nan

let d = true;
let dd = Number(d);
console.log(typeof dd);//number
console.log(dd)//1

let e = undefined;
let ee = Number(e);
console.log(typeof ee);//number
console.log(ee)//nan

let f = "sagar";
let ff = Number(f);
console.log(typeof ff);//number
console.log(ff)//nan

//"333" => 333
//"33adc" => nan
//true => 1; false => 0

// Conversion to BOOLEAN---------------------------------

let ab = 1;
let bc = Boolean(ab);
console.log(bc);//true

let empty = "";
let emptytobool = Boolean(empty);
console.log(emptytobool);//false

let nonempty = "sagar";
let nonemptytobool = Boolean(nonempty);
console.log(nonemptytobool);//true

//1 => true
//0 => false
//"" => false
//"jags" => true

// Conversion to string---------------------------

let num = 33
let strnum = String(num);
console.log(strnum); //33
console.log(typeof strnum); //string

//*****OPERATIONS**********/

let val = 3;
let negval = -val;
console.log(negval); //-3

console.log('1'+2);//12 type = string
console.log(1+'2');//12 type = string
console.log('1'+'2');//12 type = string
console.log('1' + 2 + 2);//122 type = string
console.log(1 + 2 + '2');//32 type = string
console.log(+true);//1
console.log(-true);//-1
console.log(+false);//0
console.log(-false);//-0
console.log(+"");//0

let num1 = 3;
const num2 = num1++;
console.log([num1,num2]);//4,3

let n1 = 3;
const n2 = ++n1;
console.log([n1,n2]);//4,4