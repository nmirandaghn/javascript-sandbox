let x = Math.floor(Math.random() * 100 + 1); // Generates a random number between 1 and 100
let y = Math.floor(Math.random() * 50 + 1); // Generates a random number between 1 and 50

let sum = x + y;
let difference = x - y;
let product = x * y;
let quotient = x / y;
let remainder = x % y;

console.log(`${x} + ${y} = ${sum}`)
console.log(`${x} - ${y} = ${difference}`)
console.log(`${x} * ${y} = ${product}`)
console.log(`${x} / ${y} = ${quotient}`)
console.log(`${x} % ${y} = ${remainder}`)