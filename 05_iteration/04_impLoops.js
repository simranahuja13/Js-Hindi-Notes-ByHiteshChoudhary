// console.table([0,5,6,7,89,2])

//   const coding = ['Js' , 'Cpp' , 'java' , 'python'] 

//  const data =  coding.forEach((elem ) =>console.log(elem ) ) 
// console.log(data); // undefined

// const data =  coding.forEach((elem ) =>{
//     // console.log(elem )
//     return item 
//  } ) 

//  console.log(data); // return ni hoga 


// const myNums = [1,2,3,4,5,6,7];

// // const data = myNums.filter((num)=> num<5) // [ 1, 2, 3, 4 ]

// const data = myNums.filter((num)=>{
//     return num>4 // return ke bina [] milega
// })
// console.log(data);


// const newNum = []
// myNums.forEach((num)=> {
//    if(num<4){
//     newNum.push(num);
//    }

// }
// )
// console.log(newNum);


// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
//   ];

//   const userbooks = books.filter((item)=>item.genre==="History" && item.publish===1999)

//   console.log(userbooks); 
//output
// [ 

//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     }
//   ]


// const userbooks = books.map((item)=>item.genre==="History" && item.publish===1999)
// console.log(userbooks); // false true dega as result not data

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const newNums = myNums.map((item) => item+10)
// console.log(newNums);

// const newNums = myNums
//     .map((num) => num * 10)//[ 10, 20, 30, 40, 50,60, 70, 80, 90]
//     .map((num) => num * 2) // [ 20,  40,  60,  80,100, 120, 140, 160,180]
//     .filter((num) => num < 80) // [ 20, 40, 60 ]
// console.log(newNums);

// filter - true / false  ////////  map- for operations //// reduce - to obtain one value

// const num = [1, 2, 3, 4, 5]

// const total = num.reduce((acc, currVal) => {
//     console.log(`acc: ${acc} val: ${currVal}`);

//     /** acc: 0 val: 1
//         acc: 1 val: 2
//         acc: 3 val: 3
//         acc: 6 val: 4
//         acc: 10 val: 5 */
//     return acc + currVal
// }, 0

// )
// console.log(total);

const shopCart =[
    {
      itemName : 'T-shirt' ,
      price : 399 , 
    }, 
    {
      itemName : 'Pant' ,
      price : 699 , 
    },
    {
      itemName : 'Dinner Set' ,
      price : 1399 , 
    },
    {
      itemName : 'Mug' ,
      price : 39 , 
    }
]

const total = shopCart.reduce((acc , item)=> acc + item.price , 0)
console.log(total);