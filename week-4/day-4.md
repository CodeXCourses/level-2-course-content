# Day 4: Grid CSS and Tailwind

Welcome to Day 4 of Week 4! Today, we will learn about CSS Grid and how to use it for creating complex layouts. We will also explore how to implement Grid using Tailwind CSS utility classes.

## Objectives

- Understand the basics of CSS Grid.
- Learn how to create layouts using CSS Grid.
- Apply Grid utility classes in Tailwind CSS.

## Instructor Notes

### Introduction to CSS Grid

- Explain what CSS Grid is and why it is useful for layout design.
- Introduce the main concepts and properties of CSS Grid:
  - Grid container and grid items
  - Grid tracks, cells, and areas
  - Properties for the container (`display: grid`, `grid-template-columns`, `grid-template-rows`, `grid-gap`)
  - Properties for the items (`grid-column`, `grid-row`, `grid-area`)

### Using Grid with Tailwind CSS

- Explain how Tailwind CSS provides utility classes for Grid.
- Demonstrate common Grid utility classes in Tailwind CSS:
  - `grid`, `grid-cols-{n}`, `grid-rows-{n}`
  - `col-span-{n}`, `row-span-{n}`
  - `gap-{n}`, `col-gap-{n}`, `row-gap-{n}`

## Hourly Breakdown

### Hour 1: Introduction to CSS Grid

- **Objectives**:
  - Understand the basics of CSS Grid.
  - Learn how to create layouts using CSS Grid.
- **Teaching Ideas**:

  - Explain the CSS Grid model:

    - Grid container and grid items:

      ```html
      <div class="grid-container">
        <div class="grid-item">Item 1</div>
        <div class="grid-item">Item 2</div>
        <div class="grid-item">Item 3</div>
      </div>
      ```

    - Properties for the container:

      ```css
      .grid-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr); /* Three equal columns */
        grid-gap: 10px; /* Gap between items */
      }
      ```

    - Properties for the items:

      ```css
      .grid-item {
        background-color: lightblue;
        padding: 20px;
        text-align: center;
      }
      ```

    - More complex layouts:

      ```css
      .grid-container {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: auto auto;
        grid-gap: 10px;
      }
      .grid-item-1 {
        grid-column: 1 / 3;
      }
      .grid-item-2 {
        grid-row: 1 / 3;
      }
      ```

### Hour 2: Using Grid with Tailwind CSS

- **Objectives**:
  - Apply Grid utility classes in Tailwind CSS.
- **Teaching Ideas**:

  - Demonstrate common Grid utility classes in Tailwind CSS:

    - Container:

      ```html
      <div class="grid grid-cols-3 gap-4">
        <div class="bg-blue-200 p-4">Item 1</div>
        <div class="bg-blue-400 p-4">Item 2</div>
        <div class="bg-blue-600 p-4">Item 3</div>
      </div>
      ```

    - Items:

      ```html
      <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2 bg-green-200 p-4">Span 2 Columns</div>
        <div class="bg-green-400 p-4">Item 2</div>
        <div class="row-span-2 bg-green-600 p-4">Span 2 Rows</div>
      </div>
      ```

  - Explain the benefits of using Tailwind CSS for Grid layouts, such as rapid development and consistent design.

## Code Snippets

```html
<!-- CSS Grid Model Example -->
<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
</div>

<!-- CSS for Grid Container and Items -->
<style>
  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
  .grid-item {
    background-color: lightblue;
    padding: 20px;
    text-align: center;
  }
</style>

<!-- More Complex CSS Grid Layout -->
<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: auto auto;
    grid-gap: 10px;
  }
  .grid-item-1 {
    grid-column: 1 / 3;
  }
  .grid-item-2 {
    grid-row: 1 / 3;
  }
</style>

<div class="grid-container">
  <div class="grid-item grid-item-1">Item 1</div>
  <div class="grid-item grid-item-2">Item 2</div>
  <div class="grid-item">Item 3</div>
</div>

<!-- Tailwind CSS Grid Example -->
<div class="grid grid-cols-3 gap-4">
  <div class="bg-blue-200 p-4">Item 1</div>
  <div class="bg-blue-400 p-4">Item 2</div>
  <div class="bg-blue-600 p-4">Item 3</div>
</div>

<div class="grid grid-cols-3 gap-4">
  <div class="col-span-2 bg-green-200 p-4">Span 2 Columns</div>
  <div class="bg-green-400 p-4">Item 2</div>
  <div class="row-span-2 bg-green-600 p-4">Span 2 Rows</div>
</div>
```
