//! Hour 1
// Exploring JavaScript Objects and Property Access

// Creating a Basic Object
const player = {
  name: 'John Doe',
  score: 100,
  isActive: true,
};
// 'player' is an object with properties: name, score, and isActive.

// Correct Usage of Dot Notation for Property Access
console.log('Player Name:', player.name); // Outputs John Doe
console.log('Player Score:', player.score); // Outputs 100

// Correct Usage of Bracket Notation
console.log('Is Player Active:', player['isActive']); // Outputs true

// Dynamic Property Access Using Bracket Notation
let propName = 'score';
console.log('Player Score:', player[propName]); // Outputs 100

// More Examples of Dynamic Property Access
let properties = ['name', 'score', 'isActive'];

// Accessing and logging each property using a loop
properties.forEach((prop) => {
  console.log(`Player ${prop}:`, player[prop]);
});

// Creating New Properties Using Bracket Notation and an Array
let newProperties = ['level', 'health', 'lastLogin'];
let newValues = [3, 85, '2021-01-01'];

// Adding new properties to the player object using bracket notation
newProperties.forEach((prop, index) => {
  player[prop] = newValues[index];
});

console.log('Updated Player with New Properties:', player);
// The player object now has additional properties: level, health, and lastLogin.

// Updating Properties
player.score = 120; // Using dot notation
player['isActive'] = false; // Using bracket notation
console.log('Updated Player:', player);

// Deleting Properties
delete player.isActive; // Deletes the isActive property
console.log('After Deletion:', player);

// Enumerating Properties with for-in Loop
for (let key in player) {
  console.log(key + ':', player[key]);
}

// Discuss the importance of choosing the right notation for property access.
// Emphasize the versatility of bracket notation, especially with dynamic property names.

//! Hour 2

// JavaScript Demo: Book Management

// Step 1: Start with a hardcoded book object
const exampleBook = {
  title: 'JavaScript: The Good Parts',
  author: 'Douglas Crockford',
  pages: 176,
};
console.log('Example Book:', exampleBook);

// Step 2: Create an array to store books and add the hardcoded book to it
const books = [];
books.push(exampleBook);
console.log('Books Array with Hardcoded Book:', books);

// Function to display books on the page
function displayBooks() {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = ''; // Clear current list

  books.forEach((book) => {
    const li = document.createElement('li');
    li.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}`;
    bookList.appendChild(li);
  });
}

// Step 3: Manually invoke the function to display books
displayBooks();
console.log('Displayed books on the page');

// Step 4: Function to add a book (will be connected to HTML form later)
function addBook(title, author, pages) {
  const newBook = { title, author, pages };
  books.push(newBook);
  console.log('Added new book:', newBook);
}

// Manually add a book using the function
addBook('Eloquent JavaScript', 'Marijn Haverbeke', 450);
displayBooks(); // Update the display
// Students can manually invoke 'addBook' in the console to see how it affects the book list on the page.

// Next, we'll create an HTML form to add books dynamically.

// Function to display books on the page
function displayBooks() {
  const bookList = document.getElementById('bookList');
  bookList.innerHTML = ''; // Clear current list
  books.forEach((book) => {
    const li = document.createElement('li');
    li.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}`;
    bookList.appendChild(li);
  });
}

function addBookFromForm(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  // Access form elements using 'name' attribute
  const form = event.target;
  const title = form.elements['title'].value;
  const author = form.elements['author'].value;
  const pages = form.elements['pages'].value;

  const newBook = { title, author, pages };
  books.push(newBook);
  displayBooks();

  // Clear form fields after submission
  form.reset();
}

// Add event listener to the book form
document
  .getElementById('book-form')
  .addEventListener('submit', addBookFromForm);


  