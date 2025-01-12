# Assignment: Introduction to APIs

## Objective

- Understand what APIs are and their importance.
- Learn how to set up collections and variables in Postman.
- Explore the Pokémon API using Postman.

## Instructions

### Part 1: Overview of APIs

1. **Understand APIs**:
   - Research and write a brief explanation of what APIs are and why they are important.

### Part 2: Setting Up Postman

1. **Set Up Postman**:

   - Download and install Postman from [Postman](https://www.postman.com/downloads/).

2. **Create a Collection**:

   - Open Postman and create a new collection named "Pokémon API".
   - Add a request to the collection with the following details:
     - Request Type: GET
     - Request URL: `https://pokeapi.co/api/v2/pokemon/pikachu`
     - Save the request to the "Pokémon API" collection.

3. **Create and Use Variables**:
   - Click on "Manage Environments" in Postman.
   - Create a new environment named "Pokémon Environment".
   - Add the following variables:
     - `base_url` = `https://pokeapi.co/api/v2`
     - `pokemon_name` = `pikachu`
   - Use the variables in your request URL: `{{base_url}}/pokemon/{{pokemon_name}}`

### Part 3: Exploring the Pokémon API

1. **Explore the Pokémon API**:

   - Use Postman to make a GET request to retrieve details of a specific Pokémon using the variables set up earlier.

2. **Experiment with Different Endpoints**:

   - Change the `pokemon_name` variable to different Pokémon names (e.g., `bulbasaur`, `charmander`) and make requests to see the different responses.

3. **Explore Additional Endpoints**:
   - Use Postman to explore other endpoints of the Pokémon API. For example:
     - Get a list of Pokémon: `{{base_url}}/pokemon`
     - Get details of a specific type: `{{base_url}}/type/1`

### Note

> Tasks are not graded but should be treated as an assignment. These are for practice an understanding
