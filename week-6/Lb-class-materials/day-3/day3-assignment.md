## Assignment: JS3 Day 3 - Asynchronous Background Color Update

### Objective

Demonstrate proficiency in using advanced asynchronous JavaScript techniques to manipulate the DOM. The task involves changing the background color of the webpage's body element three times, with a 5-second delay between each change.

### Instructions

#### Part 1: Setup Your Environment

- **Create a New Repository**:
  - Name the repository `async-background-update`.
  - Initialize it with an `index.html` file and a `script.js` file.

#### Part 2: Implement Delay Function

- **Add the Delay Function**:
  - In `script.js`, define the `delay` function as shown in the demo:
    ```javascript
    function delay(milliseconds) {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    }
    ```

#### Part 3: Async Function for DOM Manipulation

- **Implement an Async Function**:
  - Write an `async` function in `script.js` that changes the background color of the `body` element of the webpage.
  - The function should change the color three times, with each color lasting for 5 seconds before switching to the next one.
  - Utilize the `delay` function to control the timing.

#### Part 4: Testing and Validation

- **Test Your Code**:
  - Open your `index.html` in a web browser.
  - Ensure that the background color of the body changes as expected.
  - Verify that there is a 5-second delay between each color change.

#### Part 5: Deployment and Submission

- **Deploy Your Project**:

  - Commit and push your changes to the `async-background-update` repository.
  - Optionally, deploy your project using GitHub Pages or another hosting service.

- **Submit Your Assignment**:
  - Provide the URL link to your GitHub repository as your assignment submission.

### Rubric

#### Async Function Implementation - /10

- Complete (10 pts): Successful implementation of the async function with correct timing and color changes.
- Partial (5 pts): Function partially works but may have issues with timing or color changes.
- Limited (0 pts): Function does not work or does not meet the requirements.

#### Code Quality and Comments - /5

- Complete (5 pts): Well-written code with clear structure and comments explaining the logic.
- Partial (2 pts): Code functions but lacks structure or sufficient comments.
- Limited (0 pts): Code is poorly written, disorganized, or lacks comments.

#### Creativity and UI - /5

- Complete (5 pts): Creative approach to color changes and user interface design.
- Partial (2 pts): Basic color changes with minimal attention to user interface.
- Limited (0 pts): Lack of creativity in color choices or poor UI design.
