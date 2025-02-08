# Task: Authentication with APIs

## Objective

- Understand the basics of API authentication.
- Use API keys for authenticated API requests.
- Practice securely handling API keys in your code.

---

## Instructions

### Part 1: Overview of Authentication Types

1. **Research Authentication Types**:

   - Spend 10–15 minutes reading about common API authentication methods:
     - API Key
     - OAuth
     - JWT (JSON Web Tokens)

2. **Take Notes**:

   - Write a brief summary (2-3 sentences) explaining each type of authentication and when it is typically used.

---

### Part 2: Working with an API Key

1. **Set Up API Access**:

   - Sign up for a free API key from the OpenWeatherMap API or a similar public API.

2. **Fetch Weather Data**:

   - Create a JavaScript file named `weather.js`.
   - Write a function `getWeather(city)` that takes a `city` as a parameter.
   - Use the `fetch` function to call the OpenWeatherMap API endpoint:
     `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY`
   - Log the fetched weather data to the console.

3. **Test Your Function**:

   - Call `getWeather` with a city of your choice (e.g., `"New York"`).
   - Verify the data is logged to the console.

---

### Part 3: Securing Your API Key

1. **Use Environment Variables**:

   - Store your API key in an environment variable using a `.env` file.
   - Use [dotenv](https://www.npmjs.com/package/dotenv) or a similar package to load the `.env` file.
   - Update your `weather.js` file to retrieve the API key from the environment variable.

2. **Secure Your Key**:

   - Add `.env` to your `.gitignore` file to ensure it is not committed to your GitHub repository.

---

### Note

> Tasks are not graded but should be treated as an assignment. These are for practice and understanding.
