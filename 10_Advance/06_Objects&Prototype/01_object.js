const newHero = ['shaktiman' , 'hulk']
console.log(newHero);

// arrow fun ke andr this keyword ni milta hai 
function mulBy5(num){
    this.num = num;
 return num*5
}
mulBy5.power = 2

console.log(mulBy5(3));
console.log(mulBy5.power);
console.log(mulBy5.prototype); //{}

  // prototype me methods ke sath sath internal props + this ka context bhi hote hai

function createUser(username , score){ // constuctor function
   this.username = username
   this.score = score

}
createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`);
}
const userOne = new createUser("viddhi" , 34);
const userTwo = new createUser("ridhi" , 64);
console.log(userOne);

 console.log(createUser.prototype); // { increment: [Function (anonymous)], printMe: [Function (anonymous)] }
 // additional properties btane k kaam new keyword btata h 

 console.log( userOne.printMe()); // Score is 34

 
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.
=> userOne is created

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.
=> ( userOne.printMe())

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
=> new createUser("viddhi" , 34)

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/