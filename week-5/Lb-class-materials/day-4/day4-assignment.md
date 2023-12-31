## Assignment: Postman Day 4 - Interacting with GitHub's API

### Objective

Utilize Postman to interact with GitHub's API by retrieving user information and creating a new repository. Document the entire process, including the request setup and the response in your `README.md` file, accompanied by appropriate screenshots.

### Instructions

#### Part 1: Retrieve User Information

- **Set Up the Request in Postman**:

  - Set up a variable base url to `https://api.github.com/`
  - Use the previously created "GitHub API" environment in Postman.
  - Create a new GET request to `{{baseUrl}}user`.
  - Ensure the Authorization header is correctly configured with your Bearer Token.

- **Send the Request and Capture the Response**:
  - Execute the GET request to retrieve your GitHub user information.
  - Take a screenshot of both the request setup and the JSON response in Postman.

#### Part 2: Create a New Repository

- **Configure the POST Request**:

  - Create a new POST request within the GitHub collection.
  - Set the URL to `{{baseUrl}}user/repos` and include the necessary JSON body for repository creation.

- **Execute and Document**:
  - Send the POST request to create a new repository.
  - Capture screenshots of the request configuration and the response indicating successful repository creation.

#### Part 3: Documentation

- **Update `README.md`**:
  - In your `postman-reflection` repository, create a new section for this assignment.
  - Document the steps for both retrieving user info and creating a new repository.
  - Include the screenshots to demonstrate the process and responses.

### Rubric

#### GitHub API Interaction - /10

- Complete (10 pts): Successfully retrieves user information and creates a new repository, with clear documentation and screenshots.
- Partial (5 pts): Completes most tasks but may have minor errors in request setup or documentation.
- Limited (0 pts): Significant issues in completing the tasks or lacks proper documentation.

#### Clarity and Detail in Documentation - /5

- Complete (5 pts): Documentation is comprehensive, clear, and includes detailed observations and well-placed screenshots.
- Partial (2 pts): Documentation is present but lacks some detail or clarity in explanations.
- Limited (0 pts): Poorly documented, lacking in detail, or screenshots are missing.

#### Overall Quality and Submission - /5

- Complete (5 pts): The submission is well-organized, with thorough explanations and complete screenshots.
- Partial (2 pts): The submission is mostly complete but may lack some organization or clarity.
- Limited (0 pts): The submission is disorganized, incomplete, or significantly lacks quality.
