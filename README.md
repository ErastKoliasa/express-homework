# Express Homework

This application provides an API for user management, student statistics, and articles. It allows you to perform operations such as adding, updating, and deleting users, retrieving student statistics, and managing articles.

## Installation

Clone the repository:
```bash 
$ git clone https://github.com/ErastKoliasa/express-homework.git
```

Navigate to the project directory:
```bash 
$ cd express-homework
```

Install dependencies:
```bash 
$ npm install
```

Start the server:
```bash 
$ npm start
```

## API Routes:

### USER MANAGEMENT:
Get all users
* GET /users

Get a user by email
* GET /users/:email

Add a new user
* POST /users

Update a user by email
* PATCH /users/:email

Delete a user by email
* DELETE /users/:email

### STUDENT STATISTICS:
Get all students:
* GET /students

Get the worst score for a specific type:
* GET /students/worst-score/:type

### ARTICLES:
Get all articles:
* GET /articles

Add a new article:
* POST /articles

Update article tags:
* PUT /articles/:articleIndex/tags

## Testing:

Run the tests:
```bash 
$ npm test
```