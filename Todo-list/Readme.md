# Todo-list Application 

## Description 
This is only the backend for To-do list application.

# Features
- Create a new todo : create-todo/
- Delete a todo : delete-todo/todo-id
- Update a todo : update-todo/todo-id
- get a todo: get-todo/todo-id
- get all todos: get-todos/

# Input
- title, description, status
- Create a new todo : req.body contains a json with title,description,status
- Delete a todo : /delete-todo/:id  id - provide the id of the element to be deleted
- Update a todo : req.body contains a json with new title, description or status
- get a todo :  /get-todo/:id  id - provide the id of the element to be fetched 
- get all todo : no body, just a request, provide all lists

# Useage
- Clone the project
- Open the project in vs code and run command: node .\index.js
- Send requests using postman to get the results



