// console.log("2">1); // string 2 is converted in Number
// console.log(null == 0); // false
// console.log(null>0); // false
// console.log(null>=0); // true
// console.log(null<=0); // true

/* 
the reason is that an equality check == and 
comparison > < >= <= work differently..
comparison  convert null into Number treating as 0 
that's why null > 0 is false null>=0 is true
*/


// console.log(undefined == 0); // false
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false
// console.log(undefined >= 0); // false
// console.log(undefined >= 0); // false

// strict check === => don't changes datatype
// == => changes datatype