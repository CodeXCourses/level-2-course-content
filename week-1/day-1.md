# Day 1: Introduction to Git and Terminal

Welcome to Week 1 of Level 2! Today, we will start with an introduction to Git and the terminal. These are essential tools for any developer.

## Objectives

- Install Git and GitBash.
- Update Git.
- Understand the difference between Git and GitHub.
- Learn basic terminal commands (navigate, list files, create files, pwd, mkdir).

## Instructor Notes

### Installing Git and GitBash

- Explain the importance of Git in version control.
- Guide students to download and install Git from [git-scm.com](https://git-scm.com/).
- For Windows users, guide them to install GitBash, which provides a terminal emulator.

### Updating Git

- Explain the need to keep Git updated for the latest features and security patches.
- Demonstrate how to update Git by downloading the latest version from [git-scm.com](https://git-scm.com/) and running the installer.

### Overview of Git vs. GitHub

- Discuss the differences between Git and GitHub.
  - Git: A version control system to track changes in code.
  - GitHub: A platform for hosting and collaborating on Git repositories.
- Use diagrams or charts to illustrate the relationship between Git and GitHub.

### Basic Terminal Commands

- Introduce basic terminal commands essential for navigation and file management.
  - `cd`: Change directory
  - `ls`: List files
  - `touch`: Create files
  - `pwd`: Print working directory
  - `mkdir`: Make directory
- Provide practical examples and encourage students to practice each command.

## Hourly Breakdown

### Hour 1: Installing Git and GitBash

- **Objectives**:
  - Understand the importance of version control.
  - Install Git and GitBash.
- **Teaching Ideas**:

  - Briefly explain what version control is and why it's important.
  - Guide students through the installation of Git.

    ```bash
    # For Windows
    Download Git from https://git-scm.com/download/win and run the installer.

    # For Mac
    Install via Homebrew:
    brew install git

    # For Linux
    Use the package manager:
    sudo apt-get install git
    ```

  - For Windows users, explain how to install GitBash and its benefits.

### Hour 2: Updating Git

- **Objectives**:
  - Learn how to update Git.
- **Teaching Ideas**:

  - Discuss the importance of keeping Git updated.
  - Demonstrate the process of updating Git by downloading the latest version and running the installer.
  - Encourage students to check their Git version:

    ```bash
    git --version
    ```

- **Objectives**:
  - Understand the differences between Git and GitHub.
- **Teaching Ideas**:
  - Use slides or diagrams to explain the differences between Git and GitHub.
  - Discuss the roles of Git (local version control) and GitHub (remote repository hosting).
  - Provide examples of how Git and GitHub work together in a project workflow.

### Hour 4: Basic Terminal Commands

- **Objectives**:
  - Learn basic terminal commands for navigation and file management.
- **Teaching Ideas**:

  - Introduce the terminal and its role in development.
  - Demonstrate basic commands:

    ```bash
    # Change directory
    cd <directory_name>

    # Go up one directory
    cd ..

    # List files in the current directory
    ls

    # Create an empty file
    touch <file_name>

    # Print the working directory
    pwd

    # Create a new directory
    mkdir <directory_name>
    ```

  - Provide hands-on practice for students to execute these commands.
  - Explain common use cases and encourage students to experiment.

## Code Snippets

### Installing Git (example for Windows)

```bash
# Download Git from https://git-scm.com/download/win and run the installer
# Follow the prompts to complete the installation
# Change directory
cd <directory_name>

# Go up one directory
cd ..

# List files in the current directory
ls

# Create an empty file
touch <file_name>

# Print the working directory
pwd

# Create a new directory
mkdir <directory_name>

```
