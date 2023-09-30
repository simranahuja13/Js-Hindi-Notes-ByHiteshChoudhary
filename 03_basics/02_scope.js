// // var c = 300 //--Global Scope is different in Node and Browser
// let a = 4

// if (true) {
//     let a = 10 //Block Scope 
//     const b = 40 //Block Scope 
//     var c = 9 //Function Scope 
//     console.log("Inner Scope : " , a);
// }
// console.log(a);
// console.log(b);
// console.log(c);

/**************Nested Scoping************/

//child fuction parent function ke variables ko access kar sakta hai---

// function one (){
//     const username = "hitesh"
//     function two(){
//        const website = 'youtube' 
//        console.log(username);
//     }
//     // console.log(website);
//     two();
// }
// one();


// if(true){
//     const username = "hitesh"
//     if(username === "hitesh"){
//         const website = 'youtube'
//         console.log(username + " " + website);

//     }
//     // console.log(website);
        
//  }
// console.log(username);

// **************** interesting concept ******************
console.log(addone(5));
function addone(num){
 return num+1
}


console.log( addtwo(5)); // Cannot access 'addtwo' before initialization
 const addtwo = function(num){ // Function expression
    return num+2
 }
