const name = "anmoL"
const repoCount = 25

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('anmol-ub-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   anmol    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://anmol.com/anmol%21kumar"

console.log(url.replace('%20', '-'))

console.log(url.includes('users'))

console.log(gameName.split('-'));