
/*
// foreach

const coding=["C", "C++", "Java", "Html", "php"]

// coding.forEach(function (item) {
//     console.log(item);
// })

// coding.forEach(item => {
//     console.log(item);
    
// });

// function PrintingMe(item) {
//     console.log(item);
// }

// coding.forEach(PrintingMe);

coding.forEach((item , index, arr) => {
    console.log(item,index,arr);
});
*/
const myCoding=[
    {
        languageName:"Javascript",
        languageFileName:"java"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"Python",
        languageFileName:"py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName, item.languageFileName);
});