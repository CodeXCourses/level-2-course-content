//! Hour 1
// demo.js for Day 3: Advanced Breakpoint Techniques in Chrome DevTools

// Introduction to Advanced Breakpoint Techniques
// -------------------------------------------------
// Advanced breakpoints involve examining the state of variables in more complex scenarios like function calls, asynchronous code, and conditional logic.

// Set Up Sample Functions to Demonstrate Advanced Breakpoints
// -------------------------------------------------
function fetchData(callback) {
  setTimeout(() => {
    callback('Data fetched');
  }, 1000);
}

function processData(data) {
  console.log('Processing:', data);
  return data.split(' ').length;
}

// Teaching Point:
// The `fetchData` function simulates an asynchronous operation using `setTimeout`.
// The `processData` function represents a typical data processing operation.

// Demonstrate Setting Breakpoints in Asynchronous Functions
// -------------------------------------------------
// Set a breakpoint inside the `fetchData` function, particularly on the `callback` invocation.

// Triggering the Asynchronous Function
// -------------------------------------------------
fetchData((data) => {
  const processed = processData(data);
  console.log('Number of words:', processed);
});

// Teaching Point:
// Explain how the execution will pause inside the asynchronous `fetchData` function.
// This allows inspection of the state just before the callback is called.

// Using Conditional Breakpoints
// -------------------------------------------------
// Set a conditional breakpoint in `processData` that only triggers when `data` contains more than two words.

// Teaching Point:
// To set a conditional breakpoint, right-click on the line number and select 'Add conditional breakpoint'.
// Enter the condition, e.g., `data.split(' ').length > 2`.
// Discuss how conditional breakpoints are useful for debugging specific scenarios.

// Examining Variable State in a Callback Function
// -------------------------------------------------
// Show how the values of `data` and `processed` can be inspected when the breakpoints are hit.

// Observing Changes in Variables Across Function Calls
// -------------------------------------------------
// Step through the code using the "Step over" and "Step into" features.
// Observe how the values of variables change as you move from one function to another.

// Resume Script Execution
// -------------------------------------------------
// Once done inspecting, click "Resume script execution" to continue running the script.

//! Hour 2

// Example: Debugging Promises
// -------------------------------------------------
// Promise-based asynchronous code requires careful debugging to understand the state at different stages.

function fetchPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Promise resolved');
    }, 1000);
  });
}

// Teaching Point:
// Discuss how to set breakpoints inside a promise.
// Set a breakpoint on the `resolve` line to inspect the state before the promise is resolved.

// Triggering the Promise
// -------------------------------------------------
fetchPromise()
  .then((result) => {
    console.log('Promise result:', result);
    return processData(result);
  })
  .then((processed) => {
    console.log('Processed words:', processed);
  });

// Observing Promise Resolution and Chaining
// -------------------------------------------------
// Step through each `.then()` to observe how data is passed and transformed.
// Emphasize the asynchronous nature of promises and how the DevTools can aid in understanding their flow.

// Example: Event Listener Breakpoints
// -------------------------------------------------
// Event listeners can be debugged by setting breakpoints directly on event-handling functions.

document.getElementById('myButton').addEventListener('click', function () {
  console.log('Button clicked!');
});

// Teaching Point:
// Show how to set a breakpoint inside the event listener function.
// Explain how this allows inspection of the state right when the event occurs.

// Example: Loop with Complex Condition
// -------------------------------------------------
// Loops with complex conditions can be tricky and are ideal candidates for breakpoint debugging.

function complexLoop() {
  for (let i = 0; i < 10; i++) {
    if (i % 2 === 0 && i > 5) {
      console.log('Even and greater than 5:', i);
    }
  }
}

// Teaching Point:
// Set a breakpoint inside the `if` condition.
// Discuss how stepping through each iteration can help understand which conditions are being met.

// Triggering the Complex Loop
// -------------------------------------------------
// Call `complexLoop()` to trigger the breakpoint within the loop.

// Conclusion
// -------------------------------------------------
// Reiterate the importance of mastering breakpoints in different scenarios.
