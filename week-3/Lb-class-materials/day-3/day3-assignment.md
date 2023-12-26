## Assignment: JS3 Day 3 - Enhanced Plant Management System with Local Storage

### Objective

Enhance the Plant Management System developed on Day 2 by integrating `localStorage` for data persistence. This extension aims to reinforce your understanding of JavaScript objects, arrays, DOM manipulation, and local data storage.

### Instructions

#### Part 1: Review and Update Your Project

- **Review Your Day 2 Repository**:
  - Revisit your `JavaScript-Plant-Manager` repository from Day 2.
  - Ensure the core functionalities (add, display, manage plants) are working as expected.

#### Part 2: Integrate Local Storage

- **Update the JavaScript Program**:

  - Modify your `addPlant` function to save the updated plants array to `localStorage` after adding a new plant.
  - On page load, check `localStorage` for existing plant data. If found, use this data to populate the plants array and display the plants.
  - Ensure that the `displayPlants()` function is called after retrieving data from `localStorage` to update the webpage with stored plants.

- **Enhance Data Persistence**:

  - Add functionality to update or remove plants and reflect these changes in `localStorage`.
  - Consider implementing additional features like sorting or filtering plants, also persisting these preferences.

#### Part 3: Test and Validate

- **Ensure Data Persistence**:
  - Test adding, updating, and removing plants, and confirm that these changes persist across page reloads.
  - Verify that the plant data is correctly stored and retrieved from `localStorage`.

#### Part 4: Deployment and Submission

- **Deploy Your Enhanced Webpage**:

  - Update your `index.html` and `script.js` files in your GitHub repository.
  - Redeploy your project using GitHub Pages to reflect the new changes.

- **Submit Your Updated Work**:
  - Submit the URL link to your updated GitHub repository and the live site as your assignment submission.

### Rubric

#### Functionality with Local Storage - /10

- Complete (10 pts): All core and enhanced functionalities, including data persistence with `localStorage`, are correctly implemented.
- Partial (5 pts): Most functionalities are implemented, but some issues with data persistence exist.
- Limited (0 pts): Data persistence is not correctly implemented, or major functionalities are missing.

#### Code Quality and Comments - /5

- Complete (5 pts): Code is well-written, efficiently uses `localStorage`, and is well-commented.
- Partial (2 pts): Code functions with minor issues and/or lacks sufficient comments.
- Limited (0 pts): Code is poorly written, inefficient in using `localStorage`, with no comments.

#### Creativity and UI - /5

- Complete (5 pts): The webpage is well-designed with a user-friendly interface and enhanced features.
- Partial (2 pts): The webpage has a basic design with minimal enhancements.
- Limited (0 pts): The webpage lacks design considerations and enhanced features.
