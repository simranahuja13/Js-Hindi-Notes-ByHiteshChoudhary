/*
 execution Context - how js run and execute the files

   1 . Global EC   => sbse phle bnta hai => this variable  m Global EC ko rkh diya jata h 
  browser me alg hota => (window object) hai GEC and node js me alg => {}
 2. Functional EC
 3. Eval Execution Context -- used in mongoose => property of global object

 while running js code run in 2 phases:

 1. Memory Creation Phase or Creation Phase => variable ya jo bhi declare hua hai unko jgh allocate hoti hai.. 

 2. Execution Phase => operations done like :  + - 


Code 

let val1 = 10 
let val2 = 4 
function addNum (num1 , num2 ){
    let total = num1 + num2
    return total
}
let res1 = addNum(val1, val2)
let res2 = addNum(5,4)



step1 => GEC or Global environment - this ke andar allocated

first cycle
step2 => memory phase - sare variables ko ikkhatta krdiya jata and value ==== undefined   rkh diya jata hai 

val1= undefined
val2= undefined
addNum = fun definition addNum ke bad se
res1 => undefined
res2 => undefined

 2 phase -- execution phase
step 3 => 
 val1= 10
 val2 = 4
 addNum = kuch nahhi
 res1 = addNum == function hai abhi -- jitni bar fun execute hote hai -- utni bar creates new EC create hota h => usme new Variable environment made + execution thread hota h =>function def(addNum)
  fr se 2 phase hoga  // Global EC ni create hoga qki wo ek br hi hota h bs  

  1. MCP
 val1 - undefined
 val2 - undefined
 total - undefined

 2.EC
 num1 = 10
 num2 = 4
 total  = 14
 return total in Global EC or in Parent EC 
 Delete after execution...
 res1 = 15

 */


