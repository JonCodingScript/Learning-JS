// Variables

console.log('\nPart - Variables');
let favNumber = 16;
// 16
console.log(favNumber);
// 16 + 1 = 17
console.log(favNumber + 1);

// Data Types
console.log('\nPart - Data Types');
// Number Datatype
console.log(5 + 5);
// String Data Type
console.log('5 + 5');

// Operators
/*

    Signs   |           Meaning
     ==     |   equal to
     ===    |   strictly equal to
     !=     |   not equal to
     !==    |   strictly not equal to
     >      |   greater than
     <      |   less than
     >=     |   greater than or equal to
     <=     |   less than or equal to

*/

console.log('\nPart - Operators');
// True
console.log(5 > 3);
// True
console.log(10 === 10);
// False
console.log(7 <= 4);

let age = 18;

if (age >= 18){
    console.log('You are an adult')
}else{
    console.log('You are not an adult')
}

// Logical Operators

/*
   Signs    |           Meaning
     &&     |   both sides must be true
     ||     |   at least one side must be true
     !      |   flips true and false

*/

// Loops
console.log('\nPart - Loops');

// While Loop
let x = 1;
while(x < 10){
    console.log('x = ' + x);
    x += 1;
}

// For Loop
for (let y = 1; y <= 10; y++){
    console.log ('y = ' + y);
}

// Functions
console.log('\nPart - Functions');

let name = 'JB';
function greet(name){
    console.log('Hello ' + name);
}

greet(name);

function sum(num1, num2){
    return num1 + num2;
}

console.log(sum(100, 15));

// Arrays
console.log('\nPart - Arrays');

// Arrays use square brackets [] and the values are separated by commas ,

let programLanguages = ['HTML', 'CSS', 'JavaScript'];

console.log(programLanguages[0]);
console.log(programLanguages);

// Adding another item to the end of an array
programLanguages.push('C#');
console.log(programLanguages);
// Adding another item to the end of an array
programLanguages.pop();
console.log(programLanguages);

// Practice Exercise
let users = ['John', 'Susan', 'Thomas', 'Alex'];

function signup(user){
    users.push(user);
}

signup('Mark');
console.log(users);

// Objects
console.log('\nPart - Objects');
let user = {
    name: 'Jon',
    age: 21,
    isStudent: true
};

console.log(user);

// Dot Notaion
console.log(user.name);
console.log(user.age);
console.log(user.isStudent);

// forEach Function
console.log('\nPart - forEach Function');
let users2 = ['John', 'Susan', 'Thomas', 'Alex'];

users2.forEach(printName);

function printName(name){
    console.log('Hello, my name is ' + name);
}

console.log('Different Syntax');
users2.forEach((name) => {
    console.log('Hello, my name is ' + name);
});