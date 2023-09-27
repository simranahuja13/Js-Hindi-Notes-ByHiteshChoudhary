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

// let someNumber = 33 
// let stringNumber = String(someNumber)
// console.log(typeof stringNumber); // string

// ********************** OPERATIONS *************************


// console.log(3**2);
// console.log(2/3);

// let str1 = "hi"
// let str2 = " buddy"
// console.log(str1+str2); // hi buddy

// console.log("3" + 2); // 32
// console.log( 3 + "2"); // 32
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); //32
// console.log( (2+3) * 6 % 2);
// console.log(1 + 2 + "2" + 2) ; // 322

// console.log(+true); // 1
// console.log(true+); // Error

console.log(+""); //0

// let num1 , num2 , num3
// num1 = num2 = num3 = 2+2
// console.log(num3);

let gameCounter = 100 

console.log(gameCounter++); //100 (postfix) // usage ke abd increment hoti hai
console.log(gameCounter); //101


// console.log(++gameCounter);  // 101 (prefix) value increment pehle ho jati hai


