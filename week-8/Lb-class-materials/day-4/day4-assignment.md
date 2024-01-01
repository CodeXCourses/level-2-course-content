## Day 4 Assignment: Applying 7-1 Sass Architecture to Sassy Blog

### Objective

Reorganize the Sass files of your `sassy-blog` project following the 7-1 Sass Architecture pattern. Enhance the project's styles by taking advantage of this organized structure.

### Instructions

#### Part 1: Setup 7-1 Folder Structure

- **Create the 7-1 Architecture Folders**:
  - In your `sassy-blog` project, create the following folders: `base/`, `components/`, `layout/`, `pages/`, `themes/`, `abstracts/`, `vendors/`.

#### Part 2: Organizing Existing Styles

- **Distribute Current Styles**:
  - Move your existing Sass code into the appropriate folders. For example, general typography styles go into `base/`, reusable button styles into `components/`, and so on.

#### Part 3: Creating New Style Files

- **Expand Your Styles**:
  - Create new Sass files within these folders to expand your project's styling. For instance, add a `_navigation.scss` in the `layout/` folder or a `_theme-dark.scss` in the `themes/` folder.
  - Ensure that you are using Sass features like variables and mixins appropriately in these files.

#### Part 4: Main Sass File

- **Set Up Main Sass File**:
  - Create a `main.scss` file at the root of your Sass directory.
  - Use `@import` statements to include all the Sass files from the 7-1 folders. Pay attention to the order of imports for proper cascading.

#### Part 5: Refine and Test Your Project

- **Enhance Your Blog's Styling**:

  - With the new structure, revisit each part of your blog's design and make improvements where necessary.
  - Focus on achieving a cohesive, well-structured look across your blog.

- **Test Your Blog**:
  - Ensure that all Sass compiles correctly and the blog is responsive and functional.

#### Part 6: Deployment and Submission

- **Deploy Your Updated Blog**:

  - After reorganizing and enhancing the styles, deploy the updated `sassy-blog` project.

- **Submit Your Assignment**:
  - Provide the URL link to your GitHub repository and the live deployment.
  - Make sure your repository clearly reflects the 7-1 Sass Architecture.

### Rubric

#### Implementation of 7-1 Architecture - /10

- Complete (10 pts): Successfully implemented the 7-1 Sass Architecture with all styles appropriately organized.
- Partial (5 pts): The 7-1 structure is partially implemented; some styles may not be properly organized.
- Limited (0 pts): Little to no implementation of the 7-1 Architecture or poor organization of styles.

#### Design and Aesthetics - /5

- Complete (5 pts): The blog demonstrates improved design aesthetics and consistency with the new Sass structure.
- Partial (2 pts): Some improvements in design and aesthetics but lacks full utilization of the 7-1 structure's potential.
- Limited (0 pts): Minimal or no improvements in design; fails to effectively use the 7-1 structure.

#### Code Quality and Functionality - /5

- Complete (5 pts): SCSS code is well-organized, and the blog functions correctly with responsive design.
- Partial (2 pts): Minor issues in code organization or functionality; some responsive aspects may be lacking.
- Limited (0 pts): Major issues in code structure, functionality, or significant responsive problems.
