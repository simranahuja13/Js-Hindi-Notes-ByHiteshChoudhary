// array 
//shallow copy of an obj - a copy whose props share the same refernces
// deep copy  of an obj  - ,, do not

//  const myArr = [0,4,6,354,78] //elements of diff types

// //  const myHeroes = ["Shaktiman" , "Hanumanji" , "Naagraj"]

// //   const myArr2 = new Array(8,6,45,89,0)

//  /************************* METHODS ***************************************** */
// myArr.push(9) //adds at last
// console.log(myArr); //[ 0, 4, 6, 354, 78, 9 ]

// myArr.pop() // removes from last
// console.log(myArr);//[ 0, 4, 6, 354, 78 ]

// myArr.unshift(0) // adds at start
// console.log(myArr); //[ 0, 0, 4, 6, 354, 78 ]

// myArr.shift() //  removes from start
// console.log(myArr); //[ 0, 4, 6, 354, 78 ]

// console.log(myArr.includes(354)); //BOOLEAN __ true
// console.log(myArr.indexOf(55)); // 1 => if value doesn't exist

// const newArr = myArr.join() // binds data and convert array into string
// console.log(typeof myArr); //object
// console.log(typeof newArr); //string

 // slice , splice
// console.log("A" , myArr);
// const myn1 = myArr.slice(1,3) 
// console.log(myn1);// 3 not included

// console.log("B" , myArr);
// const myn2 = myArr.splice(1,3) // 3 included
// console.log(myn2);// 4,6,354


// const snacks = ['Chura' , 'Biscuit' , 'Maggi'] 
// const drink = ['Chai' , 'Frooti' , 'Coffee']
// const rt = 'iou'
// snacks.push(drink); // same array
// console.log(snacks);//[ 'Chura', 'Biscuit', 'Maggi', [ 'Chai', 'Frooti', 'Coffee' ] ]

// const newArr = snacks.concat(drink , rt) // returns a new Array not modifies og array
// console.log(newArr); //[ 'Chura', 'Biscuit', 'Maggi', 'Chai', 'Frooti', 'Coffee' ]


// 2nd way of Concat - spread operator(Array ni rha sb element ek ek individual hogye)
// const newArr = [...snacks , ...drink]
// console.log(newArr);//[ 'Chura', 'Biscuit', 'Maggi', 'Chai', 'Frooti', 'Coffee' ]

// const my2Arr = [1,5,7,[0,8,7] , 8 , [0,8,4, [0,7]]]
// const usableArr = my2Arr.flat(Infinity)
// console.log(usableArr); //[
//     1, 5, 7, 0, 8,
//     7, 8, 0, 8, 4,
//     0, 7
//   ]


console.log(Array.isArray('hitesh'));//false

//converts into array
console.log(Array.from('hitesh')); //[ 'h', 'i', 't', 'e', 's', 'h' ]

/*****************Interesting question For Interview***********************/
console.log(Array.from({name:'king'})); //[] 


let score1 = 100
let score2 = 400
console.log(Array.of(score1 , score2)); //[ 100, 400 ] // new array











