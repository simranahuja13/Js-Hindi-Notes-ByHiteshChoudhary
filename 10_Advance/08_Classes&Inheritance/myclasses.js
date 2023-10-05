// ES6

class User {
    constructor(username, email, password) {// jaise hi class se ek obj intialise new keyword ka use krke hoga waise hi constructor call hoga
        this.username = username
        this.email = email
        this.password = password
    }
    encryptPass() {
        return `${this.password} abc`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }

}
const chai = new User("chai", 'chai@gmail.com', '123')
console.log(chai.encryptPass());
console.log(chai.changeUsername());


// behind the scenes

function User2(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}
User2.prototype.encryptPass = function() {
    return `${this.password} abc`
}
User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const tea = new User2("tea", 'tea@gmail.com', '123')
console.log(tea.encryptPass());
console.log(tea.changeUsername());