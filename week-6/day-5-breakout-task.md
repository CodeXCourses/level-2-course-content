# Task: Week 6 Review and Debugging Practice

## Objective

- Recap and reinforce key concepts from Week 6.
- Debug common errors in JavaScript and API integration.
- Reflect on how skills from this week tie into larger projects.

---

## Instructions

### Part 1: Week Recap

1. **Answer Review Questions**:

   - What is the purpose of `try`, `catch`, and `finally` in error handling?
   - How do API keys enhance security in API requests?
   - What is pagination, and why is it important in API responses?
   - Name two use cases for `.map()`, `.filter()`, and `.reduce()` in data transformation.

2. **Write a Brief Reflection**:

   - In 3-4 sentences, describe how the skills learned this week (error handling, API integration, data transformation) can be applied to real-world projects.

---

### Part 2: Debugging Practice

1. **Fix the Errors**:

   - Review the following buggy code and debug it. Use browser DevTools if necessary.

     ```javascript
     async function fetchData(url) {
       const response = fetch(url);
       const data = await response.json();
       console.log("Data received:", data);
     }

     fetchData("https://jsonplaceholder.typicode.com/posts");
     ```

   - Issues to fix:

     - The `fetch` call is missing `await`.
     - Handle any potential errors using `try` and `catch`.

2. **Improve the Functionality**:

   - Modify the function to include:
     - A `finally` block that logs: `"Fetch operation complete."`
     - Validation to ensure the `url` parameter is not empty. If it is, throw an error.

---

### Part 3: Mini-Project Debugging

1. **Analyze the Scenario**:

   - You are building a dashboard that fetches and displays weather data. However, the following code is not working as expected:

     ```javascript
     const apiKey = "123456"; // Example API key
     function getWeather(city) {
       fetch(
         `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`,
       )
         .then((response) => response.json())
         .then((data) => console.log("Weather data:", data))
         .catch((error) =>
           console.error("Error fetching weather data:", error),
         );
     }

     getWeather("New York");
     ```

2. **Debug the Code**:

   - Identify at least two potential issues with the code (e.g., hardcoded API key, missing input validation).
   - Suggest improvements to fix or enhance the function.

---

### Part 4: Capstone Preparation

1. **Identify Opportunities**:
   - List at least two ways this week's topics (e.g., error handling, pagination, API integration) can be incorporated into your capstone project.
   - Write 2-3 sentences for each idea explaining how it would enhance your project.

---

### Note

> Tasks are not graded but should be treated as an assignment. These are for practice and understanding.
