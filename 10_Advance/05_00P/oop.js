// Object -- Collection of properties and methods
// to lowerCase()

// parts of OOP
// Object literal 

// --- Constructor Functions ---
// Prototyes
// Classes
// Instances (new, this)

// 4 pillars - Abstraction  , Encapsulation , Inheritance , Polymorphism


// Object literal
// const user = {
//     username : 'user',
//     loginCount: 8,
//     signedIn: true,
//     getUserDetails: function(){
//         // console.log("Got user details");
//         console.log(`username : ${this.username}`);
//         console.log(this); // output {
//     //         username: 'user',
//     //         loginCount: 8,
//     //         signedIn: true,
//     //         getUserDetails: [Function: getUserDetails]
//     //       } /*
//      }
// }
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // window browser me aur node me {}


// const prom1 = new Promise()
// const date = new Date () // constructor function give us allow to make many instances from one object.

// function User(username, loginCount, isLoggedIn) {
//     this.username = username;
//     this.loginCount = loginCount;
//     this.isLoggedIn = isLoggedIn
//     this.greetings = () => {
      
//             console.log(`hi ${username}`)
       
//     }
//     return this // new likhne pe return likhna jaroori ni hai /// implicitly defined

// }
//  const userOne =  User("Shanaya " , 8 , true)
//  const userTwo = User("Riddhi" , 9 ,  false)  // overrides

// const userOne = new User("Shanaya ", 8, true)
// const userTwo = new User("Riddhi", 9, false)
// console.log(userOne)
// console.log(userOne.constructor);  // khud ka hi reference hota hai => [Function: User]
// console.log(userOne instanceof User); // true
// console.log(userTwo);





// 1 . new  keyword likhoge to ek empty object bnta hai jisko instance bolte h
// 2 . constructor function call hota hai new keyword ke karan jo  args ko pack krta hai
// 3. this keyword me inject hota hai sara args
// 4 . function me data mil jata 

