let x;
const name = "John Doe";
const age = 30;

x = `Hello, World!. My name is ${name} and I am ${age} years old.`;
console.log(x)

// Template literals allow for multi-line strings
x = `This is a multi-line string.
It spans multiple lines.
Isn't that cool?`;
console.log(x)

// Property and method access on strings
const s = new String("Hello, World!");
x = typeof s;
x = x.length
x = s[0]
x = s.__proto__;
x = s.toUpperCase();
x = s.toLocaleLowerCase();
x = s.indexOf("World");
x = s.charAt(7);
x = s.split(", ");
x = s.replace("World", "JavaScript");
x = s.slice(0, 5); // "Hello"
x = s.includes("Hello");
x = s.startsWith("Hello");
x = s.endsWith("!");

console.log(x);