# Day 1: Introduction to APIs

Welcome to Day 1 of Week 5! Today, we will get an overview of APIs, set up collections and variables in Postman, and explore the Pokémon API.

## Objectives

- Understand what APIs are and their importance.
- Learn how to set up collections and variables in Postman.
- Explore the Pokémon API using Postman.

## Instructor Notes

### Overview of APIs

- Explain what APIs are:
  - API stands for Application Programming Interface.
  - APIs allow different software applications to communicate with each other.
  - They define methods and data formats for interactions between systems.
- Discuss the importance of APIs:
  - Enable integration of different systems.
  - Facilitate access to data and services.
  - Enhance functionality and user experience.

### Setting Up Collections and Variables in Postman

- Introduce Postman:
  - A popular tool for testing and interacting with APIs.
  - Provides an easy-to-use interface for making API requests and analyzing responses.
- Demonstrate how to set up collections in Postman:
  - Collections help organize API requests into groups.
  - Show how to create a new collection and add requests to it.
- Explain the use of variables in Postman:
  - Variables store values that can be reused across multiple requests.
  - Show how to create and use environment and global variables.

### Exploring the Pokémon API

- Introduce the Pokémon API:
  - A free API providing data about Pokémon.
  - Documentation: https://pokeapi.co/docs/v2
- Demonstrate how to use Postman to explore the Pokémon API:

  - Show how to make a GET request to retrieve Pokémon data.
  - Example: Get details of a specific Pokémon

    ```json
    GET https://pokeapi.co/api/v2/pokemon/{id or name}
    ```

  - Show how to use variables to make requests dynamic.

## Hourly Breakdown

### Hour 1: Overview of APIs and Setting Up Postman

- **Objectives**:
  - Understand what APIs are and their importance.
  - Learn how to set up collections and variables in Postman.
- **Teaching Ideas**:
  - Explain what APIs are and why they are important.
  - Introduce Postman and demonstrate its interface.
  - Show how to create a new collection in Postman:
    - Click on "New" -> "Collection".
    - Name the collection (e.g., "Pokémon API").
    - Add a description if desired.
  - Show how to add a request to the collection:
    - Click on "Add Request".
    - Set the request type to GET.
    - Enter the request URL (e.g., `https://pokeapi.co/api/v2/pokemon/pikachu`).
    - Save the request to the collection.
  - Explain and demonstrate the use of variables in Postman:
    - Click on "Manage Environments".
    - Create a new environment (e.g., "Pokémon Environment").
    - Add variables (e.g., `base_url` = `https://pokeapi.co/api/v2`, `pokemon_name` = `pikachu`).
    - Use variables in requests (e.g., `{{base_url}}/pokemon/{{pokemon_name}}`).

### Hour 2: Exploring the Pokémon API

- **Objectives**:
  - Explore the Pokémon API using Postman.
- **Teaching Ideas**:

  - Introduce the Pokémon API and its documentation.
  - Demonstrate how to make a GET request to retrieve Pokémon data:

    - Example: Get details of Pikachu

      ```json
      GET https://pokeapi.co/api/v2/pokemon/pikachu
      ```

  - Show how to use variables to make requests dynamic:
    - Replace hardcoded values with variables (e.g., `{{base_url}}/pokemon/{{pokemon_name}}`).
    - Test with different Pokémon names or IDs.
  - Encourage students to explore other endpoints of the Pokémon API:

    - Example: Get a list of Pokémon

      ```json
      GET https://pokeapi.co/api/v2/pokemon

      ```

    - Example: Get details of a specific type

      ```json
      GET https://pokeapi.co/api/v2/type/{id or name}
      ```

## Code Snippets

```json
// Example of a GET request to retrieve Pokémon data
GET https://pokeapi.co/api/v2/pokemon/pikachu

// Example of using variables in a request URL
GET {{base_url}}/pokemon/{{pokemon_name}}
```
