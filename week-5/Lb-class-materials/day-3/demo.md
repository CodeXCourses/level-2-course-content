# Postman Demo Guide

## Hour 1: Collections and Variables in Postman

### Creating Collections in Postman

1. **Introduction to Collections**:

   - Collections are groups of saved requests that can be organized into folders.
   - They're useful for grouping related API requests, such as all requests to the Pokémon API.

2. **Creating a Pokémon API Collection**:
   - Open Postman and click on the “New” button, then select “Collection”.
   - Name the collection (e.g., "Pokémon API Collection").

### Using Variables in Postman

1. **Understanding Variables**:

   - Variables in Postman store data that can be reused across multiple requests.
   - They can be used for environment-specific data like API keys or base URLs.

2. **Adding Variables**:

   - Create an environment (e.g., "Pokémon API Environment").
   - Add variables like `baseUrl` set to `https://pokeapi.co/api/v2/`.

3. **Using Variables in Requests**:
   - Create requests within the collection using variables. For instance, for a GET request to fetch fire-type Pokémon, the URL can be `{{baseUrl}}pokemon/charmander`.

#### Instructor Notes

- Discuss the benefits of using collections for organization and efficiency.
- Explain the use of variables for flexibility and security (especially for API keys).

---

## Hour 2: Bearer Tokens and Authenticated Requests

### Understanding Bearer Tokens

1. **What are Bearer Tokens?**:

   - Bearer tokens are a common method for handling authentication in APIs.
   - They are typically passed in the header of HTTP requests.

2. **Use Case with GitHub API**:
   - A quick example with the GitHub API showing token usage.
   - Mention it will be covered in detail the next day.

### Setting and Using Bearer Tokens

1. **Setting Up a Token**:

   - For APIs that require authentication, a Bearer token is often needed.
   - In Postman, tokens can be added under the "Authorization" tab in a request.

2. **Sending an Authenticated Request**:

   - Create a new request in the Pokémon API collection.
   - Set the method to GET and URL to a specific endpoint that requires authentication.
   - Add the Bearer token in the Authorization tab.

3. **Demonstrate with a Real API**:
   - If possible, use a real API that requires Bearer tokens for authentication, like the GitHub API.

#### Instructor Notes

- Emphasize the importance of securely handling Bearer tokens.
- Discuss common errors, like expired or incorrect tokens, and their implications.

### Variables in URLs

- Show an example of using variables in the URL, such as `{{baseUrl}}` in the Pokémon API requests.
- Discuss how this approach centralizes control over base URLs and API keys, making it easier to manage and update them.

#### Practical Demonstration

- Run the entire Pokémon API collection, including the endpoint with a known bad URL to show how errors are displayed.
- Explain how collections can be used to group and run multiple requests for testing or data retrieval.

---

### Additional Tips for Educators

- Encourage questions and active participation.
- Consider preparing a few common errors and troubleshooting steps to help students understand how to resolve issues.
- Use visuals or a drawing app to explain concepts like Bearer tokens and API request flow, especially if these concepts are new to your students.

---
