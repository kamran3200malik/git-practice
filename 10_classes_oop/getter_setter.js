class User{
    constructor(email,password){
        this.email=email;
        this.password=password;
    }
    get email(){
        return `${this._email}@gmail.com`
    }
    set email(value){
         this._email=value
    }


    get password(){
        return `${this._password}kamran`.toUpperCase()
    }
    set password(value){
        this._password=value.toUpperCase()
    }
}

const kamran= new User("kamran","kam")
console.log(kamran.email);
console.log(kamran.password);