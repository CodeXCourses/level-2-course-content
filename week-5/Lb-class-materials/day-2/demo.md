# Weather API Demo with Postman

## Hour 1:

[Slide Deck](https://codex-demos.github.io/url-deck/)

Can demo JSON here:  
[test-request](https://httpbin.org/post)

```json
{
  "name": "Pick a Name",
  "occupation": "Student"
}
```

Can send messages to [secretMessage](https://secret-messages-7i4e.onrender.com/api/task)

```json
{
  "task": "task-11"
}
```

can show this snippet, but it wont send for GraphSQL

<!-- Query -->

```bash
query GetUser($id: ID!) {
  user(id: $id) {
    id
    name
    email
  }
}
```

<!-- Variables -->

```json
{
  "id": "1"
}
```

## Hour 2: Interacting with a Weather API

This hour focuses on signing up for a free weather API and using Postman to send requests and interpret responses.

### Step 1: Signing Up for a Free Weather API

#### Choosing a Weather API

- **Options**: There are several free weather APIs available, such as OpenWeatherMap, Weatherstack, or Climacell.
- **Signing Up**:
  - Visit the chosen API's website.
  - Create an account to get an API key. This key is necessary for authorization when sending requests.

#### Instructor Notes

- **Explain API Keys**: Discuss the importance of API keys for access control and tracking usage.
- **Privacy Reminder**: Remind students to never share their API keys publicly.

### Step 2: Configuring Postman

#### Adding the API Key

- **Environment Setup**: In Postman, set up an environment to store the API key.
- **Variable Creation**: Create a variable for the API key, e.g., `weatherApiKey`, and set its value.

#### Instructor Notes

- **Why Use Environments**: Explain how environments allow for flexible and secure API testing.
- **Variable Advantages**: Variables prevent repetition and enhance security by not exposing the API key in the request URL.

### Step 3: Sending a GET Request

#### Constructing the Request

- **API Endpoint**: Use the provided endpoint from the API documentation, typically in the format: `http://api.weatherapi.com/v1/current.json`
- **Query Parameters**: Include necessary parameters like `key` (API key), `q` (location query), and any other required by the API.

#### Instructor Notes

- **Endpoint Explanation**: Clarify that the endpoint is the URL where the API can be accessed.
- **Parameter Importance**: Emphasize how parameters are used to specify the data you want to retrieve.

### Step 4: Interpreting the Response

#### Analyzing the Response

- **Response Structure**: Discuss the JSON format of the response, highlighting key data points like temperature, weather conditions, and location.
- **Status Codes**: Explain the meaning of HTTP status codes (200 for success, 404 for not found, etc.).

#### Instructor Notes

- **JSON Familiarity**: Ensure students understand JSON format, as it's a common response format for APIs.
- **Status Code Relevance**: Discuss how status codes help in quickly identifying the nature of the response (success, error, etc.).

### Step 5: Assignment and Practice

#### Hands-On Practice

- **Try Different Locations**: Encourage students to send requests for different locations and observe how the response changes.
- **Error Handling**: Ask them to experiment with incorrect API keys or parameters to see error responses and status codes.

#### Assignment

- **Document Findings**: Students should document their findings in a markdown file, including screenshots of their requests and responses.
- **Reflection**: Include a section where they reflect on what they learned about API requests and responses.

### Closing Notes

- **Real-World Application**: Discuss how weather APIs are used in real-world applications, like weather forecasting websites and apps.
- **Q&A Session**: Address any questions or confusions students might have about the process.
