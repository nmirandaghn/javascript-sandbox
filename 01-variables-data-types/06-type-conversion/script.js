let amount = '100.5';
console.log(amount, typeof amount); // '100' string

// Convert string to number
// amount = +amount;
amount = Number(amount);
console.log(amount, typeof amount); // 100 number

// amount = amount.toString();
amount = String(amount);
console.log(amount, typeof amount); // '100' string

amount = parseFloat(amount);
console.log(amount, typeof amount); // 100 number

amount = Boolean(-amount);
console.log(amount, typeof amount); // true boolean