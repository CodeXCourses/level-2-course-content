# Day 3: Git Organizations and Collaboration

Welcome to Day 3 of Level 2! Today, we will explore Git organizations and collaboration techniques.

## Objectives

- Create Git organizations.
- Move class assignments into an organization.
- Clone, fork, and open pull requests.
- Understand fetch vs. pull.

## Instructor Notes

### Creating Git Organizations

- Explain the purpose of Git organizations for managing projects and teams.
- Guide students through the process of creating a Git organization on GitHub.

### Moving Class Assignments into an Organization

- Discuss the benefits of using organizations for class assignments.
- Demonstrate how to move repositories into a Git organization.

### Cloning, Forking, and Opening Pull Requests

- Explain the concepts of cloning and forking repositories.
- Demonstrate how to clone a repository and make changes.
- Guide students through opening pull requests to contribute changes.

### Fetch vs. Pull

- Discuss the differences between `git fetch` and `git pull`.
- Provide examples of when to use each command.

## Hourly Breakdown

### Hour 1: Creating Git Organizations and Moving Class Assignments

- **Objectives**:
  - Understand the purpose of Git organizations.
  - Create a Git organization.
  - Move class assignments into an organization.
- **Teaching Ideas**:
  - Explain the role of Git organizations in managing projects and teams.
  - Guide students through creating an organization on GitHub:
    ```bash
    # Go to GitHub and create a new organization
    # Follow the prompts to set up the organization
    ```
  - Demonstrate how to move existing repositories into the organization:
    ```bash
    # Navigate to the repository settings
    # Transfer the repository to the organization
    ```
  - Discuss the benefits of organizing repositories in this way.

### Hour 2: Cloning, Forking, Pull Requests, and Fetch vs. Pull

- **Objectives**:
  - Clone and fork repositories.
  - Open pull requests.
  - Understand the differences between `git fetch` and `git pull`.
- **Teaching Ideas**:

  - Explain cloning and forking:

    ```bash
    # Clone a repository
    git clone https://github.com/<username>/<repository>.git

    # Fork a repository (done through GitHub interface)
    ```

  - Demonstrate how to make changes in a cloned repository and push them:
    ```bash
    # Make changes to the repository
    git add .
    git commit -m "Make some changes"
    git push origin main
    ```
  - Guide students through opening a pull request on GitHub:
    ```bash
    # Go to the original repository on GitHub
    # Click on "New pull request" and follow the prompts
    ```
  - Explain the difference between `git fetch` and `git pull`:

    ```bash
    # Fetch changes from the remote repository
    git fetch origin

    # Pull changes from the remote repository
    git pull origin main
    ```

  - Discuss scenarios for using `fetch` and `pull`.

## Code Snippets

```bash
# Creating Git Organizations
# Go to GitHub and create a new organization
# Follow the prompts to set up the organization

# Moving Class Assignments into an Organization
# Navigate to the repository settings
# Transfer the repository to the organization

# Cloning a Repository
# Clone a repository
git clone https://github.com/<username>/<repository>.git

# Making Changes and Pushing to a Repository
# Make changes to the repository
git add .
git commit -m "Make some changes"
git push origin main

# Opening a Pull Request
# Go to the original repository on GitHub
# Click on "New pull request" and follow the prompts

# Fetch vs. Pull
# Fetch changes from the remote repository
git fetch origin

# Pull changes from the remote repository
git pull origin main
```
