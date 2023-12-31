//! Hour 1
// Consuming APIs with JavaScript

// Introduction to HTTP Requests with Postman/Thunder Client
// -------------------------------------------------
// Begin by demonstrating how to make a GET request to an API using Postman or Thunder Client.
// Remind students of their earlier lessons on REST APIs and how HTTP requests work.

// Instructor Note:
// - Use Postman or Thunder Client to send a GET request to 'https://jsonplaceholder.typicode.com/posts/1'.
// - Explain the structure of a REST API request and the typical JSON response.
// - Highlight the status code, headers, and body of the response in the client.

// Introduction to Fetch in JavaScript
// -------------------------------------------------
// The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses.

// Basic Fetch Request Using Promises
// Fetch is used to make network requests similar to how you did in Postman or Thunder Client.

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log('Data fetched with Promise:', data);
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });

// Instructor Note:
// - Explain what the Fetch API is and how it's used to perform network requests.
// - Discuss the role of `.then()` for handling the response and `.catch()` for errors.
// - Point out the similarities between the fetch request in JavaScript and the request sent using Postman or Thunder Client.

// Using Async/Await with Fetch
// -------------------------------------------------
// Async/await offers a more readable and concise way to handle promises, like responses from fetch.

async function fetchData() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log('Data fetched with async/await:', data);
  } catch (error) {
    console.error('Async fetch error:', error);
  }
}

fetchData();

// Instructor Note:
// - Introduce `async` and `await` as a syntactic sugar over Promises for easier handling of asynchronous code.
// - Explain how `await` waits for the Promise to settle and how `try...catch` is used for error handling.

// Updating the DOM with Fetch Data
// -------------------------------------------------
// Demonstrating how to dynamically update the DOM with data fetched from an API using both Promises and async/await.

// Using Promises to update the DOM
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => response.json())
  .then((data) => {
    const postElement = document.createElement('div');
    postElement.innerHTML = `<h1>${data.title}</h1><p>${data.body}</p>`;
    document.body.appendChild(postElement);
  });

// Using async/await to update the DOM
async function updateDOM() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1'
    );
    const data = await response.json();
    const postElement = document.createElement('div');
    postElement.innerHTML = `<h1>${data.title}</h1><p>${data.body}</p>`;
    document.body.appendChild(postElement);
  } catch (error) {
    console.error('Error updating DOM:', error);
  }
}

updateDOM();

// Instructor Note:
// - Demonstrate how the fetched data can be used to create and insert new elements into the web page.
// - Explain the choice between using Promises and async/await, noting that both achieve the same result but with different syntax.
// - Emphasize the practical application of fetch in retrieving data and dynamically updating web content.

// Conclusion:
// Understanding how to make HTTP requests using the Fetch API and manipulate the DOM with the response is a key skill in web development, enabling dynamic and interactive web applications.

//! Hour 2
// Building a Simple Weather App with Weatherbit API

// Securing API Keys in JavaScript Applications
// -------------------------------------------------
// Normally, API keys should be kept secure and not exposed in client-side code. In this demo, for simplicity, we will use the API key directly, but in a real-world application, consider using backend services or environment variables to secure your keys.

const apiKey = 'YOUR_WEATHERBIT_API_KEY'; // Replace with your actual API key

// Building a Weather App
// -------------------------------------------------
// The app will fetch a 7-day weather forecast from the Weatherbit API based on a zipcode.

// Function to fetch weather data
async function fetchWeather(zipcode) {
  try {
    const response = await fetch(
      `https://api.weatherbit.io/v2.0/forecast/daily?postal_code=${zipcode}&key=${apiKey}&days=7`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    updateWeatherDisplay(data);
  } catch (error) {
    console.error('Failed to fetch weather:', error);
  }
}

// Function to update the DOM with weather data
function updateWeatherDisplay(weatherData) {
  const container = document.getElementById('weather-container');
  container.innerHTML = ''; // Clear previous content

  weatherData.data.forEach((day) => {
    const dayElement = document.createElement('div');
    dayElement.className = 'weather-day';
    dayElement.innerHTML = `
      <h3>${day.datetime}</h3>
      <p>Temperature: ${day.temp}°C</p>
      <p>${day.weather.description}</p>
    `;
    container.appendChild(dayElement);
  });
}

// Event listener for the search button
document.getElementById('search-button').addEventListener('click', () => {
  const zipcodeInput = document.getElementById('zipcode-input').value;
  fetchWeather(zipcodeInput);
});

// Instructor Note:
// - Discuss the importance of keeping API keys secure and not exposing them in client-side code.
// - Explain how the `fetchWeather` function constructs a URL with the zipcode and API key to request weather data.
// - Emphasize the use of async/await for handling asynchronous API requests.
// - Show how the `updateWeatherDisplay` function dynamically creates and adds elements to the DOM to display the weather data.

// Conclusion:
// Integrating real-world APIs into JavaScript applications requires understanding of asynchronous programming, API security, and dynamic DOM manipulation. This simple weather app demonstrates these concepts, providing a foundation for building more complex applications.
