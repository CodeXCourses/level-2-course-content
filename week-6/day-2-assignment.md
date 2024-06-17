# Assignment: Inheritance and Methods

## Objective

- Understand inheritance in JavaScript.
- Learn how to use methods and the `super` keyword.

## Instructions

### Part 1: Implement Inheritance

1. **Create a Parent Class**:

   - Create a class named `Animal` with a constructor that takes `name` as a parameter.
   - Add a method named `speak` that logs a message indicating the animal makes a noise.
   - **Verification**: Include the class code and a screenshot of the console output.

2. **Create a Child Class**:
   - Create a class named `Dog` that extends `Animal`.
   - Add a constructor that takes `name` and `breed` as parameters, and calls the parent constructor.
   - Override the `speak` method to log a message indicating the dog barks.
   - **Verification**: Include the class code and a screenshot of the console output.

### Part 2: Use Methods and the `super` Keyword

1. **Add Methods to Classes**:

   - In the `Dog` class, add a method named `fetch` that logs a message indicating the dog is fetching a ball.
   - **Verification**: Include the class code and a screenshot of the console output.

2. **Use the `super` Keyword**:
   - Modify the `speak` method in the `Dog` class to call the `speak` method from the `Animal` class using `super.speak()` before logging the barking message.
   - **Verification**: Include the class code and a screenshot of the console output.

## Submission

- **GitHub Repository**: Create a repository named `js-inheritance` and push the following:
  - The JavaScript file with the class code.
  - Screenshots of all steps executed.
- **Submission Link**: Submit the URL of your GitHub repository.

## Rubric

| Criteria                          | Limited (0 pts)                                     | Partial (3 pts)                     | Complete (5 pts)                              |
| --------------------------------- | --------------------------------------------------- | ----------------------------------- | --------------------------------------------- |
| **Parent Class**                  | Class not provided or incorrect                     | Provided but not fully functional   | Provided and fully functional                 |
| **Child Class**                   | Class not provided or incorrect                     | Provided but not fully functional   | Provided and fully functional                 |
| **Methods in Child Class**        | Methods not provided or incorrect                   | Provided but not fully functional   | Provided and fully functional                 |
| **Use of `super` Keyword**        | Usage not provided or incorrect                     | Provided but not fully functional   | Provided and fully functional                 |
| **Code Quality and Organization** | Code is poorly organized or difficult to understand | Code is organized with minor issues | Code is well-organized and easy to understand |
