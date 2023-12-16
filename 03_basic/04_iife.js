/*
// Immediately invoked function Expression
(function chai() {
    console.log("Database connected");
})();

// first  () for function defination. 2nd () for function call

(()=>{
    console.log(`DB Connected Two`);
})();
*/
((name)=>{
    console.log(`DB Connected Two ${name}`);
})("kamran")