
// function init() {
//   let name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms the closure
//     console.log(name); // use variable declared in the parent function
//   }
//   displayName();
// }
// init();

function outer() {
  let username = "simmy"
  console.log(courseTutor);
  function inner() {
    let courseTutor = "Hitesh"
    console.log(username);
  }
  function inner2() {
    console.log(courseTutor);
    console.log(username);
  }
  inner()
  inner2()
}
outer()
// console.log(username);


//// OUTER + INNER FUNCTION SCOPE = LEXICAL SCOPING
