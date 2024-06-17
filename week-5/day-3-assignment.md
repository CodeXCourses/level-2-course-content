# Assignment: Postman and Thunder Client in VSCode

## Objective

- Install and set up Postman and Thunder Client in VSCode.
- Review and practice making API requests with Thunder Client.
- Explore and utilize API documentation effectively.
- Practice with Gemini's AI API and the Weather API.

## Instructions

### Part 1: Setting Up Postman and Thunder Client in VSCode

1. **Install Thunder Client**:
   - Open the Extensions view in VSCode (Ctrl+Shift+X).
   - Search for "Thunder Client" and click "Install".
   - **Verification**: Take a screenshot showing Thunder Client installed in VSCode.

2. **Install Postman**:
   - Open the Extensions view in VSCode (Ctrl+Shift+X).
   - Search for "Postman" and click "Install".
   - **Verification**: Take a screenshot showing Postman installed in VSCode.

### Part 2: Setting Up and Using Thunder Client

1. **Create a New Environment**:
   - Open Thunder Client.
   - Click on "Environments" -> "New Environment".
   - Name the environment "API Practice".
   - Add the following variables:
     - `base_url`: `https://generativelanguage.googleapis.com`
     - `api_key`: `YOUR_API_KEY`
   - **Verification**: Take a screenshot showing the environment and variables set up in Thunder Client.

2. **Create a New Request**:
   - Create a new POST request to Gemini's AI API:
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
   - **Verification**: Take a screenshot of the request and response in Thunder Client.

### Part 3: Exploring the Weather API

1. **Create a New GET Request**:
   - Create a new GET request to the Weather API:
     - Set the request URL: `{{base_url}}/v1/current.json?key={{api_key}}&q=London`.
     - Send the request and analyze the response.
   - **Verification**: Take a screenshot of the request and response in Thunder Client.

2. **Experiment with Different Endpoints**:
   - Change the `q` parameter to different cities (e.g., `New York`, `Tokyo`) and make requests to see the different responses.
   - **Verification**: Take a screenshot of the response for at least two different cities.

### Part 4: Exploring API Documentation

1. **Navigate to the Gemini API Documentation**:
   - Practice finding information such as required headers and request body structure.
   - **Verification**: Write a brief summary of the required headers and request body structure for Gemini's AI API in a `README.md` file.

2. **Navigate to the Weather API Documentation**:
   - Practice finding information such as different endpoints for weather data and optional query parameters.
   - **Verification**: Write a brief summary of the endpoints and optional query parameters for the Weather API in a `README.md` file.

## Submission

- **GitHub Repository**: Create a repository named `api-practice` and push the following:
  - The `README.md` file with summaries of the Gemini API and Weather API documentation.
  - Screenshots of all steps executed.
- **Submission Link**: Submit the URL of your GitHub repository.

## Rubric

| Criteria                                  | Limited (0 pts)                           | Partial (3 pts)                               | Complete (5 pts)                                      |
| ----------------------------------------- | ----------------------------------------- | --------------------------------------------- | ----------------------------------------------------- |
| **Thunder Client Installation**           | Not installed or no screenshot            | Installed but setup incomplete                | Installed and screenshot provided                    |
| **Postman Installation**                  | Not installed or no screenshot            | Installed but setup incomplete                | Installed and screenshot provided                    |
| **Environment and Variable Setup**        | Not created or incomplete                 | Created but variables not used correctly      | Created and used correctly and screenshot provided    |
| **Creating and Sending Requests**         | Requests not created or incorrect         | Created but incomplete requests               | Created correctly and screenshots provided            |
| **Exploring API Documentation**           | No exploration or incorrect summaries     | Limited exploration with incomplete summaries | Thorough exploration with correct summaries           |
