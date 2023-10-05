// a fetch promise only rejects when a network err is encountered(which is usually where thre is a permission issue or similar.)
// a fetch promise does not reject on HTTP errors(404,etc) // then handler ,must check the res

// a special queue is made which is called as Micro Task queue / Priority Queue for handling fetch



// async  function prom(){
//    try{
//     const res =  await fetch('https://jsonplaceholder.typicode.com/users') // promise return dega
//     console.log(res);
//     const data = await  res.json()
//     console.log(data);
//    }
//    catch(err){
//     console.log('ERROR');
//    }
// }
// prom()


// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((res)=>{
//   return res.json()
// }) // thenable promise
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log('ERROR');
// }) // fetch phle hoga aur baki code bad me


