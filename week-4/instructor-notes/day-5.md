# Day 5: Project Build

Welcome to Day 5 of Week 4! Today, we will build a simple site that incorporates all the Tailwind CSS concepts learned throughout the week, including Flexbox, Grid, and responsive design with media queries.

## Objectives

- Apply Tailwind CSS concepts to build a complete project.
- Use Flexbox and Grid for layout.
- Implement responsive design using Tailwind CSS utility classes.
- Review and consolidate knowledge of Tailwind CSS.

## Instructor Notes

### Project Overview

- The project will be a simple multi-section website.
- Sections will include Header, Navigation, Hero Section, Content Sections, and Footer.
- Each section will demonstrate different Tailwind CSS concepts such as Flexbox, Grid, and responsive design.

### Project Structure

1. **Header**:

   - Contains the logo and navigation links.
   - Demonstrates responsive navigation using Flexbox.

2. **Hero Section**:

   - Large, attention-grabbing section with a background image and text.
   - Demonstrates the use of background utilities and Flexbox for centering content.

3. **Content Sections**:

   - Multiple sections showcasing different content.
   - Use Grid and Flexbox for layout.
   - Responsive design to adjust layout on different screen sizes.

4. **Footer**:
   - Contains links and other footer content.
   - Demonstrates the use of Grid for layout.

## Hourly Breakdown

### Hour 1: Setting Up the Project and Building the Header and Hero Section

- **Objectives**:
  - Set up the project structure.
  - Build the Header and Hero Section using Tailwind CSS.
- **Teaching Ideas**:

  - Guide students to create the project structure and include Tailwind CSS:

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Tailwind CSS Project</title>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.1/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body class="font-sans">
        <!-- Header -->
        <header class="bg-gray-800 text-white p-4">
          <div class="container mx-auto flex justify-between items-center">
            <h1 class="text-2xl">My Website</h1>
            <nav>
              <ul class="flex space-x-4">
                <li>
                  <a
                    href="#home"
                    class="hover:underline"
                    >Home</a
                  >
                </li>
                <li>
                  <a
                    href="#about"
                    class="hover:underline"
                    >About</a
                  >
                </li>
                <li>
                  <a
                    href="#services"
                    class="hover:underline"
                    >Services</a
                  >
                </li>
                <li>
                  <a
                    href="#contact"
                    class="hover:underline"
                    >Contact</a
                  >
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <!-- Hero Section -->
        <section
          class="bg-cover bg-center h-screen flex items-center justify-center"
          style="background-image: url('https://via.placeholder.com/1500');"
        >
          <div class="text-center text-white">
            <h2 class="text-4xl font-bold mb-4">Welcome to My Website</h2>
            <p class="text-lg">
              This is the hero section with a background image.
            </p>
          </div>
        </section>
      </body>
    </html>
    ```

### Hour 2: Building the Content Sections and Footer

- **Objectives**:
  - Build the Content Sections and Footer using Tailwind CSS.
  - Implement responsive design using Tailwind CSS utility classes.
- **Teaching Ideas**:

  - Guide students to create content sections using Grid and Flexbox:

    ```html
    <!-- Content Section 1 -->
    <section class="container mx-auto p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-gray-100 p-6">Content Block 1</div>
        <div class="bg-gray-200 p-6">Content Block 2</div>
      </div>
    </section>

    <!-- Content Section 2 -->
    <section class="bg-gray-50 p-4">
      <div class="container mx-auto flex flex-col md:flex-row items-center">
        <div class="flex-1 p-6">Flexbox Content 1</div>
        <div class="flex-1 p-6">Flexbox Content 2</div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-4">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="p-4">Footer Link 1</div>
        <div class="p-4">Footer Link 2</div>
        <div class="p-4">Footer Link 3</div>
        <div class="p-4">Footer Link 4</div>
      </div>
    </footer>
    ```

  - Implement responsive design using Tailwind CSS utility classes:

    ```html
    <section class="container mx-auto p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-gray-100 p-6">Responsive Content 1</div>
        <div class="bg-gray-200 p-6">Responsive Content 2</div>
        <div class="bg-gray-300 p-6">Responsive Content 3</div>
      </div>
    </section>
    ```

  - Review key Tailwind CSS concepts and answer any questions.

## Code Snippets

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Tailwind CSS Project</title>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.1/dist/tailwind.min.css"
      rel="stylesheet"
    />
  </head>
  <body class="font-sans">
    <!-- Header -->
    <header class="bg-gray-800 text-white p-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-2xl">My Website</h1>
        <nav>
          <ul class="flex space-x-4">
            <li>
              <a
                href="#home"
                class="hover:underline"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#about"
                class="hover:underline"
                >About</a
              >
            </li>
            <li>
              <a
                href="#services"
                class="hover:underline"
                >Services</a
              >
            </li>
            <li>
              <a
                href="#contact"
                class="hover:underline"
                >Contact</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <!-- Hero Section -->
    <section
      class="bg-cover bg-center h-screen flex items-center justify-center"
      style="background-image: url('https://via.placeholder.com/1500');"
    >
      <div class="text-center text-white">
        <h2 class="text-4xl font-bold mb-4">Welcome to My Website</h2>
        <p class="text-lg">This is the hero section with a background image.</p>
      </div>
    </section>
    <!-- Content Section 1 -->
    <section class="container mx-auto p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="bg-gray-100 p-6">Content Block 1</div>
        <div class="bg-gray-200 p-6">Content Block 2</div>
      </div>
    </section>
    <!-- Content Section 2 -->
    <section class="bg-gray-50 p-4">
      <div class="container mx-auto flex flex-col md:flex-row items-center">
        <div class="flex-1 p-6">Flexbox Content 1</div>
        <div class="flex-1 p-6">Flexbox Content 2</div>
      </div>
    </section>
    <!-- Responsive Content Section -->
    <section class="container mx-auto p-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-gray-100 p-6">Responsive Content 1</div>
        <div class="bg-gray-200 p-6">Responsive Content 2</div>
        <div class="bg-gray-300 p-6">Responsive Content 3</div>
      </div>
    </section>
    <!-- Footer -->
    <footer class="bg-gray-800 text-white p-4">
      <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="p-4">Footer Link 1</div>
        <div class="p-4">Footer Link 2</div>
        <div class="p-4">Footer Link 3</div>
        <div class="p-4">Footer Link 4</div>
      </div>
    </footer>
  </body>
</html>
```
