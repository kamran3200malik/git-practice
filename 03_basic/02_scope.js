/*
let a=10;
const b=20;
var c=30;

if (true) {
    let a=200;
    const b=300;
    var c=400;
}

console.log(`value of a is ${a}`)
console.log(`value of b is ${b}`)
console.log(`value of c is ${c}`)
console.log(c);


function one() {
    const username="kamran"
    function two() {
        const website="freelancer"
        console.log(username);
    }
    // console.log(website);
    two();
}
one();


if (true) {
    const username="kamran"
    if (username==="kamran") {
        const website=" freelancer"
        console.log(username + website);

    }
    // console.log(username);
}
// console.log(username);
*/
function addOne(num) {
    return num+1
}

addOne(5)

// function hoisting
const addTwo=function(num) {
    return num+2;
}
addTwo(6)