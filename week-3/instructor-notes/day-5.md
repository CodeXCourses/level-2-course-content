# Day 5: Advanced Functions

Welcome to Day 5 of Week 3! Today, we will cover advanced JavaScript function concepts, including constructor functions, factory functions, prototypes, and inheritance. We will also review the key concepts covered throughout the week.

## Objectives

- Understand constructor functions and factory functions.
- Learn about prototypes and inheritance in JavaScript.
- Review the key concepts covered during the week.

## Instructor Notes

### Constructor Functions and Factory Functions

- Explain what constructor functions are and how to use them.
- Explain what factory functions are and how to use them.
- Demonstrate the differences between constructor functions and factory functions.

### Prototypes and Inheritance

- Explain what prototypes are and how they work in JavaScript.
- Demonstrate how inheritance works using prototypes.

### Review of the Week's Concepts

- Summarize the key concepts covered throughout the week.
- Answer any questions and clarify any doubts students may have.

## Hourly Breakdown

### Hour 1: Constructor Functions and Factory Functions

- **Objectives**:
  - Understand and create constructor functions and factory functions.
- **Teaching Ideas**:

  - Constructor functions:

    - Example:

      ```js
      function Person(name, age) {
        this.name = name;
        this.age = age;
      }

      const alice = new Person('Alice', 25);
      console.log(alice.name); // Output: Alice
      console.log(alice.age); // Output: 25
      ```

  - Factory functions:

    - Example:

      ```js
      function createPerson(name, age) {
        return {
          name: name,
          age: age,
        };
      }

      const bob = createPerson('Bob', 30);
      console.log(bob.name); // Output: Bob
      console.log(bob.age); // Output: 30
      ```

### Hour 2: Prototypes and Inheritance, Week's Review

- **Objectives**:
  - Understand and use prototypes and inheritance.
  - Review key concepts from the week.
- **Teaching Ideas**:

  - Prototypes and inheritance:

    - Example:

      ```js
      function Animal(name) {
        this.name = name;
      }

      Animal.prototype.speak = function () {
        console.log(`${this.name} makes a noise.`);
      };

      const dog = new Animal('Dog');
      dog.speak(); // Output: Dog makes a noise.
      ```

  - Review key concepts:
    - Summarize the main points from each day:
      - Day 1: JavaScript Basics (variables, data types, operators, objects)
      - Day 2: Advanced JavaScript Concepts (this keyword, JSON)
      - Day 3: DOM Manipulation (getElementById, querySelector, preventDefault, JSON)
      - Day 4: Promises and Async/Await (promises, async/await, fetch, setTimeout)
  - Address any questions or clarifications needed by students.

## Code Snippets

```js
// Constructor Functions

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const alice = new Person('Alice', 25);
console.log(alice.name); // Output: Alice
console.log(alice.age); // Output: 25

// Factory Functions

function createPerson(name, age) {
  return {
    name: name,
    age: age,
  };
}

const bob = createPerson('Bob', 30);
console.log(bob.name); // Output: Bob
console.log(bob.age); // Output: 30

// Prototypes and Inheritance

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
};

const dog = new Animal('Dog');
dog.speak(); // Output: Dog makes a noise.
```
