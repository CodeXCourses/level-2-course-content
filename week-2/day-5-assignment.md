# Assignment: Guided Project

## Objective

- Consolidate and apply concepts learned during the first four days.
- Practice building a webpage that includes structured HTML, a form, flexbox, and custom styling.
- Maintain good Git practices using the ACP (Add, Commit, Push) workflow.

## Instructions

### Part 1: Project Structure & Semantics

1. **Set Up the Project Repository**

   - Create a new GitHub repository named `week5-guided-project` (or similar).
   - Clone it to your local machine and create a new `index.html` file.

2. **Basic HTML Structure**

   - In `index.html`, add semantic sections:
     - **Header** with a navigation bar containing links.
     - **Hero** section featuring a main heading (`<h1>`) and a paragraph that introduces the page.
     - **Content** section with a subheading (`<h2>`) and one or two paragraphs of text.
     - **Call to Action (CTA)** section with a button that encourages some action.
     - **Footer** with some simple text or copyright note.

3. **ACP the Changes**

   - After creating the basic structure, follow the ACP workflow:

     ```bash
     git add .
     git commit -m "Add basic semantic structure (header, hero, content, CTA, footer)"
     git push origin main
     ```

### Part 2: Forms & Accessibility

1. **Add a Contact Form**

   - Below the Content section (or within it), create a small contact form that includes:
     - A **text** input for name
     - An **email** input for email
     - A **textarea** for a message
     - A **submit** button

2. **Enhance Accessibility**

   - Use **labels** to associate form inputs properly.
   - Add **ARIA** attributes if applicable (for example, `aria-label` on inputs or `role` attributes where helpful).

3. **ACP the Changes**
   ```bash
   git add .
   git commit -m "Add contact form with basic ARIA attributes for accessibility"
   git push origin main
   ```

### Part 3: Styling & Layout

1. **Create a CSS File**

   - Create a `styles.css` file (or name it as you wish).
   - Link it to `index.html` in the `<head>` section using a `<link>` tag.

2. **Box Model and Custom Styles**

   - Style one or more **box** elements (e.g., a `<div>`) to demonstrate:
     - **width** and **height**
     - **padding**, **border**, and **margin**
   - Use **RGBA** color for at least one background (e.g., in the Hero or CTA section) to demonstrate transparency.
   - Override **browser default styles** for at least one HTML element (e.g., `<p>` or `<ul>`) by changing font size, color, or margins.

3. **Use Flexbox for Layout**

   - Convert either the header navigation bar or the CTA section into a **Flexbox** layout to arrange items in a row or a column.
   - Experiment with properties such as `justify-content`, `align-items`, or `flex: 1`.

4. **ACP the Changes**
   ```bash
   git add .
   git commit -m "Add custom styles, demonstrate box model, and introduce Flexbox layout"
   git push origin main
   ```

### (Optional) Part 4: Inline vs. Block Elements

- If you’d like to review **inline vs. block** elements, add a brief example in your HTML (like a `<span>` and `<div>`) to illustrate the difference.
- Give them distinct background colors and observe how they flow differently in the document.

### Submission

1. **GitHub Repository**

   - Push your final changes to the `week5-guided-project` repository.

2. **GitHub Pages**

   - Deploy your lab to **GitHub Pages** so you can share a live link to your project.

3. **Submission Link**
   - Submit the URL of your GitHub repository (and the GitHub Pages link).

### Rubric

| Criteria                          | Limited (0 pts)                        | Partial (3 pts)                            | Complete (5 pts)                                                        |
| --------------------------------- | -------------------------------------- | ------------------------------------------ | ----------------------------------------------------------------------- |
| **Project Structure & Semantics** | Basic structure not created correctly  | Basic structure with minor semantic issues | Semantically correct structure (header, hero, content, CTA, footer)     |
| **Forms & Accessibility**         | Form incomplete or incorrectly labeled | Form created with minor labeling issues    | Fully functional form with ARIA/labels and accessible markup            |
| **Box Model & Custom Styles**     | Box model or custom styles not applied | Box model applied with minor issues        | Correct use of box model (padding, margin, border) & overriding default |
| **Flexbox Layout**                | Flexbox not used or incorrectly used   | Flexbox used with minor issues             | Flexbox used properly for at least one section (header or CTA)          |
| **ACP Workflow**                  | No or incorrect use of ACP             | ACP partially used but inconsistent        | Proper ACP usage after each significant change                          |
