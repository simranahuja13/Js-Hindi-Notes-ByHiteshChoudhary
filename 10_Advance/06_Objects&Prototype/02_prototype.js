let myName = "hitesh     "
// let myChannel = "chai     "


// console.log(myName.trim().length); // 6
// console.log(myName.truelength);
// myName.prototype

// let myHeros = ['shakti' , 'spider']

// let heroPower = {
//     'shakti' : 'fly' ,
//     'spider' : 'sling' , 

//     getSpiderPower: function(){
//  console.log(`spidy power is ${this.spider}`);
//     }

// }

// Object.create // called as factory/bydefault function
// Object.prototype.hitesh = function(){
//     console.log(`Hitesh is present in all objects`);
// }

// Array.prototype.heyHitesh  = function(){
//     console.log(`Hi from Hitesh `);
// }
// heroPower.hitesh();
// myHeros.hitesh();
// myName.hitesh();

// myHeros.heyHitesh();
// heroPower.heyHitesh();

// inheritance

// const User = {
// name :'John',
// email : 'john@example.com'
// }

// const Teacher = {
//     makeVideo: true,

// }
// const TeachingSupport = {
//     isAvailable: false
// }
// const TASupport = {
//     makeAssignment: 'JS assignment',
//     fullTime: true,
//     __proto__: TeachingSupport // ye le rha h prop TeachingSupport se 
// }

// Teacher.__proto__ = User

//  // modern syntax
//  Object.setPrototypeOf(TeachingSupport , Teacher ) // TeachingSupport lega Teacher se

let anotherUsername = "ChaiAurCode     "
String.prototype.trueLength = function () {
    console.log(`${this}`); // value aayega => ChaiAurCode 
    console.log(`True length is: ${this.trim().length}`); // => 11
}
anotherUsername.trueLength();
//   console.log(myName.trueLength());
myName.trueLength();
"honey   ".trueLength();