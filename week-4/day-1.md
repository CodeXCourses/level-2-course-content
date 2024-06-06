# Day 1: Introduction to Styling Frameworks

Welcome to Week 4! Today, we will introduce styling frameworks, providing an overview of Bootstrap and Bootswatch, and then focus on setting up and using Tailwind CSS for basic styling.

## Objectives

- Understand the purpose and benefits of using styling frameworks.
- Get an overview of Bootstrap and Bootswatch.
- Set up Tailwind CSS in a project.
- Apply basic styles using Tailwind CSS.

## Instructor Notes

### Overview of Bootstrap and Bootswatch

- Explain the purpose of styling frameworks in web development.
- Introduce Bootstrap:
  - A popular CSS framework that helps in creating responsive, mobile-first websites quickly.
  - Includes a wide range of pre-styled components and utilities.
- Introduce Bootswatch:
  - A collection of free themes for Bootstrap.
  - Allows easy customization of Bootstrap's default look.
  - **Note**: Download the Bootswatch CSS files for offline use.

### Setting Up Tailwind CSS

- Explain what Tailwind CSS is:
  - A utility-first CSS framework for rapidly building custom designs.
  - Encourages the use of utility classes to control the layout and styling directly in the HTML.
- Demonstrate how to set up Tailwind CSS in a project.

### Basic Styles with Tailwind CSS

- Demonstrate how to apply basic styles using Tailwind CSS classes.
- Show examples of common utility classes for layout, typography, and colors.

## Hourly Breakdown

### Hour 1: Overview of Bootstrap and Bootswatch, Setting Up Tailwind CSS

- **Objectives**:
  - Understand the purpose and benefits of styling frameworks.
  - Get an overview of Bootstrap and Bootswatch.
  - Set up Tailwind CSS in a project.
- **Teaching Ideas**:

  - Overview of Bootstrap:

    - Explain the grid system, pre-styled components, and utility classes.
    - Show a simple example of a Bootstrap-styled page:

      ```html
      <link
        href="path/to/bootstrap.min.css"
        rel="stylesheet"
      />
      <div class="container">
        <h1 class="text-center">Hello, Bootstrap!</h1>
        <button class="btn btn-primary">Click Me</button>
      </div>
      ```

  - Overview of Bootswatch:

    - Show how to download and apply a Bootswatch theme to a Bootstrap project:

      1. Visit the Bootswatch website (https://bootswatch.com/).
      2. Download the CSS file for the desired theme (e.g., `cerulean.min.css`).
      3. Include the downloaded CSS file in the project:

         ```html
         <link
           href="path/to/cerulean.min.css"
           rel="stylesheet"
         />
         <div class="container">
           <h1 class="text-center">Hello, Bootswatch!</h1>
           <button class="btn btn-primary">Click Me</button>
         </div>
         ```

  - Setting up Tailwind CSS:

    - Demonstrate how to set up Tailwind CSS using a CDN:

      ```html
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.1/dist/tailwind.min.css"
        rel="stylesheet"
      />
      ```

### Hour 2: Basic Styles with Tailwind CSS

- **Objectives**:
  - Apply basic styles using Tailwind CSS classes.
- **Teaching Ideas**:

  - Explain the utility-first approach of Tailwind CSS.
  - Demonstrate basic styles with Tailwind CSS:

    - Example layout:

      ```html
      <div class="container mx-auto p-4">
        <h1 class="text-3xl font-bold text-center">Hello, Tailwind CSS!</h1>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Click Me
        </button>
      </div>
      ```

  - Show examples of common utility classes for:

    - Layout:

      ```html
      <div class="flex justify-center">
        <div class="p-4">
          <p class="text-center">Centered content</p>
        </div>
      </div>
      ```

    - Typography:

      ```html
      <p class="text-lg font-light text-gray-700">
        This is a paragraph with Tailwind CSS typography.
      </p>
      ```

    - Colors:

      ```html
      <div class="bg-red-500 text-white p-4">
        <p>Red background with white text</p>
      </div>
      ```

## Code Snippets

```html
<!-- Bootstrap Example -->
<link
  href="path/to/bootstrap.min.css"
  rel="stylesheet"
/>
<div class="container">
  <h1 class="text-center">Hello, Bootstrap!</h1>
  <button class="btn btn-primary">Click Me</button>
</div>

<!-- Bootswatch Example -->
<link
  href="path/to/cerulean.min.css"
  rel="stylesheet"
/>
<div class="container">
  <h1 class="text-center">Hello, Bootswatch!</h1>
  <button class="btn btn-primary">Click Me</button>
</div>

<!-- Tailwind CSS Setup -->
<link
  href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.1/dist/tailwind.min.css"
  rel="stylesheet"
/>

<!-- Tailwind CSS Example -->
<div class="container mx-auto p-4">
  <h1 class="text-3xl font-bold text-center">Hello, Tailwind CSS!</h1>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    Click Me
  </button>
</div>

<!-- Tailwind CSS Layout Example -->
<div class="flex justify-center">
  <div class="p-4">
    <p class="text-center">Centered content</p>
  </div>
</div>

<!-- Tailwind CSS Typography Example -->
<p class="text-lg font-light text-gray-700">
  This is a paragraph with Tailwind CSS typography.
</p>

<!-- Tailwind CSS Colors Example -->
<div class="bg-red-500 text-white p-4">
  <p>Red background with white text</p>
</div>
```
