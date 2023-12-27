// console.log(Math.PI);
// Math.PI=5;
// console.log(Math.PI);

const mathpi= Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(mathpi);
const user={
    username:"kamran",
    email:"abc@123",
    isAvlble:true
}

// console.log(user);
console.log(Object.getOwnPropertyDescriptor(user,"username"))
Object.defineProperty(user,'username',{
    writable:false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(user,"username"))
