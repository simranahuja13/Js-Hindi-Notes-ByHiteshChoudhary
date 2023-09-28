/*    

Difference is based on how data is stored in memory and how data is accessed...    

  1. Primitive (Call by Value / Immutable) --  Reference not given directly copy is given )  => 7 types ---- 1. String 2.Number 3.Boolean 4.Null 5.Undefined 6.Symbol 7.BigInt
                                                         
  

  2. Non Primitive/Reference type (Call by Reference / Mutable)-- Reference  given directly 1. Array 2.Objects 3.Functions

  Dynamically Typed js


*/
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId); // false