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

let tea={
   a:12,
   b:13,
   c:function() {
       console.log("Value of C is ",this.a+this.b);
   } 
}
tea.c()


const chai= function () {
    let username="kamran";
    console.log(this.username);
}

const chai=  () => {
    let username="kamran";
    console.log(this);
}
chai()

// Ist method of arrow function (explict return)

const addTwo=(num1,num2)=>{
    return num1+num2
}

console.log(addTwo(45,45))


// 2nd method of arrow function 
const addTwo=(num1,num2)=>num1+num2
console.log(addTwo(45,45))


// 3rd method of arrow function ( implecit return)
const addTwo=(num1,num2)=>(num1+num2)
console.log(addTwo(45,45))
*/
// using object
const pakN=()=>({name:"kamran"})
console.log(pakN());