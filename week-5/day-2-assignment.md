# Assignment: Introduction to APIs

## Objective

- Understand what APIs are and their importance.
- Learn how to set up collections and variables in Postman.
- Explore the Pokémon API using Postman.

## Instructions

### Part 1: Overview of APIs

1. **Understand APIs**:
   - Research and write a brief explanation of what APIs are and why they are important.
   - **Verification**: Include your explanation in a `README.md` file.

### Part 2: Setting Up Postman

1. **Set Up Postman**:

   - Download and install Postman from [Postman](https://www.postman.com/downloads/).
   - **Verification**: Take a screenshot of Postman installed on your computer.

2. **Create a Collection**:

   - Open Postman and create a new collection named "Pokémon API".
   - Add a request to the collection with the following details:
     - Request Type: GET
     - Request URL: `https://pokeapi.co/api/v2/pokemon/pikachu`
     - Save the request to the "Pokémon API" collection.
   - **Verification**: Take a screenshot showing the collection and the saved request in Postman.

3. **Create and Use Variables**:
   - Click on "Manage Environments" in Postman.
   - Create a new environment named "Pokémon Environment".
   - Add the following variables:
     - `base_url` = `https://pokeapi.co/api/v2`
     - `pokemon_name` = `pikachu`
   - Use the variables in your request URL: `{{base_url}}/pokemon/{{pokemon_name}}`
   - **Verification**: Take a screenshot showing the environment variables and the updated request URL in Postman.

### Part 3: Exploring the Pokémon API

1. **Explore the Pokémon API**:

   - Use Postman to make a GET request to retrieve details of a specific Pokémon using the variables set up earlier.
   - **Verification**: Take a screenshot of the response for the Pokémon data request.

2. **Experiment with Different Endpoints**:

   - Change the `pokemon_name` variable to different Pokémon names (e.g., `bulbasaur`, `charmander`) and make requests to see the different responses.
   - **Verification**: Take a screenshot of the response for at least two different Pokémon.

3. **Explore Additional Endpoints**:
   - Use Postman to explore other endpoints of the Pokémon API. For example:
     - Get a list of Pokémon: `{{base_url}}/pokemon`
     - Get details of a specific type: `{{base_url}}/type/1`
   - **Verification**: Take a screenshot of the response for each additional endpoint explored.

## Submission

- **GitHub Repository**: Create a repository named `pokemon-api-exploration` and push the following:
  - The `README.md` file with your explanation of APIs.
  - Screenshots of all steps executed.
- **Submission Link**: Submit the URL of your GitHub repository.

## Rubric

| Criteria                            | Limited (0 pts)                        | Partial (3 pts)                                 | Complete (5 pts)                                                    |
| ----------------------------------- | -------------------------------------- | ----------------------------------------------- | ------------------------------------------------------------------- |
| **Understanding APIs**              | Explanation missing or incorrect       | Explanation provided but lacks clarity          | Explanation provided and clear in `README.md` file                  |
| **Postman Setup**                   | Postman not installed or no screenshot | Postman installed but setup incomplete          | Postman installed and screenshot provided                           |
| **Collection and Request Creation** | Collection and request not created     | Collection created but request setup incomplete | Collection and request created correctly and screenshot provided    |
| **Using Variables in Postman**      | Variables not created or used          | Variables created but not used correctly        | Variables created and used correctly and screenshot provided        |
| **Exploring the Pokémon API**       | No exploration or incorrect requests   | Limited exploration with incomplete requests    | Thorough exploration with correct requests and screenshots provided |
