// DataType
// Two types Primative and Non-Premative (REference)

/*
07 types Primative:
String, Number , Bollean , null , undefined, Symbol, BigInt

const score=100; //number
let name="kamran" //string
let isLogged=false; //Boolean
let outside_temp=null //null
let userEmail;  //undefined
const id= Symbol('123'); 
const anotherId= Symbol('123'); 
console.log(id==anotherId); //false

const BigNumber=4545747764567654n;
console.log(BigNumber);
*/



/* Reference (Non-Premative)
Array, Objects, Functions


const heros=["kamran","mehran","nouman"];
let myObj={
    name:"kamran",
    age:22
}
const myFunction= function () {
    console.log("Hello kamran");
}
console.log(myObj);
console.log(typeof(heros));
*/

// +++++++++++++++++++++++++++++++++++++ MEmory+++++++++++++++++++++++++++++++++++++++
/*
Two types of Memory
1.Stack=> use by premative types
2.Heap=>used by non-premative types


let myYoutunename="kamrandotcom"

let anothername =myYoutunename
anothername="Affan"

console.log(anothername);
console.log(myYoutunename);*/

let userOne={
    email:"kamran@gmail.com",
    upi:"user@ybl"

}

let userTwo=userOne;
userTwo.email="affan@gmail.com";
console.log(userOne.email)
console.log(userTwo.email)