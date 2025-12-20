// Ways to declare a variable
// var, let, const
let firstName = "John";
let lastName = "Doe";
let age = 30;

console.log(firstName, lastName, age)

// Naming Conventions
// - Only letters, numbers, underscores and dollar signs
// - Can't start with a number

// Multi-Word Formatting
// firstName     camelCase
// first_name    underscore
// FirstName     PascalCase
// firstname     lowercase

// Reassigning Variables
firstName = "Jane";
age = 25;
console.log(firstName, age)

let score = 1;
console.log(score)
if (true) {
  score += 1; // score = score + 1
}
console.log(score)

const x = 100;
// x = 200; // This will cause an error because x is a constant
console.log(x)

const array = [1, 2, 3];
array.push(4); // Modifying the contents of the array is allowed
console.log(array)

const person = { name: "Alice", age: 28 };
console.table(person)

person.email = "alice@xyz.com"; // Adding a new property to the object
console.table(person)

// Declare multiple variables in one line
let city = "New York", country = "USA", continent = "North America";
console.log(city, country, continent)

console.log(nothing)