# Assignment: Real-World API Integration

## Objective

- Learn to handle pagination in APIs.
- Manage API rate limits effectively.
- Build a mini-project to display paginated data from an API.

---

## Instructions

### Part 1: Fetch Paginated Data

1. **API Overview**:

   - Use the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) to fetch a list of posts.
   - Each page will display 10 posts.

2. **Fetch Data**:

   - Create a JavaScript file named `pagination.js`.
   - Write a function `fetchPosts(page)` that takes a `page` number as a parameter and fetches the corresponding posts from the API: `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`

3. **Test the Function**:

   - Call `fetchPosts(1)` and log the response to the console.
   - Call `fetchPosts(2)` to ensure it fetches the next set of posts.

---

### Part 2: Build the Pagination Logic

1. **Set Up HTML Structure**:

   - Create an `index.html` file with:
     - A `div` to display posts.
     - `Previous` and `Next` buttons to navigate between pages.

2. **Render Posts**:

   - Write a function `renderPosts(posts)` that dynamically creates and displays the posts on the page.

3. **Add Pagination Controls**:

   - Implement logic to track the current page.
   - Update the displayed posts when the user clicks the `Previous` or `Next` buttons.

---

### Part 3: Manage Rate Limits

1. **Simulate Rate Limits**:

   - Add a timeout of 2 seconds between API requests.
   - If a user clicks `Next` or `Previous` too quickly, log: `"Rate limit exceeded. Please wait."`

2. **Handle Errors Gracefully**:

   - Add error handling to log a message if the API request fails.

---

## Submission

- **GitHub Repository**: Create a repository named `pagination-project` and include:
  - The `index.html` and `pagination.js` files.
  - A README file explaining the project and steps to run it.
- **Submission Link**: Submit the URL of your GitHub repository. Remember to deploy your lab to GitHub Pages.

---

## Rubric

| Criteria                          | Limited (0 pts)                       | Partial (3 pts)                  | Complete (5 pts)                               |
| --------------------------------- | ------------------------------------- | -------------------------------- | ---------------------------------------------- |
| **API Fetch Logic**               | Function not provided or incorrect    | Partially correct but incomplete | Fully functional and fetches correct data      |
| **Pagination Controls**           | Not implemented or incorrect          | Implemented with minor issues    | Fully functional with smooth navigation        |
| **Rate Limit Handling**           | Not implemented or incorrect          | Implemented with minor issues    | Fully functional and user-friendly             |
| **Error Handling**                | Not implemented or incorrect          | Implemented with minor issues    | Fully functional and gracefully handles errors |
| **Code Quality and Organization** | Poorly organized or difficult to read | Organized with minor issues      | Well-organized and easy to read                |
