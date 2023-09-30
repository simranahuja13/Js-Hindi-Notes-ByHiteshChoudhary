// this refers to the current context -- context(kiske bare me hai ) variables kya value store krrha hai

// user = {
//     username: "hitesh",
//     price: 399,


//     welcomeMessage : function(){
//         console.log(` ${this.username}  😍  Welcome to website`);
//         console.log(this);
//     }

//  }

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();
// console.log(this) // Node environment ke andar global this refer krta hai {} browser ke andar this refer krta hai window ke  object ko...


/** In function this gives  undefined data */
// function thisData(){
//     let username = "hitesh"
//     console.log(this) // set like methods
//     console.log(this.username); //undefined
// }
// thisData();

// const chai = function(){ // function expression
//     let username = "hitesh"
//     console.log(this) //method
//     console.log(this.username); //undefined
// }
// chai()

// const chai = () => { // Arrow function 
//     let username = "hitesh"
//     console.log(this); //{}node me browser me method
//     console.log(this.username); //undefined
// }
// chai()


// Arrow function

// const addTwo = (num1, num2) => { // explicit return -- braces me return likhna padega
//     return num1 + num2;
// }

// implicit return
// const addTwo = (num1, num2) =>  num1 + num2;

// const addTwo = (num1, num2) =>  (num1 + num2); // In react

// const addTwo = (num1, num2) => {username:"pop"}; // undefined

// const addTwo = (num1, num2) =>({username:"pop"});  // result => { username: 'pop' }

// console.log(addTwo(3,4));

//const myArray = [7,5,6,7,8]
//myArray.forEach(()=>())