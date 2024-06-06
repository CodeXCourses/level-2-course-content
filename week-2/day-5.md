# Day 5: Guided Project

Welcome to Day 5 of Week 2! Today, we will work on a guided project that incorporates all the topics covered throughout the week. This includes creating a simple project, ACPing each feature (Add, Commit, Push), and using the developer tools to inspect and debug.

## Objectives

- Apply all the concepts learned throughout the week in a guided project.
- Practice the ACP (Add, Commit, Push) workflow with Git.
- Use developer tools to inspect and debug the project.

## Instructor Notes

### Project Overview

- The project will be a simple multi-section web page.
- Sections will include Header, Hero Section, Navigation, Content Section, Call to Action, and Footer.
- Students will implement features step-by-step, using Git to ACP each feature.

### Building the Project

- **Structure**: Guide students to create the basic structure of the project.
  - Header with navigation
  - Hero section
  - Content section
  - Call to action
  - Footer

### Using Git: ACP Workflow

- **Add**: Stage changes for the next commit.
  - Example: `git add .`
- **Commit**: Save changes to the local repository with a message.
  - Example: `git commit -m "Add hero section"`
- **Push**: Send changes to the remote repository.
  - Example: `git push origin main`

### Using Developer Tools

- **Inspecting Elements**: Use the Elements panel to inspect and modify HTML and CSS.
- **Console**: Use the Console panel to log messages and run JavaScript.
- **Network**: Use the Network panel to monitor network requests.
- **Sources**: Use the Sources panel to debug JavaScript with breakpoints.

## Hourly Breakdown

### Hour 1: Project Structure and Initial Features

- **Objectives**:
  - Set up the basic structure of the project.
  - Implement the Header and Hero section.
- **Teaching Ideas**:
  - Guide students to create the project structure using HTML.
  - Implement the Header with navigation:
    ```html
    <header class="header">
      <nav class="top-nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    ```
  - Implement the Hero section:
    ```html
    <section class="hero">
      <h1>Welcome to My Website</h1>
      <p>This is the hero section where you highlight key information.</p>
    </section>
    ```
  - ACP the changes using Git:
    ```bash
    git add .
    git commit -m "Add header and hero section"
    git push origin main
    ```

### Hour 2: Content, CTA, and Footer Sections

- **Objectives**:
  - Implement the Content section, Call to Action, and Footer.
  - Use developer tools to inspect and debug the project.
- **Teaching Ideas**:
  - Implement the Content section:
    ```html
    <section class="content">
      <h2>About Us</h2>
      <p>This section contains information about the website or company.</p>
    </section>
    ```
  - Implement the Call to Action:
    ```html
    <section class="cta">
      <button>Sign Up Now</button>
    </section>
    ```
  - Implement the Footer:
    ```html
    <footer class="footer">
      <p>&copy; 2024 My Website</p>
    </footer>
    ```
  - ACP the changes using Git:
    ```bash
    git add .
    git commit -m "Add content, CTA, and footer sections"
    git push origin main
    ```
  - Use developer tools to inspect and debug:
    - **Elements**: Inspect the HTML and CSS structure.
    - **Console**: Log messages or run JavaScript code.
    - **Network**: Check for any network requests.
    - **Sources**: Set breakpoints and debug JavaScript code.

## Code Snippets

```html
<!-- Header with Navigation -->
<header class="header">
  <nav class="top-nav">
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>

<!-- Hero Section -->
<section class="hero">
  <h1>Welcome to My Website</h1>
  <p>This is the hero section where you highlight key information.</p>
</section>

<!-- Content Section -->
<section class="content">
  <h2>About Us</h2>
  <p>This section contains information about the website or company.</p>
</section>

<!-- Call to Action -->
<section class="cta">
  <button>Sign Up Now</button>
</section>

<!-- Footer -->
<footer class="footer">
  <p>&copy; 2024 My Website</p>
</footer>
```

```bash
# ACP Workflow
git add .
git commit -m "Commit message"
git push origin main
```
