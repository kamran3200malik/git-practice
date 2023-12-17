/*const userEmail="kamran"
if (userEmail) {
    console.log("Got User Email");
}
else{
    console.log("Don't have user email");
    }
/*
Falsy Values
false , 0, -0, BigInt, 0n , "" , null , undefined , NaN

Truthy Values
true, "0", 'false', " ", [], {}, function(){}

//To chech array
const userEmail=[]
if (userEmail.length===0) {
    console.log("Array is Empty");
}

//To chech objext
const emptyObj={}
if (Object.keys(emptyObj).length ===0) {
    console.log("Object is Empty");
}



// Nullish Coalescing Operator (??): null and undefined

let val1;
// val1= 5 ?? 10;
// val1= null ?? 10;
// val1=undefined ?? 15
val1=null ?? 10 ?? 20 // first value will assign

console.log(val1);
*/

// +++++++++++++++++++++++++++ TErniary Operator++++++++++++
// condition ? true :false

const icePrice=100
icePrice<=80 ? console.log("Less than 80") : console.log("More than 80");