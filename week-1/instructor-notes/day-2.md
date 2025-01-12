# Day 2: Setting Up a Local Git Repository

Welcome to Day 2 of Level 2! Today, we will set up a local Git repository and explore essential Git operations.

## Objectives

- Initialize a local Git repository.
- Add and commit changes.
- Connect to GitHub and push changes.
- Work with branches (dev branch, bugfix branch).
- Understand merging vs. rebasing.

## Instructor Notes

### Initializing a Local Git Repository

- Explain the purpose of a local Git repository.
- Guide students through initializing a repository with `git init`.

### Adding and Committing Changes

- Discuss the staging area and the importance of committing changes.
- Demonstrate how to add changes to the staging area with `git add` and commit with `git commit`.

### Connecting to GitHub and Pushing Changes

- Show how to create a repository on GitHub.
- Guide students through connecting their local repository to GitHub using `git remote add` and pushing changes with `git push`.

### Working with Branches

- Explain the purpose of branches in Git for development and bug fixes.
- Demonstrate how to create and switch branches using `git branch` and `git checkout`.

### Merging vs. Rebasing

- Discuss the differences between merging and rebasing.
- Provide examples of when to use each method.

## Hourly Breakdown

### Hour 1: Initializing a Local Git Repository and Adding/Committing Changes

- **Objectives**:
  - Understand the purpose of a local Git repository.
  - Initialize a local repository.
  - Learn how to add and commit changes.
- **Teaching Ideas**:

  - Briefly explain what a repository is and its role in version control.
  - Guide students through the process of initializing a repository:

    ```bash
    # Navigate to your project directory
    cd <project_directory>

    # Initialize a new Git repository
    git init
    ```

  - Discuss the `.git` directory and its significance.
  - Explain the staging area and its purpose.
  - Demonstrate adding changes to the staging area:

    ```bash
    # Create a new file
    touch index.html

    # Add the file to the staging area
    git add index.html
    ```

  - Discuss the importance of commit messages and demonstrate committing changes:

    ```bash
    # Commit the staged changes
    git commit -m "Add index.html"
    ```

  - Provide practice exercises for students to add and commit their own changes.

### Hour 2: Connecting to GitHub, Pushing Changes, Working with Branches, Merging vs. Rebasing

- **Objectives**:
  - Connect a local repository to GitHub and push changes.
  - Learn how to create and switch branches.
  - Understand the differences between merging and rebasing.
- **Teaching Ideas**:

  - Show how to create a new repository on GitHub.
  - Demonstrate connecting the local repository to the GitHub repository:

    ```bash
    # Add a remote repository
    git remote add origin https://github.com/<username>/<repository>.git

    # Push changes to GitHub
    git push -u origin main
    ```

  - Explain the significance of the `-u` flag and the concept of tracking branches.
  - Provide a hands-on exercise for students to push their local changes to GitHub.
  - Explain the benefits of using branches for feature development and bug fixes.
  - Demonstrate creating and switching branches:

    ```bash
    # Create a new branch
    git branch dev

    # Switch to the new branch
    git checkout dev
    ```

  - Discuss the concept of branch naming conventions.
  - Provide practice exercises for students to create and switch between branches.
  - Explain merging and demonstrate a basic merge operation:

    ```bash
    # Merge the dev branch into main
    git checkout main
    git merge dev
    ```

  - Discuss the potential for merge conflicts and how to resolve them.
  - Explain rebasing and demonstrate a basic rebase operation:

    ```bash
    # Rebase the dev branch onto main
    git checkout dev
    git rebase main
    ```

  - Compare and contrast merging and rebasing, providing scenarios for when to use each.

## Code Snippets

### Initialize a Local Git Repository

```bash
# Navigate to your project directory
cd <project_directory>

# Initialize a new Git repository
git init


#Adding and Committing Changes

# Create a new file
touch index.html

# Add the file to the staging area
git add index.html

# Commit the staged changes
git commit -m "Add index.html"
# Connecting to GitHub and Pushing Changes
# Add a remote repository
git remote add origin https://github.com/<username>/<repository>.git

# Push changes to GitHub
git push -u origin main

# Working with Branches

# Create a new branch
git branch dev

# Switch to the new branch
git checkout dev
# Merging vs. Rebasing
# Merge the dev branch into main
git checkout main
git merge dev

# Rebase the dev branch onto main
git checkout dev
git rebase main

```
