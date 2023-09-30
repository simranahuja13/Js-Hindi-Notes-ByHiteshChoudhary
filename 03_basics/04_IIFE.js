// IIFE => Immediately Invoked Function Expression

// 2 reason why to use:-

// 1.. ek file hai jisme sirf database connection hai --and we want ki  jaise hi file start ho database se connection start ho jye
// 2 .. global scope me variable jo hai wo function ke variable se conflict na kre

(
    function chai (){ // named IIFE
        console.log("db connected");
    })(); // to end IIFE we should use semicolon

    // (function def)(function execution)

(
    (name) => { // arrow function -- unnamed iife
  console.log(`arrow  ${name}`); //arrow  simmy
    }
)('simmy')


