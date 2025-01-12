# Day 4: JavaScript and APIs

Welcome to Day 4 of Week 5! Today, we will learn how to send API requests with JavaScript, handle API responses, and securely handle API keys using a prebuilt server deployed on Render.com.

## Objectives

- Understand how to send API requests using JavaScript.
- Learn how to handle API responses in JavaScript.
- Securely handle API keys using a prebuilt server.

## Instructor Notes

### Sending API Requests with JavaScript

- Explain how to use the `fetch` API to send requests.
- Demonstrate how to send GET and POST requests using `async` and `await`.

### Handling API Responses

- Explain how to handle responses from API requests.
- Demonstrate how to process JSON data from responses.
- Show how to handle errors in API requests.

### Securing API Keys

- Explain the importance of securing API keys.
- Introduce the prebuilt server on Render.com:
  - Explain how to fork the repo and deploy it on Render.com.
  - Demonstrate how to set environment variables on Render.com.
  - Show how to use the prebuilt server to securely retrieve API keys.

## Hourly Breakdown

### Hour 1: Sending API Requests with JavaScript and Handling API Responses

- **Objectives**:
  - Understand how to send API requests using JavaScript.
  - Learn how to handle API responses in JavaScript.
- **Teaching Ideas**:

  - Sending API requests with `fetch`:

    - Example GET request using `async`/`await`:

      ```js
      async function fetchData() {
        try {
          const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts',
          );
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error:', error);
        }
      }
      fetchData();
      ```

    - Example POST request using `async`/`await`:

      ```js
      async function postData() {
        const data = {
          title: 'foo',
          body: 'bar',
          userId: 1,
        };
        try {
          const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            },
          );
          const result = await response.json();
          console.log(result);
        } catch (error) {
          console.error('Error:', error);
        }
      }
      postData();
      ```

  - Handling API responses:

    - Explain how to process JSON data using `async`/`await`:

      ```js
      async function handleResponse() {
        try {
          const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts',
          );
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error:', error);
        }
      }
      handleResponse();
      ```

    - Show how to handle errors using `async`/`await`:

      ```js
      async function handleError() {
        try {
          const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts/invalid',
          );
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error:', error);
        }
      }
      handleError();
      ```

### Hour 2: Securing API Keys Using Prebuilt Server on Render.com

- **Objectives**:
  - Understand the importance of securing API keys.
  - Learn how to use a prebuilt server to securely handle API keys.
- **Teaching Ideas**:
  - Explain the risks of exposing API keys:
    - Unauthorized use and potential abuse.
    - Security breaches and data leaks.
  - Introduce the prebuilt server on Render.com:
    - Explain the server's functionality: it requires a secret and returns an API key.
    - Show how to fork the repo and deploy it on Render.com.

#### Step-by-Step Instructions for Instructors

1. **Fork the Repo**:

   - Go to the repository URL: [https://github.com/tm-LBenson/proxy-key](https://github.com/tm-LBenson/proxy-key).
   - Click on the "Fork" button in the upper right corner to create a copy of the repository in your own GitHub account.

2. **Deploy the Forked Repo on Render.com**:

   - Go to [Render.com](https://render.com) and sign up or log in.
   - Click on the "New" button and select "Web Service".
   - Connect your GitHub account and select the forked repository.
   - Configure the service with the following settings:
     - **Name**: `proxy-key`
     - **Region**: Select your region (e.g., Ohio US East)
     - **Branch**: `main`
     - **Runtime**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`

3. **Set Environment Variables**:

   - In the Render dashboard, go to the "Environment" tab for your service.
   - Add the following environment variables:
     - `KEY`: The API key you want to secure.
     - `SECRET`: A secret value that will be used to authenticate requests.
   - Example:

     ```json
     {
       "KEY": "your-api-key-here",
       "SECRET": "your-secret-here"
     }
     ```

4. **Using the Prebuilt Server to Securely Retrieve API Keys**:

   - Example JavaScript code to retrieve the API key using `async`/`await`:

     ```js
     async function retrieveApiKey() {
       const secret = 'your-secret-here';
       try {
         const response = await fetch(
           'https://your-deployed-server-url.com/get-api-key',
           {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json',
             },
             body: JSON.stringify({ secret: secret }),
           },
         );
         const data = await response.json();
         const apiKey = data.apiKey;
         console.log('Retrieved API Key:', apiKey);
         // Use the retrieved API key in another request
         const result = await fetch(
           `https://api.example.com/data?key=${apiKey}`,
         );
         const resultData = await result.json();
         console.log(resultData);
       } catch (error) {
         console.error('Error:', error);
       }
     }
     retrieveApiKey();
     ```

   - Using the prebuilt server to securely retrieve API keys and make requests to Gemini's AI API:

     ```js
     async function generateAIContent() {
       const secret = 'your-secret-here';
       try {
         const response = await fetch(
           'https://your-deployed-server-url.com/get-api-key',
           {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json',
             },
             body: JSON.stringify({ secret: secret }),
           },
         );
         const data = await response.json();
         const apiKey = data.apiKey;

         const aiData = {
           contents: [
             {
               parts: [
                 {
                   text: 'Write a story about a magic backpack.',
                 },
               ],
             },
           ],
         };

         const aiResponse = await fetch(
           `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
           {
             method: 'POST',
             headers: {
               'Content-Type': 'application/json',
             },
             body: JSON.stringify(aiData),
           },
         );
         const aiResult = await aiResponse.json();
         document.getElementById('output').innerText = JSON.stringify(
           aiResult,
           null,
           2,
         );
       } catch (error) {
         console.error('Error:', error);
       }
     }
     generateAIContent();
     ```

   - Add an HTML element to display the result:

     ```html
     <div id="output"></div>
     ```

## Code Snippets

```js
// Example of sending a GET request using fetch with async/await
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();

// Example of sending a POST request using fetch with async/await
async function postData() {
  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error('Error:', error);
  }
}

postData();

// Using prebuilt server to securely retrieve API keys using async/await
async function retrieveApiKey() {
  const secret = 'your-secret-here';
  try {
    const response = await fetch(
      'https://your-deployed-server-url.com/get-api-key',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ secret: secret }),
      },
    );
    const data = await response.json();
    const apiKey = data.apiKey;
    console.log('Retrieved API Key:', apiKey);
    // Use the retrieved API key in another request
    const result = await fetch(`https://api.example.com/data?key=${apiKey}`);
    const resultData = await result.json();
    console.log(resultData);
  } catch (error) {
    console.error('Error:', error);
  }
}

retrieveApiKey();

// Using prebuilt server to securely retrieve API keys and make requests to Gemini's AI API
async function generateAIContent() {
  const secret = 'your-secret-here';
  try {
    const response = await fetch(
      'https://your-deployed-server-url.com/get-api-key',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ secret: secret }),
      },
    );
    const data = await response.json();
    const apiKey = data.apiKey;

    const aiData = {
      contents: [
        {
          parts: [
            {
              text: 'Write a story about a magic backpack.',
            },
          ],
        },
      ],
    };

    const aiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(aiData),
      },
    );
    const aiResult = await aiResponse.json();
    document.getElementById('output').innerText = JSON.stringify(
      aiResult,
      null,
      2,
    );
  } catch (error) {
    console.error('Error:', error);
  }
}

generateAIContent();
```

```html
<!-- HTML element to display the result -->
<div id="output"></div>
```
