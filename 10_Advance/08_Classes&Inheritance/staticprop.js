class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){ // return ni krega 
        return `123`
    }
}
const hitesh = new User("hitesh")
// console.log(hitesh.createId());


class Teacher extends User {
    constructor(email , username){
        super(username)
        this.email = email
       
    }
}
const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
console.log(iphone.createId());