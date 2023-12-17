/*
// Array.Reduce()

const array1=[1,2,3,4]

const initialValue=0;
const sumWithIntial=array1.reduce
                            ((accumulator,currentvalue)=>accumulator+currentvalue,
                            initialValue
                            )
console.log(sumWithIntial);

/*
(0,1)=>(0+1)
(1,2)=>(1+2)
(3,3)=>(3+3)
(6,4)=>(6+4)
10



// Normal Function
const arrayNum=[1,2,3]

const TotArr=arrayNum.reduce(function (acc,currval) {
    console.log(`Acc :${acc} and Curr val is ${currval}`);
    return (acc+currval)
},0)

console.log(TotArr);


// Arrow Function
const arr=[1,2,3]

const TotalArr=arr.reduce((acc,curval)=>(acc+curval),0)

console.log(TotalArr);
*/

const shoppingCart=[
    {
        itemName:"Js Course",
        price:2999
    },
    {
        itemName:"Python",
        price:999
    },
    {
        itemName:"PHP",
        price:5999
    },
    {
        itemName:"Laravel",
        price:12999
    },
]

const TotalPay= shoppingCart.reduce((acc,item)=>{
    console.log(`SubTotal : ${acc} Price of ${item.itemName} is : ${item.price} `);
    return acc+item.price
    },0)
console.log(`Grand Total: ${TotalPay}`);
