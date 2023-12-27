/*const user={
    username:"kamran",
    loginCount:8,
    signIn:true,
    getUserdetails:function() {
        // console.log("Got user details from database");
        // console.log(`username:${this.username}`);
        // console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserdetails());
// console.log(this);
// const promiseOne=new Promise()
// const date= new Date()
*/
function User(username,loginCount,isLoggedIn) {
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting=function () {
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("kamran", 12 , true)
const usertwo = new User("Affan", 14 , false)

console.log(userOne.greeting());
console.log(usertwo);