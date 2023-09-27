// ----  conversion in  Number ----


// let  score = '34' // typeof String
// let  score = '34aa' // typeof NaN -- special type
// let  score = null // typeof object
// let  score = undefined  // typeof undefined
// console.log(typeof (score)); 

// let valueInNumber = Number(score)
// console.log(typeof (valueInNumber)); // Number

// console.log(valueInNumber); // --null //value - 0
// console.log(valueInNumber); // --undefined //value - NaN

// result
// 33 => number
// "33abc" => NaN
// true => 1 ; false => 0


// --- conversion in Boolean
// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // true

// result
// 1 => true 
// "simmy" => true
// 0 => false 
// "" => false

// --- conversion in string

let someNumber = 33 
let stringNumber = String(someNumber)
console.log(typeof stringNumber); // string
