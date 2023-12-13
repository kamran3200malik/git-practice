//array

const myArr=[0,1,2,3,4,5]
/*
console.log(myArr)


//Array Mehods 
myArr.push(6)
myArr.push(7)
console.log(myArr)
myArr.pop()
myArr.pop()
console.log(myArr)


myArr.unshift(9)
console.log(myArr)
myArr.shift()
console.log(myArr)

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr    = myArr.join()
console.log(myArr)
console.log(newArr)
*/

// Slice and Splice

console.log("A ",myArr);
const myN1=myArr.slice(1,3)
console.log(myN1);

console.log("B ",myArr)

const myN2=myArr.splice(1,3)
console.log("C ",myArr)

console.log(myN2);
