# Day 4: Local Storage and Gemini API

Welcome to Day 4 of Week 6! Today, we will learn about `localStorage` in JavaScript and build a simple chatbot interface using the Gemini API.

## Objectives

- Understand how to use `localStorage` in JavaScript.
- Build a simple chatbot interface that interacts with the Gemini API.

## Instructor Notes

### Introduction to `localStorage`

- Explain what `localStorage` is and how it can be used to store data in the browser.
- Demonstrate how to set, get, and remove items from `localStorage`.

### Building a Simple Chatbot Interface with Gemini API

- Guide students through building a simple chatbot interface that sends user input to the Gemini API and displays the response.
- Demonstrate how to use `localStorage` to persist chatbot conversation history.

## Hourly Breakdown

### Hour 1: Introduction to `localStorage`

- **Objectives**:
  - Understand how to use `localStorage` in JavaScript.
- **Teaching Ideas**:

  - Explain `localStorage`:
    - `localStorage` is a web storage API that allows storing key-value pairs in the browser.
    - Data stored in `localStorage` persists even after the browser is closed.
  - Demonstrate basic `localStorage` operations:

    - Setting an item:

      ```js
      localStorage.setItem('key', 'value');
      ```

    - Getting an item:

      ```js
      const value = localStorage.getItem('key');
      console.log(value);
      ```

    - Removing an item:

      ```js
      localStorage.removeItem('key');
      ```

    - Clearing all items:

      ```js
      localStorage.clear();
      ```

### Hour 2: Building a Simple Chatbot Interface with Gemini API

- **Objectives**:
  - Build a simple chatbot interface that interacts with the Gemini API.
  - Use `localStorage` to persist chatbot conversation history.
- **Teaching Ideas**:

  - Structure the project:
    - Create an HTML file for the layout.
    - Create a JavaScript file for the functionality.
  - Implement the chatbot interface:

    - HTML:

      ```html
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Chatbot</title>
          <style>
            #chat {
              width: 300px;
              height: 400px;
              border: 1px solid #ccc;
              padding: 10px;
              overflow-y: scroll;
            }
            .message {
              margin-bottom: 10px;
            }
            .user {
              text-align: right;
            }
          </style>
        </head>
        <body>
          <h1>Chatbot</h1>
          <div id="chat"></div>
          <form id="chatForm">
            <input
              type="text"
              id="userInput"
              placeholder="Type your message here"
            />
            <button type="submit">Send</button>
          </form>
          <script src="app.js"></script>
        </body>
      </html>
      ```

    - JavaScript:

      ```js
      document
        .getElementById('chatForm')
        .addEventListener('submit', async function (event) {
          event.preventDefault();
          const userInput = document.getElementById('userInput').value;
          displayMessage(userInput, 'user');
          const botResponse = await getBotResponse(userInput);
          displayMessage(botResponse, 'bot');
          document.getElementById('userInput').value = '';
        });

      async function getBotResponse(input) {
        const data = {
          contents: [
            {
              parts: [
                {
                  text: input,
                },
              ],
            },
          ],
        };
        try {
          const response = await fetch(
            'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=YOUR_API_KEY',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            },
          );
          const result = await response.json();
          return result.contents[0].parts[0].text;
        } catch (error) {
          console.error('Error:', error);
          return 'Sorry, something went wrong.';
        }
      }

      function displayMessage(message, sender) {
        const chat = document.getElementById('chat');
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        messageDiv.textContent = message;
        chat.appendChild(messageDiv);
        chat.scrollTop = chat.scrollHeight;

        // Save chat history to localStorage
        let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
        chatHistory.push({ sender, message });
        localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
      }

      // Load chat history from localStorage
      window.onload = function () {
        const chatHistory =
          JSON.parse(localStorage.getItem('chatHistory')) || [];
        chatHistory.forEach((chat) => {
          displayMessage(chat.message, chat.sender);
        });
      };
      ```

## Code Snippets

```js
// Setting an item in localStorage
localStorage.setItem('key', 'value');

// Getting an item from localStorage
const value = localStorage.getItem('key');
console.log(value); // 'value'

// Removing an item from localStorage
localStorage.removeItem('key');

// Clearing all items from localStorage
localStorage.clear();
```

```js
// Handling form submission and chatbot interaction
document
  .getElementById('chatForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault();
    const userInput = document.getElementById('userInput').value;
    displayMessage(userInput, 'user');
    const botResponse = await getBotResponse(userInput);
    displayMessage(botResponse, 'bot');
    document.getElementById('userInput').value = '';
  });

async function getBotResponse(input) {
  const data = {
    contents: [
      {
        parts: [
          {
            text: input,
          },
        ],
      },
    ],
  };
  try {
    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=YOUR_API_KEY',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );
    const result = await response.json();
    return result.contents[0].parts[0].text;
  } catch (error) {
    console.error('Error:', error);
    return 'Sorry, something went wrong.';
  }
}

function displayMessage(message, sender) {
  const chat = document.getElementById('chat');
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message', sender);
  messageDiv.textContent = message;
  chat.appendChild(messageDiv);
  chat.scrollTop = chat.scrollHeight;

  // Save chat history to localStorage
  let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
  chatHistory.push({ sender, message });
  localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}

// Load chat history from localStorage
window.onload = function () {
  const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
  chatHistory.forEach((chat) => {
    displayMessage(chat.message, chat.sender);
  });
};
```

```html
<!-- HTML for the chatbot interface -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Chatbot</title>
    <style>
      #chat {
        width: 300px;
        height: 400px;
        border: 1px solid #ccc;
        padding: 10px;
        overflow-y: scroll;
      }
      .message {
        margin-bottom: 10px;
      }
      .user {
        text-align: right;
      }
    </style>
  </head>
  <body>
    <h1>Chatbot</h1>
    <div id="chat"></div>
    <form id="chatForm">
      <input
        type="text"
        id="userInput"
        placeholder="Type your message here"
      />
      <button type="submit">Send</button>
    </form>
    <script src="app.js"></script>
  </body>
</html>
```
