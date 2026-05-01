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
let colours = null; // Use null when we want to clear the value of a variaible

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

// Arrays
let colours = ['red', 'blue', 'green'];
console.log(colours);

// Adding another element
colours[3] = 'yellow';
console.log(colours);

// JS can store different data types in an array
colours[4] = 1;
console.log(colours);

// Printing a chosen element
console.log(colours[1]);

// Properties of an array
console.log(colours.length);
