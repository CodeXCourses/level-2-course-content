# Week 1: Day 3 Assignment - Advanced Debugging Techniques

## Objective

Advance your JavaScript debugging skills using Chrome DevTools. Focus on observing the local scope to view variables and manage deliberate errors in the code using breakpoints.

## Instructions

Continue using your `Devtools-debugging` repository. Today, you will work with a more complex script that includes asynchronous functions, loops, and intentional errors. Your task is to capture secret messages and understand error handling using breakpoints.

### Part 1: Understanding the Script

- **Review the Code**:

  - Examine the `script.js` file provided. Notice the use of asynchronous `fetchSecretMessage` function calls and various other functions.
  - Understand how the `secretMessage` is obtained in the local scope of the `.then()` method.

### Part 2: Debugging Exercise

- **Set Breakpoints and Observe Local Scope**:

  - Using Chrome DevTools, set breakpoints at each `fetchSecretMessage` call.
  - When each breakpoint is hit, observe the `secretMessage` variable in the local scope.
  - Note down the secret message for each task.

- **Identify and Handle Errors**:

  - The script includes intentional errors. Use breakpoints to identify these errors.
  - Learn how to skip over errors or navigate through problematic code sections using the debugger.

- **Record Your Findings**:

  - In your `Devtools-debugging` repository, update the `Day-3.md` file.
  - Document each secret message and its corresponding task in the format below:

    ```
    - 'task-1': 'Secret Message for Task 1',
    - 'task-2': 'Secret Message for Task 2',
    ...
    - 'task-10': 'Secret Message for Task 10',
    ```

  - Include a section on how you handled the errors encountered.

### Part 3: Submission

- **Submit Your Work**:
  - Ensure your `Day-3.md` file contains all the captured secret messages and a description of how you handled the errors.
  - Submit the URL link to your `Day-3.md` file in the repository as your assignment submission.

## Rubric

### Debugging Skills - /25

#### Breakpoint Mastery and Data Observation - /15

- **Fully Achieved - 15 pts**

  - Successfully sets breakpoints and observes all secret messages in the local scope.
  - Accurately documents each message in `Day-3.md`.

- **Partially Achieved - 7 pts**

  - Sets breakpoints and observes some secret messages, but misses others.
  - Documentation in `Day-3.md` is incomplete or partially incorrect.

- **Not Achieved - 0 pts**
  - Fails to effectively use breakpoints or observe the majority of the messages.
  - Poor or missing documentation in `Day-3.md`.

#### Error Handling and Problem-Solving - /10

- **Fully Achieved - 10 pts**

  - Identifies and skillfully navigates through all intentional errors in the script.
  - Provides detailed explanations of error handling in `Day-3.md`.

- **Partially Achieved - 5 pts**

  - Identifies some errors but struggles with effective handling or navigation.
  - Provides some explanation in `Day-3.md` but lacks detail or accuracy.

- **Not Achieved - 0 pts**
  - Fails to identify or handle the majority of the intentional errors.
  - Inadequate or missing explanations of error handling in `Day-3.md`.
