

// +++++++++++++++++ INTERVIEW QUESTION ++++++++++++++++++++++++ 
// const Math = {
//     valueofPI :  3.14
// }

// console.log(Object.getOwnPropertyDescriptor(Math ,'valueofPI'))// => PI  => key/ prop


//  Object.defineProperty(Math , 'valueofPI',{
//     writable: true ,
//     // enumerable : false
//  })

//  console.log(Object.getOwnPropertyDescriptor(Math ,'valueofPI'))// => PI  => key/ prop

// Math.valueofPI = 5
//  for(let[key, val] of Object.entries(Math)){[
//  console.log(`${key} : ${val}`)
//  ]} 
 //////////////////////////////////////////////////////////////////////////////

const valueOfPi = 3.14
valueOfPi = 5
console.log(valueOfPi); // TypeError: Assignment to constant variable.



//   =>output {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }


// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); // => can't be overriden

// const chai = {
//     name: 'ginger chai',
//     price: 250,
//     isAvailable: true,

//     orderChai: function(){
//         console.log("chai nhi bni");
//     }
// }
// console.log(chai);
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai , 'name'  , {
//     // writable: false, 
//     enumerable: false, //  making not iterable
//     // enumerable: true, 
// })


// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// // for(let[key, val] of chai){[
// //  console.log(`${key} : ${val}`);
// // ]} // not iterable 


// for(let[key, value] of Object.entries(chai)){
//     if (typeof value !== 'function') {
//       console.log(`${key} : ${value}`);
//     }
//    }


