//! Hour 1
// Introduction to Asynchronous JavaScript and Promises

// Understanding Asynchronous JavaScript
// Asynchronous operations allow JavaScript to perform tasks (like fetching data or setting a timer) in the background.

// Basic Example with setTimeout
// setTimeout is a simple way to delay a function execution.
setTimeout(function () {
  console.log('This message is shown after 2 seconds.');
}, 2000);
// Instructor Note: Explain that setTimeout is a built-in function that executes a callback after a specified delay (in milliseconds).

// Introduction to Promises
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// Creating a simple Promise
// A Promise in JavaScript is an object that represents an asynchronous operation
// and its resulting value. It can be in one of three states: Pending, Fulfilled, or Rejected.

// Here we create a new Promise. The Promise constructor takes a function (called the executor function)
// that is called immediately with two arguments: resolve and reject. These are functions themselves.
const simplePromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation, like data fetching
  const dataLoaded = true; // Change this to false to simulate a failure

  // If the operation is successful (dataLoaded is true), we call resolve() with the result value.
  if (dataLoaded) {
    resolve('Data loaded successfully'); // This changes the Promise's state from "Pending" to "Fulfilled"
  } else {
    // If the operation fails (dataLoaded is false), we call reject() with the error reason.
    reject('Data failed to load'); // This changes the Promise's state from "Pending" to "Rejected"
  }
});

// Using the Promise
simplePromise
  .then((message) => {
    console.log(message); // Handled when the Promise is resolved
  })
  .catch((error) => {
    console.error(error); // Handled when the Promise is rejected
  });
// Instructor Note: Discuss the roles of `.then()` for resolved promises and `.catch()` for handling rejections.

// Fetching Data from a JSON file using Promises
fetch('example.json')
  .then((response) => response.json()) // Parsing the JSON response
  .then((data) => {
    console.log('Data from JSON:', data);
  })
  .catch((error) => {
    console.error('Fetching data failed:', error);
  });
// Instructor Note: Explain that `fetch` returns a Promise and is used for network requests.
// Highlight the use of `.json()` method to parse the response as JSON.

// Additional notes for instructors:
// - Emphasize the importance of understanding asynchronous operations in modern web development.
// - Encourage experimentation with different scenarios and promise-based functions.

//! Hour 2
// Deep Dive into Async/Await with Error Handling

// Example of an async function with internal error handling
async function fetchDataWithErrorHandling() {
  try {
    // Simulating an asynchronous fetch operation
    const response = await fetch('invalid-url.json'); // This will fail
    const data = await response.json();
    console.log('Data fetched successfully:', data);
    return data;
  } catch (error) {
    // Handling any errors that occur during fetch
    console.error('Error inside fetchDataWithErrorHandling:', error);
    // Returning or rethrowing the error depends on how you want to handle it further
    return null; // Optionally return a default value or rethrow the error
  }
}

// Calling the async function with internal error handling
fetchDataWithErrorHandling();
// Notice that we don't use .then() or .catch() here, as errors are handled inside the function

// Instructor Note:
// - Explain how try...catch within an async function provides a way to handle errors where they occur.
// - Discuss the benefits of this approach for localized error handling within async functions.

// Example of an async function without internal error handling
async function fetchDataWithoutErrorHandling() {
  // Intentionally causing an error (invalid URL)
  const response = await fetch('invalid-url.json'); // This will fail
  const data = await response.json();
  return data; // This line won't be reached if fetch fails
}

// Calling the async function and handling errors externally
fetchDataWithoutErrorHandling()
  .then((data) => {
    console.log('Data fetched successfully:', data);
  })
  .catch((error) => {
    // Handling errors that were not caught inside the async function
    console.error('Error outside fetchDataWithoutErrorHandling:', error);
  });

// Instructor Note:
// - Point out that in this case, errors are not handled inside the async function, but by the caller using .then() and .catch().
// - Discuss the flexibility of error handling with async/await and how it can be adapted based on the application's needs.

// Additional notes for instructors:
// - Emphasize that async/await makes asynchronous code more readable and maintainable.
// - Encourage students to practice these patterns and understand the implications of different error handling strategies.
