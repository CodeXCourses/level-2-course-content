# Assignment: Setting Up a Local Git Repository

## Objective

- Initialize a local Git repository.
- Add and commit changes.
- Connect to GitHub and push changes.
- Work with branches (dev branch, bugfix branch).
- Understand merging vs. rebasing.

## Instructions

### Part 1: Initializing a Local Git Repository

1. **Initialize a Repository**:

   - Navigate to your project directory and initialize a new Git repository:

     ```bash
     cd <project_directory>
     git init
     ```

   - **Verification**: Take a screenshot of your terminal showing the `git init` command.

### Part 2: Adding and Committing Changes

1. **Create and Add a File**:

   - Create a new file and add it to the staging area:

     ```bash
     touch index.html
     git add index.html
     ```

   - **Verification**: Take a screenshot of your terminal showing the `git add` command.

2. **Commit the Changes**:

   - Commit the staged changes:

     ```bash
     git commit -m "Add index.html"
     ```

   - **Verification**: Take a screenshot of your terminal showing the `git commit` command.

### Part 3: Connecting to GitHub and Pushing Changes

1. **Create a Repository on GitHub**:

   - Go to [GitHub](https://github.com) and create a new repository named `local-git-repo`.

2. **Connect and Push to GitHub**:

   - Connect your local repository to GitHub and push changes:

     ```bash
     git remote add origin https://github.com/<username>/local-git-repo.git
     git push -u origin main
     ```

   - **Verification**: Take a screenshot of your terminal showing the `git remote add` and `git push` commands.

### Part 4: Working with Branches

1. **Create and Switch to a New Branch**:

   - Create and switch to a new branch:

     ```bash
     git branch dev
     git checkout dev
     ```

   - **Verification**: Take a screenshot of your terminal showing the `git branch` and `git checkout` commands.

2. **Make Changes and Commit on the New Branch**:

   - Make changes to `index.html` and commit them:

     ```bash
     echo "<p>New content</p>" >> index.html
     git add index.html
     git commit -m "Update index.html with new content"
     ```

   - **Verification**: Take a screenshot of your terminal showing the changes and the `git commit` command.

### Part 5: Merging vs. Rebasing

1. **Merge the Dev Branch into Main**:

   - Merge the `dev` branch into `main`:

     ```bash
     git checkout main
     git merge dev
     ```

   - **Verification**: Take a screenshot of your terminal showing the `git merge` command.

2. **Rebase the Dev Branch onto Main**:

   - Rebase the `dev` branch onto `main`:

     ```bash
     git checkout dev
     git rebase main
     ```

   - **Verification**: Take a screenshot of your terminal showing the `git rebase` command.

## Submission

- **GitHub Repository**: Create a repository named `local-git-repo` and push the following:
  - The README.md file with screenshots of all commands executed.
- **Submission Link**: Submit the URL of your GitHub repository. Remember to deploy your lab to GitHub Pages.

## Rubric

| **Criteria**                      | **Limited (0 pts)**                            | **Partial (3 pts)**                                 | **Complete (5 pts)**                                                                 |
| --------------------------------- | ---------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **Git Initialization**            | Repository not initialized correctly           | Repository initialized with minor issues            | Repository initialized correctly and screenshot provided                             |
| **Adding and Committing Changes** | Changes not added or committed                 | Changes added and committed with minor issues       | Changes added and committed correctly with screenshot provided                       |
| **Connecting to GitHub**          | Remote repository not connected                | Remote repository connected with minor issues       | Remote repository connected and changes pushed with screenshot provided              |
| **Working with Branches**         | Branches not created or switched correctly     | Branches created and switched with minor issues     | Branches created, switched, and changes committed correctly with screenshot provided |
| **Merging and Rebasing**          | Merging or rebasing not demonstrated correctly | Merging and rebasing demonstrated with minor issues | Merging and rebasing demonstrated correctly with screenshot provided                 |
