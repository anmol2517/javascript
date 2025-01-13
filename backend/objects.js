/*

        An object is a collection of key-value pairs, where the keys are strings (or symbols), 
        and the values can be of any type. Objects are used to store and organize data and functionality.
*/

//  Object.create()  -- through the constructor  -- singleton 

//  {} -- this is object  -- put value inside then access inside the object

// Symbols Declarations

const mySym = Symbol ("key1")  // -- symbol using as a key in object literals
const mySbm = Symbol ("key-pair")

// Object Literals

const Cuser = {
    name: "anmoL",
    age: 7,
    "Role": "Full Stack Developer",
    mySym: "mykey1",  //  -- Direct Calling Key
    [mySbm]: "key-pair",  //  -- terminal output : [Symbol(key-pair)]: 'key-pair'
    country: "India",
    email: "anmol@js.com",
    iSLoggedIn: false,
    lastLoginDays: ["Tuesday", "Thursday"]
}

// Access the object

console.log(Cuser["email"])
console.log(Cuser["Role"])

console.log(Cuser.mySym)  // it is not show datatype not using symbol

console.log (typeof Cuser.mySym)  // terminal undefined

console.log(Cuser[mySym])  // this is correct format to access the symbol in object literals
console.log (typeof Cuser[mySym])  // terminal string

Cuser.email = "anmol@tech.com"
console.log(Cuser["email"])

// Object.freeze(Cuser)  //  does not change value - reason freeze the value
Cuser.country = "Russia"
console.log(Cuser["country"])
console.log(Cuser[mySym])

// console.log(Cuser)

console.log(Cuser[mySbm])

Cuser.greeting = function() {
    console.log("Hello Man");
}

// -- function return back only refernce provide & function ddot not execute
console.log(Cuser.greeting);  //  [Function (anonymous)] in terminal

Cuser.greetingTwo = function() { 
    console.log(`Hello bot, ${this.name}`);
}

console.log(Cuser.greeting());
console.log(Cuser.greetingTwo()); // show output with undefinesd
