// Start off the class with code review

// Section 1:
let number = 5;
let string = '3';
let combined = number + string;

function trickyVariables() {
  console.log(combined); 
}

// Section 2: 
function calculateAndLog() {
  let a = 10;
  let b = '20';
  let sum = a + b;
  let multiplied = a * b;
  console.log('Sum:', sum, 'Multiplied:', multiplied);
}

// Section 3:
let colors = ['red', 'green', 'blue'];
console.log(colors[3]);

// Section 4:
let student = {
  name: 'Alice',
  age: 20,
  isEnrolled: true,
};
console.log(student[age]);

// Section 5:
function greet(name) {
  return 'Hello, ' + name + '!';
}

// Section 6:
if (student.age > 18) {
  console.log(student.name + ' is an adult.');
} else {
  console.log(student.name + ' is a minor.');
}

// Section 7: Loops
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Section 8:
let uppercaseMessage = 'welcome'.toUpperCase();
console.log(uppercaseMessage);

// Section 9:
document.getElementById('demo').textContent = 'Hello, DOM!';

// Section 10:
function checkNumber(num) {
  if (isNaN(num)) {
    console.error('Not a number');
  } else {
    console.log("It's a number:", num);
  }
}

//! Errors:

// Snippet 1
function exampleOne() {
    console.log(aVariable);
}

// Snippet 2
function exampleTwo() {
    let number = 123;
    console.log(number.length);
}

// Snippet 3
function exampleThree() {
    if (true {
        console.log("This is true");
    }
}

// Snippet 4
function exampleFour() {
    let myObject;
    console.log(myObject.property);
}

// Snippet 5
function exampleFive() {
    let myVar = "Hello";
    let MyVar = "World";
    console.log(myvar);
}

// Snippet 6
function exampleSix() {
    let value = 10;;
    console.log(value);
}

// Snippet 7
function exampleSeven() {
    let string = "hello";
    string.push('!');
}

// Snippet 8
function exampleEight() {
    let myArray = new Array(-1);
}

// Snippet 9
function exampleNine() {
    if (true) {
        let innerVar = "Hello";
    }
    console.log(innerVar);
}

// Snippet 10
function exampleTen() {
    let message = 'Hello, ' + 'world"!';
    console.log(message);
}


