# Day 1: Introduction to Classes

Welcome to Day 1 of Week 7! Today, we will review constructor functions and prototypes, and introduce classes and their basic syntax in JavaScript.

## Objectives

- Review constructor functions and prototypes.
- Understand the basics of JavaScript classes.
- Learn the syntax and features of classes in JavaScript.

## Instructor Notes

### Review Constructor Functions and Prototypes

- Explain what constructor functions are and how they are used to create objects.
- Review how prototypes are used to add methods and properties to constructor functions.

### Introduction to Classes

- Introduce the concept of classes as a syntactic sugar over constructor functions and prototypes.
- Explain the benefits of using classes for creating objects.
- Demonstrate the basic syntax of classes in JavaScript.

## Hourly Breakdown

### Hour 1: Review Constructor Functions and Prototypes

- **Objectives**:
  - Review constructor functions and prototypes.
- **Teaching Ideas**:

  - Explain constructor functions:

    - Example:

      ```js
      function Person(name, age) {
        this.name = name;
        this.age = age;
      }

      const person1 = new Person("Alice", 30);
      console.log(person1.name); // Alice
      console.log(person1.age); // 30
      ```

  - Review prototypes:

    - Example:

      ```js
      Person.prototype.greet = function () {
        console.log(`Hello, my name is ${this.name}`);
      };

      person1.greet(); // Hello, my name is Alice
      ```

### Hour 2: Introduction to Classes

- **Objectives**:
  - Understand the basics of JavaScript classes.
  - Learn the syntax and features of classes in JavaScript.
- **Teaching Ideas**:

  - Introduce classes as syntactic sugar over constructor functions and prototypes:

    - Example:

      ```js
      class Person {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }

        greet() {
          console.log(`Hello, my name is ${this.name}`);
        }
      }

      const person1 = new Person("Alice", 30);
      person1.greet(); // Hello, my name is Alice
      ```

  - Explain the `constructor` method:
    - The `constructor` method is a special method for creating and initializing objects created with a class.
  - Demonstrate adding methods to classes:

    - Example:

      ```js
      class Person {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }

        greet() {
          console.log(`Hello, my name is ${this.name}`);
        }

        haveBirthday() {
          this.age += 1;
          console.log(`Happy Birthday! You are now ${this.age} years old.`);
        }
      }

      const person1 = new Person("Alice", 30);
      person1.greet(); // Hello, my name is Alice
      person1.haveBirthday(); // Happy Birthday! You are now 31 years old.
      ```

## Code Snippets

```js
// Example of a constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const person1 = new Person("Alice", 30);
console.log(person1.name); // Alice
console.log(person1.age); // 30

// Adding a method using prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person1.greet(); // Hello, my name is Alice

// Example of a class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }

  haveBirthday() {
    this.age += 1;
    console.log(`Happy Birthday! You are now ${this.age} years old.`);
  }
}

const person1 = new Person("Alice", 30);
person1.greet(); // Hello, my name is Alice
person1.haveBirthday(); // Happy Birthday! You are now 31 years old.
```
