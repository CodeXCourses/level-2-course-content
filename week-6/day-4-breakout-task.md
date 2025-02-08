# Task: Data Transformation and Display

## Objective

- Practice using `.map()`, `.filter()`, and `.reduce()` for data transformation.
- Dynamically render data on a web page using JavaScript.
- Gain experience building interactive dashboards with transformed data.

---

## Instructions

### Part 1: Data Transformation with JavaScript

1. **Working with Sample Data**:

   - Use the following sample dataset in your JavaScript file:

     ```javascript
     const products = [
       { id: 1, name: "Laptop", price: 1200, category: "Electronics" },
       { id: 2, name: "Phone", price: 800, category: "Electronics" },
       { id: 3, name: "Shoes", price: 120, category: "Clothing" },
       { id: 4, name: "Watch", price: 150, category: "Accessories" },
       { id: 5, name: "Headphones", price: 200, category: "Electronics" },
     ];
     ```

2. **Transform the Data**:

   - Use `.map()` to create a new array of product names.
   - Use `.filter()` to create an array of products priced over $500.
   - Use `.reduce()` to calculate the total price of all products.

3. **Console Logging**:

   - Log the transformed data (`product names`, `filtered products`, `total price`) to the console.

---

### Part 2: Dynamic HTML Rendering

1. **Set Up HTML**:

   - Create an `index.html` file with:
     - A `div` to display product details.
     - A `button` to trigger the rendering of the transformed data.

2. **Render Transformed Data**:

   - Write a function `renderProducts(products)` in your JavaScript file.
   - Dynamically create and append HTML elements to display the product names and prices on the page.

3. **Interactive Button**:

   - Add an event listener to the button so that clicking it triggers the rendering of the data.

---

### Part 3: Sorting and Grouping

1. **Sorting the Data**:

   - Sort the products by price in descending order using `.sort()`.

2. **Grouping the Data**:

   - Group the products by category into an object using `.reduce()`.

   - The result should look like this:

     ```javascript
     {
       Electronics: [...],
       Clothing: [...],
       Accessories: [...],
     }
     ```

3. **Log Results**:

   - Log the sorted and grouped data to the console.

---

### Note

> Tasks are not graded but should be treated as an assignment. These are for practice and understanding.
