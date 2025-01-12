# Day 1: Review HTML Elements and Document Structure

Welcome to Week 2 of Level 2! Today, we will review HTML elements and document structure, introduce the PRE tag, revisit the box model, and compare browser built-in styles with custom styles.

## Objectives

- Understand HTML elements and document structure.
- Learn about the PRE tag and its usage.
- Review the box model.
- Compare browser built-in styles with custom styles.

## Instructor Notes

### HTML Elements and Structure

- Explain the basic structure of an HTML document.
- Review common HTML elements and their purposes.

### Introduction to the PRE Tag

- Explain the purpose of the PRE tag.
- Demonstrate how to use the PRE tag to display preformatted text.

### Review of the Box Model

- Revisit the box model, including content, padding, border, and margin.
- Demonstrate how to use CSS to manipulate the box model.

### Browser Built-in Styles vs. Custom Styles

- Explain the concept of browser built-in styles (user agent styles).
- Show how to override built-in styles with custom CSS.

## Hourly Breakdown

### Hour 1: HTML Elements and Structure, Introduction to the PRE Tag

- **Objectives**:
  - Understand the basic structure of an HTML document.
  - Learn about common HTML elements.
  - Understand the usage of the PRE tag.
- **Teaching Ideas**:

  - Explain the basic structure of an HTML document:

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <title>Document</title>
      </head>
      <body>
        <!-- Common HTML elements go here -->
      </body>
    </html>
    ```

  - Review common HTML elements such as headings, paragraphs, lists, links, and images:

    ```html
    <h1>This is a Heading</h1>
    <p>This is a paragraph.</p>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
    </ul>
    <a href="https://example.com">This is a link</a>
    <img
      src="image.jpg"
      alt="Example Image"
    />
    ```

  - Introduce the PRE tag and its usage:

    ```html
    <pre>
    This is preformatted text.
    It preserves spaces and line breaks.
    </pre>
    ```

### Hour 2: Review of the Box Model, Browser Built-in Styles vs. Custom Styles

- **Objectives**:
  - Understand the box model.
  - Compare browser built-in styles with custom styles.
- **Teaching Ideas**:

  - Revisit the box model and explain its components (content, padding, border, margin):

    ```html
    <div class="box">This is a box.</div>
    ```

    ```css
    .box {
      width: 200px;
      height: 100px;
      padding: 20px;
      border: 5px solid black;
      margin: 10px;
    }
    ```

  - Demonstrate how to use CSS to manipulate the box model.
  - Explain the concept of browser built-in styles and show examples:

    ```html
    <p>This is a paragraph with built-in styles.</p>
    ```

  - Show how to override built-in styles with custom CSS:

    ```css
    p {
      font-size: 18px;
      color: blue;
    }
    ```

## Code Snippets

```html
<!-- Basic HTML Document Structure -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Document</title>
  </head>
  <body>
    <!-- Common HTML elements go here -->
  </body>
</html>

<!-- Common HTML Elements -->
<h1>This is a Heading</h1>
<p>This is a paragraph.</p>
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
</ul>
<a href="https://example.com">This is a link</a>
<img
  src="image.jpg"
  alt="Example Image"
/>

<!-- Using the PRE Tag -->
<pre>
This is preformatted text.
It preserves spaces and line breaks.
</pre>

<!-- Box Model Example -->
<div class="box">This is a box.</div>

<!-- CSS for Box Model -->
<style>
  .box {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
  }
</style>

<!-- Example of Built-in Styles -->
<p>This is a paragraph with built-in styles.</p>

<!-- Overriding Built-in Styles with Custom CSS -->
<style>
  p {
    font-size: 18px;
    color: blue;
  }
</style>
```
