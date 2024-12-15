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