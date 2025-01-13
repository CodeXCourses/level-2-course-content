# Assignment: Inheritance and Methods

## Objective

- Understand inheritance in JavaScript.
- Learn how to use methods and the `super` keyword.

## Instructions

### Part 1: Implement Inheritance

1. **Create a Parent Class**:

   - Create a class named `Animal` with a constructor that takes `name` as a parameter.
   - Add a method named `speak` that logs a message indicating the animal makes a noise.

2. **Create a Child Class**:
   - Create a class named `Dog` that extends `Animal`.
   - Add a constructor that takes `name` and `breed` as parameters, and calls the parent constructor.
   - Override the `speak` method to log a message indicating the dog barks.

### Part 2: Use Methods and the `super` Keyword

1. **Add Methods to Classes**:

   - In the `Dog` class, add a method named `fetch` that logs a message indicating the dog is fetching a ball.

2. **Use the `super` Keyword**:
   - Modify the `speak` method in the `Dog` class to call the `speak` method from the `Animal` class using `super.speak()` before logging the barking message.

### Note

> Tasks are not graded but should be treated as an assignment. These are for practice an understanding
