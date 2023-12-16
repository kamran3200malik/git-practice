/*
// IF Statement
const temprature=51
if (temprature<=50) {
    console.log(`Tempratue is less than 50`);
}
else{
    console.log(`Temprature is greatet than 50`);
}
console.log("Execute");

// Operators < , >, <= , >= , == , != , === , !==



const score=200
if (score>100) {
    let power ="fly"
    console.log(`USer Power:${power}`);
}
    // console.log(`USer Power:${power}`);




const balance=400
// if (balance>500) console.log("test") , console.log("test2"); // Not recommended

if (balance<500) {
    console.log("less than 500");
}else if (balance<750) {
    console.log("less than 750");  
}else if (balance<900) {
    console.log("less than 900");  
}else{
    console.log("less than 1200"); 
}
*/

const userLoggedIn=true
const debitcard=false
const LoggedInFromGoogle=false
const loggedInFromEmail=true

if (userLoggedIn && debitcard) {
    console.log("Allow to buy course");
}

if (LoggedInFromGoogle || loggedInFromEmail ) {
    console.log(`Allow User to buy Course`);
    
}