## Assignment: JS3 Day 4 - Joke API Integration

### Objective

Create a JavaScript application that integrates with the Joke API to fetch and display jokes dynamically. This assignment aims to reinforce your skills in making API requests, handling JSON data, and dynamically updating the DOM.

### Instructions

#### Part 1: Setup and Documentation

- **Create a New Repository**:

  - Name your repository `joke-display-app`.
  - Initialize it with an `index.html` file, a `script.js` file, and optionally a `style.css` file for styling.

- **Review API Documentation**:
  - Familiarize yourself with the [Joke API documentation](https://v2.jokeapi.dev/).
  - Understand the API endpoints and the structure of the response data.

#### Part 2: Fetching and Displaying Jokes

- **Fetch Jokes from the API**:

  - In `script.js`, write a function to make a fetch request to `https://v2.jokeapi.dev/joke/Any?safe-mode`.
  - Handle the response and extract the joke data.

- **Dynamically Display Jokes**:
  - Create a card-like element in your HTML to display the joke.
  - Update the card with a new joke each time you receive a response from the API.
  - Consider adding a button to fetch a new joke without reloading the page.

#### Part 3: Testing and Deployment

- **Test Your Application**:

  - Ensure the joke is displayed correctly in the card element.
  - Test the functionality of fetching a new joke with the button.

- **Deploy Your Project**:

  - Commit and push your changes to GitHub.
  - Deploy your project using GitHub Pages or another hosting service.

- **Submit Your Assignment**:
  - Provide the URL link to your GitHub repository and the live deployment as your assignment submission.

### Rubric

#### API Integration and JSON Handling - /10

- Complete (10 pts): Successfully fetches and displays jokes from the API. Handles JSON response correctly.
- Partial (5 pts): The application fetches from the API but has issues with JSON handling or display.
- Limited (0 pts): Fails to fetch from the API or to handle the JSON response properly.

#### Dynamic DOM Manipulation - /5

- Complete (5 pts): Dynamically updates the DOM to display jokes effectively. Includes interactive elements like a refresh button.
- Partial (2 pts): Basic dynamic DOM updates are present but lack refinement or interactivity.
- Limited (0 pts): Little to no dynamic DOM manipulation or interactivity.

#### Code Quality and Documentation - /5

- Complete (5 pts): Code is well-organized, efficiently structured, and well-commented.
- Partial (2 pts): Code functions with minor issues and/or lacks detailed comments.
- Limited (0 pts): Code is poorly organized, inefficient, or lacks sufficient comments.
