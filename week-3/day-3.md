# Day 3: DOM Manipulation

Welcome to Day 3 of Week 3! Today, we will cover basic DOM manipulation techniques, including methods like `getElementById`, `querySelector`, and `preventDefault`. We will also review parsing and stringifying JSON.

## Objectives

- Understand basic DOM manipulation techniques.
- Learn how to use `getElementById`, `querySelector`, and `preventDefault`.
- Review parsing and stringifying JSON.

## Instructor Notes

### Basic DOM Manipulation Techniques

- Explain what the DOM (Document Object Model) is and why it's important.
- Demonstrate basic techniques for selecting and manipulating DOM elements.

### Methods: `getElementById`, `querySelector`, `preventDefault`

- `getElementById`: Select an element by its ID.
- `querySelector`: Select an element using a CSS selector.
- `preventDefault`: Prevent the default behavior of an element (e.g., form submission).

### Parsing and Stringifying JSON

- Review how to parse JSON strings into JavaScript objects.
- Review how to stringify JavaScript objects into JSON strings.

## Hourly Breakdown

### Hour 1: Basic DOM Manipulation Techniques

- **Objectives**:
  - Understand and practice basic DOM manipulation techniques.
- **Teaching Ideas**:

  - Explain the DOM and its significance in web development.
  - Demonstrate selecting and manipulating elements:

    - Selecting an element by its ID:

      ```js
      const title = document.getElementById('title');
      title.textContent = 'New Title';
      ```

    - Selecting an element using a CSS selector:

      ```js
      const subtitle = document.querySelector('.subtitle');
      subtitle.style.color = 'blue';
      ```

### Hour 2: Methods and JSON

- **Objectives**:
  - Learn and apply `getElementById`, `querySelector`, and `preventDefault`.
  - Review parsing and stringifying JSON.
- **Teaching Ideas**:

  - Demonstrate using `getElementById` and `querySelector`:

    - Example:

      ```js
      const button = document.getElementById('myButton');
      button.addEventListener('click', () => {
        alert('Button clicked!');
      });

      const link = document.querySelector('a');
      link.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('Link clicked, but default action prevented.');
      });
      ```

  - Review parsing and stringifying JSON:

    - Parsing JSON:

      ```js
      const jsonString = '{"name": "Alice", "age": 25}';
      const jsonObj = JSON.parse(jsonString);
      console.log(jsonObj.name); // Output: Alice
      console.log(jsonObj.age); // Output: 25
      ```

    - Stringifying JavaScript objects:

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
// Basic DOM Manipulation Techniques

// Select an element by its ID and change its text content
const title = document.getElementById('title');
title.textContent = 'New Title';

// Select an element using a CSS selector and change its style
const subtitle = document.querySelector('.subtitle');
subtitle.style.color = 'blue';

// Methods: getElementById, querySelector, preventDefault

// Select a button and add a click event listener
const button = document.getElementById('myButton');
button.addEventListener('click', () => {
  alert('Button clicked!');
});

// Select a link and prevent its default action
const link = document.querySelector('a');
link.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Link clicked, but default action prevented.');
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
