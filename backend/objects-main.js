// objects singleton or Constructor

const teamUser = {}
console.log(teamUser);

teamUser.id = "plr-13"
teamUser.name = "Mahi"
teamUser.isLoggedIn = false
console.log(teamUser)
console.log(teamUser["id"])

const snapUser = {
    email: "anmol@sp.com",
    fullname: {
        userfullname: {
            firstname: "anmol",
            lastname: "kumar"
        }
    }
}

console.log(snapUser)
console.log(snapUser["email"])
console.log(snapUser.fullname.userfullname["firstname"]);


const obj1 = {1: "y", 2: "z"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {obj1, obj2}
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj3);
console.log(obj4);

const obj5 ={...obj1, ...obj2}
console.log(obj5)

const users = [
    {
        id: 11,
        email: "abc@gmail.com"
    },
    {
        sn: 22,
        rec: "github"
    }
]

users[1].email
console.log(Object.keys(teamUser));   // to Access the keys  
console.log(Object.entries(teamUser));  // to Access the array
console.log(Object.values(teamUser));  // to Access the values

console.log(teamUser.hasOwnProperty('isLogged'));