// const tenderUSer =new Object();

const tenderUSer= {}
tenderUSer.id="123abc"
tenderUSer.name="sannan"
tenderUSer.isLoggedIn=false;

// console.log(tenderUSer);

const regularUSer={
    email:"someone@gmail.com",
    fullname:{
        userFullname:{
            firstName:"kamran",
            lastName:"malik",
        },
    }
}

// console.log(regularUSer.fullname.userFullname.lastName);

const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"c",
    4:"d"    
}
const obj3={
    5:"e",
    6:"f"    
}

// const obj3={obj1,obj2}
// const obj4=Object.assign({},obj1,obj2,obj3);
// console.log(obj4);

const objT={...obj1,...obj2,...obj3}
// console.log(objT);
/*

const users=[
    {
        id:1,
        email:"kamr@gmail.com"
    },
     {
        id:2,
        email:"affan@gmail.com"
    },
     {
        id:3,
        email:"farha@gmail.com"
    },
     {
        id:5,
        email:"jaml@gmail.com"
    }
   
]

console.log(users[0]);
console.log(users[2].email);


// console.log(tenderUSer)
console.log(Object.keys(tenderUSer));
console.log(Object.values(tenderUSer));
console.log(Object.entries(tenderUSer));
console.log(tenderUSer.hasOwnProperty('isLoggedIn'));

*/
const course={
    course_name:"JS in Urdu",
    price:"999",
    courseInstructor:"kamran"
}
const {courseInstructor:instructor}=course;
// console.log(course.courseInstructor)
// console.log(courseInstructor)
console.log(instructor)
/*

{
    "name":"kamran",
    "coursename":"Js in Urdu",
    "price":"free"
}
*/