//! Hour 1
// Introduction to JSON and Its Usage in JavaScript

// What is JSON?
// JSON (JavaScript Object Notation) is a lightweight data-interchange format.
// It is easy for humans to read and write and easy for machines to parse and generate.

// JSON Syntax
// JSON syntax is derived from JavaScript object notation, but JSON is text-only.

// Example of a JSON object
const jsonString = '{"name": "Alice", "age": 25, "isStudent": true}';
console.log('JSON String:', jsonString);

// Parsing JSON
// The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string.
const parsedData = JSON.parse(jsonString);
console.log('Parsed Data:', parsedData);
// After parsing, we can access the data as a normal JavaScript object.
console.log('Name from parsed JSON:', parsedData.name); // Outputs: Alice

// Stringifying JavaScript Objects
// The JSON.stringify() method converts a JavaScript object or value to a JSON string.
const student = {
  name: 'Bob',
  age: 22,
  subjects: ['Math', 'Science'],
};

const stringifiedData = JSON.stringify(student);
console.log('Stringified Data:', stringifiedData);
// JSON.stringify() can be used to send data to a server or save it locally.

// Discuss the importance of JSON in web development, especially in APIs and data storage.

// Using localStorage with JSON
// localStorage stores data as key-value pairs, with values as strings.

// Storing Data in localStorage
localStorage.setItem('student', JSON.stringify(student));
console.log('Stored student data in localStorage');

// Retrieving Data from localStorage
// Step 1: Retrieve the raw string data from localStorage
const rawStudentData = localStorage.getItem('student');
console.log('Raw data retrieved from localStorage:', rawStudentData);

// Step 2: Parse the raw string data back into a JavaScript object
const parsedStudentData = JSON.parse(rawStudentData);
console.log('Parsed student data:', parsedStudentData);

// Displaying localStorage Data in the Browser Console
// Note: localStorage data can also be viewed directly in the browser's developer tools under the Application tab.

// Clearing Data from localStorage
// Uncomment to remove 'student' data from localStorage
localStorage.removeItem('student');

// Instructor Note: Demonstrate each step of retrieving data from localStorage.
// Explain the need to parse the stringified JSON back into an object to use it in JavaScript.
// Highlight how localStorage only stores strings, hence the necessity of stringifying objects when storing them.

//! Hour 2
// Overview of JavaScript Array Iterators

// Sample data for demonstrations
const numbers = [1, 2, 3, 4, 5];

// Create this after demoing the number stuff
const books = [
  {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    pages: 176,
  },
  { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', pages: 450 },
  { title: 'You Don’t Know JS', author: 'Kyle Simpson', pages: 278 },
];

// forEach: Iterates over array elements
numbers.forEach((number) => {
  console.log('forEach:', number);
});
// Use forEach for operations where you need to access each element but don't need to return a new array.

// map: Creates a new array with the results of calling a function on every element
const doubled = numbers.map((number) => number * 2);
console.log('map:', doubled);
// Use map for transformations of an array's elements.

// filter: Creates a new array with all elements that pass the test implemented by the provided function
const longBooks = books.filter((book) => book.pages > 300);
console.log('filter:', longBooks);
// Use filter to select a subset of an array based on a condition.

// reduce: Applies a function against an accumulator and each element to reduce it to a single value
const totalPages = books.reduce((acc, book) => acc + book.pages, 0);
console.log('reduce:', totalPages);
// Use reduce for aggregating array data into a single value.

// some: Checks if at least one element in the array passes the test implemented by the provided function
const hasShortBooks = books.some((book) => book.pages < 200);
console.log('some:', hasShortBooks);
// Use some to test whether any elements pass a certain condition.

// indexOf: Returns the first index at which a given element can be found
const index = numbers.indexOf(3);
console.log('indexOf:', index);
// Use indexOf to find the index of an element in an array.

// find: Returns the value of the first element that satisfies the provided testing function
const bookByCrockford = books.find(
  (book) => book.author === 'Douglas Crockford'
);
console.log('find:', bookByCrockford);
// Use find to retrieve the first element that meets a certain condition.

// Instructor Note: Walk through each example, explaining how the iterator works and its practical applications.
// Encourage students to practice these iterators on different types of arrays to understand their versatility.
