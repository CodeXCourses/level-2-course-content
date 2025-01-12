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
   - **Verification**: Take a screenshot of your GitHub showing the new organization.

### Part 2: Moving Class Assignments into an Organization

1. **Move Repositories to Organization**:

   - Navigate to the settings of an existing repository.
   - Transfer the repository to the organization:

     ```bash
     # Navigate to the repository settings on GitHub
     # Select "Transfer ownership" and transfer to the organization
     ```

   - **Verification**: Take a screenshot of the repository settings showing the successful transfer.

### Part 3: Cloning, Forking, and Opening Pull Requests

1. **Clone a Repository**:

   - Clone a repository from the organization:

     ```bash
     git clone https://github.com/<organization>/<repository>.git
     ```

   - **Verification**: Take a screenshot of your terminal showing the `git clone` command.

2. **Fork a Repository**:

   - Fork a repository from the organization using the GitHub interface.
   - **Verification**: Take a screenshot of your GitHub showing the forked repository.

3. **Make Changes and Push**:

   - Make changes in the cloned repository, add, commit, and push them:

     ```bash
     # Make changes to the repository
     git add .
     git commit -m "Make some changes"
     git push origin main
     ```

   - **Verification**: Take a screenshot of your terminal showing the `git add`, `git commit`, and `git push` commands.

4. **Open a Pull Request**:
   - Go to the original repository on GitHub.
   - Click on "New pull request" and follow the prompts to open a pull request.
   - **Verification**: Take a screenshot of the GitHub page showing the open pull request.

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

   - **Verification**: Take a screenshot of your terminal showing the `git fetch` and `git pull` commands.

## Submission

- **GitHub Repository**: Create a repository named `git-collaboration-practice` in the organization and push the following:
  - The README.md file with screenshots of all commands and tasks executed.
- **Submission Link**: Submit the URL of your GitHub repository.

## Rubric

| Criteria                      | Limited (0 pts)                          | Partial (3 pts)                                  | Complete (5 pts)                                                        |
| ----------------------------- | ---------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------- |
| **Git Organization Creation** | Organization not created correctly       | Organization created with minor issues           | Organization created correctly and screenshot provided                  |
| **Moving Repositories**       | Repositories not moved correctly         | Repositories moved with minor issues             | Repositories moved correctly and screenshot provided                    |
| **Cloning and Forking**       | Repositories not cloned or forked        | Repositories cloned or forked with minor issues  | Repositories cloned and forked correctly with screenshots provided      |
| **Opening Pull Requests**     | Pull requests not opened correctly       | Pull requests opened with minor issues           | Pull requests opened correctly and screenshot provided                  |
| **Fetch vs. Pull**            | Fetch and pull commands not demonstrated | Fetch and pull commands demonstrated with issues | Fetch and pull commands demonstrated correctly with screenshot provided |
