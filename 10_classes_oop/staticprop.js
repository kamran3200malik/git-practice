class User {
    constructor(user){
        this.username=user
    }
    logMe(){
        console.log(`username: ${this.username}`);
    }
    static createID(){
        return `${this.username}@gmail.com`
    }
}

// const kam= new User("kamran")
// console.log(kam.createID())

class Teacher extends User{
    constructor(user,email){
        super(user);
        this.email=email;
    }
}

const iphn=new Teacher("iphone","uphone.com") 
iphn.logMe()
iphn.createID()