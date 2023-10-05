// +++++++++++  CLASS ++++++++++++++++++///////////////////
// new synatx
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    get username (){
        return this._username.toUpperCase()
    }
    set username (val){
       this._username = val // setter ko kbhi return nahi karte hai
    }


    get password() { // password hi aarha hai
        // return this._password.toUpperCase()
 return (`${this._password}hitesh `) // yhi pe chnge krna hai
    } // class ke bahar se leta hai

    set password(val) {
        this._password = val
    }
}
const hitesh = new User("Hitesh12", '123abc');
console.log(hitesh.password);
console.log(hitesh.username);


///////+++++ FUNCTION +++++++++++/////////////
// old syntax through define property

// function User (email, password){
//     this._email = email;
//     this._password = password;


//     Object.defineProperty(this , "email" ,{
//         get : function(){
//             return this._email.toUpperCase()
//         },
//         set : function(val){
//          this._email = val;
//         }
//     })

//     Object.defineProperty(this , "password" ,{
//         get : function(){
//             return this._password.toUpperCase()
//         },
//         set : function(val){
//          this._password = val;
//         }
//     })

// }

// const simmy = new User("simran12@gmail.com" , "sim12" )
// console.log(simmy.email);
// console.log(simmy.password);

////////// +++++++++++ OBJECT +++++++++++++////////////

// const User = {
//     _email : "simran12@gmail.com",
//     _pass : 'simran12' , 


//     get email(){
//     return this._email.toLowerCase();
//     }  , 

//     set email(val){
//         this._email = val;

//     } 

// }
// const vimmy = Object.create(User)
// console.log(vimmy.email)

