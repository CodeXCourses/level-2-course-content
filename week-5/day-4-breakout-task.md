# Assignment: JavaScript and APIs

## Objective

- Understand how to send API requests using JavaScript.
- Learn how to handle API responses in JavaScript.
- Securely handle API keys using a prebuilt server.

## Instructions

### Part 1: Sending API Requests with JavaScript and Handling API Responses

1. **Send a GET request using `fetch` with `async`/`await`**:

   - Write a function to fetch data from `https://jsonplaceholder.typicode.com/posts`.
   - Log the response data to the console.
   - Handle any errors that occur.

2. **Send a POST request using `fetch` with `async`/`await`**:

   - Write a function to send a POST request to `https://jsonplaceholder.typicode.com/posts` with the following data:
     - `title`: "foo"
     - `body`: "bar"
     - `userId`: 1
   - Log the response data to the console.
   - Handle any errors that occur.

3. **Handle API responses and errors**:

   - Write a function to fetch data from `https://jsonplaceholder.typicode.com/posts/invalid` and handle errors appropriately.
   - Log any errors to the console.

### Part 2: Securing API Keys Using Prebuilt Server on Render.com

1. **Fork the Repo and Deploy on Render.com**:

   - Fork the repository from [https://github.com/tm-LBenson/proxy-key](https://github.com/tm-LBenson/proxy-key).
   - Deploy the forked repository on Render.com following these steps:
     - Sign up or log in to [Render.com](https://render.com).
     - Create a new "Web Service" and connect your GitHub account.
     - Select the forked repository and configure the service:
       - **Name**: `proxy-key`
       - **Region**: Select your region (e.g., Ohio US East)
       - **Branch**: `main`
       - **Runtime**: Node
       - **Build Command**: `npm install`
       - **Start Command**: `npm start`

2. **Set Environment Variables on Render.com**:

   - In the Render dashboard, go to the "Environment" tab for your service.
   - Add the following environment variables:
     - `KEY`: The API key you want to secure. (For the assignment, use a placeholder KEY, don't expose your real key in a screenshot)
     - `SECRET`: A secret value that will be used to authenticate requests.

3. **Retrieve API Keys Securely**:

   - Write a function to retrieve the API key from your deployed server and use it to make a request to an external API.
   - **Note**: The JSON body for the request should look like this:

     ```json
     {
       "message": "your-secret"
     }
     ```

### Part 3: Using Gemini's AI API

1. **Generate AI Content Using Secure API Key**:

   - Write a function to generate content using Gemini's AI API.
   - Use the prebuilt server to securely retrieve the API key.

   - Add an HTML element to display the result.

### Note

> Tasks are not graded but should be treated as an assignment. These are for practice an understanding