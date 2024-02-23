## Assignment: Git Rebase

### Objective

Strengthen your understanding of Git rebase and pull configuration through hands-on exercises. This assignment involves creating and documenting scenarios that simulate real-world Git workflows.

### Instructions

#### Part 1: Rebasing and Resolving Conflicts

- **Step 1: Create a Feature Branch (Local)**:

  - On your local `learn-git-branching` repository, create and switch to a new branch named `feature-branch`.
  - Make some changes in a file within `feature-branch` and commit them.
  - Make some more changes in a file within `feature-branch` and DO NOT commit them.
  - stash your changes using `git stash`.

- **Step 2: Simulate Main Branch Updates (Local and Remote)**:

  - Locally, switch to the `main` branch and make different changes. Commit these changes.
  - On GitHub, navigate to the same repository and make additional changes to the `main` branch. Commit these changes directly on GitHub.
  - Screenshot: Capture the GitHub commit as proof of making remote changes.

- **Step 3: Stash and Rebase (Local)**:

  - Switch back to the `feature-branch`
  - Perform a rebase by executing `git rebase main`.
  - Resolve any conflicts that arise, then continue with `git rebase --continue`.
  - Screenshot: Take a screenshot showing the successful rebase completion and conflict resolution.

- **Step 4: Apply Stashed Changes (Local)**:
  - Apply your stashed changes with `git stash pop`.
  - Resolve any conflicts and make a new commit.
  - Screenshot: Capture the final commit in `feature-branch` showing the application of stashed changes.

#### Part 2: Pulling with Rebase Configuration

- **Step 5: Configure Pull Behavior (Local)**:

  - Set your local Git to merge by default during pulls with `git config pull.rebase false`.

- **Step 6: Create Diverged Changes (Local and Remote)**:

  - Locally, on the `main` branch, make and commit some changes.
  - On GitHub, add different changes to the `main` branch and commit them.
  - Screenshot: Take a screenshot of the GitHub interface showing these remote commits.

- **Step 7: Pull and Merge Changes (Local)**:
  - Locally, execute `git pull` on the `main` branch.
  - If a merge conflict occurs, resolve it and complete the merge.
  - Screenshot: Capture the terminal showing the successful pull and merge, including conflict resolution if applicable.

#### Part 3: Documentation and Submission

- **Compile Documentation**:

  - Update the `README.md` in your `learn-git-branching` repository.
  - Include step-by-step descriptions of your actions for both parts of the assignment. Indicate clearly whether each action was performed locally or on GitHub.
  - Insert the screenshots at the appropriate steps to visually demonstrate your process.

- **Reflect on Learning**:

  - Write a brief reflection on how these exercises have improved your understanding of managing branches, conflicts, and diverged changes in Git.

- **Push and Submit**:
  - Push your updated `README.md` with the documentation and screenshots to GitHub.
  - Submit the URL of your `learn-git-branching` repository.

### Rubric

#### Execution and Documentation - /10

- Complete (10 pts): All steps are correctly executed and documented with clear screenshots.
- Partial (5 pts): Some steps are missing or documentation lacks clarity.
- Limited (0 pts): Many steps are incorrect or undocumented, or screenshots are missing.

#### Reflection and Understanding - /10

- Complete (10 pts): Reflection demonstrates a clear understanding of Git rebase, pull configurations, and conflict resolution.
- Partial (5 pts): Reflection is present but lacks depth.
- Limited (0 pts): Little to no reflection or understanding is evident.
