# Day 3: API Review and Project

Welcome to Day 3 of Week 7! Today, we will review the concepts related to APIs with JavaScript and build a simple weather application to apply what we've learned.

## Objectives

- Review API concepts with JavaScript.
- Build a simple weather application using API data.

## Instructor Notes

### Review of API Concepts with JavaScript

- Recap how to send API requests using the `fetch` API with `async` and `await`.
- Review how to handle API responses and errors.
- Reinforce the importance of securing API keys.

### Building a Simple Weather Application

- Guide students through building a simple weather application that fetches and displays weather data from a weather API.
- Demonstrate how to structure the project, make API calls, and display data on the DOM.

## Hourly Breakdown

### Hour 1: Review of API Concepts with JavaScript

- **Objectives**:
  - Review key API concepts with JavaScript.
- **Teaching Ideas**:

  - Recap sending API requests with `fetch` using `async`/`await`:

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
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchWeatherData("London");
    ```

  - Review handling API responses and errors:

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
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchWeatherData("London");
    ```

  - Reinforce securing API keys:
    - Remind students not to hardcode API keys in their JavaScript files.
    - Use environment variables or a secure method to handle API keys.

### Hour 2: Building a Simple Weather Application

- **Objectives**:
  - Build a weather application that fetches and displays weather data.
- **Teaching Ideas**:

  - Structure the project:
    - Create an HTML file for the layout.
    - Create a JavaScript file for the functionality.
  - Make API calls to fetch weather data:

    - Example:
      ```html
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Weather App</title>
        </head>
        <body>
          <h1>Weather App</h1>
          <form id="weatherForm">
            <input
              type="text"
              id="city"
              placeholder="Enter city name"
            />
            <button type="submit">Get Weather</button>
          </form>
          <div id="weatherData"></div>
          <script src="app.js"></script>
        </body>
      </html>
      ```
    - JavaScript:

      ```js
      document
        .getElementById("weatherForm")
        .addEventListener("submit", async function (event) {
          event.preventDefault();
          const city = document.getElementById("city").value;
          const weatherData = await fetchWeatherData(city);
          displayWeatherData(weatherData);
        });

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

## Code Snippets

```js
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

// Example of handling form submission and displaying weather data
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

```html
<!-- HTML for the weather application -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Weather App</title>
  </head>
  <body>
    <h1>Weather App</h1>
    <form id="weatherForm">
      <input
        type="text"
        id="city"
        placeholder="Enter city name"
      />
      <button type="submit">Get Weather</button>
    </form>
    <div id="weatherData"></div>
    <script src="app.js"></script>
  </body>
</html>
```
