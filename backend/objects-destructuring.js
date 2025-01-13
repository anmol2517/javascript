// OBJECT DESTRUCTURING

const course= {
    coursename: "destructuring",
    price: "99",
    courseInstructor: "js"
}

console.log(course["cname"])  //  undefined
const {courseInstructor} = course
console.log(courseInstructor)

// name changing inshorts

const {courseInstructor: instruct} = course
console.log(instruct)
