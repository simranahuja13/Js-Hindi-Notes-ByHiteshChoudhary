class User {
    constructor(username ){
        this.username= username
    }
    logMe(){
        console.log(`USERNAME IS ${this.username}`);

    }
}

class Teacher extends User {
    constructor(username, email, password){
        super(username) // jb parent teacher m para same ho /// =>  call se bachne k liye // this bts m lgata hai
        this.email = email
        this.password = password
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
} 
const chai = new Teacher("chai", "chai@teacher.com", "123")
chai.addCourse()
// chai.logMe()
const masalaChai = new User("masalaChai")
masalaChai.logMe()
// masalaChai.addCourse()
// console.log(chai === masalaChai); // false
// console.log(chai === Teacher); // false
console.log(chai instanceof Teacher ); // true
console.log(chai instanceof User); // object instanceof Class