## Assignment: JS3 Day 5 - Building an App

### Objective

Develop a simple weather application that utilizes a `Weather` class to structure data fetched from a weather API. The app will allow users to input a location (like a city name or zipcode) and display the corresponding weather information.

### Instructions

#### Part 1: Setup Your Project

- **Create a New Repository**:
  - Name your repository `simple-weather-app`.
  - Initialize it with `index.html`, `script.js`, and `style.css` files.

#### Part 2: Define the Weather Class

- **Create the Weather Class**:
  - In `script.js`, define a `Weather` class with a constructor that sets up properties such as temperature, description, and any other relevant data.
  - Include methods for processing and displaying weather data.

#### Part 3: Interface for Weather Data Input

- **Build a User Interface**:
  - In `index.html`, create a simple form that allows users to input a location (city or zipcode).
  - Add a button to submit the form and fetch weather data.

#### Part 4: Fetch and Display Weather Data

- **Integrate with a Weather API**:
  - Use a weather API like Weatherbit to fetch weather data based on user input.
  - Process the API response by creating an instance of your `Weather` class and display the data in a user-friendly format in your HTML.

#### Part 5: Styling and Testing

- **Style Your Application**:
  - Use `style.css` to style your weather app. Focus on creating a clean and readable layout.
- **Test Your Application**:
  - Ensure that your app correctly fetches and displays weather data based on user input.
  - Test for different locations to ensure the data updates correctly.

#### Part 6: Deployment and Submission

- **Deploy Your Weather App**:
  - Push your code to GitHub and deploy your project using GitHub Pages or a similar service.
- **Submit Your Assignment**:
  - Provide the URL link to your GitHub repository and the live deployment as your assignment submission.

### Rubric

#### Functionality and API Integration - /10

- Complete (10 pts): The app successfully fetches and displays weather data using a class-based approach. The API integration works correctly for different user inputs.
- Partial (5 pts): The app can fetch and display weather data but may have issues with handling different inputs or incomplete class implementation.
- Limited (0 pts): The app fails to fetch or display weather data correctly, or the class is not used appropriately.

#### User Interface and Experience - /5

- Complete (5 pts): The app has a well-designed and user-friendly interface. The layout is clean, and the weather data is displayed clearly.
- Partial (2 pts): The app has a basic interface with minimal styling. There may be some layout issues or unclear data presentation.
- Limited (0 pts): The app lacks an effective user interface, making it difficult to use or understand.

#### Code Quality and Documentation - /5

- Complete (5 pts): The code is well-organized, efficiently structured, and well-commented. The `Weather` class is implemented effectively.
- Partial (2 pts): The code functions but may lack organization or sufficient comments. The class structure needs improvement.
- Limited (0 pts): The code is poorly organized, inefficient, or lacks sufficient comments. The class is not used properly.
