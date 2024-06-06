# Day 4: Promises and Async/Await

Welcome to Day 4 of Week 3! Today, we will cover advanced asynchronous JavaScript concepts, including promises, async/await, fetching data from APIs, and working with `setTimeout`.

## Objectives

- Understand promises and how to use them.
- Learn how to use async/await for asynchronous operations.
- Fetch data from APIs using fetch.
- Use `setTimeout` to handle delays in JavaScript.

## Instructor Notes

### Introduction to Promises, Async, and Await

- Explain what promises are and why they are useful.
- Demonstrate creating and using promises.
- Introduce async/await as a cleaner way to work with promises.

### Fetching Data from APIs

- Explain the concept of APIs and their importance in web development.
- Demonstrate how to fetch data from an API using fetch and handle responses.

### Working with setTimeout

- Explain the `setTimeout` function and its usage.
- Demonstrate how to use `setTimeout` to create delays in code execution.

## Hourly Breakdown

### Hour 1: Promises and Async/Await

- **Objectives**:
  - Understand promises and how to use them.
  - Learn how to use async/await for asynchronous operations.
- **Teaching Ideas**:

  - Explain promises:

    - Creating and using promises:

      ```js
      const myPromise = new Promise((resolve, reject) => {
        const success = true;
        if (success) {
          resolve('Promise resolved successfully!');
        } else {
          reject('Promise rejected.');
        }
      });

      myPromise
        .then((message) => {
          console.log(message);
        })
        .catch((error) => {
          console.error(error);
        });
      ```

  - Introduce async/await:

    - Using async/await for asynchronous operations:

      ```js
      async function fetchData() {
        try {
          const response = await fetch('https://api.example.com/data');
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }

      fetchData();
      ```

### Hour 2: Fetching Data from APIs and Working with setTimeout

- **Objectives**:
  - Fetch data from APIs using fetch.
  - Use `setTimeout` to handle delays in JavaScript.
- **Teaching Ideas**:

  - Fetching data from APIs:

    - Example:

      ```js
      async function fetchUser() {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users/1',
        );
        const user = await response.json();
        console.log(user);
      }

      fetchUser();
      ```

  - Working with `setTimeout`:

    - Example:

      ```js
      console.log('Start');

      setTimeout(() => {
        console.log('This message is delayed by 2 seconds.');
      }, 2000);

      console.log('End');
      ```

## Code Snippets

```js
// Promises

const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve('Promise resolved successfully!');
  } else {
    reject('Promise rejected.');
  }
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// Async/Await

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();

// Fetching Data from APIs

async function fetchUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const user = await response.json();
  console.log(user);
}

fetchUser();

// setTimeout

console.log('Start');

setTimeout(() => {
  console.log('This message is delayed by 2 seconds.');
}, 2000);

console.log('End');
```
