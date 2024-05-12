//const littlefinger = new Object();

littlefinger ={};

littlefinger.name = "Sridhar"
littlefinger.value = "232"
littlefinger.isLoggedIn = false


console.log(littlefinger);

const regularUser = {
    email : "gpt123@gmail.com",
    fullname : {
    userFullname : {
        first: "Sridhar",
        last : "K",
    }
    }
}
console.log(regularUser.fullname.userFullname.first +" "+ regularUser.fullname.userFullname.last);


const obj1 = {
    1 : "a",
    2 : "b",
    3 : "c"
}
const obj2 = {
    1 : "a",
    7 : "b",
    3 : "c",
    name :{
        3 : "x",
    }
}
//const obj3={obj1,obj2};
// const obj3 = Object.assign({},obj1,obj2)
obj3 = {...obj1,...obj2}
console.log(obj3);


const user = [
    {
        id : 1,
        email: "gpt.gmail.com",
    },
    {
        id : 1,
        email: "gpqqqqqqqqqqqqqqqt.gmail.com",
    },
    {
        id : 2,
        email: "gehhpt.gmail.com",
    }
]

// console.log(user[2].id);

// console.log(Object.keys(littlefinger));
// console.log(Object.values(littlefinger));
// console.log(Object.entries(littlefinger));
// console.log(littlefinger.hasOwnProperty('name'));

// Object Destructureing  
const course ={
    coursename : "js in Hindi",
    courseInstructor : "Hitesh",
    price : "999",
}

const {courseInstructor} = course;
console.log(course.courseInstructor);
console.log(courseInstructor);
