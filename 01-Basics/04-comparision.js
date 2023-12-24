console.log("2" > 1);//true
console.log("02" > 1);//true
//it will convert string to a number

console.log(null > 0);//false
console.log(null < 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true
console.log(null <= 0);//true
// the reason behind this is that equality check == and comparisions > < >= <= work differently
//comparision convert null to a number, treated as 0

console.log(undefined > 0);//false
console.log(undefined >= 0);//false
console.log(undefined == 0);//false

//=== strict check
console.log('2' === 2);//false
//it willnot convert string to a number