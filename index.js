// First JavaScript code!
console.log('Hello World');

let name = 'Jon';
console.log(name);

const interest = '0.3';
// let interest = '0.5';
console.log(interest)

// Primitive Types
// let name = 'Jon' -> String Literal
let age = 21; // -> Number Literal
let isTrue = true; // -> Boolean Literal
let firstName = undefined; // Automatically set to undefined either way
let selectedColour = null; // Use null when we want to clear the value of a variaible

let person = {
    name: 'Jon',
    age: 30
};

console.log(person);

// Dot Notaion
person.name = 'JB';
console.log(person.name);

// Bracket Notation
person['name'] = 'Ben';
console.log(person.name);

// Accessing a property using the bracket notation in a dynamic way
let selection = 'name'
person[selection] = 'Benedikt';
console.log(person.name);


