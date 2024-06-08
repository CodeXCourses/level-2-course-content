# Assignment: GitHub API Practice

## Objective

- Review the key concepts learned throughout the week.
- Practice making API requests with the GitHub API.
- Apply what you've learned about APIs, handling responses, and securing API keys.

## Instructions

### Part 1: Review Key Concepts

1. **Send a GET request using `fetch` with `async`/`await`**:

   - Write a function to fetch data from `https://jsonplaceholder.typicode.com/posts`.
   - Log the response data to the console.
   - Handle any errors that occur.
   - **Verification**: Include the function code and a screenshot of the console output.

2. **Send a POST request using `fetch` with `async`/`await`**:

   - Write a function to send a POST request to `https://jsonplaceholder.typicode.com/posts` with the following data:
     - `title`: "foo"
     - `body`: "bar"
     - `userId`: 1
   - Log the response data to the console.
   - Handle any errors that occur.
   - **Verification**: Include the function code and a screenshot of the console output.

3. **Handle API responses and errors**:
   - Write a function to fetch data from `https://jsonplaceholder.typicode.com/posts/invalid` and handle errors appropriately.
   - Log any errors to the console.
   - **Verification**: Include the function code and a screenshot of the console output.

### Part 2: Practicing with the GitHub API

1. **Fetch User Information**:

   - Write a function to fetch user information from the GitHub API for a given username.
   - Use a personal access token for authentication.
   - Example endpoint: `https://api.github.com/users/{username}`
   - **Verification**: Include the function code and a screenshot of the console output.

2. **List Repositories**:

   - Write a function to list repositories for a given GitHub user.
   - Use a personal access token for authentication.
   - Example endpoint: `https://api.github.com/users/{username}/repos`
   - **Verification**: Include the function code and a screenshot of the console output.

3. **Create a New Repository**:
   - Write a function to create a new repository on GitHub.
   - Use a personal access token for authentication.
   - Example endpoint: `https://api.github.com/user/repos`
   - Use the following data for the new repository:
     - `name`: "new-repo"
     - `description`: "This is your new repository"
     - `private`: false
   - **Verification**: Include the function code and a screenshot of the console output.

### Part 3: Securing API Keys Using Prebuilt Server on Render.com

1. **Retrieve API Keys Securely**:

   - Write a function to retrieve the API key from your deployed server and use it to make a request to an external API.
   - **Note**: The JSON body for the request should look like this:

     ```json
     {
       "message": "your-secret"
     }
     ```

   - **Verification**: Include the function code and a screenshot of the console output.

### Submission

- **GitHub Repository**: Create a repository named `github-api-practice` and push the following:
  - The `README.md` file with your code.
  - Screenshots of all steps executed.
- **Submission Link**: Submit the URL of your GitHub repository.

## Rubric

| Criteria                 | Limited (0 pts)                    | Partial (3 pts)                   | Complete (5 pts)              |
| ------------------------ | ---------------------------------- | --------------------------------- | ----------------------------- |
| **GET Request**          | Function not provided or incorrect | Provided but not fully functional | Provided and fully functional |
| **POST Request**         | Function not provided or incorrect | Provided but not fully functional | Provided and fully functional |
| **Handle API Responses** | Function not provided or incorrect | Provided but not fully functional | Provided and fully functional |
| **GitHub User Info**     | Function not provided or incorrect | Provided but not fully functional | Provided and fully functional |
| **Create GitHub Repo**   | Function not provided or incorrect | Provided but not fully functional | Provided and fully functional |
