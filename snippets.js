// primitive data
console.log("Yo")

var studentName = "Ted"
let studentAge = 100

studentName = "Aragorn"
studentAge = 300.5

console.log(studentName + "_" + `is` + "_" + studentAge + "_" + `years old`)

let thisIsABoolean = true
thisIsABoolean = false

console.log(thisIsABoolean)
console.log(typeof(someUndefinedVariable))

studentAge = false
console.log(typeof(studentAge))

// operators
let a = 300
let b = 30
let c = "30"

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(b == c)
console.log(b === c)
console.log(`My army is ${a} Spartans strong because THIS IS SPARTA`)

let exp1 = (b == c)
let exp2 = (a > b)

console.log(exp1 && exp2)
console.log(exp1 && !exp2)
console.log(exp1 || !exp2)

let exp3 = (a + b - c * a / b)
console.log(exp3)

// conditionals 
let funLevel = 100
const havingFun = true
let funCost = 20

if (funLevel === 100) {
    console.log(`That's so ` + havingFun + `: ` + "Having lots of fun here")
} else {
    console.log(`That's so ` + !havingFun + `: ` + "Feeling kinda apathetic")
}

if (funCost > 25) {
    console.log("Too much fun to be had")
} else if (funCost > 10 & funCost < 25) {
    console.log("Just the right amount of fun")
} else console.log("C'mon have more fun already")

// arrays 
let games = ["Fortnite", "Tetris", "Warzone", "Pokemon", "Halo"]
console.log(games)
console.log(games[0])
games[0] = "Marvel"
console.log(games[0])
console.log(games.length)
games[5] = "Fortnite"
console.log(games)
if (games[4] == null) {
    console.log("Empty is the best game ever. It's graphics feel so real")
}

//iteration
for (let i = 0; i < games.length; i++) {
    if (games[4] == null) {
        console.log("Add a game at games[4]")
    } else 
        console.log(`Game ${i} = ${games[i]}`)
}

//functions and scope
function testRun(x,y) {
    console.log(x.toLowerCase() + "this is just a test run. " + y.toUpperCase())
}

let x = "Hello there, "
let y = "goodbye"

testRun(x, y)

const realRun = (z) => {
    let realDeal = "Follow the arrow function syntax " + z
    console.log(realDeal)
    return 
}

let z = "to get with it"

realRun(z)

//methods; extensive array methods list: https://www.w3schools.com/js/js_array_methods.asp
let alphabetList = ["b", "a", "d", "e", "c"]
let numberList = [0, 1, 2, 3, 4]
alphabetList.push("f")
alphabetList.unshift("z")
console.log(alphabetList)
alphabetList.splice(0,2)
alphabetList.pop()
alphabetList.splice(6, 0, "g", "h", "i")
alphabetList.splice(2, 0, "b")
alphabetList.splice(5, 0, "f")
console.log(alphabetList.sort())

let alphaNumerical = alphabetList.concat(numberList)
console.log(alphaNumerical.sort())
alphaNumerical.splice(10, 0, 5, 6, 7, 8)
console.log(alphaNumerical)
let newAlphaNum = alphaNumerical.slice(0, 10)
console.log(newAlphaNum)

//objects and "this"
console.log(this)

let president = {
    firstName: "George",
    lastName: "Washington",
    age: 75,
    wasCool: true,
    wasLame: false,
    presFcn() {
        console.log(`${this.firstName} ${this.lastName}` + " was the first president")
    },
    otherCoolPresidents: ["Taft", "Lincoln", "Obama"]
}

console.log(president)
console.log(president.wasCool)
console.log(president["wasLame"])
console.log(`${president.otherCoolPresidents[1]} was another cool president`)

president.presFcn()