function setUserName (username){
    // complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // setUserName( username) // only reference given
    setUserName.call( this , username) // ref hold krne ke liye
    this.email = email 
    this.password = password
}
const chai = new createUser("lil golu", "lilGolu@fb.com", "123")
console.log(chai);
