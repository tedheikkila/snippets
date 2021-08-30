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
    let realDeal = "Follow the arrow and " + z
    console.log(realDeal)
    return 
}

let z = "get real"

realRun(z)

//methods 










