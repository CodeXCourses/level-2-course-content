//! Hour 1
// Integrating Weather API with JavaScript Class

// Review: Creating a Weather Class
// -------------------------------------------------
// Define a Weather class to model the weather data structure.

class Weather {
  constructor(data) {
    this.temperature = data.temp;
    this.description = data.weather.description;
    this.city = data.city_name;
  }

  display() {
    console.log(
      `Weather in ${this.city}: ${this.temperature}°C, ${this.description}`
    );
  }
}

// Instructor Note:
// - Discuss the Weather class as a model for weather data.
// - Explain how the constructor initializes class properties based on the passed object.

// Fetching Weather Data from an API using Promises
// -------------------------------------------------
const apiKey = 'YOUR_API_KEY'; // Replace with your API key
const url = `https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=${apiKey}`;

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((json) => {
    console.log('Raw API Data with Promises:', json.data[0]);
  })
  .catch((error) => {
    console.error('Fetch error with Promises:', error);
  });

// Instructor Note:
// - Introduce the fetch request and explain how Promises are used to handle the response.
// - Highlight the importance of error handling in fetch requests.

// Fetching and Processing Data with Async/Await
// -------------------------------------------------
// Use async/await for a cleaner syntax to handle fetch requests.

async function fetchWeatherData() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    const weatherData = new Weather(json.data[0]);
    weatherData.display(); // Display data using the Weather class
  } catch (error) {
    console.error('Fetch error with Async/Await:', error);
  }
}

// Call the async function
fetchWeatherData();

// Instructor Note:
// - Explain how async/await simplifies working with Promises, making the code more readable.
// - Discuss the conversion of the fetched data into a Weather class instance, demonstrating how classes can organize and simplify API data.
// - Compare the structured display of data from the Weather class with the raw API data shown earlier.

// Conclusion:
// Using JavaScript classes in conjunction with asynchronous fetch requests provides a structured approach to handling and displaying complex data from APIs.
//! Hour 2
// Building a Weather Search Interface with API Integration

// HTML Setup (Add to your HTML file)
// -------------------------------------------------
// <!-- Add this HTML for the search interface -->
// <input type="text" id="zipcode-input" placeholder="Enter Zipcode">
// <button id="search-button">Search Weather</button>
// <div id="weather-display"></div>
// <script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js"></script>;
// Instructor Note:
// - Ensure students have the above HTML elements in their index.html file for the search interface and weather display.

// JavaScript for Weather Search Interface
// -------------------------------------------------
// Integrating weather search functionality with weather icons based on conditions.

// const apiKey = 'YOUR_WEATHERBIT_API_KEY'; // Replace with your actual API key

// Fetch weather data by zipcode
async function fetchWeatherByZipcode(zipcode) {
  const url = `https://api.weatherbit.io/v2.0/current?postal_code=${zipcode}&country=US&key=${apiKey}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    displayWeather(json.data[0]);
  } catch (error) {
    console.error('Fetch error:', error);
    document.getElementById('weather-display').textContent =
      'Failed to load weather data';
  }
}

// Display weather data with Iconify icons
function displayWeather(weatherData) {
  const weatherContainer = document.getElementById('weather-display');
  const weatherIcon = getWeatherIcon(weatherData.weather.code);
  weatherContainer.innerHTML = `
    <div>
      <iconify-icon icon="${weatherIcon}"></iconify-icon>
      <p>${weatherData.temp}°C - ${weatherData.weather.description}</p>
      <p>City: ${weatherData.city_name}</p>
    </div>
  `;
}

// Function to determine the weather icon based on the condition code
function getWeatherIcon(conditionCode) {
  // Mapping of condition codes to Iconify icons
  // Add more mappings as needed
  const iconMap = {
    800: 'meteocons:clear-day-fill', // Clear sky
    801: 'meteocons:extreme-day', // Few clouds
  };
  return iconMap[conditionCode] || 'meteocons:dust-day'; // Default icon
}

// Event listener for the search button
document.getElementById('search-button').addEventListener('click', () => {
  const zipcode = document.getElementById('zipcode-input').value;
  fetchWeatherByZipcode(zipcode);
});

// Instructor Note:
// - Discuss the integration of the fetch request within the event listener of the search button.
// - Explain how the displayWeather function dynamically updates the DOM with the weather information and corresponding icons.
// - Introduce Iconify as a tool for adding icons and how it can be used to visually represent weather conditions.

// Conclusion:
// Creating interactive interfaces that integrate with APIs and dynamically update the DOM based on user input is a key skill in web development. This weather search interface demonstrates these concepts, showcasing practical applications of JavaScript, APIs, and UI enhancements.
