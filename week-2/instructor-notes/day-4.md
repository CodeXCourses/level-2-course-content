# Day 4: CSS Techniques

Welcome to Day 4 of Week 2! Today, we will cover common HTML terms such as the Hero section, build a simple splash page to explain each section, and learn about transparency with RGBA.

## Objectives

- Understand common HTML terms like Hero section, footer, header, navigation areas, and call to action.
- Build a simple splash page to demonstrate each section.
- Learn about transparency using RGBA in CSS.

## Instructor Notes

### Common HTML Terms

- Hero Section: A large, prominent section, typically at the top of the page, used to grab the user's attention.
- Header: The section at the top of the page that usually contains the logo, navigation, and sometimes a call to action.
- Navigation: Can be top or side navigation; used to link to different sections of the website.
- Content Section: Main area where the primary content of the page is displayed.
- Call to Action (CTA): A section that prompts users to take a specific action, such as signing up or purchasing.
- Footer: The section at the bottom of the page that typically contains contact information, links, and copyright information.

### Building a Simple Splash Page

- Structure: Outline the structure of the splash page using the common HTML terms.

  - Header
  - Hero Section
  - Navigation
  - Content Section
  - Call to Action
  - Footer

- Example Layout:

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

<section class="hero">
  <h1>Welcome to My Website</h1>
  <p>This is the hero section where you highlight key information.</p>
</section>

<section class="content">
  <h2>About Us</h2>
  <p>This section contains information about the website or company.</p>
</section>

<section class="cta">
  <button>Sign Up Now</button>
</section>

<footer class="footer">
  <p>&copy; 2024 My Website</p>
</footer>
```

### Transparency with RGBA

- Concept: Introduce RGBA color values and their use for adding transparency.
- Example:
  .hero {
  background-color: rgba(0, 0, 0, 0.5); /_Black with 50% opacity _/
  color: white;
  padding: 50px;
  text-align: center;
  }
  .cta {
  background-color: rgba(255, 0, 0, 0.7); /_ Red with 70% opacity_/
  color: white;
  padding: 20px;
  text-align: center;
  }

## Hourly Breakdown

### Hour 1: Common HTML Terms, Building a Simple Splash Page

- Objectives:
  - Understand the purpose and layout of common HTML sections.
  - Build a simple splash page to demonstrate these sections.
- Teaching Ideas:
  - Discuss common HTML sections and their roles.
  - Outline the splash page structure:
    - Header with navigation
    - Hero section
    - Content section
    - Call to action
    - Footer
  - Guide students to create a basic structure using HTML.

### Hour 2: Transparency with RGBA

- Objectives:
  - Learn how to use RGBA for transparency in CSS.
  - Apply RGBA to different sections of the splash page.
- Teaching Ideas:
  - Explain RGBA values (Red, Green, Blue, Alpha).
  - Demonstrate how to apply RGBA to the hero section and call to action.
  - Encourage students to experiment with different RGBA values.

## Code Snippets

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

<section class="hero">
  <h1>Welcome to My Website</h1>
  <p>This is the hero section where you highlight key information.</p>
</section>

<section class="content">
  <h2>About Us</h2>
  <p>This section contains information about the website or company.</p>
</section>

<section class="cta">
  <button>Sign Up Now</button>
</section>

<footer class="footer">
  <p>&copy; 2024 My Website</p>
</footer>
```

```css
.hero {
  background-color: rgba(0, 0, 0, 0.5); /* Black with 50% opacity */
  color: white;
  padding: 50px;
  text-align: center;
}
.cta {
  background-color: rgba(255, 0, 0, 0.7); /* Red with 70% opacity */
  color: white;
  padding: 20px;
  text-align: center;
}
```
