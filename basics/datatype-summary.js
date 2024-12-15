// console.log (2 > 1);
// console.log ("3" > 2);

console.log (null > 0);
console.log (null == 0);
console.log (null >= 0);    // null converts into the 0

console.log (undefined == 0);  // always show zero
const num = 25  // number defined

const numValue = 25.10 

const isLoggedIn = false // login variable tag

const outsideTemp = null // empty

let userEmail; // undefined

const id = Symbol ('251')  // return type is another data type
//  both are not same result is different - line 11 or 12
const anotherID = Symbol ('251')  

console.log (id === anotherID);

const bigNumber = 25272729390810343187545n  // bigInt represnt 'n'

const man = ["Army", "Airforce", "Navy"]
let myObj = {
    name: "anmoL",
    age: 24,
}

const myFunction = function () {
    console.log("hello Universe");
}

console.log(typeof outsideTemp);  // know datatype

/*
                                 STACK AND HEAP
    Stack Memory (Primitive)  >>  Variables are stored in the stack, and we get a copy of the value
    Heap Memory (Non-Primitive)  >>  Objects are stored in the heap, and we get a reference to the original value.

*/


//        >>               Stack Memory (Primitive)

let myRedditName = "Aum"
let anotherName = myRedditName
anotherName = "scar"

console.log(myRedditName)
console.log(anotherName)


let unixId = 2511
let anotherId = unixId
anotherId = "UbiZ"

console.log(unixId)
console.log(anotherId)



//        >>               Heap Memory (Non-Primitive)

let userOne = {
    upi: "user@upi",
    email: "userOne@gmail.com"
}

let userTwo = userOne

userTwo.email = "userTwo@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
