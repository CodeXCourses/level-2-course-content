# Assignment: Local Storage and Gemini API

## Objective

- Understand how to use `localStorage` in JavaScript.
- Build a simple chatbot interface that interacts with the Gemini API.

## Instructions

### Part 1: Introduction to `localStorage`

1. **Basic `localStorage` Operations**:
   - Create a JavaScript file named `localStorageDemo.js`.
   - Write code to set, get, and remove an item from `localStorage`.
   - Write code to clear all items from `localStorage`.
   - **Verification**: Include the function code and a screenshot of the console output showing the `localStorage` operations.

### Part 2: Building a Simple Chatbot Interface with Gemini API

1. **Set Up the HTML Structure**:

   - Create an `index.html` file.
   - Include an input field for user messages and a button to send messages.
   - Include a div to display the chatbot conversation.
   - **Verification**: Take a screenshot of your `index.html` file showing the structure.

2. **Implement Chatbot Functionality**:
   - Create a JavaScript file named `app.js`.
   - Write code to handle form submission, send user input to the Gemini API, and display the response.
   - Use `localStorage` to save and load chat history.
   - **Verification**: Include the function code and a screenshot of the chat interface showing the interaction with the Gemini API.

### Part 3: Securing API Keys

1. **Retrieve API Keys Securely**:

   - Go to Render.com and deploy a server with a placeholder key in the environment variables.
   - Use a prebuilt server to retrieve the API key securely.
   - The JSON body for the request should look like this:

     ```json
     {
       "message": "your-secret"
     }
     ```

   - **Verification**: Include the function code and a screenshot of the console output showing the retrieval of the placeholder API key.

### Note

> Tasks are not graded but should be treated as an assignment. These are for practice an understanding
