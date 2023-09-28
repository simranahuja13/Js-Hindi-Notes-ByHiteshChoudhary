// Dates
// let date = new Date() //-- detailed time
// console.log(date.toString()); //Thu Sep 28 2023 18:56:00 GMT+0000 (Coordinated Universal Time)
// console.log(date.toISOString()); //2023-09-28T18:57:17.845Z
// console.log(date.toJSON()); //2023-09-28T18:57:39.487Z
// console.log(date.toLocaleDateString()); //9/28/2023
// console.log(date.toLocaleTimeString()); //6:59:01 PM

// let myCreatedDate = new Date (2024 , 0 , 22)
// console.log(myCreatedDate.toDateString()); //Mon Jan 22 2024

// let myCreatedDate = new Date (2024 , 0 , 22 , 5 , 3) //--january-0
// console.log(myCreatedDate.toLocaleString()); // 1/22/2024, 5:03:00 AM

// let myCreatedDate = new Date ('2023-02-12') // YY-MM-DD --// january -1
// console.log(myCreatedDate.toLocaleString()); //2/12/2023, 12:00:00 AM

// let myCreatedDate = new Date ('02-12-2023') // MM-DD-YY --// january -1(India)
// console.log(myCreatedDate.toLocaleString()); //2/12/2023, 12:00:00 AM

// let myTimeStamp = Date.now()--Milliseconds
// console.log(myTimeStamp); //ms- 1jan-1970----1695928645131
// console.log(myCreatedDate.getTime());


/************** Convert ms into sec -INTERVIEW QUES ******************/
// console.log(Math.floor(Date.now()/1000)); // Date.now-abhi ka date 

// let newDate = new Date() //2023-09-28T19:26:11.479Z
// console.log(newDate);
// console.log(newDate.getDate()); //28

let date2 = new Date() 
date2.toLocaleDateString('default' , {
    weekday:'long',
})



