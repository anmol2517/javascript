/*
    A function is a block of code designed to perform a particular task. 
    Functions are executed when they are called (invoked) and can be defined in various ways.
*/

function sayName(){
    console.log("I")
    console.log("N")
    console.log("D")
    console.log("I")
    console.log("A")
}
sayName()   // function execution

function addNumbers(num1, num2) {  //   function parameters 

    console.log(num1 + num2)
}
addNumbers()  // NaN means - Not A Number

addNumbers(17, 8) // adding   -- functions arguments 

addNumbers("3", 5) // merge     -- functions arguments
addNumbers(42, "7")  // merge     -- functions arguments
addNumbers(15, null)  // only provide number     -- functions arguments
addNumbers(25, "A") // merge     -- functions arguments


/*
function's parameters - They allow the function to work with input data.

        function functionName(parameter1, parameter2, ...) {
            // Function body
        }



Function arguments are the actual values passed to a function when it is called. 

 These values are assigned to the function's parameters.

        const result = add(5, 3); // 5 and 3 are arguments
*/


function addTwoNumbers(n1 , n2) {
    let result = n1 + n2
    console.log("Javascript");
    return result
}
const result = addTwoNumbers(2, 12)
console.log("Result: ", result);


// direct return

function dirNumbers(a1 , a2) {
    console.log("web-dev");
    return a1 + a2
}
const value = dirNumbers(36, 15)
console.log("Result: ", value);

function loginUsermsg(username){
    if(!username){       // true converted in false & false converted in true
        console.log("Please enter a username");
        return
    }
    return `${username} just log in`
}
console.log(loginUsermsg("Atma Ram Tuka Ram Bhide"))

// if not passes nay msg then show undefined
// console.log(loginUsermsg())


//  ... 3 dot means pass all the functions

function calculatePrice1(num1) {
    return num1
}
console.log(calculatePrice1(200, 400, 600))


//  ... 3 dot means pass all the function or we get a array

function calculatePrice2(...num2) {
    return num2
}
console.log (calculatePrice2(200, 400, 600))

function calculatePrice3(val1, val2, ...num3) {
    return num3
}
console.log (calculatePrice3(200, 400, 600))

const serve = {
    username: "anmol",
    price: 151
}

function handleObject(anyobject) {
    console.log(`Serve is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(serve)


handleObject({
    username: "theman",
    proce: 777
})


// array passing 
const newArray = [2010, 2011, 2018, 2021, 2023]

function returnSecondValue(getArray){
    return getArray[1]    
}
cosole.log(returnSecondValue(newArray))        // both are show second value 
console.log(returnSecondValue([2010, 2011, 2018, 2021, 2023]))     // both are show second value 
