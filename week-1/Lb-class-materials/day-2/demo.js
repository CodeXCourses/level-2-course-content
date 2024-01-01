//! Hour 1
// Give a tour of all the windows, tabs and settings in chrome dev tools. 
//! Hour 2
// demo.js for Day 2: Advanced JavaScript Debugging with Chrome DevTools

// Introduction to JavaScript Debugging with Breakpoints
// -------------------------------------------------
// Breakpoints allow you to pause the execution of your script at specific points,
// enabling you to inspect the current state of the program, including variable values and the call stack.

// Set Up a Sample Function to Demonstrate Breakpoints
// -------------------------------------------------
function calculateSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// Teaching Point:
// This function is a simple example that sums the elements of an array.
// It's useful for demonstrating how breakpoints can help observe the behavior inside a loop.

// Demonstrate Setting a Breakpoint in DevTools
// -------------------------------------------------
// Open Chrome DevTools and navigate to the "Sources" tab.
// Click on the line number in `script.js` where `sum += array[i];` is to set a breakpoint.

// Triggering the Breakpoint
// -------------------------------------------------
// Call `calculateSum([1, 2, 3, 4, 5]);` in the console or in your script to trigger the breakpoint.

// Teaching Point:
// When the breakpoint is hit, execution will pause, allowing you to inspect the variables' values.
// This is crucial for understanding how values change over each iteration of the loop.

// Using "Step Over" in DevTools
// -------------------------------------------------
// Click the "Step over next function call" button in DevTools to execute code line by line.

// Watching Expressions and Variables
// -------------------------------------------------
// Add `sum` and `i` to the "Watch" panel to monitor their values as you step through the code.

// Resume Script Execution
// -------------------------------------------------
// After inspection, click "Resume script execution" to continue running the script.

// Example of a Common Bug: Off-by-One Error
// -------------------------------------------------
// Change the loop condition to `i <= array.length` to introduce an off-by-one error.

// Teaching Point:
// This error causes the loop to run one extra iteration, potentially causing undefined behavior or incorrect results.
// Debugging this helps to understand why loop conditions need to be set correctly.

// Correcting the Error and Resuming Execution
// -------------------------------------------------
// Correct the loop condition back to `i < array.length`.
// This adjustment ensures that the loop runs for each array element without exceeding the array bounds.

// Removing a Breakpoint
// -------------------------------------------------
// Click on the blue breakpoint indicator next to the line number to remove it.

// Conclusion
// -------------------------------------------------
// Emphasize the role of breakpoints in finding and fixing bugs in a JavaScript program.
// Encourage students to use breakpoints to understand the flow of their code and to identify logical errors.
