//! Example 1: Syntax Error
// Syntax Error 1: Misspelled Keyword
funtion greet() {
  console.log('Hello World');
}

// Teaching Point: Discuss how misspelling programming keywords, like 'function', leads to syntax errors. Highlight the importance of careful typing and relying on code editors' syntax highlighting.

// Syntax Error 2: Unclosed String Literal
let text = 'This is a string;
console.log(text);

// Teaching Point: Highlight the importance of closing string literals properly. Discuss error messages indicating "Unexpected end of input" or similar.

// Syntax Error 3: Mismatched Parentheses
console.log('Hello World';

// Teaching Point: Discuss the consequences of missing or mismatched parentheses and how they can lead to syntax errors.

// Syntax Error 4: Unmatched Brackets in Arrays
let numbers = [1, 2, 3;
console.log(numbers);

// Teaching Point: Emphasize the need for matching brackets in array declarations.

// Syntax Error 5: Incorrect Object Property Assignment
let obj = {name: 'Alice', 'age': 25;

// Teaching Point: Discuss proper object literal syntax. Emphasize the importance of closing braces and using commas to separate properties.

// Syntax Error 6: Improper Variable Declaration
let 1stNumber = 5;

// Teaching Point: Talk about the rules for naming variables in JavaScript. Explain that variable names cannot start with a number.

// Syntax Error 7: Misplaced Semi-colon Inside For Loop
for (let i = 0; i < 5; i++;) {
  console.log(i);
}
// Teaching Point: Discuss the structure of for loops and the proper placement of semicolons within them.

// Syntax Error 8: Missing Plus Sign in Concatenation
let fullName = 'Alice' 'Johnson';
console.log(fullName);

// Teaching Point: Explain string concatenation in JavaScript and the importance of using the plus sign (+) to concatenate strings.

//! Example 2: Reference Error
// Reference Error 1: Using an Undeclared Variable
console.log(undeclaredVariable);

// Teaching Point: Emphasize the importance of declaring variables before using them. Discuss how JavaScript throws a ReferenceError when trying to access an undeclared variable.

// Reference Error 2: Accessing a Variable Before Declaration
console.log(x);
let x = 5;

// Teaching Point: Explain variable hoisting in JavaScript and how `let` and `const` declarations do not hoist the variable's value, leading to ReferenceError if accessed before declaration.

// Reference Error 3: Using a Variable in a Different Scope
function testScope() {
  let scopedVar = 'I am local to testScope';
}
console.log(scopedVar);

// Teaching Point: Discuss the scope in JavaScript, specifically block scope and function scope. Explain how variables declared within a function cannot be accessed outside of it.

// Reference Error 4: Misspelling a Variable Name
let myVariable = 10;
console.log(myVaraible);  // Misspelled variable name

// Teaching Point: Highlight how typos in variable names can lead to ReferenceErrors. Emphasize the importance of consistent and clear naming conventions.

// Reference Error 5: Using a Deleted Object Property
let person = { name: 'Alice', age: 30 };
delete person.age;
console.log(person.age);

// Teaching Point: Discuss the `delete` operator and how accessing a deleted object property results in `undefined`, which if not handled, can lead to ReferenceErrors in subsequent code.

// Reference Error 6: Accessing a Function Out of its Scope
{
  function innerFunction() {
    console.log('Inside the block');
  }
}
innerFunction();

// Teaching Point: Explain block scope in JavaScript and how functions (when using certain syntax) are scoped to the block they are declared in.

// Reference Error 7: Referencing a Variable in a Closure After Outer Function Completes
function outerFunction() {
  let outerVar = 'Outer';
  return function() {
    console.log(outerVar);
  };
}
let innerFunc = outerFunction();
outerVar = 'New Value';
innerFunc();

// Teaching Point: Discuss closures in JavaScript. Explain how the inner function maintains a reference to the outer function's variables, but altering those references outside doesn't affect the closure.

// Reference Error 8: Incorrectly Referencing `this` in an Arrow Function
const obj = {
  value: 42,
  getValue: () => {
    console.log(this.value);  // 'this' does not refer to obj, but to the global context
  }
};
obj.getValue();

// Teaching Point: Explain how `this` works in arrow functions and how it differs from regular functions, leading to ReferenceErrors when the context is not as expected.

//! Example 3: Type Error
// Type Error 1: Calling a Method on an Incorrect Data Type
let num = 5;
console.log(num.toUpperCase());

// Teaching Point: Explain that `toUpperCase` is a string method and cannot be used on numbers. Highlight the importance of understanding data types and their methods in JavaScript.

// Type Error 2: Accessing a Property on Null or Undefined
let obj = null;
console.log(obj.length);

// Teaching Point: Discuss how accessing properties or methods on `null` or `undefined` leads to Type Errors. Emphasize the need to check for these values before accessing properties.

// Type Error 3: Using Non-Function as a Constructor
let item = 'Hello World';
let instance = new item();

// Teaching Point: Explain that the `new` keyword is used for creating instances from constructors (functions or classes). Using it with non-constructor types (like strings) results in Type Errors.

// Type Error 4: Incorrect Argument Type for a Function
function addNumbers(a, b) {
  return a + b;
}
console.log(addNumbers(5, '10'));

// Teaching Point: Discuss how passing arguments of incorrect types to functions can lead to unexpected results or Type Errors, especially when strict type checking is performed.

// Type Error 5: Assigning to a Read-Only Property
const myObject = {};
Object.defineProperty(myObject, 'readOnlyProp', {
  value: 42,
  writable: false
});
myObject.readOnlyProp = 100;

// Teaching Point: Explain the concept of writable properties in JavaScript objects and how attempting to modify a read-only property leads to a Type Error.

// Type Error 6: Attempting to Modify a String
let myString = 'Hello';
myString[0] = 'Y';

// Teaching Point: Talk about the immutability of strings in JavaScript. Discuss how attempting to change a character in a string like an array leads to a Type Error.

// Type Error 7: Calling Undefined as a Function
let undefinedFunction;
undefinedFunction();

// Teaching Point: Highlight how attempting to call an undefined variable as if it were a function results in a Type Error. Discuss the importance of ensuring functions are defined before calling them.

// Type Error 8: Using Object as an Array
let objArray = {};
objArray.push('New Element');

// Teaching Point: Explain that certain array methods are not available on generic objects. Discuss the difference between arrays and object literals in JavaScript.

//! Example 4: Logic Error
// Logic Error 1: Incorrect Accumulation in Loop
let total = 10;
for (let i = 0; i < 10; i++) {
    total = total + i;
}
console.log("Total:", total);

// Teaching Point: Explain how the initial value of `total` and the loop's logic lead to an incorrect result. Discuss the importance of initializing variables correctly and understanding the logic inside loops.

// Logic Error 2: Off-By-One Error in Loop
let items = ['apple', 'banana', 'orange'];
for (let i = 0; i <= items.length; i++) {
    console.log(items[i]);
}

// Teaching Point: Discuss the common 'off-by-one' error in loops. Explain that array indices start at 0 and the loop condition should be `i < items.length` to avoid undefined values.

// Logic Error 3: Incorrect Conditional Logic
let age = 20;
if (age > 18 || age < 21) {
    console.log('Age is between 19 and 20');
}

// Teaching Point: Explain how the conditional logic here is flawed. Discuss the correct use of logical operators (&&, ||) and the importance of testing all possible conditions.

// Logic Error 4: Misunderstanding Function Side Effects
let balance = 100;
function makeTransaction(price) {
    balance -= price;
    return balance;
}
console.log(makeTransaction(50));
console.log("Balance after transaction:", balance);

// Teaching Point: Discuss side effects in functions. Explain how this function not only returns the new balance but also modifies the global `balance` variable, which might not be intended.

// Logic Error 5: Infinite Loop
let counter = 0;
while (counter < 5) {
    console.log('In loop');
    // Forgot to increment counter
}

// Teaching Point: Talk about the importance of ensuring that loops have correct and reachable termination conditions to avoid infinite loops.

// Logic Error 6: Incorrectly Assuming Array Contents
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let number of numbers) {
    sum += number * number;
}
console.log("Sum of squares:", sum);

// Teaching Point: Explain the assumption that each array element is used as intended. Here, the logic calculates the sum of squares, but what if the requirement was just the sum?

// Logic Error 7: Misusing Assignment in Conditional
let isActive = false;
if (isActive = true) {
    console.log("It's active!");
}

// Teaching Point: Discuss how using the assignment operator (`=`) instead of the equality operator (`==` or `===`) in a conditional statement is a common logic error.

//! Example 5: Async Error Handling
fetch('https://api.example.com/data')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error('Error fetching data:', error));

// Teaching Point: Talk about asynchronous operations and error handling with promises.


//! Example 6: Scope Error
function testScope() {
  let localVar = 'I am local';
}
console.log(localVar);

// Teaching Point: Discuss variable scope. Explain that localVar is not accessible outside the function, leading to a ReferenceError.

//! Example 7: Null or Undefined Error
let obj = null;
console.log(obj.property);

// Teaching Point: Highlight errors when trying to access properties of null or undefined. Discuss checking for null/undefined before accessing properties.

//! Example 8: Array Index Out of Bounds
let array = [1, 2, 3];
console.log(array[5]);

// Teaching Point: Explain how accessing an array index that doesn't exist doesn't throw an error but returns 'undefined'. Discuss array bounds.

//! Example 9: Division by Zero
let division = 10 / 0;
console.log(division);

// Teaching Point: Show that division by zero in JavaScript doesn't throw an error but results in 'Infinity'. Discuss implications in calculations.

//! Example 10: Incorrect Use of 'this' in Arrow Functions
const obj = {
  value: 42,
  getValue: () => {
    console.log(this.value); // 'this' refers to the global object, not 'obj'
  },
};
obj.getValue();

// Teaching Point: Discuss 'this' context in arrow functions versus regular functions. Explain how 'this' behaves differently in arrow functions.

//! Example 11: Attempting to Modify a Constant
const constantValue = 5;
constantValue = 10; // This will throw an error

// Teaching Point: Explain const declarations and how attempting to change a constant's value leads to a TypeError.

//! Example 12: Incorrect JSON Parsing
let jsonString = '{invalid JSON}';
try {
  let parsed = JSON.parse(jsonString);
} catch (error) {
  console.error('JSON parsing error:', error.message);
}

// Teaching Point: Discuss JSON parsing and error handling in try-catch blocks. Show how malformed JSON leads to SyntaxErrors.
