# Day 5: Deployment to GitHub Pages

Welcome to Day 5 of Level 2! Today, we will learn how to deploy a project to GitHub Pages, build and deploy a cheat sheet for Git and Bash commands, and review Chrome DevTools with breakpoints.

## Objectives

- Deploy a project to GitHub Pages.
- Build and deploy a cheat sheet for Git and Bash commands.
- Review Chrome DevTools with breakpoints.

## Instructor Notes

### Deploying a Project to GitHub Pages

- Explain the purpose and benefits of GitHub Pages for hosting projects.
- Guide students through the process of deploying a project to GitHub Pages.

### Building and Deploying a Cheat Sheet for Git and Bash Commands

- Discuss the importance of having a cheat sheet for quick reference.
- Demonstrate how to build a simple HTML-based cheat sheet for Git and Bash commands.
- Guide students through deploying the cheat sheet to GitHub Pages.

### Reviewing Chrome DevTools with Breakpoints

- Review the purpose of Chrome DevTools.
- Demonstrate how to set and use breakpoints in Chrome DevTools for debugging JavaScript.

## Hourly Breakdown

### Hour 1: Deploying a Project to GitHub Pages

- **Objectives**:
  - Understand the purpose of GitHub Pages.
  - Deploy a project to GitHub Pages.
- **Teaching Ideas**:

  - Explain what GitHub Pages is and its uses.
  - Guide students through creating a new repository or using an existing one.
  - Demonstrate how to enable GitHub Pages in the repository settings:

    ```bash
    # Create a new repository on GitHub or use an existing one

    # Go to the repository settings
    # Scroll down to the "GitHub Pages" section
    # Select the source branch (usually "main" or "master")
    # Save the settings
    ```

  - Explain the deployment process and how to access the deployed site:
    ```bash
    # The site will be available at https://<username>.github.io/<repository>
    ```

### Hour 2: Building and Deploying a Cheat Sheet, Reviewing Chrome DevTools with Breakpoints

- **Objectives**:
  - Build a cheat sheet for Git and Bash commands.
  - Deploy the cheat sheet to GitHub Pages.
  - Review Chrome DevTools and learn how to use breakpoints.
- **Teaching Ideas**:

  - Discuss the importance of having a cheat sheet for Git and Bash commands.
  - Guide students through creating a simple HTML file for the cheat sheet:
    ```html
    <!-- Create a new file named cheat-sheet.html -->
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Git and Bash Commands Cheat Sheet</title>
      </head>
      <body>
        <h1>Git Commands</h1>
        <ul>
          <li><code>git init</code> - Initialize a new Git repository</li>
          <li><code>git clone [url]</code> - Clone a repository</li>
          <li><code>git add [file]</code> - Add a file to the staging area</li>
          <li><code>git commit -m "message"</code> - Commit changes</li>
          <li><code>git push</code> - Push changes to the remote repository</li>
        </ul>
        <h1>Bash Commands</h1>
        <ul>
          <li><code>cd [directory]</code> - Change directory</li>
          <li><code>ls</code> - List files in the current directory</li>
          <li><code>touch [file]</code> - Create a new file</li>
          <li><code>mkdir [directory]</code> - Create a new directory</li>
          <li><code>pwd</code> - Print working directory</li>
        </ul>
      </body>
    </html>
    ```
  - Demonstrate how to commit and push the cheat sheet to the GitHub repository:

    ```bash
    # Add the cheat sheet to the staging area
    git add cheat-sheet.html

    # Commit the changes
    git commit -m "Add cheat sheet for Git and Bash commands"

    # Push the changes to the remote repository
    git push origin main
    ```

  - Guide students through deploying the cheat sheet to GitHub Pages:
    ```bash
    # Ensure GitHub Pages is enabled in the repository settings
    # The cheat sheet will be available at https://<username>.github.io/<repository>/cheat-sheet.html
    ```
  - Review the purpose of Chrome DevTools and demonstrate how to set and use breakpoints:
    - Open Chrome DevTools (F12 or right-click > Inspect).
    - Navigate to the "Sources" tab.
    - Demonstrate how to set breakpoints by clicking on the line number in the source code.
    - Show how to use the "Resume script execution" (F8) and "Step over" (F10) buttons to debug JavaScript.

## Code Snippets

```bash
# Deploying a Project to GitHub Pages
# Create a new repository on GitHub or use an existing one

# Go to the repository settings
# Scroll down to the "GitHub Pages" section
# Select the source branch (usually "main" or "master")
# Save the settings

# The site will be available at https://<username>.github.io/<repository>

# Building a Cheat Sheet for Git and Bash Commands
# Create a new file named cheat-sheet.html
touch cheat-sheet.html

# Open the file and add HTML content for the cheat sheet
# Example content:
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Git and Bash Commands Cheat Sheet</title>
</head>
<body>
    <h1>Git Commands</h1>
    <ul>
        <li><code>git init</code> - Initialize a new Git repository</li>
        <li><code>git clone [url]</code> - Clone a repository</li>
        <li><code>git add [file]</code> - Add a file to the staging area</li>
        <li><code>git commit -m "message"</code> - Commit changes</li>
        <li><code>git push</code> - Push changes to the remote repository</li>
    </ul>
    <h1>Bash Commands</h1>
    <ul>
        <li><code>cd [directory]</code> - Change directory</li>
        <li><code>ls</code> - List files in the current directory</li>
        <li><code>touch [file]</code> - Create a new file</li>
        <li><code>mkdir [directory]</code> - Create a new directory</li>
        <li><code>pwd</code> - Print working directory</li>
    </ul>
</body>
</html>

# Committing and Pushing the Cheat Sheet
# Add the cheat sheet to the staging area
git add cheat-sheet.html

# Commit the changes
git commit -m "Add cheat sheet for Git and Bash commands"

# Push the changes to the remote repository
git push origin main

# Deploying the Cheat Sheet to GitHub Pages
# Ensure GitHub Pages is enabled in the repository settings
# The cheat sheet will be available at https://<username>.github.io/<repository>/cheat-sheet.html

# Reviewing Chrome DevTools with Breakpoints
# Open Chrome DevTools (F12 or right-click > Inspect)
# Navigate to the "Sources" tab
# Set breakpoints by clicking on the line number in the source code
# Use the "Resume script execution" (F8) and "Step over" (F10) buttons to debug JavaScript
```
