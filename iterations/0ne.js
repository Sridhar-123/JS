const coding = ["js","python","ruby","cpp","ruby","golang"];

// forEach()  ***** wont return *****
const values = coding.forEach((item)=>{
console.log(item);
})

// filter ***** returns ****

const myNums = [1,2,3,4,5,6,7,8,9,10];

// const myNums1 = myNums.filter((num)=> {
//  return num>4 
// })
// console.log(myNums1);

const newNum = []

myNums.forEach((num)=>{
    if(num>2){
        newNum.push(num);
    }
})
console.log(newNum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  let userBooks = books.filter((bk)=>bk.genre === 'History')
userBooks = books.filter((bk)=>{
    return bk.publish >= 1994 && bk.genre ==='History'
})
  console.log(userBooks);

  const qwe = myNums
  .map(num=> num+10)
  .map((num)=> num+40)
  .filter((num)=> num>=40)

  console.log(qwe);