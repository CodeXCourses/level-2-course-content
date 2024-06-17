# Day 4: Git Workflow Practice

Welcome to Day 4 of Level 2! Today, we will practice the Git workflow by building a simple web page and applying Git commands.

## Objectives

- Build a simple web page while practicing the Git workflow (Add, Commit, Push each feature).
- Practice using essential Git commands.

## Instructor Notes

### Building a Simple Page with Git Workflow

- Explain the importance of a consistent Git workflow in development.
- Guide students through the process of building a simple web page.
- Emphasize the cycle of adding, committing, and pushing changes for each feature (ACP).

### Practice with Git Commands

- Provide hands-on practice with essential Git commands.
- Ensure students are comfortable with adding, committing, and pushing changes.

## Hourly Breakdown

### Hour 1: Building a Simple Page with Git Workflow

- **Objectives**:
  - Understand the importance of a consistent Git workflow.
  - Build a simple web page while practicing the Git workflow.
- **Teaching Ideas**:

  - Explain the concept of ACP (Add, Commit, Push) for each feature.
  - Guide students through creating a new HTML file and initializing a Git repository:

    ```bash
    # Create a new project directory
    mkdir simple-web-page
    cd simple-web-page

    # Initialize a new Git repository
    git init

    # Create an index.html file
    touch index.html
    ```

  - Demonstrate adding initial content to `index.html` and committing the changes:

    ```bash
    # Open index.html and add basic HTML structure
    # Save the file

    # Add changes to the staging area
    git add index.html

    # Commit the changes
    git commit -m "Add initial HTML structure"
    ```

  - Guide students through creating and committing additional features (e.g., adding a header, paragraph, and styles).

### Hour 2: Practice with Git Commands

- **Objectives**:
  - Practice using essential Git commands.
  - Ensure students are comfortable with the Git workflow.
- **Teaching Ideas**:

  - Provide practice exercises for students to add, commit, and push changes for new features.
  - Example exercises:
    - Add a header to the web page and commit the changes.
    - Add a paragraph and commit the changes.
    - Add styles and commit the changes.
  - Demonstrate pushing changes to a remote repository:

    ```bash
    # Create a new repository on GitHub
    # Add the remote repository
    git remote add origin https://github.com/<username>/<repository>.git

    # Push changes to the remote repository
    git push -u origin main
    ```

  - Provide practice for students to push their changes to GitHub.

## Code Snippets

```bash
# Creating a new project directory
mkdir simple-web-page
cd simple-web-page

# Initializing a new Git repository
git init

# Creating an index.html file
touch index.html

# Adding and committing initial content
# Open index.html and add basic HTML structure
# Save the file

# Add changes to the staging area
git add index.html

# Commit the changes
git commit -m "Add initial HTML structure"

# Adding and committing additional features
# Example: Add a header to the web page
# Open index.html and add a header
# Save the file

# Add changes to the staging area
git add index.html

# Commit the changes
git commit -m "Add header"

# Pushing changes to a remote repository
# Create a new repository on GitHub
# Add the remote repository
git remote add origin https://github.com/<username>/<repository>.git

# Push changes to the remote repository
git push -u origin main
```
