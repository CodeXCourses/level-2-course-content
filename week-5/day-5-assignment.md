
# Assignment: GitHub API Practice

## Objective

- Review and practice making API requests with the GitHub API.
- Apply key concepts learned during the week.

---

## Instructions

### Part 1: Review Key Concepts (Quick Refresher)

1. **GET Request with `fetch`**:

    - Write a function to fetch data from `https://jsonplaceholder.typicode.com/posts`.
    - Log the response data to the console.
    - **Example Output**: Display the title of the first post.
2. **POST Request with `fetch`**:

    - Write a function to send a POST request to `https://jsonplaceholder.typicode.com/posts` with the following data:
        - `title`: "Hello GitHub"
        - `body`: "This is a sample post"
        - `userId`: 1
    - Log the response data to the console.

---

### Part 2: GitHub API Basics

1. **Fetch GitHub User Information**:

    - Write a function to fetch user information from the GitHub API.
    - Example endpoint: `https://api.github.com/users/{username}` (replace `{username}` with your GitHub username).
    - **Hint**: No personal access token is required for this task.
    - Log the following details:
        - Username
        - Public repository count
        - Profile URL

    **Example Output**:

    ```plaintext
    Username: john-doe
    Public Repos: 12
    Profile: https://github.com/john-doe
    ```

2. **List Repositories**:

    - Write a function to list public repositories for your GitHub user.
    - Example endpoint: `https://api.github.com/users/{username}/repos`.
    - Log the names of the first five repositories.

---

### Part 3: Practice and Submission

1. **Optional (Challenge)**:

    - Write a function to create a new repository on GitHub using the endpoint `https://api.github.com/user/repos`.
    - Use your personal access token for authentication.
2. **Submission**:

    - Push the following to a GitHub repository named `github-api-practice`:
        - Your JavaScript file(s) with the code.
        - A brief `README.md` describing the tasks, your experience, and how to run the code.

---

## Rubric

|Criteria|Limited (0 pts)|Partial (3 pts)|Complete (5 pts)|
|---|---|---|---|
|**GET Request**|Function not provided or incorrect|Provided but not fully functional|Provided and fully functional|
|**POST Request**|Function not provided or incorrect|Provided but not fully functional|Provided and fully functional|
|**GitHub User Information**|Function not provided or incorrect|Provided but not fully functional|Provided and fully functional|
|**List Repositories**|Function not provided or incorrect|Provided but not fully functional|Provided and fully functional|
|**README File**|Not included or incomplete|Included but lacks clarity|Clear and well-structured README with instructions and insights|
