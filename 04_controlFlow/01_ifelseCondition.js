//  control flow / logic flow

//if



// if(condition will have to be true always){
//    /// logic///
// }

//  else(condition will have to be false always){

//  }

// const isUserLoggedIn = true;
// if(isUserLoggedIn){
//     console.log("hi  logged in user");
// }

// comparison == > , < , >= , <= , == , != (not equal to),  === , !==
// 2<=2
// 3!=2 true

// const temperature = 41
// if(temperature<50){
//     console.log("less than 50");
// }
// else{
//     console.log("greater than 50");
// }

// const score = 40
// if(score > 100){
//     const power = "fly"
//     console.log( `power : ${power}`);
// }
// // console.log( `power : ${power}`); // ReferenceError: power is not defined


// shorthand notation

const bal = 100 
// // implicit scope for only one line
// if(bal > 500) console.log("test"), 
// console.log("test2"); // unreadable code

// if(bal < 500){
//     console.log("less than 500");
// }else if (bal < 750){
//     console.log("less than 750");
// }else if (bal < 900 ){
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }

// Real world example

const userLoggedIn = true
const debitCard = true

// if(userLoggedIn && debitCard ) {
//     console.log("Allow to buy course");
// }


// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log("Woahh !! user logged in");
// }

