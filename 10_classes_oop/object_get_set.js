const User={
    _email : "kamran@gmail.com",
    _password:"malik",


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value;
    }
}

const tea = Object.create(User)
console.log(tea.email);