## Assignment: JS Day 1 - Creating a Constructor

### Objective

Build a constructor function for a television object, complete with methods for functionality like turning on/off, changing channels, and checking its state. This assignment aims to strengthen your grasp of JavaScript constructors, prototype methods, and object manipulation.

### Instructions

#### Part 1: Construct the Television Object

- **Create a New Repository**:

  - Name your repository `constructors`.
  - Initialize it with an `index.html` file and a `script.js` file.

- **Build the Television Constructor**:
  - In `script.js`, create a constructor function named `Television`.
  - Add properties to the constructor for power status (on/off) and current channel.
  - Implement methods using prototypes for turning the TV on and off, which updates the power status.
  - Add a method to change the channel, updating the relevant property.
  - Include a method named `getState` that console.logs the TV's state in a readable format.

#### Part 2: Implement Television Functionality

- **Create Multiple Televisions**:
  - Instantiate at least three different Television objects with various states and channels.
- **Display Television States**:
  - Use the `getState` method for each Television instance to display its state in the console.

#### Part 3: Test and Validate

- **Ensure Proper Functionality**:
  - Test each method to confirm that the Television objects are working as expected.
  - Verify that the `getState` method outputs the correct status and channel.

#### Part 4: Deployment and Submission

- **Deploy Your Work**:

  - Commit and push your `index.html` and `script.js` files to your GitHub repository.
  - Deploy your project using GitHub Pages or a similar platform.

- **Submit Your Assignment**:
  - Submit the URL link to your `constructors` GitHub repository and the live site as your assignment submission.

### Rubric

#### Functionality and Accuracy - /10

- Complete (10 pts): The Television constructor is correctly implemented with prototype methods. All instances function as expected with accurate state reporting.
- Partial (5 pts): Some functionality is implemented, but there may be issues with method accuracy or state reporting.
- Limited (0 pts): Significant issues with functionality, methods not working, or inaccurate state reporting.

#### Code Quality and Comments - /5

- Complete (5 pts): Code is well-organized, efficiently uses prototypes, and is well-commented.
- Partial (2 pts): Code functions with minor issues and/or lacks sufficient comments.
- Limited (0 pts): Code is poorly organized, inefficient in using prototypes, with no comments.

#### Creativity and UI - /5

- Complete (5 pts): Creative implementation of the Television constructor and methods. Clear and informative console output.
- Partial (2 pts): Basic implementation with minimal creativity. Console output is understandable but not engaging.
- Limited (0 pts): Lack of creativity in implementation and poor or confusing console output.
