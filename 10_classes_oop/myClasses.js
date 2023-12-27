/*
//ES6
class User {
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;
    }
    encrptPassword(){
        return `${this.password}abc`
    }
    captilize(){
        return `${this.username.toUpperCase()}`
    }
}

const chai =new User("kamran","kam@gmail.com","123")
console.log(chai.encrptPassword())
console.log(chai.captilize())
*/

function User(username,email,password) {
        this.username=username;
        this.email=email;
        this.password=password;
}

User.prototype.encrptPassword=function () {
    return `${this.password}abc`
}

User.prototype.captilize=function () {
    return `${this.username.toUpperCase()}`
}

const tea =new User("affan","affa@gmail.com","123")
console.log(tea.encrptPassword())
console.log(tea.captilize())