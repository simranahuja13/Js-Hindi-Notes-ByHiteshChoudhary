
// Array Specific 
 ["" , "" , ""]
 [{} , {} , {}]

//  const arr = [1 , 2 , 3 ,4 , 5]
//  // iterator  - i (variable)


//  for ( const num of arr ) {
//     console.log(num);  
//  }

// const greeting = "Hello world"
// // greet => i 
// for(const greet  of greeting){
//     console.log(`${greet}`);
// }


 // maps


//  const map = new Map();  // popular due to  ==>  unique values i.e not prints the duplicate data and for order
//  map.set('name' , "simmy");
//  map.set('sirname' , "ahuja");
//  map.set('sirname' , "auja"); // overrides sirname 
// //  map.set('sirname' , "ahuja"); //

// for (const key in map) {
//     console.log(key); //   
// }

//  console.log(map);

//  for (const key   of map ) {
//     console.log(key ); //[ 'name', 'simmy' ]
//     
//  }

//  for (const [key , value] of map ) {
//     console.log(key ,' : ',  value ); //name  :  simmy
    
//  }


// TypeError: obj is not iterable
// const obj = {
//     game1 : 'NFS' ,
//     game2 : 'WRS'
// }

// for (const key of obj) {
//     console.log(key);
// }

/**    for of object me kaam ni krta hai */

// for of doesn't work in obj
// const obj = {
//     game1 : 'NFS' ,
//     game2 : 'WRS'
// }
// for ( const key in obj ){
// //   console.log(key); // game1 , game2
// console.log(key ,  obj[key]); //game1 NFS
// }

// const arr = [1 , 2 , 3 ,4 , 5]
// for(const i in arr){
//     // console.log(i); // 0 1 2 3 4 => index no. // array me keys sirf number hoti hai object me jo marzi key dalo
//     console.log(arr[i]); // 1 , 2 , 3 , 4 , 5
// }


/*++++ note => 1 .use for of with arrays and other iterable like (strings , maps, sets , etc) 

               2.  use for in to iterate over keys and properties of plain object..
.forEach.forEach

*/

//   const coding = ['Js' , 'Cpp' , 'java' , 'python'] 

//   coding.forEach((elem , index , wholeArray)=>console.log(elem , index , wholeArray)) // Js 0 [ 'Js', 'Cpp', 'java', 'python' ]

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe) // only refernce don't call () XXX

const myCoding = [
    {
   langName : 'JavaScript', 
   langFileName : 'JS'
    },

    {
   langName : 'Python', 
   langFileName : 'PY'
    },

    {
   langName : 'Java', 
   langFileName : 'Java'
    },

   
]

myCoding.forEach((item )=>console.log(item.langFileName))
