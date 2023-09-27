
const accountId = 144533
let accountEmail = "simran@gmail.com"
var accountPassword = "12345"
accountCity ="Gaya"
let accountState; //not initialised ~~ undefined

// Notes in Comments
/*
Prefer not to use-- 
Var coz of issue in Block scope & Functional scope
*/


// accountId = 123 //not allowed
 accountEmail ="s@gmail.com"
accountPassword ="456"
accountCity ="BodhGaya"
console.log(accountId);
console.table([accountId , accountEmail , accountPassword , accountCity , accountState])
