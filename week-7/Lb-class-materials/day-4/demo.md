## Day 4: Rebasing and Advanced Git Techniques

### Hour 1: Understanding Git Rebase

#### Introduction to `git rebase`

1. **What is Rebase?**:

   - Say: "Rebasing is a Git operation that integrates changes from one branch into another. It's an alternative to merging, offering a cleaner, linear project history."
   - Say: "Rebase rewrites the commit history by transferring the work done on one branch onto another branch."

2. **Use Cases for Rebase**:
   - Say: "Rebasing is particularly useful for updating a feature branch with the latest changes from the main branch, or before merging a feature branch into the main branch."

#### Demonstrating Rebase

1. **Setting Up for Rebase**:

   - Say: "Let's create a scenario to demonstrate rebasing. We'll start with a main branch and a feature branch."
   - Action: Create a feature branch (`git branch feature`) and make different changes in both `main` and `feature` branches.

2. **Starting the Rebase**:
   - Say: "We'll rebase the feature branch onto the main branch, bringing all the updates from main into feature."
   - Command: `git checkout feature` followed by `git rebase main`
   - Say: "This moves all the work done in the feature branch to the tip of the main branch."

#### Resolving Conflicts During Rebase

1. **Encountering a Conflict**:

   - Say: "If there are conflicting changes, Git pauses the rebase and asks us to resolve the conflicts."
   - Action: Create a conflict by modifying the same part of a file differently in both `main` and `feature` branches.

2. **Resolving the Conflict**:

   - Say: "Open the conflicted file and manually resolve the conflicts by choosing which changes to keep."
   - Action: Edit the conflicted file to resolve the conflict.
   - Command: `git add <resolved-file>`

3. **Continuing the Rebase**:

   - Command: `git rebase --continue`
   - Say: "After resolving conflicts and staging the changes, use `git rebase --continue` to proceed with the rebase process."

4. **Completing the Rebase**:
   - Say: "Once all conflicts are resolved and the rebase is complete, the feature branch will have a linear history with the main branch."

#### Instructor Note:

- Discuss the importance of careful conflict resolution during a rebase for maintaining a coherent project history.
- Emphasize that rebasing can alter history, which is why it’s typically avoided on shared branches.
- Compare rebase with merge to highlight when each operation is most appropriate.

#### Conclusion:

- Summarize: "We've explored `git rebase`, a powerful tool for integrating changes and simplifying project history. Understanding when and how to use rebase, along with conflict resolution, is crucial for efficient Git workflow management."

## Day 4: Rebasing and Advanced Git Techniques

### Hour 2: Complex Git Scenarios - Rebase with Stash and Pull Rebase Configuration

#### Scenario 1: Rebasing with Stash

1. **Creating a Feature Branch and Making Local Changes**:

   - Say: "First, we're going to create a new branch called 'feature-branch' where we'll work on new features separately from the main code. This allows us to work independently without affecting the main branch."
   - Command: `git branch feature-branch` creates the new branch. `git checkout feature-branch` switches to the new branch.
   - Action: In the `feature-branch`, make some changes to a file. Explain that these changes represent a work-in-progress feature and will not be committed yet.

2. **Simulating Changes on Main Branch**:

   - Say: "While we're working on our feature, let's assume that other team members are making updates to the main branch. This is common in collaborative environments."
   - Action: Switch back to the `main` branch using `git checkout main`. Make some different changes here and commit them to simulate team updates.

3. **Stashing Changes on Feature Branch**:

   - Say: "Before we integrate the latest updates from the main branch into our feature branch, we need to handle our uncommitted changes. We'll use `git stash` to temporarily store these changes so we can work with a clean branch."
   - Command: `git checkout feature-branch` to go back to the feature branch. Then, `git stash` saves the local modifications away from the working directory.

4. **Performing the Rebase**:

   - Say: "Now we'll update our feature branch with the latest changes from the main branch. We use `git rebase` for this, which will move our feature branch to the tip of the main branch, keeping our project history clean and linear."
   - Command: `git rebase main` takes the commits from the feature branch and reapplies them to the current end of the main branch.

5. **Handling Conflicts and Completing Rebase**:

   - Say: "During rebase, conflicts might occur. This happens when the same parts of code are altered differently in both branches. Git will pause and ask us to resolve these conflicts."
   - Action: Demonstrate opening the conflicted files. Show the markers that Git uses to indicate the conflicting sections. Edit these files to resolve the conflicts.
   - Command: After resolving the conflicts, use `git add <file>` to mark them as resolved, then `git rebase --continue` to proceed with the rebase.

6. **Applying Stashed Changes**:
   - Say: "After rebasing, we will now reapply the changes we stashed earlier. This brings back our work-in-progress feature into our updated branch."
   - Command: `git stash pop` re-applies the stashed changes to the current working directory.
   - Action: If conflicts arise when applying the stash, show how to resolve them. Then, make a new commit to finalize these changes.

#### Instructor Note:

- Emphasize that `git stash` is useful for temporarily saving changes without committing them, allowing for a clean working environment when switching branches or updating a branch.
- Discuss the importance of understanding and resolving conflicts during a rebase, as it's a common scenario in collaborative projects.
- Clarify that the goal of rebasing is to maintain a clean and linear project history, which is beneficial for tracking changes and understanding the project evolution.

#### Conclusion:

- Summarize: "In this session, we explored a practical workflow for updating a feature branch with changes from the main branch using rebase and stash. This workflow is crucial for maintaining an organized and conflict-free project environment in a collaborative setting."

#### Scenario 2: Pulling with Rebase Configuration

1. **Setting Pull Rebase Configuration**:

   - Say: "We often encounter a situation where our local branch and the remote branch have diverged. This means both have new commits that the other doesn't have. By default, Git may ask us to rebase our local changes before pulling, but we can change this behavior."
   - Command: `git config pull.rebase false`
   - Say: "This command configures Git to merge the remote changes by default when we execute a `git pull`. This is particularly useful when you want to avoid rewriting commit history as rebase does."

2. **Creating Local and Remote Changes**:

   - Say: "Let's simulate a common scenario. Imagine you've made some changes locally on your `main` branch and committed them. Meanwhile, your colleague has made different changes to the same branch and pushed them to GitHub."
   - Action: Locally, make some changes to the `main` branch and commit them. Then, go to GitHub and in the same repository, make different changes to the `main` branch and commit directly via the GitHub interface.

3. **Pulling with Diverged Changes**:
   - Say: "Now, we will try to pull the changes from the remote. Since we have set `git config pull.rebase` to `false`, Git should attempt a merge."
   - Command: `git pull`
   - Say: "When we run `git pull`, Git fetches the changes from the remote branch and attempts to merge them into our local branch."
   - Action: If a merge conflict occurs, demonstrate how to open the conflicted files. Show the markers that Git uses to indicate the conflicting sections. Edit these files to resolve the conflicts.
   - Command: After resolving the conflicts, use `git add <file>` to stage the resolved files, then `git commit` to complete the merge.
   - Say: "Resolving conflicts might be necessary when the same parts of the codebase have been altered in both places. It's crucial to carefully resolve these to maintain a coherent codebase."

#### Instructor Note:

- Emphasize the importance of understanding how `git pull` works with different configurations and why one might choose merging over rebasing in certain scenarios.
- Highlight the significance of correctly resolving merge conflicts to ensure code integrity and seamless collaboration.
- Encourage the practice of regularly pulling changes from the remote to minimize conflicts and keep the local branch updated.

#### Conclusion:

- Summarize: "We've tackled two complex Git scenarios. We practiced using `git stash` and `git rebase` to manage concurrent changes on different branches, and we explored how to configure Git's pull behavior to better suit our workflow needs."
