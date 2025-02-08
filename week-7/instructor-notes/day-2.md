# Day 2: Inheritance and Methods

Welcome to Day 2 of Week 7! Today, we will learn about inheritance in JavaScript, using methods, and the `super` keyword. We'll cover practical examples to help understand these concepts.

## Objectives

- Understand inheritance in JavaScript.
- Learn how to use methods and the `super` keyword.
- Explore practical examples to demonstrate these concepts.

## Instructor Notes

### Inheritance in JavaScript

- Explain what inheritance is and why it's useful.
- Demonstrate how to implement inheritance in JavaScript using classes.

### Using Methods and the `super` Keyword

- Explain how to use methods in classes.
- Introduce the `super` keyword and its use in calling parent class methods.

## Hourly Breakdown

### Hour 1: Inheritance in JavaScript

- **Objectives**:
  - Understand inheritance in JavaScript.
  - Learn how to implement inheritance using classes.
- **Teaching Ideas**:

  - Explain inheritance:
    - Inheritance allows one class to inherit properties and methods from another class.
  - Demonstrate inheritance with classes:

    - Example:

      ```js
      class Animal {
        constructor(name) {
          this.name = name;
        }

        speak() {
          console.log(`${this.name} makes a noise.`);
        }
      }

      class Dog extends Animal {
        constructor(name, breed) {
          super(name);
          this.breed = breed;
        }

        speak() {
          console.log(`${this.name} barks.`);
        }
      }

      const dog = new Dog("Rex", "German Shepherd");
      dog.speak(); // Rex barks.
      ```

### Hour 2: Using Methods and the `super` Keyword

- **Objectives**:
  - Learn how to use methods in classes.
  - Understand the `super` keyword and its use in calling parent class methods.
- **Teaching Ideas**:

  - Using methods in classes:

    - Demonstrate adding methods to classes:

      ```js
      class Animal {
        constructor(name) {
          this.name = name;
        }

        speak() {
          console.log(`${this.name} makes a noise.`);
        }
      }

      class Dog extends Animal {
        constructor(name, breed) {
          super(name);
          this.breed = breed;
        }

        speak() {
          console.log(`${this.name} barks.`);
        }

        fetch() {
          console.log(`${this.name} is fetching a ball.`);
        }
      }

      const dog = new Dog("Rex", "German Shepherd");
      dog.speak(); // Rex barks.
      dog.fetch(); // Rex is fetching a ball.
      ```

  - The `super` keyword:

    - Explain that `super` is used to call the constructor of the parent class.
    - Demonstrate using `super` to call parent class methods:

      ```js
      class Animal {
        constructor(name) {
          this.name = name;
        }

        speak() {
          console.log(`${this.name} makes a noise.`);
        }
      }

      class Dog extends Animal {
        constructor(name, breed) {
          super(name);
          this.breed = breed;
        }

        speak() {
          super.speak(); // Calls the parent class's speak method
          console.log(`${this.name} barks.`);
        }
      }

      const dog = new Dog("Rex", "German Shepherd");
      dog.speak();
      // Rex makes a noise.
      // Rex barks.
      ```

## Code Snippets

```js
// Example of inheritance with classes
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex", "German Shepherd");
dog.speak(); // Rex barks.

// Adding methods to classes
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }

  fetch() {
    console.log(`${this.name} is fetching a ball.`);
  }
}

const dog = new Dog("Rex", "German Shepherd");
dog.speak(); // Rex barks.
dog.fetch(); // Rex is fetching a ball.

// Using the super keyword to call parent class methods
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    super.speak(); // Calls the parent class's speak method
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex", "German Shepherd");
dog.speak();
// Rex makes a noise.
// Rex barks.
```
