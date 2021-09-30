// node index.js
console.log("Hello user");

// arrow fcns (let & const; const = constant reference; let = variable reference)
// can modify const object and array (push, ++, etc), but can't re-assign 
const hello = (userName) => {
  console.log("hello again " + userName)
}
let userName = "user"
hello(userName)

let c = 0;

while (c < 5) {
  let quadrupled = c * 2;
  c++
  console.log(quadrupled);
}

// use reg fcns for object methods
let user = {
  name: "User",
  status: function () {
    console.log(this.name + " is a user");
    //   setTimeout(() => console.log(this.name + "name"), 100);
  }
};

user.status();

// functional loops (forEach, filter, map)
const users = [
  { name: "Sam", age: 20 },
  { name: "Stella", age: 25 },
  { name: "Mara", age: 30 },
]

users.forEach(user => console.log(user.name))

const justOldEnough = users.filter(function (user) {
  return user.age >= 25
})

console.log(justOldEnough)

const oldEnoughTest = users.map(user => {
  const person = { ...user };

  if (person.age >= 25) {
    person.justOldEnough = true;
  } else {
    person.justOldEnough = false;
  }
  return person;
});

console.log(oldEnoughTest)

// template literals
const firstUser = {
  firstName: "First",
  lastName: "User",
  PC: "Mac"
}

console.log(`Hello I am the ${firstUser.firstName} ${firstUser.lastName} who uses a ${firstUser.PC} `)

// arg v's
// argv[0] = usr; argv[1] = file loc; argv[2, 3, etc] are typed in after node index.js {argv2} {argv3} {argvEtc}
console.log(process.argv[1]);

// fs read & write (plus ternary operator syntax)
const fs = require('fs');

// fs.readFile('./assets/data.csv', 'utf8', (err, data) =>
//   err ? console.error(err) : console.log(data)
// );

// fs.writeFile('./assets/log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success')
// );

// module.exports 
const exportedUser = require('./assets/export.js');

console.log(exportedUser.lastUser);
console.log(exportedUser.linear());

// npm install or npm i {packageName} i.e. npm i inquirer; .gitignore (containing node_modules/)

// inquirer (common prompt types: list, checkbox, confirm, input, number, password )
const inquirer = require('inquirer');

// inquirer
//   .prompt([
//     {
//       type: 'input',
//       message: 'What is your username?',
//       name: 'username',
//     },
//     {
//       type: 'input',
//       message: 'What is your favorite color?',
//       name: 'color',
//     },
//   ])
//   .then((res) =>
//       console.log(`Hello ${res.username}. Your future looks ${res.color}`)
//   );

// rest 
const numArgs = (...args) => {
  return `You passed in ${args.length} arguments`
}

console.log(numArgs(0, 1, 2, "hello"))

// spread
const mammals = ["human", "dog", "elephant"]
const animals = ["seagull", ...mammals, "lizard"]

console.log(animals)

// destructuring objects
sasuke = {
  name: "Sasuke Uchiha",
  rivals: ["Itachi", "Naruto", "Madara"]
}

const logSasuke = ({ name, rivals }) =>
  console.log(`${name}'s rivals are: ${rivals[0]}, ${rivals[1]}, and ${rivals[2]}.`);

logSasuke(sasuke);

// constructors

function Person(employed, celebration) {
  this.employed = employed;
  this.celebration = celebration;
  this.makeNoise = () => {
    if (this.employed === true) {
      console.log(this.celebration);
    }
  };
}

const girls = new Person(true, 'Yippee!');
const guys = new Person(false, 'Awesome!');

girls.makeNoise();
guys.makeNoise();

// prototype methods
function Movie(title, releaseDate) {
  this.title = title;
  this.releaseDate = releaseDate;
}

const batman = new Movie('The Dark Knight', 2008);
const robin = new Movie('Robin', 2030);

Movie.prototype.logInfo = function () {
  if (this.releaseDate > 2021) {
    console.log(`${this.title} will be released in ${this.releaseDate}`);
  } else
    console.log(`${this.title} was released in ${this.releaseDate}`);
};

batman.logInfo();
robin.logInfo();

// promises
const homeworkDone = true;

const willGoOutside = new Promise((resolve, reject) => {
  if (homeworkDone) {
    const reward = {
      name: 'play',
      desired: true,
    };
    resolve(reward);

  } else {
    const issue = new Error('Kid did not finish homework');
    reject(issue);
  }
});

const playGames = (reward) => {
  const message = `Kid gets to ${reward.name} outside`;
  return Promise.resolve(message);
};

willGoOutside
  .then(playGames)
  .then((resolved) => console.log(resolved))
  .catch((err) => console.error(err + '...too cool for school'));


// classes 
class Box {
  constructor(area, perimeter) {
    this.area = area;
    this.perimeter = perimeter;
  }

  consoleInfo() {
    console.log(`Area: ${this.area} sq ft`);
    console.log(`Perimeter: ${this.perimeter} ft`);
  }
}

const box = new Box(100, 40);

box.consoleInfo();

// subclasses
class RectangleBox extends Box {
  constructor(sideA, sideB) {
    const area = sideA * sideB;
    const perimeter = sideA * 2 + sideB * 2;

    super(area, perimeter);
    this.sideA = sideA;
    this.sideB = sideB;
  }
}

const rectangleBox = new RectangleBox(10, 5);
rectangleBox.consoleInfo();