# Day 2: Working with Gemini's AI API

Welcome to Day 2 of Week 5! Today, we will learn how to send POST requests, work with Gemini's AI API, and explore the Weather API using Postman. Let's get excited about the possibilities with AI and see how we can leverage Gemini's powerful capabilities!

## Objectives

- Understand how to send POST requests to an API using Postman.
- Learn how to work with Gemini's AI API using Postman.
- Explore the Weather API using Postman to make API requests.

## Instructor Notes

### Sending POST Requests

- Explain the difference between GET and POST requests:
  - GET requests are used to retrieve data from a server.
  - POST requests are used to send data to a server, often for creating or updating resources.
- Demonstrate how to send a POST request using Postman.

### Working with Gemini's AI API

- Introduce Gemini's AI API:
  - Provide an overview of the API and its capabilities.
  - Explain the authentication process and required API keys.
  - Get excited about the possibilities with AI and how it can enhance applications!
- Demonstrate how to send POST requests to Gemini's AI API:
  - Show how to send text data and receive AI-generated responses using Postman.

### Exploring the Weather API

- Introduce the Weather API:
  - Provide an overview of the API and its capabilities.
  - Explain the authentication process and required API keys.
- Demonstrate how to make API requests to the Weather API using Postman.
- Explore different endpoints of the Weather API and analyze the responses.

## Hourly Breakdown

### Hour 1: Sending POST Requests and Working with Gemini's AI API

- **Objectives**:
  - Understand how to send POST requests to an API using Postman.
  - Learn how to work with Gemini's AI API using Postman.
- **Teaching Ideas**:

  - Explain POST requests:

    - Example using Postman:

      - Create a new POST request.
      - Set the request URL to `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=YOUR_API_KEY`.
      - Add the required headers:
        - `Content-Type`: `application/json`
      - Add the request body with the text data:

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

### Hour 2: Exploring the Weather API

- **Objectives**:
  - Explore the Weather API using Postman and make API requests.
- **Teaching Ideas**:

  - Introduce the Weather API:
    - Provide an overview of the API and its documentation.
  - Demonstrate how to make API requests using Postman:

    - Example: Get current weather data for a specific city

      ```json
      GET https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London
      ```

  - Explore different endpoints and analyze the responses:

    - Example: Get weather forecast

      ```json
      GET https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=London&days=3
      ```

  - Show how to extract and use data from the API responses in Postman.

## Postman Instructions

### Sending POST Requests with Postman

1. **Create a new POST request**:

   - Click on "New" -> "Request".
   - Name the request (e.g., "Gemini AI POST Request").
   - Add the request to an existing collection or create a new one.

2. **Set up the request URL and headers**:

   - Set the request type to POST.
   - Enter the request URL: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=YOUR_API_KEY`.
   - Click on the "Headers" tab and add a new header:
     - Key: `Content-Type`
     - Value: `application/json`

3. **Set up the request body**:

   - Click on the "Body" tab.
   - Select the "raw" option and set the format to JSON.
   - Enter the following JSON data:

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

4. **Send the request and analyze the response**:
   - Click on "Send".
   - Review the response data returned by Gemini's AI API.

### Exploring the Weather API with Postman

1. **Create a new GET request**:

   - Click on "New" -> "Request".
   - Name the request (e.g., "Weather API GET Request").
   - Add the request to an existing collection or create a new one.

2. **Set up the request URL**:

   - Set the request type to GET.
   - Enter the request URL: `https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London`.

3. **Send the request and analyze the response**:

   - Click on "Send".
   - Review the response data returned by the Weather API.

4. **Explore different endpoints**:
   - Example: Get weather forecast
     - Create a new GET request with the URL: `https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=London&days=3`.
     - Send the request and review the response data.

This plan focuses on using Postman to interact with APIs, working with Gemini's AI API, and exploring the Weather API. Let me know if any further adjustments are needed!
