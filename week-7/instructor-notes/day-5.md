# Day 5: Project Continuation and Review

Welcome to Day 5 of Week 7! Today, we will continue working on the chatbot project if needed and review the concepts covered throughout the week.

## Objectives

- Continue developing the chatbot project.
- Review the key concepts learned during the week.

## Instructor Notes

### Project Continuation

- Provide time for students to continue working on the chatbot project.
- Offer assistance and answer questions as needed.
- Encourage students to implement additional features or improvements to the chatbot.

### Review of the Week's Concepts

- Recap the key points covered during the week:
  - Introduction to classes and basic syntax.
  - Inheritance in JavaScript, using methods, and the `super` keyword.
  - Review of API concepts and building a weather application.
  - Using `localStorage` and building a chatbot interface with the Gemini API.
- Address any questions or concerns students may have.
- Conduct a review session with interactive Q&A and hands-on exercises.

## Hourly Breakdown

### Hour 1: Project Continuation

- **Objectives**:
  - Provide students with time to continue working on the chatbot project.
- **Teaching Ideas**:
  - Allow students to work on the chatbot project at their own pace.
  - Offer guidance and support as needed.
  - Encourage students to explore additional features, such as:
    - Improving the UI/UX of the chatbot.
    - Adding more sophisticated conversation handling.
    - Storing and retrieving more complex data using `localStorage`.

### Hour 2: Review of the Week's Concepts

- **Objectives**:
  - Review the key concepts learned during the week.
- **Teaching Ideas**:

  - Recap the main points:

    - Classes and basic syntax:

      ```js
      class Person {
        constructor(name, age) {
          this.name = name;
          this.age = age;
        }

        greet() {
          console.log(`Hello, my name is ${this.name}`);
        }
      }

      const person1 = new Person("Alice", 30);
      person1.greet(); // Hello, my name is Alice
      ```

    - Inheritance, methods, and the `super` keyword:

      ```js
      class Animal {
        constructor(name) {
          this.name = name;
        }

        speak() {
          console.log(`${this.name} makes a noise.`);
        }
      }

      class Dog extends Animal {
        constructor(name, breed) {
          super(name);
          this.breed = breed;
        }

        speak() {
          super.speak(); // Calls the parent class's speak method
          console.log(`${this.name} barks.`);
        }
      }

      const dog = new Dog("Rex", "German Shepherd");
      dog.speak();
      // Rex makes a noise.
      // Rex barks.
      ```

    - API concepts and weather application:

      ```js
      async function fetchWeatherData(city) {
        try {
          const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`,
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          return data;
        } catch (error) {
          console.error("Error:", error);
        }
      }

      document
        .getElementById("weatherForm")
        .addEventListener("submit", async function (event) {
          event.preventDefault();
          const city = document.getElementById("city").value;
          const weatherData = await fetchWeatherData(city);
          displayWeatherData(weatherData);
        });

      function displayWeatherData(data) {
        const weatherDiv = document.getElementById("weatherData");
        weatherDiv.innerHTML = `
              <h2>${data.location.name}</h2>
              <p>Temperature: ${data.current.temp_c}°C</p>
              <p>Condition: ${data.current.condition.text}</p>
              <img src="${data.current.condition.icon}" alt="Weather icon">
          `;
      }
      ```

    - Using `localStorage` and building a chatbot interface:

      ```js
      document
        .getElementById("chatForm")
        .addEventListener("submit", async function (event) {
          event.preventDefault();
          const userInput = document.getElementById("userInput").value;
          displayMessage(userInput, "user");
          const botResponse = await getBotResponse(userInput);
          displayMessage(botResponse, "bot");
          document.getElementById("userInput").value = "";
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
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=YOUR_API_KEY",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            },
          );
          const result = await response.json();
          return result.contents[0].parts[0].text;
        } catch (error) {
          console.error("Error:", error);
          return "Sorry, something went wrong.";
        }
      }

      function displayMessage(message, sender) {
        const chat = document.getElementById("chat");
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender);
        messageDiv.textContent = message;
        chat.appendChild(messageDiv);
        chat.scrollTop = chat.scrollHeight;

        // Save chat history to localStorage
        let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
        chatHistory.push({ sender, message });
        localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
      }

      // Load chat history from localStorage
      window.onload = function () {
        const chatHistory =
          JSON.parse(localStorage.getItem("chatHistory")) || [];
        chatHistory.forEach((chat) => {
          displayMessage(chat.message, chat.sender);
        });
      };
      ```

  - Conduct an interactive Q&A session.
  - Provide hands-on exercises for reinforcement.

## Code Snippets

```js
// Example class with constructor and method
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const person1 = new Person("Alice", 30);
person1.greet(); // Hello, my name is Alice

// Example of inheritance with classes and super keyword
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    super.speak(); // Calls the parent class's speak method
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog("Rex", "German Shepherd");
dog.speak();
// Rex makes a noise.
// Rex barks.

// Example of fetching weather data using async/await
async function fetchWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`,
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}

document
  .getElementById("weatherForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const city = document.getElementById("city").value;
    const weatherData = await fetchWeatherData(city);
    displayWeatherData(weatherData);
  });

function displayWeatherData(data) {
  const weatherDiv = document.getElementById("weatherData");
  weatherDiv.innerHTML = `
        <h2>${data.location.name}</h2>
        <p>Temperature: ${data.current.temp_c}°C</p>
        <p>Condition: ${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" alt="Weather icon">
    `;
}

// Example of handling form submission and chatbot interaction with localStorage
document
  .getElementById("chatForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    const userInput = document.getElementById("userInput").value;
    displayMessage(userInput, "user");
    const botResponse = await getBotResponse(userInput);
    displayMessage(botResponse, "bot");
    document.getElementById("userInput").value = "";
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
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=YOUR_API_KEY",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );
    const result = await response.json();
    return result.contents[0].parts[0].text;
  } catch (error) {
    console.error("Error:", error);
    return "Sorry, something went wrong.";
  }
}

function displayMessage(message, sender) {
  const chat = document.getElementById("chat");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = message;
  chat.appendChild(messageDiv);
  chat.scrollTop = chat.scrollHeight;

  // Save chat history to localStorage
  let chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
  chatHistory.push({ sender, message });
  localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
}

// Load chat history from localStorage
window.onload = function () {
  const chatHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
  chatHistory.forEach((chat) => {
    displayMessage(chat.message, chat.sender);
  });
};
```
