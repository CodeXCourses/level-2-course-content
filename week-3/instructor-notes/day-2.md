# Day 2: Advanced JavaScript Concepts

Welcome to Day 2 of Week 3! Today, we will cover advanced JavaScript concepts, including the `this` keyword, and working with JSON (JavaScript Object Notation) including parsing and stringifying JSON.

## Objectives

- Understand the `this` keyword and its usage in different contexts.
- Learn how to use JSON and parse JSON strings into JavaScript objects.
- Learn how to stringify JavaScript objects into JSON strings.

## Instructor Notes

### Introduction to the `this` Keyword

- Explain the `this` keyword and its binding.
- Demonstrate `this` in different contexts: global, object method, constructor function, and event handlers.

### Using JSON and Parsing JSON

- Explain what JSON is and why it's useful.
- Demonstrate how to parse JSON strings into JavaScript objects.
- Demonstrate how to stringify JavaScript objects into JSON strings.

## Hourly Breakdown

### Hour 1: Introduction to the `this` Keyword

- **Objectives**:
  - Understand the `this` keyword and its binding.
- **Teaching Ideas**:

  - Explain the `this` keyword:

    - Global context:

      ```js
      console.log(this); // In a browser, this refers to the window object
      ```

    - Object method context:

      ```js
      const person = {
        name: 'Alice',
        greet: function () {
          console.log(`Hello, my name is ${this.name}`);
        },
      };
      person.greet(); // 'this' refers to the person object
      ```

    - Constructor function context:

      ```js
      function Person(name) {
        this.name = name;
      }
      const bob = new Person('Bob');
      console.log(bob.name); // 'this' refers to the new instance of Person
      ```

    - Event handler context:

      ```js
      const button = document.querySelector('button');
      button.addEventListener('click', function () {
        console.log(this); // 'this' refers to the button element
      });
      ```

### Hour 2: Using JSON and Parsing JSON

- **Objectives**:
  - Understand JSON and its usage.
  - Parse JSON strings into JavaScript objects.
  - Stringify JavaScript objects into JSON strings.
- **Teaching Ideas**:

  - Explain what JSON is:
    - A lightweight data-interchange format that is easy for humans to read and write, and easy for machines to parse and generate.
  - Demonstrate parsing JSON strings:

    ```js
    const jsonString = '{"name": "Alice", "age": 25}';
    const jsonObj = JSON.parse(jsonString);
    console.log(jsonObj.name); // Output: Alice
    console.log(jsonObj.age); // Output: 25
    ```

  - Demonstrate stringifying JavaScript objects:

    ```js
    const obj = {
      name: 'Bob',
      age: 30,
    };
    const jsonString = JSON.stringify(obj);
    console.log(jsonString); // Output: '{"name":"Bob","age":30}'
    ```

## Code Snippets

```js
// `this` Keyword

// Global context
console.log(this); // In a browser, this refers to the window object

// Object method context
const person = {
  name: 'Alice',
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};
person.greet(); // 'this' refers to the person object

// Constructor function context
function Person(name) {
  this.name = name;
}
const bob = new Person('Bob');
console.log(bob.name); // 'this' refers to the new instance of Person

// Event handler context
const button = document.querySelector('button');
button.addEventListener('click', function () {
  console.log(this); // 'this' refers to the button element
});

// JSON

// Parsing JSON
const jsonString = '{"name": "Alice", "age": 25}';
const jsonObj = JSON.parse(jsonString);
console.log(jsonObj.name); // Output: Alice
console.log(jsonObj.age); // Output: 25

// Stringifying JavaScript objects
const obj = {
  name: 'Bob',
  age: 30,
};
const jsonString = JSON.stringify(obj);
console.log(jsonString); // Output: '{"name":"Bob","age":30}'
```
