/*********************Numbers**************************** */


// const balance = new Number(800)
// console.log(balance); // [Number: 800]
// console.log(balance.toString()) // string
// console.log(balance.toString().length); // 3

// const score = new Number(800)
// console.log(score.toFixed(2)); //800.00

// let otherNumber = 23.8966
// precision me jyda number do ya equal  number ki length se

// console.log(otherNumber.toPrecision(3)); // 23.9 Returns a string

// otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3)); //124

 
// otherNumber = 1234.36854
// console.log(otherNumber.toPrecision(3)); //1.23e+3

// const num = 30000000
// // console.log(num.toLocaleString()); //30,000,000 based on US std.
// console.log(num.toLocaleString('en-IN')); // 3,00,00,000



/********************* Maths **************************** */
// console.log(Math);
// console.log(Math.abs(-78)); //only +val =>78
// console.log(Math.round(4.8)); // 5
// console.log(Math.ceil(7.2)); //highest val =>8
// console.log(Math.floor(7.9)); // lowest =>7
// console.log(Math.min(7,8,9,459)) //7
// console.log(Math.max(7,8,9,459)) //459

// console.log(Math.random()); // 0-1 -- 1 explicitly
// console.log(Math.random()*10); //0-10
// console.log(Math.floor(Math.random()*10)+1 ); //+1 to avoid 0

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1))+min)
