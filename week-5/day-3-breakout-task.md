
#  Postman in VSCode

## Objective

- Install and set up Postman in VSCode.
- Review and practice making API requests using Postman.
- Explore and utilize API documentation effectively.
- Practice with Gemini's AI API and the Weather API.

---

## Instructions

### Part 1: Setting Up Postman in VSCode

1. **Install Postman**:

    - Open the Extensions view in VSCode (Ctrl+Shift+X).
    - Search for "Postman" and click **Install**.
2. **Set Up Postman**:

    - Launch the Postman extension by clicking its icon in the sidebar or opening it via the Command Palette (Ctrl+Shift+P and type "Postman").
    - Log in or sign up for a free Postman account if prompted.

---

### Part 2: Making API Requests with Postman

1. **Create a New Request**:

    - Open Postman in VSCode and create a new request.
    - Name the request (e.g., "Gemini AI POST Request").
2. **Gemini's AI API**:

    - Set the request type to **POST**.
    - Enter the request URL:

        ```plaintext
        https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=YOUR_API_KEY
        ```

    - Add the required headers:
        - Key: `Content-Type`
        - Value: `application/json`
    - Add the following request body:

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

---

### Part 3: Exploring the Weather API

1. **Create a New GET Request**:

    - Create a new GET request in Postman for the Weather API:
        - Set the request URL:

            ```plaintext
            https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London
            ```

2. **Analyze the Response**:

    - Review the response details, such as the current weather in London.
3. **Experiment with Query Parameters**:

    - Modify the `q` parameter to test different cities (e.g., `New York`, `Tokyo`).
    - Observe how the responses change for each location.

---

### Part 4: Exploring API Documentation

1. **Gemini API Documentation**:

    - Go to the Gemini API documentation.
    - Locate the following:
        - Required headers for authentication.
        - Request body structure for generating content.
    - Use this information to confirm your Postman request setup.
2. **Weather API Documentation**:

    - Explore the Weather API documentation.
    - Identify:
        - Endpoints for weather data (current, forecast, etc.).
        - Optional query parameters for customizing requests.

---

### Notes

- No need to write or submit anything for this assignment—this is a practice activity to get comfortable using Postman in VSCode and making API requests.
- Feel free to explore additional APIs or endpoints for further practice!
