// Strings 
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;

// Number
const age = 30;
const temp = 98.6;

// Boolean
const hasKids = true;

// Null
const aptNumber = null;

// Undefined
let score;

// Symbol
const uniqueId = Symbol("id");

// BigInt
const bigNumber = 9007199254741991n;

// Reference Types
const numbers = [1, 2, 3, 4, 5]; // Array
const person = { name: "Alice", age: 25 }; // Object

function greet() { // Function
  return "Hello!";
}
const output = greet;

console.log(output, typeof output); // John Doe string