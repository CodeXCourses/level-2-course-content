# Day 2: Forms and Semantic HTML

Welcome to Day 2 of Week 2! Today, we will learn about creating and styling forms, introduce ARIA tags, and discuss semantic HTML best practices.

## Objectives

- Create and style forms.
- Understand the purpose and usage of ARIA tags.
- Learn semantic HTML best practices.

## Instructor Notes

### Creating and Styling Forms

- Explain the structure of an HTML form.
- Demonstrate how to create various form elements (input, select, textarea, etc.).
- Show how to style forms using CSS.

### Introduction to ARIA Tags

- Explain the purpose of ARIA (Accessible Rich Internet Applications) tags.
- Demonstrate how to use ARIA tags to enhance accessibility.

### Semantic HTML Best Practices

- Explain the importance of semantic HTML.
- Provide examples of semantic HTML elements and their usage.
- Discuss best practices for writing semantic HTML.

## Hourly Breakdown

### Hour 1: Creating and Styling Forms

- **Objectives**:
  - Understand the structure of an HTML form.
  - Create various form elements.
  - Style forms using CSS.
- **Teaching Ideas**:

  - Explain the basic structure of a form:

    ```html
    <form
      action="/submit"
      method="post"
    >
      <label for="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
      />
      <input
        type="submit"
        value="Submit"
      />
    </form>
    ```

  - Demonstrate how to create various form elements:

    ```html
    <form
      action="/submit"
      method="post"
    >
      <label for="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
      /><br />

      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
      /><br />

      <label for="message">Message:</label>
      <textarea
        id="message"
        name="message"
      ></textarea
      ><br />

      <label for="gender">Gender:</label>
      <select
        id="gender"
        name="gender"
      >
        <option value="male">Male</option>
        <option value="female">Female</option></select
      ><br />

      <input
        type="submit"
        value="Submit"
      />
    </form>
    ```

  - Show how to style forms using CSS:

    ```css
    form {
      max-width: 600px;
      margin: auto;
      padding: 1em;
      border: 1px solid #ccc;
      border-radius: 1em;
    }
    form div + div {
      margin-top: 1em;
    }
    label {
      display: block;
      margin-bottom: 0.5em;
      color: #333333;
    }
    input,
    textarea,
    select {
      width: 100%;
      border: 1px solid #ccc;
      padding: 0.5em;
      font-size: 1em;
    }
    input[type="submit"] {
      background: #333333;
      color: white;
      border: 0;
      padding: 1em;
      border-radius: 1em;
    }
    ```

### Hour 2: Introduction to ARIA Tags, Semantic HTML Best Practices

- **Objectives**:
  - Understand the purpose of ARIA tags.
  - Learn how to use ARIA tags to enhance accessibility.
  - Understand semantic HTML best practices.
- **Teaching Ideas**:

  - Explain the purpose of ARIA tags and how they enhance accessibility.
  - Demonstrate how to use ARIA tags:

    ```html
    <form
      action="/submit"
      method="post"
    >
      <label for="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        aria-label="Name"
      /><br />

      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        aria-label="Email"
      /><br />

      <label for="message">Message:</label>
      <textarea
        id="message"
        name="message"
        aria-label="Message"
      ></textarea
      ><br />

      <label for="gender">Gender:</label>
      <select
        id="gender"
        name="gender"
        aria-label="Gender"
      >
        <option value="male">Male</option>
        <option value="female">Female</option></select
      ><br />

      <input
        type="submit"
        value="Submit"
        aria-label="Submit Form"
      />
    </form>
    ```

  - Discuss the importance of semantic HTML and provide examples:

    ```html
    <header>
      <h1>Website Title</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section>
        <h2>About Us</h2>
        <p>This is an example of a semantic HTML section.</p>
      </section>
      <article>
        <h2>Article Title</h2>
        <p>This is an example of a semantic HTML article.</p>
      </article>
    </main>
    <footer>
      <p>&copy; 2024 Company Name</p>
    </footer>
    ```

  - Discuss best practices for writing semantic HTML, such as using appropriate tags for content, ensuring readability, and enhancing accessibility.

## Code Snippets

```html
<!-- Creating and Styling Forms -->
<form
  action="/submit"
  method="post"
>
  <label for="name">Name:</label>
  <input
    type="text"
    id="name"
    name="name"
  /><br />

  <label for="email">Email:</label>
  <input
    type="email"
    id="email"
    name="email"
  /><br />

  <label for="message">Message:</label>
  <textarea
    id="message"
    name="message"
  ></textarea
  ><br />

  <label for="gender">Gender:</label>
  <select
    id="gender"
    name="gender"
  >
    <option value="male">Male</option>
    <option value="female">Female</option></select
  ><br />

  <input
    type="submit"
    value="Submit"
  />
</form>

<!-- Styling Forms with CSS -->
<style>
  form {
    max-width: 600px;
    margin: auto;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 1em;
  }
  form div + div {
    margin-top: 1em;
  }
  label {
    display: block;
    margin-bottom: 0.5em;
    color: #333333;
  }
  input,
  textarea,
  select {
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.5em;
    font-size: 1em;
  }
  input[type="submit"] {
    background: #333333;
    color: white;
    border: 0;
    padding: 1em;
    border-radius: 1em;
  }
</style>

<!-- Using ARIA Tags -->
<form
  action="/submit"
  method="post"
>
  <label for="name">Name:</label>
  <input
    type="text"
    id="name"
    name="name"
    aria-label="Name"
  /><br />

  <label for="email">Email:</label>
  <input
    type="email"
    id="email"
    name="email"
    aria-label="Email"
  /><br />

  <label for="message">Message:</label>
  <textarea
    id="message"
    name="message"
    aria-label="Message"
  ></textarea
  ><br />

  <label for="gender">Gender:</label>
  <select
    id="gender"
    name="gender"
    aria-label="Gender"
  >
    <option value="male">Male</option>
    <option value="female">Female</option></select
  ><br />

  <input
    type="submit"
    value="Submit"
    aria-label="Submit Form"
  />
</form>

<!-- Semantic HTML Example -->
<header>
  <h1>Website Title</h1>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
<main>
  <section>
    <h2>About Us</h2>
    <p>This is an example of a semantic HTML section.</p>
  </section>
  <article>
    <h2>Article Title</h2>
    <p>This is an example of a semantic HTML article.</p>
  </article>
</main>
<footer>
  <p>&copy; 2024 Company Name</p>
</footer>
```
