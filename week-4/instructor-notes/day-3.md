# Day 3: Media Queries with Tailwind CSS

Welcome to Day 3 of Week 4! Today, we will learn about media queries and how to use them with Tailwind CSS to create responsive designs.

## Objectives

- Understand what media queries are and why they are important.
- Learn how to use media queries in CSS.
- Apply Tailwind CSS utility classes to create responsive designs.

## Instructor Notes

### Introduction to Media Queries

- Explain what media queries are and why they are important for responsive design.
- Introduce the syntax and usage of media queries in plain CSS.
- Demonstrate how to create breakpoints and apply different styles for different screen sizes.

### Using Media Queries with Tailwind CSS

- Explain how Tailwind CSS simplifies responsive design with built-in breakpoints and utility classes.
- Demonstrate how to use Tailwind CSS utility classes to apply styles conditionally based on screen size.

## Hourly Breakdown

### Hour 1: Introduction to Media Queries (Plain CSS)

- **Objectives**:
  - Understand what media queries are and why they are important.
  - Learn how to use media queries in CSS.
- **Teaching Ideas**:

  - Explain the concept of media queries:

    - Example:

      ```css
      /* Base styles */
      .box {
        width: 100%;
        background-color: lightblue;
      }

      /* Media query for screens wider than 600px */
      @media (min-width: 600px) {
        .box {
          width: 50%;
        }
      }

      /* Media query for screens wider than 900px */
      @media (min-width: 900px) {
        .box {
          width: 25%;
        }
      }
      ```

  - Demonstrate how to create breakpoints and apply different styles for different screen sizes.

### Hour 2: Using Media Queries with Tailwind CSS

- **Objectives**:
  - Apply Tailwind CSS utility classes to create responsive designs.
- **Teaching Ideas**:

  - Explain how Tailwind CSS uses built-in breakpoints and utility classes for responsive design.
  - Demonstrate common Tailwind CSS responsive utility classes:

    - Example:

      ```html
      <div class="bg-lightblue p-4 md:bg-blue-500 lg:bg-green-500">
        <p class="text-center text-white md:text-lg lg:text-2xl">
          Responsive Text
        </p>
      </div>
      ```

    - Breakpoints in Tailwind CSS (`sm`, `md`, `lg`, `xl`, `2xl`):

      ```html
      <div class="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <p>This padding changes based on screen size.</p>
      </div>
      ```

## Code Snippets

```css
/* Media Queries Example with Plain CSS */

/* Base styles */
.box {
  width: 100%;
  background-color: lightblue;
}

/* Media query for screens wider than 600px */
@media (min-width: 600px) {
  .box {
    width: 50%;
  }
}

/* Media query for screens wider than 900px */
@media (min-width: 900px) {
  .box {
    width: 25%;
  }
}
```

```html
<!-- Tailwind CSS Media Queries Example -->
<div class="bg-lightblue p-4 md:bg-blue-500 lg:bg-green-500">
  <p class="text-center text-white md:text-lg lg:text-2xl">Responsive Text</p>
</div>

<div class="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
  <p>This padding changes based on screen size.</p>
</div>
```
