# Day 2: Flexbox with Tailwind CSS

Welcome to Day 2 of Week 4! Today, we will dive deep into Flexbox and learn how to use Flexbox with Tailwind CSS to create responsive and flexible layouts.

## Objectives

- Understand the core concepts of Flexbox.
- Learn how to create layouts using Flexbox with plain CSS.
- Apply Flexbox utility classes in Tailwind CSS.

## Instructor Notes

### Deep Dive into Flexbox (Plain CSS)

- Explain what Flexbox is and why it is useful for layout design.
- Introduce the main concepts and properties of Flexbox:
  - Flex container and flex items
  - Main axis and cross axis
  - Properties for the container (`display: flex`, `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, `align-content`)
  - Properties for the items (`order`, `flex-grow`, `flex-shrink`, `flex-basis`, `align-self`)

### Using Flexbox with Tailwind CSS

- Explain how Tailwind CSS provides utility classes for Flexbox.
- Demonstrate common Flexbox utility classes in Tailwind CSS:
  - `flex`, `flex-col`, `flex-row`, `flex-wrap`
  - `justify-start`, `justify-center`, `justify-end`, `justify-between`, `justify-around`
  - `items-start`, `items-center`, `items-end`
  - `self-start`, `self-center`, `self-end`
  - `order-first`, `order-last`, `order-none`

## Hourly Breakdown

### Hour 1: Deep Dive into Flexbox (Plain CSS)

- **Objectives**:
  - Understand the core concepts of Flexbox.
  - Learn how to create layouts using Flexbox with plain CSS.
- **Teaching Ideas**:
  - Explain the Flexbox model:
    - Flex container and flex items:
      ```html
      <div class="flex-container">
        <div class="flex-item">Item 1</div>
        <div class="flex-item">Item 2</div>
        <div class="flex-item">Item 3</div>
      </div>
      ```
    - Properties for the container:
      ```css
      .flex-container {
        display: flex;
        flex-direction: row; /* or column */
        flex-wrap: wrap; /* or nowrap */
        justify-content: center; /* or start, end, space-between, space-around */
        align-items: center; /* or start, end, stretch, baseline */
        align-content: center; /* or start, end, stretch, space-between, space-around */
      }
      ```
    - Properties for the items:
      ```css
      .flex-item {
        order: 1; /* or any number */
        flex-grow: 1; /* or any number */
        flex-shrink: 1; /* or any number */
        flex-basis: 100px; /* or auto, percentage */
        align-self: center; /* or start, end, stretch, baseline */
      }
      ```

### Hour 2: Using Flexbox with Tailwind CSS

- **Objectives**:
  - Apply Flexbox utility classes in Tailwind CSS.
- **Teaching Ideas**:
  - Demonstrate common Flexbox utility classes in Tailwind CSS:
    - Container:
      ```html
      <div
        class="flex flex-col md:flex-row flex-wrap justify-center items-center"
      >
        <div class="p-4 bg-blue-200">Item 1</div>
        <div class="p-4 bg-blue-400">Item 2</div>
        <div class="p-4 bg-blue-600">Item 3</div>
      </div>
      ```
    - Items:
      ```html
      <div class="flex flex-row justify-around">
        <div class="order-first bg-green-200 p-4">First</div>
        <div class="order-last bg-green-400 p-4">Last</div>
        <div class="order-none bg-green-600 p-4">None</div>
      </div>
      ```
  - Explain the benefits of using Tailwind CSS for Flexbox layouts, such as rapid development and consistent design.

## Code Snippets

```html
<!-- Flexbox Model Example with Plain CSS -->
<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>

<!-- Tailwind CSS Flexbox Example -->
<div class="flex flex-col md:flex-row flex-wrap justify-center items-center">
  <div class="p-4 bg-blue-200">Item 1</div>
  <div class="p-4 bg-blue-400">Item 2</div>
  <div class="p-4 bg-blue-600">Item 3</div>
</div>

<div class="flex flex-row justify-around">
  <div class="order-first bg-green-200 p-4">First</div>
  <div class="order-last bg-green-400 p-4">Last</div>
  <div class="order-none bg-green-600 p-4">None</div>
</div>
```
