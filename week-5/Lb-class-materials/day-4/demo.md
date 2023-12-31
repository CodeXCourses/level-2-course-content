# Day 4: Advanced Postman Features

## Hour 1: Interacting with GitHub's API using Postman

This session covers how to use Postman to interact with GitHub's API, specifically focusing on retrieving user information.

### Setting Up for GitHub's API Interaction

1. **Introduction to GitHub API**:

   - Briefly explain the GitHub API and its uses, such as retrieving user data, repositories, etc.
   - Mention the need for authentication (Personal Access Token) to access most of the endpoints.

2. **Creating a Personal Access Token on GitHub**:
   - Go to GitHub Settings -> Developer Settings -> Personal Access Tokens.
   - Generate a new token with appropriate scopes (e.g., `user` scope for accessing user information).

### Configuring Postman for GitHub API

1. **Setting Environment and Variables**:

   - Create a new environment in Postman named "GitHub API".
   - Add variables like `baseUrl` set to `https://api.github.com/` and `accessToken` with your GitHub token.

2. **Importing GitHub API Collection (Optional)**:
   - If GitHub provides an OpenAPI Specification, demonstrate how to import it as a collection in Postman.
   - Alternatively, manually create a new collection for GitHub.

### Sending Requests to GitHub's API

1. **Retrieve User Information**:

   - Create a new GET request in the GitHub collection.
   - Set URL to `{{baseUrl}}user`.
   - Add Authorization header: Type `Bearer Token`, and use `{{accessToken}}` as the token.

2. **Executing and Analyzing the Request**:
   - Send the request and observe the response.
   - Discuss the structure of the JSON response, focusing on elements like `login`, `name`, `public_repos`, etc.

#### Instructor Notes

- **Discussing Authorization**: Emphasize the use of Bearer Token for secure API access.
- **API Rate Limiting**: Briefly touch on API rate limits and their importance in controlling access.
- **Response Analysis**: Guide students through the response, highlighting how to extract and interpret various data points.

## Hour 2: Creating a GitHub Repository and Advanced Features

This session is about using Postman to create a repository on GitHub and exploring more of its advanced functionalities.

### Creating a GitHub Repository Using Postman

1. **Understanding GitHub's API for Repository Creation**:

   - Review the [GitHub API documentation for creating a repository](https://docs.github.com/en/rest/reference/repos#create-a-repository-for-the-authenticated-user).
   - Discuss the required fields and the HTTP method used (POST).

2. **Setting Up the Request in Postman**:

   - Ensure the "GitHub API" environment and `accessToken` variable are already set up from the previous session.
   - Create a new POST request in the GitHub collection.
   - Set URL to `{{baseUrl}}user/repos`.

3. **Configuring the Request Body**:

   - In the Body tab, select `raw` and choose `JSON` format.
   - Add the JSON data for repository creation. For example:
     ```json
     {
       "name": "MyNewRepo",
       "description": "Created via Postman",
       "private": false
     }
     ```
   - Ensure that the Authorization header is set to use the Bearer Token (`{{accessToken}}`).

4. **Sending the Request and Observing the Response**:
   - Send the request and examine the response.
   - Discuss the status code and the response body, which includes details of the newly created repository.

#### Instructor Notes

- **Step-by-Step Guidance**: Walk through each step, emphasizing the importance of the correct API endpoint and body structure.
- **Error Handling**: Demonstrate what happens if a field is omitted or incorrectly formatted in the request body.
- **Response Interpretation**: Explain how the response gives confirmation and details about the newly created repository.

### Exploring Advanced Features of Postman

1. **Scripting with Postman**:

   - Introduce Postman's scripting capabilities with pre-request scripts and tests.
   - Show how to write a simple test to validate the response status code.

2. **Using Postman Console for Debugging**:

   - Demonstrate how to use the Postman Console to debug requests.
   - Explain how it can show detailed request and response data, including headers, body, and scripts.

3. **Advanced Data Handling**:
   - Discuss how to work with data files for running collections with different data sets.
   - Show an example of using a CSV file in a runner to create multiple repositories with different names.

#### Instructor Notes

- **Encourage Experimentation**: Urge students to try out scripting and console debugging to get a feel for these powerful features.
- **Practical Applications**: Discuss how these advanced features can be applied in real-world API testing scenarios.
- **Resource Sharing**: Provide additional resources or documentation for students who want to explore these features further.

### Closing Remarks and Preview

- Summarize the key learnings from the session.
- Preview the next session's content, focusing on other real-world applications of Postman.
