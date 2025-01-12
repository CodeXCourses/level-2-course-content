# Day 1: JavaScript Basics

Welcome to Week 3! Today, we will review JavaScript basics, including variables, data types, and operators. We will also cover objects and properties, as well as the differences between dot notation and bracket notation.

## Objectives

- Review variables, data types, and operators.
- Understand objects and their properties.
- Learn the differences between dot notation and bracket notation for accessing object properties.

## Instructor Notes

### Review Variables, Data Types, and Operators

- Variables: `var`, `let`, `const`
- Data types: `string`, `number`, `boolean`, `object`, `array`, `null`, `undefined`
- Operators: Arithmetic, assignment, comparison, logical

### Objects and Properties

- Definition of objects in JavaScript
- Creating objects
- Accessing and modifying properties

### Dot Notation vs. Bracket Notation

- Dot notation: Easier and more readable
- Bracket notation: More flexible, useful for dynamic properties

## Hourly Breakdown

### Hour 1: Review Variables, Data Types, and Operators

- **Objectives**:
  - Understand and review variables, data types, and operators.
- **Teaching Ideas**:

  - Review variables:

    - `var`, `let`, `const`
    - Example:

      ```js
      let name = 'John';
      const age = 30;
      var isStudent = true;
      ```

  - Review data types:

    - `string`, `number`, `boolean`, `object`, `array`, `null`, `undefined`
    - Example:

      ```js
      let str = 'Hello, World!';
      let num = 42;
      let bool = true;
      let obj = { key: 'value' };
      let arr = [1, 2, 3];
      let nothing = null;
      let notDefined;
      ```

  - Review operators:

    - Arithmetic: `+`, `-`, `*`, `/`, `%`
    - Assignment: `=`, `+=`, `-=`, `*=`, `/=`
    - Comparison: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
    - Logical: `&&`, `||`, `!`
    - Example:

      ```js
      let a = 10;
      let b = 20;
      let sum = a + b; // Arithmetic
      a += 10; // Assignment
      let isEqual = a == b; // Comparison
      let isTrue = a > 5 && b < 25; // Logical
      ```

### Hour 2: Objects and Properties, Dot Notation vs. Bracket Notation

- **Objectives**:
  - Understand objects and their properties.
  - Learn dot notation and bracket notation.
- **Teaching Ideas**:

  - Define objects and their properties:

    - Example:

      ```js
      let person = {
        name: 'Alice',
        age: 25,
        isStudent: false,
      };
      ```

  - Access and modify properties:

    - Example:

      ```js
      // Access properties
      console.log(person.name); // Dot notation
      console.log(person['age']); // Bracket notation

      // Modify properties
      person.name = 'Bob';
      person['age'] = 30;
      ```

  - Explain dot notation vs. bracket notation:

    - Dot notation: Easier and more readable
    - Bracket notation: More flexible, useful for dynamic properties
    - Example:

      ```js
      let propertyName = 'name';
      console.log(person[propertyName]); // Bracket notation with dynamic property
      ```

## Code Snippets

```js
// Variables
let name = 'John';
const age = 30;
var isStudent = true;

// Data Types
let str = 'Hello, World!';
let num = 42;
let bool = true;
let obj = { key: 'value' };
let arr = [1, 2, 3];
let nothing = null;
let notDefined;

// Operators
let a = 10;
let b = 20;
let sum = a + b; // Arithmetic
a += 10; // Assignment
let isEqual = a == b; // Comparison
let isTrue = a > 5 && b < 25; // Logical

// Objects and Properties
let person = {
  name: 'Alice',
  age: 25,
  isStudent: false,
};

// Accessing and Modifying Properties
console.log(person.name); // Dot notation
console.log(person['age']); // Bracket notation

person.name = 'Bob';
person['age'] = 30;

// Dot Notation vs. Bracket Notation
let propertyName = 'name';
console.log(person[propertyName]); // Bracket notation with dynamic property
```
