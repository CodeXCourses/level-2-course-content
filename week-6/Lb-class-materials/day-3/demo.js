//! Hour 1
// Advanced Asynchronous JavaScript: Promises and setTimeout

// Introduction to Asynchronous JavaScript
// -------------------------------------------------
// Asynchronous JavaScript allows the program to perform long-running actions without blocking the main execution thread.

// Using setTimeout to Simulate Asynchronous Operations
// setTimeout is a basic way to delay actions, mimicking asynchronous behavior.

// Example of setTimeout
console.log('Start of script');
setTimeout(() => {
  console.log('Asynchronous message after 2 seconds');
}, 2000);
console.log('End of script');

// Instructor Note:
// - Explain that setTimeout schedules code to run after a delay, without stopping the rest of the code from executing.
// - Highlight the non-blocking nature of JavaScript where 'End of script' is logged before the setTimeout callback.

// Introduction to Promises
// -------------------------------------------------
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// Creating a simple Promise
// Here, we create a new Promise that resolves or rejects based on a condition.
const examplePromise = new Promise((resolve, reject) => {
  const condition = true; // This can be any logic that determines the outcome.

  if (condition) {
    resolve('Promise resolved successfully');
  } else {
    reject('Promise rejected');
  }
});

// Using the Promise
// .then() is called if the Promise is resolved, and .catch() is called if the Promise is rejected.
examplePromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// Instructor Note:
// - Discuss how Promises are used to handle the future outcome of an asynchronous operation.
// - Emphasize the roles of `resolve` and `reject` functions in determining the outcome of the Promise.
// - Explain that `.then()` handles the successful resolution, and `.catch()` handles rejection.

// Using Promises with setTimeout
// -------------------------------------------------
// Combining Promises with setTimeout to handle delayed asynchronous operations.

// Example of a Promise with setTimeout
const delayedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; // Replace with any condition
    if (success) {
      resolve('Operation completed after 3 seconds');
    } else {
      reject('Operation failed');
    }
  }, 3000);
});

delayedPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// Instructor Note:
// - Explain that this pattern is common in scenarios where an operation might take an unknown amount of time (like API calls).
// - Highlight the combination of `setTimeout` and `Promise` to model asynchronous behavior in a controlled manner.

//! Hour 2
// Advanced Asynchronous JavaScript: Chaining Promises, Promise.all(), async/await

// Advanced Asynchronous Patterns and Best Practices
// -------------------------------------------------

// Chaining Promises
// -------------------------------------------------
// Promise chaining allows for a sequence of asynchronous operations to be performed one after another.

// Creating a sequence of Promises
const doFirstTask = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('First task completed'), 1000);
  });

const doSecondTask = (firstResult) =>
  new Promise((resolve, reject) => {
    setTimeout(
      () => resolve(`${firstResult}, then second task completed`),
      1000
    );
  });

// Chaining the tasks
doFirstTask()
  .then((result) => doSecondTask(result))
  .then((finalResult) => console.log(finalResult))
  .catch((error) => console.error(error));

// Instructor Note:
// - Discuss how each then() waits for the previous Promise to resolve before executing.
// - Explain that chaining is useful for scenarios where one task depends on the result of the previous one.

// Parallel Execution with Promise.all()
// -------------------------------------------------
// Promise.all() is used to execute multiple promises in parallel and wait for all of them to resolve.

// Creating multiple promises
const promise1 = Promise.resolve('Promise 1 resolved');
const promise2 = new Promise((resolve, reject) =>
  setTimeout(() => resolve('Promise 2 resolved'), 2000)
);

// Executing promises in parallel
Promise.all([promise1, promise2])
  .then((results) => {
    console.log('All promises resolved:', results);
  })
  .catch((error) => console.error('A promise failed:', error));

// Instructor Note:
// - Highlight that Promise.all() is efficient for running multiple asynchronous operations simultaneously.
// - Explain that it resolves when all promises resolve, or rejects as soon as one promise fails.

// Introduction to async and await
// -------------------------------------------------
// The async and await keywords simplify working with promises, making asynchronous code look more like synchronous code.

// Define an async function
async function executeAsyncTasks() {
  try {
    const result1 = await doFirstTask();
    const result2 = await doSecondTask(result1);
    console.log(`Async/Await: ${result2}`);
  } catch (error) {
    console.error('Async task failed:', error);
  }
}

// Call the async function
executeAsyncTasks();

// Instructor Note:
// - Explain that 'async' before a function makes the function return a promise.
// - 'await' is used to wait for the promise to settle (resolve or reject).
// - Discuss the try...catch block for handling errors in async/await, which is akin to .then().catch() in promises.

// Delayed DOM Manipulation with async/await
// -------------------------------------------------
// Using async/await for delayed DOM updates to demonstrate practical applications in web development.

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function delayedDOMUpdate() {
  try {
    await delay(3000); // Delay for 3 seconds

    // Create a new paragraph element
    const newElement = document.createElement('p');
    newElement.textContent = 'This content was added after a 3-second delay';

    // Append the new element to the body
    document.body.appendChild(newElement);

    console.log('New element added to the DOM');
  } catch (error) {
    console.error('Failed to update the DOM:', error);
  }
}

// Execute the async function to update the DOM
delayedDOMUpdate();

// Instructor Note:
// - Highlight the use of async/await for handling asynchronous operations like a delay.
// - Discuss creating a new DOM element and appending it to the body as a common task in web applications, often performed after data fetching or processing.
// - Explain the importance of error handling in asynchronous operations, especially when manipulating the DOM.

// Conclusion:
// Advanced asynchronous patterns and techniques, including async/await, are essential for creating interactive and responsive web applications. They allow developers to handle tasks such as API calls, user interactions, and updating the UI efficiently.
