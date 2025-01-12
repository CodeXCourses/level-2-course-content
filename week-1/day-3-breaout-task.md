# Assignment: Git Organizations and Collaboration

## Objective

- Create Git organizations.
- Move class assignments into an organization.
- Clone, fork, and open pull requests.
- Understand fetch vs. pull.

## Instructions

### Part 1: Creating Git Organizations

1. **Create a Git Organization**:
   - Go to [GitHub](https://github.com) and create a new organization.
   - Follow the prompts to set up the organization.

### Part 2: Moving Class Assignments into an Organization

1. **Move Repositories to Organization**:

   - Navigate to the settings of an existing repository.
   - Transfer the repository to the organization:

     ```bash
     # Navigate to the repository settings on GitHub
     # Select "Transfer ownership" and transfer to the organization
     ```

### Part 3: Cloning, Forking, and Opening Pull Requests

1. **Clone a Repository**:

   - Clone a repository from the organization:

     ```bash
     git clone https://github.com/<organization>/<repository>.git
     ```

2. **Fork a Repository**:

   - Fork a repository from the organization using the GitHub interface.

3. **Make Changes and Push**:

   - Make changes in the cloned repository, add, commit, and push them:

     ```bash
     # Make changes to the repository
     git add .
     git commit -m "Make some changes"
     git push origin main
     ```

4. **Open a Pull Request**:
   - Go to the original repository on GitHub.
   - Click on "New pull request" and follow the prompts to open a pull request.

### Part 4: Fetch vs. Pull

1. **Fetch and Pull Commands**:

   - Fetch changes from the remote repository:

     ```bash
     git fetch origin
     ```

   - Pull changes from the remote repository:

     ```bash
     git pull origin main
     ```

### Note

> Tasks are not graded but should be treated as an assignment. These are for practice an understanding
