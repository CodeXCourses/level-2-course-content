# Day 3: Postman and Thunder Client in VSCode

Welcome to Day 3 of Week 5! Today, we will install and set up Postman and Thunder Client in VSCode, review what we did yesterday, and practice making API requests. We'll focus on using Gemini's AI API and the Weather API, and we'll dive deep into the documentation to practice finding specific information.

## Objectives

- Install and set up Postman and Thunder Client in VSCode.
- Review and practice making API requests with Thunder Client.
- Explore and utilize API documentation effectively.
- Get lots of practice with Gemini's AI API and the Weather API.

## Instructor Notes

### Setting Up and Using Postman and Thunder Client

- Introduce Thunder Client and Postman extensions in VSCode:
  - Explain the benefits of using these tools directly within the code editor.
- Demonstrate how to install and set up both extensions:
  - Show how to install the Thunder Client and Postman extensions from the VSCode marketplace.
  - Walk through the setup process for each extension.

### Practicing API Requests

- Review what was covered yesterday:
  - Recap sending POST requests using Postman.
  - Emphasize the importance of practicing with Gemini's AI API and the Weather API.
- Show how to create environments and set up a structure for requests:
  - Demonstrate how to create environments in Thunder Client.
  - Show how to use the base URL feature to simplify request management.

### Exploring API Documentation

- Highlight the importance of diving deep into API documentation:
  - Explain how to find and use API documentation effectively.
  - Practice finding specific information in the Gemini and Weather API documentation.

## Hourly Breakdown

### Hour 1: Setting Up and Using Postman and Thunder Client in VSCode

- **Objectives**:
  - Install and set up Postman and Thunder Client in VSCode.
  - Review making API requests with Thunder Client.
- **Teaching Ideas**:
  - Installing and setting up Postman and Thunder Client:
    - Show how to install the Thunder Client extension:
      - Open the Extensions view in VSCode (Ctrl+Shift+X).
      - Search for "Thunder Client" and click "Install".
    - Show how to install the Postman extension:
      - Open the Extensions view in VSCode (Ctrl+Shift+X).
      - Search for "Postman" and click "Install".
  - Setting up environments and request structure in Thunder Client:
    - Create a new environment:
      - Open Thunder Client and click on "Environments".
      - Click "New Environment" and name it (e.g., "API Practice").
      - Add variables such as `base_url`, `api_key`, etc.
    - Use the base URL feature:
      - In the request URL field, use the variable (e.g., `{{base_url}}/v1/current.json?key={{api_key}}&q=London`).

### Hour 2: Practicing API Requests and Exploring Documentation

- **Objectives**:
  - Practice making API requests with Thunder Client.
  - Explore API documentation effectively.
- **Teaching Ideas**:

  - Practicing with Gemini's AI API:

    - Create a new POST request to Gemini's AI API using Thunder Client:

      - Set the request URL: `{{base_url}}/v1beta/models/gemini-1.5-flash-latest:generateContent?key={{api_key}}`.
      - Add the required headers:
        - Key: `Content-Type`
        - Value: `application/json`
      - Add the request body:

        ```json
        {
          "contents": [
            {
              "parts": [
                {
                  "text": "Write a story about a magic backpack."
                }
              ]
            }
          ]
        }
        ```

      - Send the request and analyze the response.

  - Practicing with the Weather API:
    - Create a new GET request to the Weather API using Thunder Client:
      - Set the request URL: `{{base_url}}/v1/current.json?key={{api_key}}&q=London`.
      - Send the request and analyze the response.
  - Exploring API documentation:
    - Navigate to the Gemini API documentation and practice finding information:
      - Example: Find the required headers for authentication.
      - Example: Find the structure of the request body for generating content.
    - Navigate to the Weather API documentation and practice finding information:
      - Example: Find different endpoints for weather data (current, forecast).
      - Example: Find optional query parameters for customizing requests.

## Postman and Thunder Client Instructions

### Setting Up Thunder Client in VSCode

1. **Install Thunder Client**:

   - Open the Extensions view in VSCode (Ctrl+Shift+X).
   - Search for "Thunder Client" and click "Install".

2. **Create a new environment**:

   - Open Thunder Client.
   - Click on "Environments" -> "New Environment".
   - Name the environment (e.g., "API Practice").
   - Add variables:
     - `base_url`: `https://generativelanguage.googleapis.com`
     - `api_key`: `YOUR_API_KEY`

3. **Use the base URL feature**:
   - In a new request, use the variables in the URL field (e.g., `{{base_url}}/v1/current.json?key={{api_key}}&q=London`).

### Setting Up Postman in VSCode

1. **Install Postman**:
   - Open the Extensions view in VSCode (Ctrl+Shift+X).
   - Search for "Postman" and click "Install".

### Practicing API Requests with Thunder Client

1. **Create a new POST request to Gemini's AI API**:

   - Set the request URL: `{{base_url}}/v1beta/models/gemini-1.5-flash-latest:generateContent?key={{api_key}}`.
   - Add the required headers:
     - Key: `Content-Type`
     - Value: `application/json`
   - Add the request body:

     ```json
     {
       "contents": [
         {
           "parts": [
             {
               "text": "Write a story about a magic backpack."
             }
           ]
         }
       ]
     }
     ```

   - Send the request and analyze the response.

2. **Create a new GET request to the Weather API**:
   - Set the request URL: `{{base_url}}/v1/current.json?key={{api_key}}&q=London`.
   - Send the request and analyze the response.

### Exploring API Documentation More

1. **Navigate to the Gemini API documentation**:

   - Practice finding information such as required headers, request body structure, and different endpoints.

2. **Navigate to the Weather API documentation**:
   - Practice finding information such as different endpoints for weather data and optional query parameters.

This plan focuses on setting up and using Postman and Thunder Client in VSCode, practicing making API requests, and exploring API documentation. Let me know if any further adjustments are needed!
