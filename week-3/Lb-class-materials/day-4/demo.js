//! Hour 1
// Advanced Form Handling in JavaScript

// Function to update the page content from localStorage data
function updatePageFromStorage() {
  const storedData = localStorage.getItem('formData');
  if (storedData) {
    const data = JSON.parse(storedData);
    document.getElementById(
      'displayArea'
    ).textContent = `Stored Name: ${data.name}`;
  }
}

// Update the page content on page load
document.addEventListener('DOMContentLoaded', updatePageFromStorage);

// Form submission event listener
document
  .getElementById('formExample')
  .addEventListener('submit', function (event) {
    const nameField = document.getElementById('nameField').value;

    // Basic validation: Check if the name field is empty
    if (nameField.trim() === '') {
      alert('The name field cannot be empty.');
      event.preventDefault(); // Prevent form submission
    } else {
      // Save form data to localStorage and allow the page to refresh
      const formData = { name: nameField };
      localStorage.setItem('formData', JSON.stringify(formData));
    }
  });

// Instructor Note:
// Explain how the form data is saved to localStorage upon submission.
// Highlight that the page refresh triggers the 'DOMContentLoaded' event, which then calls updatePageFromStorage.
// This process demonstrates a way to dynamically update page content based on persistent data.

//! Hour 2
// Form Data Processing and Validation

// Attaching an event listener to the form submission
document
  .getElementById('jsonForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Extracting data from the name and email input fields
    const nameField = document.getElementById('nameField').value;
    const emailField = document.getElementById('emailField').value;

    // Basic Validation: Checking if fields are empty
    if (nameField.trim() === '' || emailField.trim() === '') {
      alert('Name and email fields cannot be empty.');
      return; // Stops the function if validation fails
    }

    // Email Validation: Using Regular Expression for format checking
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(emailField)) {
      alert('Please enter a valid email address.');
      return; // Stops the function if email is invalid
    }

    // Formulating the data as an object
    const formData = {
      name: nameField,
      email: emailField,
    };

    // Converting the form data object to a JSON string
    const jsonData = JSON.stringify(formData);
    console.log('JSON String from Form Data:', jsonData);

    // Parsing the JSON string back to a JavaScript object
    const parsedData = JSON.parse(jsonData);
    console.log('Parsed Data:', parsedData);

    // Example: Sending Data to a Server
    // Normally, here you would send the jsonData to a server using Fetch API or AJAX.
    // For demonstration, we'll just log it to the console.
    console.log('Sending data to server:', jsonData);

    // Example: Storing Data in localStorage
    localStorage.setItem('userData', jsonData);
    console.log('User data saved to localStorage');

    // Instructor Note:
    // Discuss the importance of converting form data to JSON for server communication.
    // Highlight the role of localStorage in persisting user data between sessions.
    // Explain that these are common practices in modern web development for handling user data.
  });
