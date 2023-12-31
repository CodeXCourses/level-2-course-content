## Assignment: JS3 Day 2 - Weather Conditions Class and Extension

### Objective

Create a JavaScript class to represent general weather conditions and then extend it to display specific weather conditions for a day. This exercise aims to strengthen your understanding of ES6 class syntax, especially inheritance and method overriding.

### Instructions

#### Part 1: Create the Base Weather Class

- **Initialize Your Repository**:

  - Create a new repository named `weather-conditions`.
  - Add an `index.html` file and a `script.js` file.

- **Build the Weather Class**:
  - In `script.js`, define a class called `Weather`.
  - The `Weather` class should have properties for temperature, precipitation, and description.
  - Include a method in `Weather` to display general weather conditions.

#### Part 2: Extend the Weather Class

- **Create a Specific Day Weather Class**:

  - Define a class `DayWeather` that extends the `Weather` class.
  - `DayWeather` should include additional properties or methods to represent specific conditions for a particular day (e.g., day of the week, special weather alerts).

- **Implement Method Overriding**:
  - Override the display method in `DayWeather` to include the additional information specific to the day.

#### Part 3: Instantiate and Test Classes

- **Create Instances**:

  - Instantiate the `Weather` class to represent general conditions.
  - Instantiate the `DayWeather` class for a specific day's conditions.

- **Display Weather Information**:
  - Call the display methods on both instances and ensure they output relevant information to the console or the web page.

#### Part 4: Documentation and Deployment

- **Document Your Work**:

  - In the `README.md` of your repository, document the purpose of each class and how they are related.
  - Include examples of the output from your display methods.

- **Deploy Your Work**:

  - Push your changes to GitHub.
  - Deploy your project using GitHub Pages or a similar platform.

- **Submit Your Assignment**:
  - Submit the URL link to your GitHub repository and the live site as your assignment submission.

### Rubric

#### Class Implementation and Inheritance - /10

- Complete (10 pts): Both `Weather` and `DayWeather` classes are correctly implemented with inheritance and method overriding.
- Partial (5 pts): Classes are implemented but lack proper inheritance or method overriding details.
- Limited (0 pts): Incomplete implementation of classes or missing key OOP concepts.

#### Functionality and Creativity - /5

- Complete (5 pts): The classes effectively represent weather conditions with creative additional features or methods.
- Partial (2 pts): Basic representation of weather conditions with minimal additional features.
- Limited (0 pts): Poor or non-functional implementation of weather representation.

#### Documentation and Code Quality - /5

- Complete (5 pts): Excellent documentation in `README.md` and well-structured, commented code.
- Partial (2 pts): Basic documentation and code structure with some areas lacking clarity.
- Limited (0 pts): Poor documentation, disorganized or uncommented code.
