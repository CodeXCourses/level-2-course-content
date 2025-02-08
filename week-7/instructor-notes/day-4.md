# Day 4: Local Storage and Gemini API

Welcome to Day 4 of Week 7! Today, we will learn about `localStorage` in JavaScript and build a simple chatbot interface using the Gemini API.

## Objectives

- Understand how to use `localStorage` in JavaScript.
- Build a simple chatbot interface that interacts with the Gemini API.

## Instructor Notes

### Introduction to `localStorage`

- Explain what `localStorage` is and its purpose.
- Demonstrate how to set, get, and remove items from `localStorage`.

### Building a Simple Chatbot Interface with Gemini API

- Guide students through building a simple chatbot interface.
- Explain how to send user input to the Gemini API and display the response.

## Hourly Breakdown

### Hour 1: Introduction to `localStorage`

- **Objectives**:
  - Understand how to use `localStorage` in JavaScript.
- **Teaching Ideas**:
  - Explain `localStorage`:
    - `localStorage` allows storing key-value pairs in the browser.
    - Data persists even after closing the browser.
  - Demonstrate basic `localStorage` operations:
    - Setting an item.
    - Getting an item.
    - Removing an item.
    - Clearing all items.
  - Example: Save a user's name and greet them when they revisit the page.

### Hour 2: Building a Simple Chatbot Interface with Gemini API

- **Objectives**:
  - Build a simple chatbot interface that interacts with the Gemini API.
- **Teaching Ideas**:
  - Structure the project:
    - Create an HTML file for the layout.
    - Create a JavaScript file for the functionality.
  - Implement the chatbot interface:
    - Use provided code to handle user input and API interaction.
    - Explain how to send user input to the Gemini API and display the response.

## Code Snippets

### `localStorage` Examples

```js
// Setting an item in localStorage
localStorage.setItem("key", "value");

// Getting an item from localStorage
const value = localStorage.getItem("key");
console.log(value); // 'value'

// Removing an item from localStorage
localStorage.removeItem("key");

// Clearing all items from localStorage
localStorage.clear();
```

### Local Storage sample

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Local Storage Example</title>
  </head>
  <body>
    <h1>Welcome</h1>
    <input
      type="text"
      id="nameInput"
      placeholder="Enter your name"
    />
    <button onclick="saveName()">Save Name</button>
    <script>
      function saveName() {
        const name = document.getElementById("nameInput").value;
        localStorage.setItem("userName", name);
        greetUser();
      }

      function greetUser() {
        const name = localStorage.getItem("userName");
        if (name) {
          alert(`Welcome back, ${name}!`);
        }
      }

      window.onload = greetUser;
    </script>
  </body>
</html>
```

### Chatbot sample

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
  </head>
  <body>
    <h1>Chatbot</h1>
    <div id="chat-container">
      <div class="message bot">Hi, I'm a bot! How can I assist you today?</div>
    </div>
    <input
      type="text"
      id="user-input"
      placeholder="Type your message here..."
    />
    <button id="send-button">Send</button>
    <!-- Consider adding a disabled attribute to the button till the API for getting the API Key replies with the key -->
    <script type="importmap">
      {
        "imports": {
          "@google/generative-ai": "https://esm.run/@google/generative-ai"
        }
      }
    </script>
    <script type="module">
      import { GoogleGenerativeAI } from "@google/generative-ai";

      async function main() {
        const response = await fetch(
          "<https://github.com/tm-LBenson/proxy-key fork and deploy this repo to hide API key>",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: "get-key" }),
          },
        );
        const data = await response.json();

        const genAI = new GoogleGenerativeAI(data.key);
        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
          generationConfig: {
            temperature: 1,
            topP: 0.95,
            topK: 64,
            maxOutputTokens: 8192,
            responseMimeType: "text/plain",
          },
        });

        document.getElementById("send-button").onclick = sendMessage;

        async function sendMessage() {
          const inputElement = document.getElementById("user-input");
          const userInput = inputElement.value;
          if (!userInput) return;
          const chatContainer = document.getElementById("chat-container");
          const userMessage = document.createElement("div");
          userMessage.classList.add("message", "user");
          userMessage.textContent = userInput;
          chatContainer.appendChild(userMessage);

          inputElement.value = "";

          try {
            const result = await model.generateContent(`
                    Only reply in plain text, no markdown
                    keep the messages very short
                    Personality Traits:
                    Helpful: Always ready to assist with any tech question or problem.
                    Friendly: Communicates in a warm and approachable manner.
                    Knowledgeable: Well-versed in a wide range of tech topics, from software development to the latest technology trends.
                    Patient: Takes the time to explain concepts clearly, no matter how many questions are asked.
                    Encouraging: Supports and motivates users in their learning and development journey.

                    ${userInput}`);
            const response = await result.response;
            const botMessage = document.createElement("div");
            botMessage.classList.add("message", "bot");
            botMessage.textContent = await response.text();
            chatContainer.appendChild(botMessage);
          } catch (error) {
            console.error("Error:", error);
            const errorMessage = document.createElement("div");
            errorMessage.classList.add("message", "bot");
            errorMessage.textContent =
              "Sorry, something went wrong. Please try again.";
            chatContainer.appendChild(errorMessage);
          }
        }
      }
      main();
    </script>
  </body>
</html>
```
