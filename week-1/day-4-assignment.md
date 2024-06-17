# Assignment: Git Workflow Practice

## Objective

- Build a simple web page while practicing the Git workflow (Add, Commit, Push each feature).
- Practice using essential Git commands.

## Instructions

### Part 1: Initializing a Project and Git Repository

1. **Create Project Directory**:

   - Create a new project directory named `simple-web-page` and navigate into it:
     ```bash
     mkdir simple-web-page
     cd simple-web-page
     ```

2. **Initialize Git Repository**:
   - Initialize a new Git repository:
     ```bash
     git init
     ```
   - **Verification**: Take a screenshot of your terminal showing the `git init` command.

### Part 2: Building the Web Page with Git Workflow

1. **Create and Add Initial HTML File**:

   - Create an `index.html` file and add basic HTML structure:
     ```bash
     touch index.html
     ```
   - Open `index.html` in a text editor and add the following content:
     ```html
     <!DOCTYPE html>
     <html lang="en">
       <head>
         <meta charset="UTF-8" />
         <meta
           name="viewport"
           content="width=device-width, initial-scale=1.0"
         />
         <title>Simple Web Page</title>
       </head>
       <body>
         <!-- Content will be added here -->
       </body>
     </html>
     ```
   - Add and commit the changes:
     ```bash
     git add index.html
     git commit -m "Add initial HTML structure"
     ```
   - **Verification**: Take a screenshot of your terminal showing the `git add` and `git commit` commands.

2. **Add Header and Commit**:

   - Add a header to `index.html`:
     ```html
     <h1>Welcome to My Simple Web Page</h1>
     ```
   - Add and commit the changes:
     ```bash
     git add index.html
     git commit -m "Add header"
     ```
   - **Verification**: Take a screenshot of your terminal showing the `git add` and `git commit` commands.

3. **Add Paragraph and Commit**:

   - Add a paragraph to `index.html`:
     ```html
     <p>This is a simple web page created to practice Git workflow.</p>
     ```
   - Add and commit the changes:
     ```bash
     git add index.html
     git commit -m "Add paragraph"
     ```
   - **Verification**: Take a screenshot of your terminal showing the `git add` and `git commit` commands.

4. **Add Styles and Commit**:
   - Add some basic styles to `index.html`:
     ```html
     <style>
       body {
         font-family: Arial, sans-serif;
         text-align: center;
         margin-top: 50px;
       }
     </style>
     ```
   - Add and commit the changes:
     ```bash
     git add index.html
     git commit -m "Add basic styles"
     ```
   - **Verification**: Take a screenshot of your terminal showing the `git add` and `git commit` commands.

### Part 3: Pushing Changes to a Remote Repository

1. **Create a Repository on GitHub**:

   - Go to [GitHub](https://github.com) and create a new repository named `simple-web-page`.

2. **Connect and Push to GitHub**:
   - Add the GitHub repository as a remote and push changes:
     ```bash
     git remote add origin https://github.com/<username>/simple-web-page.git
     git push -u origin main
     ```
   - **Verification**: Take a screenshot of your terminal showing the `git remote add` and `git push` commands.

## Submission

- **GitHub Repository**: Create a repository named `simple-web-page` and push the following:
  - The `index.html` file with all the changes.
  - Screenshots of all commands executed.
- **Submission Link**: Submit the URL of your GitHub repository.

## Rubric

| Criteria                     | Limited (0 pts)                           | Partial (3 pts)                                          | Complete (5 pts)                                                                  |
| ---------------------------- | ----------------------------------------- | -------------------------------------------------------- | --------------------------------------------------------------------------------- |
| **Git Initialization**       | Repository not initialized correctly      | Repository initialized with minor issues                 | Repository initialized correctly and screenshot provided                          |
| **Adding Initial HTML File** | HTML file not added or committed          | HTML file added and committed with minor issues          | HTML file added and committed correctly with screenshot provided                  |
| **Adding Header**            | Header not added or committed             | Header added and committed with minor issues             | Header added and committed correctly with screenshot provided                     |
| **Adding Paragraph**         | Paragraph not added or committed          | Paragraph added and committed with minor issues          | Paragraph added and committed correctly with screenshot provided                  |
| **Pushing to GitHub**        | Remote repository not connected or pushed | Remote repository connected and pushed with minor issues | Remote repository connected and changes pushed correctly with screenshot provided |
