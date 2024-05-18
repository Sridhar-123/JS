const array1 = [1,2,3,4];

const initialValue = 0;
const sumWithIntial = array1.reduce((accumulator,currentValue)=>
 accumulator + currentValue,initialValue);

// console.log(sumWithIntial);


const arr = [3,5,5,6,7];

const myTotal = arr.reduce(function (acc,curVal) {
    // console.log(`acc: ${acc} and curVal: ${curVal}`);
    return acc+curVal
},0);

const myTotal1 = arr.reduce((acc,curr)=> 
   acc+curr,0 // arr =0
);

// console.log(myTotal);
// console.log(myTotal1);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const sq = shoppingCart.reduce((acc,item)=> acc+item.price,0 )

console.log(sq);