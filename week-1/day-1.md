# Day 1: Introduction to Git and Terminal

Welcome to Week 1 of Level 2! Today, we will introduce Git and the terminal, cover the installation and updating of Git, discuss the differences between Git and GitHub, practice basic terminal commands, and provide an overview of Chrome DevTools.

## Objectives

- Install Git and GitBash.
- Update Git.
- Understand the differences between Git and GitHub.
- Learn basic terminal commands (navigate, list files, create files, pwd, mkdir).
- Get an overview of Chrome DevTools.

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

### Overview of Chrome DevTools

- Introduce Chrome DevTools and its purpose for debugging and inspecting web pages.
- Demonstrate basic features such as Elements, Console, Network, and Sources.

## Hourly Breakdown

### Hour 1: Installing Git and GitBash, Updating Git, Overview of Git vs. GitHub

- **Objectives**:
  - Understand the importance of Git in version control.
  - Install and update Git.
  - Understand the differences between Git and GitHub.
- **Teaching Ideas**:

  - Explain what version control is and why it's important.
  - Guide students through the installation of Git:

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

  - Demonstrate how to update Git:

    ```bash
    # Check Git version
    git --version

    # Update Git (instructions vary by OS)
    ```

  - Discuss the differences between Git and GitHub using diagrams or charts.

### Hour 2: Basic Terminal Commands, Overview of Chrome DevTools

- **Objectives**:
  - Learn basic terminal commands for navigation and file management.
  - Get an overview of Chrome DevTools.
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
  - Explain the purpose of Chrome DevTools and demonstrate basic features:
    - Elements: Inspect and modify HTML and CSS.
    - Console: View and interact with JavaScript.
    - Network: Monitor network requests.
    - Sources: Debug JavaScript code.
  - Provide a brief demo on how to use these features.

## Code Snippets

```bash
# Installing Git
# For Windows
Download Git from https://git-scm.com/download/win and run the installer.

# For Mac
Install via Homebrew:
brew install git

# For Linux
Use the package manager:
sudo apt-get install git

# Updating Git
# Check Git version
git --version

# Update Git (instructions vary by OS)

# Basic Terminal Commands
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
