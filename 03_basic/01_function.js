/*
function sayMyName() {
    console.log("k");
    console.log("a");
    console.log("m");
    console.log("r");
    console.log("a");
    console.log("n");
}

 sayMyName();
 */
/*
 function addTwoNumber(a ,b ) {
     
    console.log(a+b);
 }
 addTwoNumber(4,3)
 
function addTwoNumber(a,b) {
    // let c=a+b;
    // return c;
    return a+b;
}

const reslt= addTwoNumber(5,3)
console.log(`Result: ${reslt}`);


function loginUserName(username) {
    if (!username) {
        console.log(`please enter a username`);
    }else{
    return `${username} Just logged in`;
    }
}

console.log(loginUserName("affan"));


function calculateCartPrice(...val) {
    return val;
}

console.log(calculateCartPrice(20,30,40,5000));


const user={
    username:"kamran",
    price:1200
}

function handleObject(anyObject) {
    console.log(`Username is  ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)
handleObject({
    username:"fawad",
    price:3000
})
*/
const myNewArray=[200,400,500,100,6000]

function returnSEcondValue(getArray) {
    return console.log(getArray[1]);
}
// returnSEcondValue(myNewArray)
returnSEcondValue([
    200,400,500,600,400
])
