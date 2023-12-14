// Objects
/*
Two types of creating
1.singleton

*/
// Object literals

const mySym= Symbol("key1")


const JsUser = {
    name:"kamran",
    "full name":"kamran malik",
    age:35,
    [mySym]:"mykey1",
    location:"kamra",
    email:"kamran@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday", "satarday"]
}

/*console.log(JsUser.email);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);
console.log(typeof(JsUser[mySym]));

JsUser.email="affan@chatgpt.com";
console.log(JsUser.email);
Object.freeze(JsUser);
JsUser.email="dabo@chatgpt.com";
console.log(JsUser);
*/
JsUser.greeting=function() {
    console.log("Hello js user")
}
JsUser.greetingTwo=function () {
    console.log(`Hello Mr ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
