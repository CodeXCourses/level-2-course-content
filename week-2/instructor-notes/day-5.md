# Day 5: Guided Project (Week 2 Review)

Welcome to **Day 5** of Week 2! Today, you’ll lead a class discussion for the first **two hours** about the topics needed for their guided project. In the **third hour**, students will break out into groups and code independently, applying everything discussed.

## Objectives

1. **Reinforce** and **discuss** key concepts from the week (semantic HTML structure, forms & accessibility, box model, flexbox, custom styles).
2. **Review** the ACP workflow (Add, Commit, Push) in Git.
3. Provide **no direct solutions**, but ensure students understand **what** to do and **why** each part is important.

---

## Hour 1 (Discussion & Review)

### 1. Project Overview & Semantic Structure

- **Discuss** the overall structure they’ll build:
  - **Header** (with navigation),
  - **Hero** (headline & paragraph),
  - **Content** (subheading & text),
  - **CTA** (call to action button),
  - **Footer**.
- **Emphasize** semantic HTML:
  - Why use `<header>`, `<section>`, `<footer>`, and `<nav>`?
  - How semantic elements improve readability and accessibility.

### 2. Forms & Accessibility Considerations

- **Discuss** adding a simple form:
  - **Text** input, **email** input, **textarea**, **submit** button.
- **Accessibility points**:
  - Proper use of `<label>` with `for` attributes.
  - ARIA attributes if necessary (e.g., `aria-label`, `aria-describedby`).
- **Encourage** them to think about user experience:
  - Required fields (HTML `required`), placeholders, or `aria-required`.

### 3. ACP (Add, Commit, Push) Workflow

- **Reiterate** the Git workflow for each feature/section:
  1. `git add .`
  2. `git commit -m "your message"`
  3. `git push origin main`
- **Discuss** why frequent, descriptive commits help track changes and allow for easier debugging.

---

## Hour 2 (Discussion & Review)

### 1. CSS Box Model & Custom Styles

- **Remind** students of padding, border, margin, and how they affect layout.
- **Talk through** browser default styles vs. custom CSS overrides:
  - Changing font sizes, colors, margins, or line heights.
- **Highlight** RGBA usage for transparency:
  - Example uses (like applying a semi-transparent background in the hero or CTA).

### 2. Flexbox Fundamentals

- **Discuss** how Flexbox can be used to align elements horizontally or vertically.
- Key properties:
  - `display: flex;`
  - `justify-content`, `align-items`, and `flex: 1`.
- **Scenarios**:
  - Using Flexbox in the header nav to align links, or creating a horizontal layout in the CTA.

### 3. Inline vs. Block Elements (Optional)

- **Briefly touch on** how inline elements (like `<span>`, `<a>`) differ from block elements (`<div>`, `<section>`).
- **Encourage** them to experiment with background colors or borders to see the difference.

---

## Hour 3 (Coding in Breakout Rooms)

1. **Independent Work**

   - Students form small groups (or work solo) to **implement** the discussed sections:
     - Semantic structure (header, hero, content, CTA, footer).
     - Contact form (with labels, ARIA if needed).
     - CSS to show understanding of box model, custom styles, and optionally flexbox.
     - Use of RGBA for transparency.
   - They will **ACP** changes frequently as they code.

2. **Instructor & TA Support**

   - Move between breakout rooms:
     - Provide **guidance** rather than code.
     - Check if they’re following the ACP workflow.
     - Answer conceptual questions on semantic HTML, forms, accessibility, CSS, or Git.

3. **No Direct Solutions**
   - Encourage students to **problem-solve** by revisiting their notes and prior assignments.

---

## Reminders / Teaching Tips

- **Encourage** short, descriptive commit messages (e.g., “Add navigation menu” or “Style hero section”).
- **Emphasize** incremental builds: start with bare HTML, then style, then add advanced features like flexbox.
- Use **whiteboard** or **slides** to illustrate:
  - Flexbox properties,
  - Box model spacing,
  - Basic form structure.

**By the end of Hour 3**, students should have:

- A working multi-section webpage (no final solution code shared by you).
- Demonstrated **understanding** of key concepts from the week.
- Pushed their code to GitHub and optionally deployed to GitHub Pages.

---

### Final Note

This structure ensures you spend the first two hours discussing and **reinforcing concepts**. In the third hour, students **apply** those concepts independently. This approach fosters deeper understanding without providing a step-by-step solution.
