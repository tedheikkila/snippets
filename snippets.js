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
let a = 500
let b = 50
let c = "50"

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
console.log(b == c)
console.log(b === c)

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
let games = ["Fortnite", "Tetris", "Warzone", "Halo"]
console.log(games)
console.log(games[0])
games[0] = "Marvel"
console.log(games[0])
console.log(games.length)
games[5] = "Fortnite"
console.log(games)
if (games[4] == null) {
    console.log("empty is the best game ever")
}






