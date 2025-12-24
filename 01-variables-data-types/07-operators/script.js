// 1. Arithmetic Operators
const a = 10;
const b = 3;

const sum = a + b;          // Addition
const difference = a - b;   // Subtraction
const product = a * b;      // Multiplication
const quotient = a / b;     // Division
const remainder = a % b;    // Modulus
const exponentiation = a ** b; // Exponentiation

console.log('Sum:', sum);
console.log('Difference:', difference);
console.log('Product:', product);
console.log('Quotient:', quotient);
console.log('Remainder:', remainder);
console.log('Exponentiation:', exponentiation);

// Concatenation of strings
const str1 = "Hello, ";
const str2 = "World!";
const greeting = str1 + str2;
console.log('Greeting:', greeting);

// 2. Assignment Operators
let x = 5;
x += 3; // x = x + 3
console.log('After += :', x);
x -= 2; // x = x - 2
console.log('After -= :', x);
x *= 4; // x = x * 4
console.log('After *= :', x);
x /= 2; // x = x / 2
console.log('After /= :', x);
x %= 3; // x = x % 3
console.log('After %= :', x);
x **= 2; // x = x ** 2
console.log('After **= :', x);

// 3. Comparison Operators
const num1 = 10;
const num2 = 5;
const num3 = 10;

console.log('num1 == num2:', num1 == num2);
console.log('num1 == num3:', num1 == num3);
console.log('num1 === num3:', num1 === num3);
console.log('num1 !== num3:', num1 !== num3);
console.log('num1 > num2:', num1 > num2);
console.log('num1 < num2:', num1 < num2);
console.log('num1 >= num2:', num1 >= num2);
console.log('num1 <= num2:', num1 <= num2);