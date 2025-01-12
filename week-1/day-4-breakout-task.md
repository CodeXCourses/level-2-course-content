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

### Part 3: Pushing Changes to a Remote Repository

1. **Create a Repository on GitHub**:

   - Go to [GitHub](https://github.com) and create a new repository named `simple-web-page`.

2. **Connect and Push to GitHub**:

   - Add the GitHub repository as a remote and push changes:

     ```bash
     git remote add origin https://github.com/<username>/simple-web-page.git
     git push -u origin main
     ```

### Note

> Tasks are not graded but should be treated as an assignment. These are for practice an understanding
