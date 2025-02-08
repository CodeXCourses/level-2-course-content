# Assignment: API Review and Weather Application

## Objective

- Review API concepts with JavaScript.
- Build a simple weather application using API data.

## Instructions

### Part 1: Review API Concepts

1. **Send a GET request using `fetch` with `async`/`await`**:

   - Write a function to fetch data from `https://jsonplaceholder.typicode.com/posts`.
   - Log the response data to the console.
   - Handle any errors that occur.
   - **Verification**: Include the function code and a screenshot of the console output.

2. **Handle API responses and errors**:
   - Write a function to fetch data from `https://jsonplaceholder.typicode.com/posts/invalid` and handle errors appropriately.
   - Log any errors to the console.
   - **Verification**: Include the function code and a screenshot of the console output.

### Part 2: Build a Weather Application

1. **Set up the HTML structure**:

   - Create an `index.html` file.
   - Include an input field for the city name and a button to get the weather.
   - Include a div to display the weather data.
   - **Verification**: Take a screenshot of your `index.html` file showing the structure.

2. **Fetch and display weather data**:
   - Create a JavaScript file named `app.js`.
   - Write a function to fetch weather data from `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=${city}`.
   - Display the fetched weather data on the DOM.
   - **Verification**: Include the function code and a screenshot of the displayed weather data.

### Part 3: Secure API Keys

1. **Retrieve API keys securely**:

   - Use a prebuilt server to retrieve the API key securely.
   - The JSON body for the request should look like this:

     ```json
     {
       "message": "your-secret"
     }
     ```

   - **Verification**: Include the function code and a screenshot of the console output.

## Submission

- **GitHub Repository**: Create a repository named `weather-app` and push the following:
  - The `index.html` and `app.js` files with all the changes.
  - Screenshots of all steps executed in the README.md..
- **Submission Link**: Submit the URL of your GitHub repository. Remember to deploy your lab to GitHub Pages.

## Rubric

| Criteria                 | Limited (0 pts)                     | Partial (3 pts)                   | Complete (5 pts)                     |
| ------------------------ | ----------------------------------- | --------------------------------- | ------------------------------------ |
| **GET Request**          | Function not provided or incorrect  | Provided but not fully functional | Provided and fully functional        |
| **Handle API Responses** | Function not provided or incorrect  | Provided but not fully functional | Provided and fully functional        |
| **HTML Structure**       | Structure not provided or incorrect | Provided but not fully functional | Provided and fully functional        |
| **Display Weather Data** | Function not provided or incorrect  | Provided but not fully functional | Provided and fully functional        |
| **Secure API Keys**      | Not implemented or incorrect        | Implemented with minor issues     | Implemented correctly and functional |
