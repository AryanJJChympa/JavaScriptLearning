// const tinderUser= new Object() //SingleTon
const tinderUser={}  //Non single ton

tinderUser.id="123abc"
tinderUser.name="Marian"
tinderUser.isLoggedIn=false
// console.log(tinderUser);


const regularUser={
    email:"some@gmail.com",
    fullName:{
        userName: {
            firstname:"Aryan",
            lastname:"Jain Chympa"
        }
    }
}

// console.log(regularUser.fullName.userName.lastname="Last name changed!");

const obj1={
    1:"a",2:"b"
}

const obj2={
    3:"c",4:"d"
}

const obj3=Object.assign({},obj1, obj2)
// console.log(obj3);


const ObjAryan=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"i@gmail.com"
    },
    {
        id:3,
        email:"j@gmail.com"
    }
]

ObjAryan[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course={
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const{courseInstructor: ins}=course

console.log(ins);


{
    "name": "hitesh",
    "coursename" :"Js in hindi",
    "price": "free"
}
 
