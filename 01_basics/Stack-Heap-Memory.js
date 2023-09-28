// Stack(Primitive) , Heap (Non-Primitive)

/******************Stack *********************/
// let myName="Simmy" // stack
// let anotherName = myName
// console.log(anotherName); //Simmy
// anotherName = "Piyush"
// console.log(anotherName); //Piyush
// console.log(myName); //Simmy // copy is given that's why og value did not changed



/************* Heap ***********************/

//  variable declared in Stack but values stored  in Heap
let user1=
{
    email: "riya@gmail.com",
    upi : 'user@wer'

}
// variable declared in Stack but values which is stored is a reference(og value) of User1 not copy 
let user2= user1
console.log(user2); // { email: 'riya@gmail.com', upi: 'user@wer' }
user2.upi = "uy@3425"
console.log(user2); // { email: 'riya@gmail.com', upi: 'uy@3425' }
console.log(user1); // { email: 'riya@gmail.com', upi: 'uy@3425' }

