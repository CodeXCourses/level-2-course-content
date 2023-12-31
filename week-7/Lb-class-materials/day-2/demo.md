## Day 2: Branching and Merging in Git

### Hour 1: Working with Branches

#### Creating and Modifying Branches

1. **Create a JavaScript File**:

   - Say: "First, let's create a new file named 'script.js'. Inside this file, we'll write a simple function to display a message in the console."
   - Note: Instructor creates 'script.js' and writes function displayMessage() { console.log("Hello from the console!"); }

2. **Create a New Branch**:

   - Say: "Now, we'll create a new branch named 'dom-version' where we'll modify this function to display the message in the DOM instead."
   - Command: `git branch dom-version`

3. **Switch to the New Branch (Using `git checkout`)**:

   - Say: "Let's switch to our new branch using `git checkout dom-version`. In this branch, modify the function to display the message in the DOM."
   - Note: Modify script.js in the dom-version branch to document.body.innerText = "Hello from the DOM!";

4. **Switch Branches (Using `git switch`)**:

   - Say: "Now let's switch back to the main branch using the `git switch main` command. Notice how our original function remains unchanged in the main branch."

5. **Creating a Bugfix Branch**:

   - Say: "We'll create a bugfix branch named 'bugfix-dom' to make some fixes. This is done by first switching back to 'dom-version' and then creating our bugfix branch."
   - Command: `git checkout dom-version` followed by `git branch bugfix-dom` and `git switch bugfix-dom`

6. **Merging Bugfix Branch**:

   - Say: "After making our bug fixes in the 'bugfix-dom' branch, let's merge this branch into 'dom-version'."
   - Command: `git checkout dom-version` followed by `git merge bugfix-dom`

7. **Deleting a Branch**:
   - Say: "After successfully merging, we can delete the 'bugfix-dom' branch using `git branch -d bugfix-dom`."

#### Instructor Note:

- Discuss the importance of branching in Git for managing different lines of work.
- Explain the use of `git checkout` and `git switch` for navigating between branches.
- Emphasize the concept of merging branches and the process of deleting branches after merging.

#### Conclusion:

- Summarize: "In this session, we've learned how to create, switch, merge, and delete branches in Git, which are essential skills for effective version control and project management."

## Day 2: Branching and Merging in Git

### Hour 2: Merging and Conflict Resolution

#### Merging Branches in Git

1. **Understanding the Merge Process**:

   - Say: "Merging is the process of integrating changes from one branch into another. It’s commonly used to combine features developed in different branches."
   - Note: Demonstrate a simple merge using the branches created earlier. For example, merge 'bugfix-dom' into 'dom-version'.

2. **Performing a Merge**:
   - Say: "To merge changes, switch to the branch you want to merge into and use the `git merge` command."
   - Command: `git checkout dom-version` followed by `git merge bugfix-dom`
   - Say: "This command merges changes from 'bugfix-dom' into 'dom-version'."

#### Resolving Merge Conflicts

1. **Introduction to Merge Conflicts**:

   - Say: "A merge conflict occurs when the same parts of code are changed differently in separate branches. Git needs your help to decide which changes to keep."

2. **Simulating a Merge Conflict**:

   - Say: "Let’s create a conflict by modifying the same part of our 'script.js' file differently in two branches."
   - Note: Modify 'script.js' in both 'dom-version' and another branch (like 'main') in a conflicting way.

3. **Resolving Conflicts**:

   - Command: `git merge <other-branch>`
   - Say: "When you encounter a merge conflict, Git will pause the merge and mark the file as conflicted. You need to manually resolve the conflict."
   - Note: Open the conflicted file, and show how Git marks the conflicting areas. Edit the file to resolve the conflict.

4. **Finalizing the Merge**:

   - Say: "After resolving the conflict, add the file to staging and complete the merge with a commit."
   - Command: `git add script.js` followed by `git commit -m "Resolved merge conflict"`

5. **Best Practices for Conflict Resolution**:
   - Say: "Always communicate with your team when resolving conflicts to ensure consistent changes. Carefully review and test the changes before completing the merge."

#### Instructor Note:

- Emphasize the importance of understanding the context of changes when resolving conflicts.
- Discuss the significance of regular communication and code reviews in collaborative environments to minimize conflicts.

#### Conclusion:

- Summarize: "Today, we've tackled an essential aspect of Git - merging branches and resolving conflicts. Understanding these processes is crucial for effective collaboration in software development projects."
