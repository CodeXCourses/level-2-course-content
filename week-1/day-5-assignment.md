# Assignment: Deployment to GitHub Pages

## Objective

- Deploy a project to GitHub Pages.
- Build and deploy a cheat sheet for Git and Bash commands.
- Review Chrome DevTools with breakpoints.

## Instructions

### Part 1: Deploying a Project to GitHub Pages

1. **Deploy to GitHub Pages**:
   - Create a new repository on GitHub or use an existing one.
   - Enable GitHub Pages in the repository settings:
     - Go to the repository settings.
     - Scroll down to the "GitHub Pages" section.
     - Select the source branch (`main`).
     - Save the settings.
   - **Verification**: Take a screenshot of the GitHub Pages settings showing the source branch selected.

### Part 2: Building and Deploying a Cheat Sheet

1. **Create a Cheat Sheet**:

   - Create a new file named `cheat-sheet.html`.
   - Add basic HTML structure and include sections for Git commands (e.g., `git init`, `git clone`, `git add`, `git commit`, `git push`) and Bash commands (e.g., `cd`, `ls`, `touch`, `mkdir`, `pwd`).
   - **Verification**: Take a screenshot of the HTML file content.

2. **Commit and Push the Cheat Sheet**:

   - Add the cheat sheet to the staging area and commit the changes:

     ```bash
     git add cheat-sheet.html
     git commit -m "Add cheat sheet for Git and Bash commands"
     ```

   - Push the changes to the remote repository:

     ```bash
     git push origin main
     ```

   - **Verification**: Take a screenshot of your terminal showing the `git add`, `git commit`, and `git push` commands.

3. **Deploy the Cheat Sheet**:
   - Ensure GitHub Pages is enabled in the repository settings.
   - The cheat sheet will be available at `https://<username>.github.io/<repository>/cheat-sheet.html`.
   - **Verification**: Take a screenshot of the deployed cheat sheet page in your browser.

### Part 3: Reviewing Chrome DevTools with Breakpoints

1. **Set and Use Breakpoints**:
   - Open Chrome DevTools (F12 or right-click > Inspect).
   - Navigate to the "Sources" tab.
   - Set breakpoints by clicking on the line number in the source code.
   - Use the "Resume script execution" (F8) and "Step over" (F10) buttons to debug JavaScript.
   - **Verification**: Take a screenshot of Chrome DevTools showing a breakpoint set and the execution paused.

## Submission

- **GitHub Repository**: Create a repository named `github-pages-deployment` and push the following:
  - The `cheat-sheet.html` file.
  - Screenshots of all steps executed in the README.md..
- **Submission Link**: Submit the URL of your GitHub repository. Remember to deploy your lab to GitHub Pages.

## Rubric

| **Criteria**                  | **Limited (0 pts)**                   | **Partial (3 pts)**                            | **Complete (5 pts)**                                            |
| ----------------------------- | ------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------- |
| **GitHub Pages Deployment**   | Project not deployed to GitHub Pages  | Project deployed with minor issues             | Project deployed correctly and screenshot provided              |
| **Cheat Sheet Creation**      | Cheat sheet not created correctly     | Cheat sheet created with minor issues          | Cheat sheet created correctly and screenshot provided           |
| **Commit and Push Changes**   | Changes not committed or pushed       | Changes committed and pushed with minor issues | Changes committed and pushed correctly with screenshot provided |
| **Deploying the Cheat Sheet** | Cheat sheet not deployed              | Cheat sheet deployed with minor issues         | Cheat sheet deployed correctly and screenshot provided          |
| **Using Chrome DevTools**     | Breakpoints not set or used correctly | Breakpoints set and used with minor issues     | Breakpoints set and used correctly and screenshot provided      |
