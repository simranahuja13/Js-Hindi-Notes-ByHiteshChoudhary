// consume promise -- fetch('url').then().catch().finally()


// making a promise (earlier it was library like Bluebird)

// first promise
// const promiseOne = new Promise(function (resolve, reject) {
//     // Do and async tasks
//     // DB calls , cryptography
//     // Network call
//     setTimeout(function () {
//         console.log('async task complete')
//         resolve() // --- resolve ko  connect kro .then se
//     }, 1000)
// })
// consumption -- .then ka connection hai resolve
// promiseOne.then(function () {
//     // setTimeout ka return ayega
//     console.log('Promise consumed');
// })
/** async task complete
Promise consumed */

// 2nd promise

// new Promise(function (resolve, reject) {

//     setTimeout(function () {
//         console.log('async task complete')
//         resolve()
//     }, 1000)
// }).then(function () {
//     console.log('async 2 ');
// })

// 3rd promise

// const promiseThree = new Promise(function (res, rej) {
//     setTimeout(function () {
//         res({ username: "Siddhi", email: "siddhi@gmail.com" });
//     }, 1000)
// })
// promiseThree.then(function (userdata) {
//     console.log(userdata)
// })


// const promiseFour = new Promise(function (res, rej) {
//     setTimeout(() => {
//         let err = true;
//         if (!err) {
//             res({ username: "Riddhi", email: "riddhi@gmail.com" })
//         }
//         else {
//             rej("ERROR!!!")
//         }
//     }, 2000);

// })
// const userName = promiseFour.then((user)=>{
//   console.log(user);
//  return user.username
// })
// console.log(userName); // can't do this process

// promiseFour
//     .then((user) => {
//         console.log(user);
//         return user.username
//     })
//     .then((username) => {
//         console.log(username);
//     })
//     .catch((err) => {
//         console.log(err);
//     }).finally(() => {
//         console.log('Done!'); // ye to hoga hi hoga
//     })

// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let err = true;
//         if (!err) {
//             resolve({ username: "Javascript", email: "js@gmail.com" })
//         }
//         else {
//             reject("JS not found 😔")
//         }
//     }, 1000)

// });

// async function consumePromiseFive (){
//     try{
//         const res =  await promiseFive /// -- promiseFive() XXX
//         console.log(res);
//      }catch(err){
//         console.log(err);
//      }
//     }
//     consumePromiseFive();
