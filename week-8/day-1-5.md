## Capstone Overview and Instructions

### Deployment and Submission

- Your application must be **deployed to GitHub Pages** (or a similar front-end hosting platform).
- You must **submit a link** to both your **live deployment** and your **project repository** (e.g., GitHub repo URL).

### Theme

- You may select any professional theme for your project (e-commerce, church/missionary, nonprofit organization, etc.). Although the theme is required for context, **it will not be graded**. Focus on meeting the technical requirements.

### Requirements

1. **AI-powered chat interface** using the Gemeni API or another approved AI service.
2. **Secure API usage** through a **proxy server** (we are front-end only, but you must not hardcode the API key in your client code).
3. **Semantic HTML** with ARIA attributes for accessibility.
4. **At least some Tailwind CSS** for styling, with an effort toward **responsive design**.
5. **JavaScript fundamentals** must be clearly demonstrated:
    - Custom function creation and invocation
    - Variable creation
    - An array of objects, looped over, rendering results to the DOM
6. **Presentation** (screen share) in an interview style. You should be prepared to:
    - Demonstrate the application (show how users interact with it).
    - Answer questions about your code and the concepts covered.
    - Explain **any** portion of the code you wrote. If you cannot explain it, you risk losing points.

---

## Rubric (Total: 100 Points)

#### 1. Project Setup and Deployment (10 points)

- Has a fully working application deployed on GitHub Pages (or another hosting service).
- Submission includes both the live deployment link and the GitHub repository link.
- The site contains sufficient information (e.g., hours of operation, product pricing, or organizational details).

To receive the full 10 points, **all** the above must be demonstrated.

#### 2. AI Chat Interface (15 points)

- Uses Gemeni (or another approved AI) for a chatbot.
- Chat output is rendered to the DOM (not just console).
- The chatbot can answer user questions relevant to the project’s theme.

To receive the full 15 points, **all** the above must be demonstrated.

#### 3. Proxy and Key Security (10 points)

- The API key is not visible in the front-end code.
- All API requests go through a proxy server, preventing direct exposure of the key.

To receive the full 10 points, **both** points must be confirmed.

#### 4. Semantic HTML and Accessibility (10 points)

- Appropriate semantic tags are used throughout (header, nav, main, footer, etc.).
- Relevant ARIA attributes (aria-label, role, etc.) are used to enhance accessibility.

To receive the full 10 points, **all** items must be addressed properly.

#### 5. Tailwind CSS and Responsiveness (10 points)

- Tailwind classes are present to style at least some elements.
- Layout does not break on smaller screens, and elements are reasonably responsive.

To receive the full 10 points, **both** items must be clearly demonstrated.

#### 6. JavaScript Fundamentals (30 points)

You must demonstrate all of the following:

1. Creating and invoking at least one custom function.
2. Creating variables and explaining their usage.
3. Creating an array of objects, looping over it, and rendering the results to the DOM (such as generating HTML elements).

All three sub-items must be fulfilled and explained to receive the full 30 points.

#### 7. Presentation and Code Explanation (15 points)

1. **Presentation Delivery** (10 points):
    
    - You screen-share your project, walk through its features, and show the chatbot in action.
2. **Code Explanation** (5 points):
    
    - You can explain how and why your code works.
    - Demonstrate knowledge of code you wrote (including any AI-assisted code).

Meeting _all_ of these presentation requirements awards the full 15 points.

---

## What to Expect During Your Interview-Style Presentation

1. **Live Demo**
    
    - Share your screen, walk through the webpage, highlight key features, and demonstrate the chatbot answering relevant questions.
2. **Q&A on Code**
    
    - Be prepared to show and explain your JavaScript (especially functions, loops, variables, and array handling).
    - Be ready to discuss how you integrated Tailwind, semantic HTML, and ARIA attributes.
    - Show how you keep the API key secure (through a proxy) and confirm it’s not in client code.
3. **Scoring**
    
    - Each category grants its full point value only if _all_ corresponding requirements are fully met.

---

## Final Tips

- **Plan thoroughly**. Make sure your chatbot’s responses align with your site’s content or business info.
- **Check responsiveness**. Resize your window or test on different devices.
- **Rehearse**. Practice explaining your code. Understanding is essential.
- **Ensure code security**. Double-check that the API key is never revealed in your front-end.
