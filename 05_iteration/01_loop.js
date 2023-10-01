// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// } // index condition check hota hai then ghus jata hai then index++ hota hai

// for (let i = 0; i <= 10 ; i++) {
//     const element = i;
//     console.log(element);
//     if(element == 5)console.log("5 is best number"); 
// }


// Nested Loop =>  Table

// for (let i = 1; i <= 10; i++) {
//     console.log(`Outer Loop value : ${i}`);

//     for (let j = 1; j <= 10; j++) {
//         // console.log(`inner loop value : ${j} and inner loop  ${i}`);
//         console.log(`${i} x ${j} =  ${i*j}`);
//     }
// }


// let myArr = ["King" , "Johnny" , "Bob" ];
// for (let index = 0; index < myArr.length; index++) { // <= undefined
//     const element = myArr[index];
//     console.log(element);
// }


// stop loop based on the condition --- Break and continue

// for (let index = 1 ; index <= 20; index++) {
//     if(index==5){
//         console.log(`Detected Number  : 5`); // 5 will bw not printed
//         break; // case match hua break kar do otherwise sb print ho jayega loop ke bahar aajata hai
//     }
//     console.log(index);
    
// }

// output

// 1
// 2
// 3
// 4
// Detected Number  : 5

for (let index = 1 ; index <= 20; index++) {
    if(index==5){
        console.log(`Detected Number  : 5`); // 5 will be not printed
        continue; // loop ke bahar ni ata hai
    }
    console.log(index);
    
}

// output
// 1
// 2
// 3
// 4
// Detected Number  : 5
// 6
// 7
// 8
// 9
// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20