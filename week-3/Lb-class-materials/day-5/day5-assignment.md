## Assignment: JS3 Day 5 - Fetch and Process Skills Data

### Objective

Develop an application that asynchronously fetches a list of skills with associated skill levels and sorts them based on their proficiency level.

### Instructions

#### Part 1: Setup and Data Preparation

- **Create a New Repository**:

  - On GitHub, create a new repository named `Async-Skills-Sorter`.
  - Initialize this repository with a `README.md` file.
  - Clone your new repository to your local machine.

- **Create a JSON Data File**:
  - Create a `skills.json` file in your repository.
  - Populate the file with an array of skill objects. Each object should have two properties: `skillName` (String) and `level` (Number). Example:
    ```json
    [
      { "skillName": "HTML", "level": 7 },
      { "skillName": "CSS", "level": 5 },
      { "skillName": "JavaScript", "level": 8 }
    ]
    ```

#### Part 2: Asynchronous Data Fetching and Processing

- **Develop the JavaScript Program**:

  - Write an `async` function to fetch data from the `skills.json` file.
  - Use `await` for the fetch operation and process the JSON response.
  - Implement error handling for the fetch operation.

- **Sort and Display the Skills Data**:
  - Once fetched, sort the skills array based on the `level` property in descending order.
  - Log the sorted array to the console or display it on the webpage.

#### Part 3: Testing and Validation

- **Ensure Accurate Data Sorting**:
  - Test the application to ensure that the skills are fetched and sorted correctly.
  - Ensure that errors in fetching data are handled and displayed appropriately.

#### Part 4: Deployment and Submission

- **Deploy Your Application**:

  - Push your code, including the `skills.json` file, to your GitHub repository.
  - Optionally, deploy your project using GitHub Pages.

- **Submit Your Work**:
  - Submit the URL link to your GitHub repository as your assignment submission.

### Rubric

#### Data Fetching, Sorting, and Display - /10

- Complete (10 pts): Successfully fetches and sorts skills data. Correctly displays the sorted data.
- Partial (5 pts): Fetches and sorts data but with minor errors or incomplete implementation.
- Limited (0 pts): Fails to fetch, sort, or display data correctly.

#### Code Quality and Comments - /5

- Complete (5 pts): Code is well-written, uses async/await effectively, and is well-commented.
- Partial (2 pts): Code functions but has minor issues and/or lacks sufficient comments.
- Limited (0 pts): Code is poorly structured, inefficient in handling async operations, with no comments.

#### Creativity and Error Handling - /5

- Complete (5 pts): The application creatively handles data and errors, with a user-friendly interface.
- Partial (2 pts): Basic error handling, with minimal creativity in data presentation.
- Limited (0 pts): Inadequate error handling and lack of creativity in data presentation.
