//! Hour 1
// JavaScript Basics: Variables, Data Types, and Basic Operators

// Variables - var, let, const
// 'let' allows reassigning the value. 'const' is for constants.
let age = 25;
const PI = 3.14159;

// Data Types - String, Number, Boolean, Undefined, Null
let name = 'Alice'; // String
let score = 85; // Number
let isActive = true; // Boolean
let height; // Undefined
let color = null; // Null

// Explain the difference between primitive data types and reference data types.

// Basic Operators - Arithmetic, Assignment, Comparison, Logical
// Arithmetic: +, -, *, /, %
let sum = 10 + 5; // Addition
let difference = 10 - 5; // Subtraction
let product = 10 * 5; // Multiplication
let quotient = 10 / 2; // Division
let remainder = 10 % 3; // Modulus (Remainder)

// Assignment: =, +=, -=, *=, /=
let x = 10;
x += 5; // Same as x = x + 5

// Comparison: ==, ===, !=, !==, >, <, >=, <=
let isFive = score == 5; // Loose equality
let isExactFive = score === 5; // Strict equality

// Logical: &&, ||, !
let isAdult = age > 18 && isActive; // Logical AND
let canVote = age > 18 || isActive; // Logical OR
let isMinor = !isAdult; // Logical NOT

// Control Structures - If, For, While
// 'if' statement
if (age >= 18) {
  console.log('You are an adult.');
} else {
  console.log('You are a minor.');
}

// 'for' loop
for (let i = 0; i < 5; i++) {
  console.log('Iteration:', i);
}

// 'while' loop
let count = 5;
while (count > 0) {
  console.log('Count:', count);
  count--;
}

// Discuss the importance of control structures in creating dynamic and interactive JavaScript applications.

// Functions - Declaring and Using
function greet(name) {
  console.log('Hello, ' + name);
}
greet('Alice');

// Explain how functions are central to JavaScript programming. Discuss function parameters, return values, and scope.

// Mention the concept of hoisting in JavaScript and how it affects variables and function declarations.

// Arrays and Objects - Basic Introduction
let numbers = [1, 2, 3, 4, 5]; // Array
let personObj = { name: 'Alice', age: 25 }; // Object

// Briefly explain how arrays and objects are used to store collections of data and structured data, respectively.

//! Hour 2

// Understanding the 'this' Keyword in JavaScript

// 'this' in the Global Context
// In the global context, 'this' refers to the global object. In a browser, it's the 'window' object.
console.log("'this' in the global context:", this);

// 'this' Inside a Function
function showThis() {
  // In a regular function, 'this' refers to the global object, which is 'window' in a browser.
  // In strict mode ('use strict'), 'this' will be undefined in a function if it's not called as a method of an object.
  console.log("'this' inside a regular function:", this);
}
showThis();

// 'this' Inside an Object Method
const person = {
  name: 'Alice',
  greet: function () {
    // Inside a method, 'this' refers to the object the method is called on.
    // Here, 'this' will refer to the 'person' object.
    console.log("'this' inside an object method:", this.name);
  },
};
person.greet();

// 'this' with Arrow Functions
const personArrow = {
  name: 'Bob',
  greet: () => {
    // Arrow functions do not have their own 'this' context, instead they inherit 'this' from the parent scope.
    // Here, 'this' will refer to the global object, not 'personArrow'.
    console.log("'this' inside an arrow function:", this.name);
  },
};
personArrow.greet();

// 'this' with Event Listeners
// In the context of an event listener, 'this' refers to the element that received the event.
// Example assumes a button with id 'myButton' exists in your HTML.
document.getElementById('myButton').addEventListener('click', function () {
  // Here, 'this' refers to the element that triggered the event, the button with id 'myButton'.
  console.log("'this' in an event listener:", this);
});

// Demonstrating the Effect of Not Using .bind() with Object Methods
const person2 = {
  name: 'Charlie',
  greet: function () {
    console.log('Hello, ' + this.name);
  },
};

// Call the greet method directly - works as expected.
person.greet(); // Outputs: Hello, Charlie

// Assign the greet method to a new variable.
const greetFunction = person.greet;

// Call the greet function without its object context.
greetFunction(); // Outputs: Hello, undefined
// 'this' refers to the global object or undefined, not 'person'.

// Binding 'this' with .bind()
const personBind = {
  name: 'Charlie',
  greet: function () {
    console.log('Hello, ' + this.name);
  },
};
const bindGreet = personBind.greet.bind(personBind);
// The .bind() method sets 'this' within the greet function to 'personBind'.
bindGreet(); // Outputs: Hello, Charlie

// Discuss how 'this' loses its original context when a method is taken out of its object.
// The .bind() method is essential to set the 'this' context explicitly.

// Event Listener without .bind()
// Create a scenario where 'this' needs to be bound in an event listener.
const buttonHandler = {
  buttonText: 'Click me!',
  handleClick: function () {
    // If this function is used as an event handler, 'this' will not refer to 'buttonHandler' without binding.
    console.log(this.buttonText);
  },
};
document
  .getElementById('myButton')
  .addEventListener('click', buttonHandler.handleClick);
// In this case, 'this.buttonText' will be undefined because 'this' refers to the button, not 'buttonHandler'.

// Binding 'this' in Event Listeners
document
  .getElementById('myButton')
  .addEventListener('click', buttonHandler.handleClick.bind(buttonHandler));
// Now, 'this' inside handleClick correctly refers to 'buttonHandler'.

// Explain that in event listeners, 'this' refers to the element to which the listener is attached.
// Using .bind() allows us to maintain the intended context of 'this' within callback functions.

// Discuss how understanding the behavior of 'this' is crucial in JavaScript, especially when dealing with events, callbacks, and object-oriented programming.
// Emphasize the importance of the context in which 'this' is used and how it can lead to common errors if misunderstood.
