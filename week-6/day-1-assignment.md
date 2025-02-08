# Assignment: Error Handling in JavaScript

## Objective

- Learn to use `try`, `catch`, and `finally` for error handling in JavaScript.
- Handle errors in asynchronous code.
- Debug common JavaScript errors.

---

## Instructions

### Part 1: Understanding `try`, `catch`, and `finally`

1. **Basic Error Handling**:

   - Write a function named `divideNumbers` that takes two arguments, `a` and `b`.
   - Use a `try` block to attempt to divide `a` by `b`.
   - Throw an error if `b` is 0, with the message: `"Division by zero is not allowed."`
   - Use a `catch` block to log the error message.
   - Add a `finally` block to log: `"Execution complete."`

2. **Test the Function**:

   - Call `divideNumbers` with valid inputs and verify it logs the correct result.
   - Call `divideNumbers` with `b = 0` and verify the error is logged.

---

### Part 2: Error Handling in Asynchronous Code

1. **Handling API Errors**:

   - Write a function named `fetchData` that fetches data from `https://jsonplaceholder.typicode.com/posts/invalid`.
   - Use `async`/`await` and wrap the `fetch` call in a `try` block.
   - Log the error in the `catch` block if the fetch fails.
   - Use a `finally` block to log: `"Fetch attempt finished."`

2. **Test the Function**:

   - Call `fetchData` and verify the error is caught and logged properly.

---

### Part 3: Debugging JavaScript Errors

1. **Debugging Exercise**:

   - The following code has errors. Copy it and use the browser DevTools to debug and fix the issues:

     ```javascript
     function greet(name) {
       if ((name = undefined)) {
         console.log("Hello, " + name);
       }
     }

     greet();
     ```

2. **Fix the Code**:

   - Correct the code so it:
     - Checks if `name` is `undefined` properly.
     - Logs: `"Hello, Guest!"` if no name is provided.

---

## Submission

- **GitHub Repository**: Create a repository named `error-handling-js` and include:
  - The JavaScript file with your code for all parts.
  - Screenshots showing the outputs for each task.
- **Submission Link**: Submit the URL of your GitHub repository. Remember to deploy your lab to GitHub Pages.

---

## Rubric

| Criteria                          | Limited (0 pts)                       | Partial (3 pts)                  | Complete (5 pts)                    |
| --------------------------------- | ------------------------------------- | -------------------------------- | ----------------------------------- |
| **Basic Error Handling**          | Code does not handle errors properly  | Partially correct but incomplete | Fully functional and handles errors |
| **Asynchronous Error Handling**   | Code does not handle API errors       | Partially correct but incomplete | Fully functional and handles errors |
| **Debugging Exercise**            | Errors not identified or fixed        | Partially fixed but incomplete   | Fully fixed with appropriate logic  |
| **Code Quality and Organization** | Poorly organized or difficult to read | Organized with minor issues      | Well-organized and easy to read     |
