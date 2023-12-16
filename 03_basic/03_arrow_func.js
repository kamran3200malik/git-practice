/*const user={
    username:"kamran",
    price:999,
    welcomeMessage:function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="Affan"
// user.welcomeMessage()
// console.log(this.price);

function chai() {
    let username="farhan"
    console.log(this.username);//this can not be called in function only call in object
}
chai()
*/
let tea={
   a:12,
   b:13,
   c:function() {
       console.log("Value of C is ",this.a+this.b);
   } 
}
tea.c()
console.log(this.a);