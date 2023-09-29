// objects can be declared by two ways :- 1 . as Literal 2. as Constructor 

// when we make object from constructor then it's a singleton object

//Object.create => constructor 

//Object Literals 

/************** interview question *****************/
//  const mySym = Symbol('key1')

// const user = {
//   name : 'loiups', // in system "name"
//   std : 12 , 
//  [ mySym] :"newkey1" //symbol made
// }
// console.log(user.name)
// console.log(user['std'])

// console.log (typeof user[mySym]) //string

// user.name = "popppy" // changing values
// console.log(user.name) //popppy

// Object.freeze(user) // restricted on changing
// user.name = "poy"
// console.log(user.name)
// console.log(user) //{ name: 'loiups', std: 12, [Symbol(key1)]: 'newkey1' }

// user.greeting = function(){
//     console.log('hello js user')
    
// }
// console.log(user.greeting());

// user.greeting2 = function(){
//     console.log(`hello ${this.name}`) //hello loiups
    
// }
// console.log(user.greeting2());

// const tinderUser = {} // object Literal
//Singleton
const tinderUser = new Object()
tinderUser.id = "123er" 
tinderUser.name = "kiggy"

// const user = {
//   email :"pop2gmail.com" ,
//   fullname:{
//     userfullName:{
//     firstname :"loopy" , 
//     lastname : "roy",
//     }
//   }
// }
// console.log(user.fullname?.userfullName.lastname);//roy -- ? = > optional chaining
 
//  const obj1 = {1:'a' , 2:'b'}
//  const obj2 = {1:'c' , 2:'d'}
// const obj = {...obj1 , ...obj2}
// console.log(obj); //{ '1': 'c', '2': 'd' }

// const target =  {a:1 , b:2};
// const source =  {b:4 , c:5};

// const returnedTarget= Object.assign(target , source)// target
// console.log(target);//{ a: 1, b: 4, c: 5 }
// console.log(returnedTarget === target); //true

// const returnedTarget= Object.assign({} , target , source)
// console.log(returnedTarget === target) //false


// database se value aye jab -- Array of Objects
// const users = [
//   {
//     id:1,
//     email: "popy@gmail.com"
//   },
//   {
//     id:2,
//     email: "shopy@gmail.com"
//   }

// ]
// console.log(users[0].email); //popy@gmail.com
// console.log(tinderUser); //{ id: '123er', name: 'kiggy' }

// console.log(Object.keys(tinderUser)); // retuns in a Array => [ 'id', 'name' ]
// console.log(Object.values(tinderUser)); //[ '123er', 'kiggy' ]
// console.log(Object.entries(tinderUser)); // Array ke andar array === makes a array of props(key-value) => [ [ 'id', '123er' ], [ 'name', 'kiggy' ] ]

// console.log(tinderUser.hasOwnProperty('name')); // true ==> checks prop

// when value not exists while doing loop on objects use ?  optional chaining


// De-structure 
// const course = {
//   coursename :'js in hindi',
//   price : '999' ,
//   teacher : "hitesh"
// }
// // course.teacher
// const {coursename , teacher: tchr , price} = course // {props} => props anme should be equal to key
// console.log(tchr); //hitesh


// use in React
// const navbar = ({company})=>{
// console.log(company);//hitesh
// }
// navbar(company = 'hitesh')

