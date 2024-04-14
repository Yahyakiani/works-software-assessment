# Note-Taking App Backend Documentation

## Overview
Overview of the backend implementation of the Note-Taking App.

## Technology Stack
- **Node.js**: Runtime environment for the application.
- **Express**: Web application framework for creating API endpoints.
- **PostgreSQL**: Database to store and manage notes.
- **Jest**: Testing framework used for writing unit and integration tests.
- **Supertest**: Library for testing HTTP assertions.
- **Dotenv**: Module for loading environment variables from a `.env` file.

## Database Schema
The database schema consists of a single table to store notes. All the scripts for it are in the Database.sql file.

## API Endpoints
The API supports the following CRUD operations:

### Create a Note
- **Endpoint**: `POST /notes`
- **Description**: Adds a new note to the database.
- **Request Body**:
    ```json
    {
    "title": "Sample Title",
    "content": "Sample content"
    }
- **Response**:
    ```json
    {
    "id": 1,
    "title": "Sample Title",
    "content": "Sample content",
    "created_at": "timestamp",
    "updated_at": "timestamp"
    }

### Create a Note
- **Endpoint**: `GET /notes`
- **Description**: Retrieves all notes from the database.
- **Response**:
    ```json
    [
    {
        "id": 1,
        "title": "Sample Title",
        "content": "Sample content",
        "created_at": "timestamp",
        "updated_at": "timestamp"
    }
    ]



### Create a Note
- **Endpoint**: `PUT /notes/:id`
- **Description**: Updates an existing note based on its ID.
- **Request Body**:
    ```json
    {
    "title": "Updated Title",
    "content": "Updated content"
    }

- **Response**:
    ```json
    {
    "id": 1,
    "title": "Updated Title",
    "content": "Updated content",
    "created_at": "timestamp",
    "updated_at": "timestamp"
    }




### Create a Note
- **Endpoint**: `DELETE /notes/:id`
- **Description**: Deletes a note based on its ID.
- **Response**:
    ```json
    {
        "message": "Note deleted"
    }


## Api Testing
Api can be tested using **Postman** or any other API testing tool.

### Database Integration

- **Database:** PostgreSQL
- **Integration:** Used pg module for database operations.
- **Tables:**
  - **Notes:** Stores note entries with fields for id, title, content, created_at, and updated_at.

### Testing

- **Framework:** Jest
- **HTTP Testing:** Supertest
- **Test Cases:** Covered all CRUD operations and error handling scenarios.
- **Run Tests:** 
  
```bash
npm run test
```
#### Test Results

![All tests passing](tests.png)

### Environment Variables

- `DB_USER`: Database username
- `DB_PASSWORD`: Database password
- `DB_HOST`: Database host
- `DB_DATABASE`: Database name
- `DB_PORT`: Database port
- `PORT`: Port on which the server runs

### Challenges and Solutions

- **Challenge:** Ensuring the API supports concurrent requests effectively.
- **Solution:** Utilized async/await syntax and PostgreSQL's robust handling of concurrent transactions.




### Application Demo Video

Here is a video demonstration of the frontend working with the backend, showcasing all the functionalities:
![Demo Video](Demo.gif)


## Project File Structure

- `.env`: Environment variables for production
- `.env.example`: Template for setting up environment variables
- `.gitignore`: Specifies intentionally untracked files to ignore
- `Database.sql`: SQL scripts for setting up the database schema
- `Demo.gif`: Animated GIF showing a demo of the application
- `jest.config.js`: Configuration for the Jest testing framework
- `package-lock.json`: Automatically generated for any operations where npm modifies the node_modules tree
- `package.json`: Lists the project dependencies and defines scripts
- `README.md`: Detailed project documentation
- `tests.png`: Image showing passing tests
- `tree.log`: Log file from tree command, showing project structure
- `tsconfig.json`: TypeScript compiler configuration file

### src

- `app.ts`: Sets up Express application and middleware
- `index.ts`: Entry point for the application, connects to the database and listens on a port

#### tests

- `app.test.ts`: Contains Jest tests for the Express application

## Installation and Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/your-repo.git
    cd your-repo
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environment variables:
   Copy `.env.example` to `.env` and update the values accordingly.

4. Start the server:

    ```bash
    npm start
    ```

## Testing

Run tests using:

```bash
npm run test
