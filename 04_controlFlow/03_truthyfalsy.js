// const userEmail = 'useremail@gmail.com'

// if(userEmail){
//     console.log( userEmail , " loggedin " );
// }
// else{
//     console.log("please fill");
// }

// Truthy => Falsy ko except krke baki sab truthy values hai  => string ke andr  koi value aye to wo truthy value hota hai => "0" , "false" , " " , [] , {} , function(){}
// Falsy => false , 0 , -0 , BigInt (0n)  , ""  , null , undefined  , NaN

// const arr = []
// if(arr.length === 0){
//  console.log("empty");
// }

// const emptyObj = {};
// if(Object.keys(emptyObj).length === 0){
//     console.log("empty");
// }


// false == 0 //true
// false == "" // true
// 0 == "" //true


// Nullish Collaesing Operator ?? : null undefined

//use in database


// let val1 ;
// val1 = 5  ?? 10 // 5
// val1 = null ?? 10 //10
// val1 = undefined ?? 400 // 400
// val1 = null ?? 10 ?? 40 // 10 => null undefined uske bad ka value assign ho jata hai

// console.log(val1);



// Ternary Operators
// condition ? true : false

const iceTeaPrice = 50
iceTeaPrice>=80 ? console.log("more than 80 ") : console.log( "less than 80")
