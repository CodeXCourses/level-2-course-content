## Assignment: JS3 Day 2 - Plant Management System

### Objective

Develop a Plant Management System using JavaScript and HTML. This project aims to reinforce your understanding of JavaScript objects, arrays, and DOM manipulation. You will create a system to add, display, and manage plant entries.

### Instructions

#### Part 1: Setup Your Project

- **Create a New Repository**:
  - On GitHub, create a new repository named `JavaScript-Plant-Manager`.
  - Initialize this repository with a `README.md` file.
  - Clone your new repository to your local machine.

#### Part 2: Build the Plant Manager

- **Develop the JavaScript Program**:

  - Start with a hardcoded plant object, similar to the exampleBook in the demo.
  - Create an array to store plant objects. Add your hardcoded plant to this array.
  - Write a function `displayPlants()` that will display each plant in the array as an item in an unordered list on the webpage.
  - Manually invoke `displayPlants()` to test displaying the hardcoded plant.
  - Write a function `addPlant(name, species, waterSchedule)` that adds a new plant object to the array and updates the display.
  - Test `addPlant` function by manually adding a plant and invoking `displayPlants()`.

- **Develop the HTML Structure**:

  - Create an `index.html` file.
  - Add a form with fields for the plant's name, species, and water schedule.
  - Include a submit button for adding a new plant.
  - Add an area (e.g., an unordered list) to display the list of plants.

- **Link the Form to JavaScript**:

  - Add an event listener to the form to handle submissions using the `addPlant` function.
  - Ensure the form prevents the default submission action and clears its fields after adding a plant.

- **Expand Functionality (Optional)**:
  - Add functionality to update or remove plants from the list.
  - Implement additional features like sorting or categorizing plants.

#### Part 3: Deployment and Submission

- **Deploy Your Webpage Using GitHub Pages**:

  - Push your `index.html` and `script.js` files to your GitHub repository.
  - Deploy your project using GitHub Pages.

- **Submit Your Work**:
  - Submit the URL link to your GitHub repository and the live site as your assignment submission.

### Rubric

#### Functionality - /10

- Complete (10 pts): All functionalities are implemented correctly, including adding, displaying, and updating plants.
- Partial (5 pts): Some functionalities are missing or contain minor errors.
- Limited (0 pts): Major functionalities are missing or not working.

#### Code Quality and Comments - /5

- Complete (5 pts): Code is well-written and commented, providing clear explanations.
- Partial (2 pts): Code works but lacks comments or has minor issues.
- Limited (0 pts): Code is poorly written with no comments and major issues.

#### Creativity and UI - /5

- Complete (5 pts): The webpage is well-designed with a user-friendly interface.
- Partial (2 pts): Basic design with minimal user interface considerations.
- Limited (0 pts): Poor design and difficult to use interface.
