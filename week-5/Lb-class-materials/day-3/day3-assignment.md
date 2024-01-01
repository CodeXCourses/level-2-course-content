## Assignment: Postman Day 3 - API Collections

### Objective

Create a collection in Postman specifically for the weather API, and utilize a variable to manage the API key. Send a request to the weather API and document the entire process and the response received.

### Instructions

#### Part 1: Creating the Collection

- **Set Up the Collection**:
  - In Postman, create a new collection named "Weather API Collection" or a similar name of your choice.
  - This collection will be dedicated to requests related to the weather API.

#### Part 2: Configuring the Environment and Variable

- **Create an Environment for the Weather API**:
  - Set up a new environment in Postman, such as "Weather API Environment".
  - Add a variable for the API key, e.g., name it `weatherApiKey`.
  - Assign your weather API key as the value of this variable.

#### Part 3: Sending a Request

- **Construct and Send the Request**:
  - Create a new request in the "Weather API Collection".
  - Use the environment variable for the API key in the request.
  - Choose an endpoint provided by the weather API and set necessary parameters, such as location.

#### Part 4: Documentation and Submission

- **Document the Process**:

  - In the `postman-reflection` repository, create a new section in the `README.md` for this assignment.
  - Detail the steps taken to set up the collection, environment, and sending the request.
  - Describe how the variable was used and its benefits.

- **Capture and Include Responses**:
  - Include screenshots of the request setup in Postman and the JSON response received.
  - Provide a brief analysis of the response data.

### Rubric

#### Collection and Variable Setup - /10

- Complete (10 pts): Successfully creates a collection and configures an environment with the API key variable. The request is correctly set up using the variable.
- Partial (5 pts): Collection and environment setup is complete but with minor errors in variable usage or request configuration.
- Limited (0 pts): Incomplete setup of collection, environment, or significant issues in using the variable correctly.

#### Documentation and Analysis - /5

- Complete (5 pts): Thorough documentation including clear screenshots and insightful analysis of the response data.
- Partial (2 pts): Basic documentation present but lacking in detail or clarity in analysis.
- Limited (0 pts): Poor documentation or analysis, or key elements like screenshots are missing.

#### Overall Submission Quality - /5

- Complete (5 pts): The submission is well-organized, with clear and concise explanations and complete screenshots.
- Partial (2 pts): The submission is generally organized but may lack some clarity or completeness.
- Limited (0 pts): The submission is disorganized, incomplete, or significantly lacks quality.
