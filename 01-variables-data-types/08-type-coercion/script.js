let x = 5 + '5';
x = 5 + Number('5');
x = 5 * '5';
x = 5 + null;
x = Number(null);
x = Number(undefined);
x = Number(true);
x = Number(false);
console.log(x, typeof x); // "55" "string"
