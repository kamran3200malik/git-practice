class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const chia = new Teacher("kamran Affan","affan@gm","123")

chia.addCourse()