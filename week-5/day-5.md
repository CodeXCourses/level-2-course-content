# Day 5: Review and GitHub API Practice

Welcome to Day 5 of Week 5! Today, we will review the concepts learned throughout the week and practice making API requests with the GitHub API.

## Objectives

- Review the key concepts learned throughout the week.
- Practice making API requests with the GitHub API.
- Apply what you've learned about APIs, handling responses, and securing API keys.

## Instructor Notes

### Review of the Week's Concepts

- Recap the key points covered in the previous sessions:
  - Sending API requests with JavaScript (`fetch` API).
  - Handling API responses.
  - Securing API keys using a prebuilt server on Render.com.
  - Working with Gemini's AI API to send POST requests and receive responses.
  - Using Postman and Thunder Client in VSCode.
- Address any questions or concerns students may have.

### Practicing with the GitHub API

- Introduce the GitHub API:
  - Explain the purpose of the GitHub API and what it can be used for.
  - Provide an overview of the GitHub API documentation.
- Demonstrate how to make API requests to the GitHub API using fetch.
- Show how to authenticate with the GitHub API using a personal access token.
- Guide students through examples of common tasks with the GitHub API:
  - Fetch user information.
  - List repositories.
  - Create a new repository.

## Hourly Breakdown

### Hour 1: Review of the Week's Concepts

- **Objectives**:
  - Review the key concepts learned throughout the week.
- **Teaching Ideas**:

  - Recap the main points:

    - Sending API requests with JavaScript.

      ```js
      // Example of sending a GET request using fetch with async/await
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

    - Handling API responses.

      ```js
      // Example of handling a response using async/await
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

    - Securing API keys using a prebuilt server on Render.com.
    - Working with Gemini's AI API:

      - Sending POST requests to Gemini's AI API:

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

### Hour 2: Practicing with the GitHub API

- **Objectives**:
  - Practice making API requests with the GitHub API.
  - Apply what you've learned about APIs, handling responses, and securing API keys.
- **Teaching Ideas**:

  - Introduce the GitHub API:
    - Explain the purpose and capabilities of the GitHub API.
    - Provide an overview of the GitHub API documentation (https://docs.github.com/en/rest).
  - Demonstrate how to make API requests using fetch:

    - Example: Fetch user information

      ```js
      async function fetchUserInfo() {
        try {
          const response = await fetch(
            'https://api.github.com/users/{username}',
            {
              headers: {
                Authorization: 'token YOUR_PERSONAL_ACCESS_TOKEN',
              },
            },
          );
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error:', error);
        }
      }

      fetchUserInfo();
      ```

    - Example: List repositories

      ```js
      async function listRepos() {
        try {
          const response = await fetch(
            'https://api.github.com/users/{username}/repos',
            {
              headers: {
                Authorization: 'token YOUR_PERSONAL_ACCESS_TOKEN',
              },
            },
          );
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error:', error);
        }
      }

      listRepos();
      ```

    - Example: Create a new repository

      ```js
      async function createRepo() {
        const repoData = {
          name: 'new-repo',
          description: 'This is your new repository',
          private: false,
        };
        try {
          const response = await fetch('https://api.github.com/user/repos', {
            method: 'POST',
            headers: {
              Authorization: 'token YOUR_PERSONAL_ACCESS_TOKEN',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(repoData),
          });
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error('Error:', error);
        }
      }

      createRepo();
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

// Example of handling a response using async/await
async function handleResponse() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
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
