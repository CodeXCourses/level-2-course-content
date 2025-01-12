# Day 3: Flexbox and Forms

Welcome to Day 3 of Week 2! Today, we will cover basic Flexbox concepts, the differences between inline and block elements, and advanced form techniques.

## Objectives

- Understand basic Flexbox concepts.
- Differentiate between inline and block elements.
- Learn advanced form techniques.

## Instructor Notes

### Basic Flexbox Concepts

- Explain the purpose and benefits of Flexbox.
- Demonstrate how to create a Flexbox container and use Flexbox properties.

### Inline vs. Block Elements

- Explain the differences between inline and block elements.
- Provide examples of common inline and block elements.

### Advanced Form Techniques

- Demonstrate advanced form techniques such as validation, placeholder text, and autofocus.
- Show how to create complex form layouts using Flexbox.

## Hourly Breakdown

### Hour 1: Basic Flexbox Concepts, Inline vs. Block Elements

- **Objectives**:
  - Understand the basic concepts of Flexbox.
  - Differentiate between inline and block elements.
- **Teaching Ideas**:

  - Explain the basic concepts of Flexbox and its benefits for creating responsive layouts:

    ```css
    .container {
      display: flex;
    }
    .item {
      flex: 1;
    }
    ```

  - Demonstrate how to create a Flexbox container and use basic Flexbox properties:

    ```html
    <div class="container">
      <div class="item">Item 1</div>
      <div class="item">Item 2</div>
      <div class="item">Item 3</div>
    </div>
    ```

  - Explain the differences between inline and block elements:
    - **Inline elements** do not start on a new line and only take up as much width as necessary.
    - **Block elements** start on a new line and take up the full width available.
  - Provide examples of common inline and block elements:

    ```html
    <!-- Inline Elements -->
    <span>This is an inline element</span>
    <a href="#">This is an inline element</a>

    <!-- Block Elements -->
    <div>This is a block element</div>
    <p>This is a block element</p>
    ```

### Hour 2: Advanced Form Techniques

- **Objectives**:
  - Learn advanced form techniques.
  - Create complex form layouts using Flexbox.
- **Teaching Ideas**:

  - Demonstrate how to add validation, placeholder text, and autofocus to form elements:

    ```html
    <form>
      <label for="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Enter your email"
        required
        autofocus
      /><br />

      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Enter your password"
        required
      /><br />

      <input
        type="submit"
        value="Submit"
      />
    </form>
    ```

  - Show how to create complex form layouts using Flexbox:

    ```html
    <form class="flex-form">
      <div class="form-group">
        <label for="first-name">First Name:</label>
        <input
          type="text"
          id="first-name"
          name="first-name"
        />
      </div>
      <div class="form-group">
        <label for="last-name">Last Name:</label>
        <input
          type="text"
          id="last-name"
          name="last-name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
        />
      </div>
      <input
        type="submit"
        value="Submit"
      />
    </form>
    ```

    ```css
    .flex-form {
      display: flex;
      flex-wrap: wrap;
    }
    .form-group {
      flex: 1 1 200px;
      margin: 10px;
    }
    .form-group label {
      display: block;
      margin-bottom: 5px;
    }
    .form-group input {
      width: 100%;
      padding: 8px;
      box-sizing: border-box;
    }
    ```

## Code Snippets

```css
/* Basic Flexbox Concepts */
.container {
  display: flex;
}
.item {
  flex: 1;
}

/* Inline vs. Block Elements */
/* Inline Elements */
span {
  color: blue;
}
a {
  text-decoration: none;
}

/* Block Elements */
div {
  background-color: lightgray;
}
p {
  font-size: 16px;
}

/* Advanced Form Techniques */
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
input[type='submit'] {
  background: #333333;
  color: white;
  border: 0;
  padding: 1em;
  border-radius: 1em;
}
.flex-form {
  display: flex;
  flex-wrap: wrap;
}
.form-group {
  flex: 1 1 200px;
  margin: 10px;
}
.form-group label {
  display: block;
  margin-bottom: 5px;
}
.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
```
