/*
// for of loop is used for arrays 

const arr=[1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(`value is ${num}`);
}


const greeting="Hello World!"
for (const greet of greeting) {
    console.log(`Each char is ${greet}`);
}
*/
// Maps
const map= new Map();
map.set('PK','Pakistan')
map.set('KSA','Kingdom of Suadi Arbia')
map.set('UAE','Dubai')

// console.log(map);
for (const [key, value] of map) {
    console.log(key ,":- ", value);
}