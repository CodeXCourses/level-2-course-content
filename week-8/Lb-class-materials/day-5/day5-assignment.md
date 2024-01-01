## Day 5 Assignment: Creating a Reusable 7-1 Sass Template Repository

### Objective

Create a new GitHub repository that serves as a reusable template for future Sass projects, organized according to the 7-1 architecture pattern.

### Instructions

#### Part 1: Initialize New Repository

- **Create a New GitHub Repository**:
  - Name the repository something indicative of its purpose, such as `sass-7-1-template`.
  - Initialize the repository with a README file.

#### Part 2: Setting Up the 7-1 Sass Architecture

- **Create the 7-1 Architecture Directories**:

  - Create the following folders in your repository: `base/`, `components/`, `layout/`, `pages/`, `themes/`, `abstracts/`, `vendors/`.

- **Populate Each Folder**:

  - `base/`: Add `_base.scss` for foundational styles and `_typography.scss` for typography rules.
  - `components/`: Create `_buttons.scss` for button styles, `_cards.scss` for card components.
  - `layout/`: Add `_header.scss`, `_footer.scss`, and `_grid.scss` for structural components.
  - `pages/`: Include page-specific styles like `_home.scss`.
  - `themes/`: If applicable, create `_theme.scss` for styling themes (like dark mode).
  - `abstracts/`: Add `_variables.scss` for defining global variables and `_mixins.scss` for mixins.
  - `vendors/`: Include styles for any third-party libraries like Bootstrap.

- **Create Main Sass File**:
  - Set up a `main.scss` file that imports all the Sass partials using `@import` statements.

#### Part 3: Adding Useful Code Snippets

- **Base Styles**:

  - Add a CSS reset and basic typography rules in the `base/` directory.

- **Reusable Components**:

  - Define a few common components like buttons and cards with basic styles in `components/`.

- **Layout Components**:

  - Create basic styles for headers, footers, and grid systems in `layout/`.

- **Utility Classes**:
  - In `abstracts/`, create utility mixins for frequently used CSS properties.

#### Part 4: Finalize and Document Your Template

- **Ensure Scalability and Maintainability**:

  - Make sure your Sass files are well-organized and documented for ease of use in future projects.

- **Update the README**:
  - Clearly document the structure and purpose of the template repository.
  - Include instructions on how to use the template for future projects.

#### Part 5: Submission

- **Submit Your Repository**:
  - Provide a link to your completed GitHub repository as your assignment submission.

### Rubric

#### Repository Setup and Structure - /10

- Complete (10 pts): Repository correctly set up with the 7-1 architecture and well-organized Sass files.
- Partial (5 pts): Most of the structure is correct, with minor omissions or organizational issues.
- Limited (0 pts): Significant deviations from the 7-1 pattern or poor organization.

#### Code Quality and Reusability - /5

- Complete (5 pts): Code is clean, well-documented, and demonstrates reusability.
- Partial (2 pts): Code is functional but lacks documentation or clear structure for reusability.
- Limited (0 pts): Code is disorganized, poorly documented, and not conducive to reuse.

#### Documentation and Readability - /5

- Complete (5 pts): Comprehensive README with clear instructions and explanations.
- Partial (2 pts): Basic README provided, but lacks detail or clarity.
- Limited (0 pts): Inadequate or missing README documentation.
