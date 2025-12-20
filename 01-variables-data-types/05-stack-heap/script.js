// Values are stored in stack
const name = "Alice";
const age = 30;

// Reference values are stored in heap
const person = {
  name: "Bob",
  age: 25
};

let newName = name; // Copying primitive value
newName = "Charlie"; // Changing newName does not affect name

let newPerson = person; // Copying reference value
newPerson.age = 26; // Changing newPerson affects person
newPerson.name = "David";

console.log(name, newName)
console.table(person)