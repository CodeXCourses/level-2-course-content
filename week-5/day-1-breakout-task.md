# Familiarizing Yourself with APIs and Postman

## Objective

- Understand the basics of APIs and their purpose.
- Explore a free, browser-based Postman alternative for API testing.
- Perform a simple GET request to practice API interaction.

---

## Instructions

### Part 1: What Are APIs?

1. **Explore API Basics**:
   - Read the following short explanation:
     _"APIs (Application Programming Interfaces) are tools that allow different software applications to communicate with each other. APIs enable features like weather apps retrieving data from a server, or websites using Google Maps to display locations."_
   - Take a moment to think about where you might have encountered APIs in daily life, like apps, websites, or devices.

---

### Part 2: Accessing an API Testing Tool

1. **Use a Browser-Based API Tool**:

   - Open [Postman for Web](https://web.postman.co/) or [ReqBin](https://reqbin.com/), a free browser-based API client.
   - If using Postman for Web, sign up for a free account. No installation is required.

2. **Familiarize Yourself With the Tool**:

   - Explore the interface. Look for:
     - The section to create a new request.
     - Where to enter a URL.
     - How to view the response from an API.

---

### Part 3: Making Your First API Request

1. **Perform a Simple GET Request**:

   - In your chosen tool, enter the following URL:

     ```text
     https://jsonplaceholder.typicode.com/posts
     ```

   - Set the request type to **GET**.
   - Send the request.

2. **Explore the Response**:

   - Look at the response:
     - What type of data is returned (e.g., text, JSON)?
     - How many items (posts) are included in the response body?

3. **Modify the Request**:

   - Add a query parameter to filter the response:
     - URL: `https://jsonplaceholder.typicode.com/posts?userId=1`
   - Observe how the response changes.

---

### Part 4: Additional Practice (Optional)

- Try a different endpoint:
  - URL: `https://jsonplaceholder.typicode.com/users`
  - Observe the difference in the response compared to the posts endpoint.

---

### Note

> This assignment is for practice and familiarization only. You do not need to submit anything. Take your time to explore and get comfortable with the tool.
