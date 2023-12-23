/* Starter code: https://github.com/codex-demos/devtools-day1.git */

// Error 1: Undefined variable
let message = 'Welcome to the debugging exercise!';
console.log(mesage); // 'mesage' is misspelled

// Error 2: Incorrect DOM selector
let button = document.querySelector('.actionButton'); // Should use '#actionButton'
button.addEventListener('click', eventHandler); // Error 3: Incorrect function name

// Error 3: Function not defined
function eventHandler() {
  console.log('Button clicked');
  displayOutput();
}

// Error 4: Missing function invocation
function displayOutput() {
  let output = document.querySelector('#output'); // Error 5: Incorrect use of querySelectorAll
  output.innerText = 'You clicked the button!';
}

// Error 6: Misusing variable scope
function updateMessage() {
  let localMessage = 'Updated message';
}

updateMessage();
console.log(localMessage); // Error: localMessage is not defined in this scope

// Error 7: Incorrect function invocation in callback
document.getElementById('testButton').addEventListener('click', testFunction());

// Error 8: Function invoked instead of passed as reference
function testFunction() {
  console.log('Test function executed');
}

// Error 9: Incorrect arithmetic operation
let number1 = 10;
let number2 = 5;
console.log('Sum is: ' + (number1 - number2)); // Incorrect operation, should be +

// Error 10: Null reference error
let nullVar = null;
console.log(nullVar.length); // Error: Cannot read property 'length' of null

// Error 11: Case sensitivity error
let caseSensitiveVar = 'Case matters';
console.log(CaseSensitiveVar); // 'CaseSensitiveVar' is not defined

// Error 12: Logging string instead of variable
let importantData =
  "This string must be logged to the console. It's important!";
console.log('importantData');

// Error 13: Undefined function call
tryToCallFunction();

// Error 14: Incorrectly referencing an object property
let user = { namee: 'Alice' };
console.log(user.name); // 'name' is spelled incorrectly

// Error 15: Using a string method on a number
let someNumber = 123;
console.log(someNumber.toUpperCase()); // toUpperCase is a string method

// Error 16: Missing quotes around a string
let greeting = Hello, world!; // Missing quotes around the string

// Error 17: Misplaced semicolon inside for loop
for (let i = 0; i < 5; i++); {
    console.log(i);
}

// Error 18: Confusing == with ===
let five = '5';
if (five === 5) {
    console.log('Five is equal to 5');
} else {
    console.log('Five is not equal to 5'); // This will be logged

// Error 19: Accidentally overwriting a built-in method
Array.prototype.push = function() {
    console.log('Array push method is overwritten');
};
let numbers = [];
numbers.push(1); // This will not work as expected
console.log(numbers);

// Error 20: Using an undeclared variable
console.log(x);
x = 5;

// Error 21: Setting a property on a primitive value
let myString = 'Hello';
myString.property = 'World';
console.log(myString.property); // Primitive values like strings can't have properties
