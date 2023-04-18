/*
routes:

x GET /todos
x GET /todos/1
x POST /todos
x DELETE /todos/1
x PUT /todos/1
PATCH /todos/1
x GET /todos?completed=false
x GET /todos?searchText=foo
*/

const express = require("express");
const fs = require("fs");

const app = express();
// automatically parse the body as json
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hi!");
});

app.get("/todos", (req, res) => {
  const todosString = fs.readFileSync("./todos.json");
  let todos = JSON.parse(todosString);

  // handle queries like "/todos?completed=true" or "/todos?completed=false"
  if (req.query.completed !== undefined) {
    // "true" / "false"
    const completed = JSON.parse(req.query.completed);
    todos = todos.filter((todo) => todo.completed === completed);
  }

  // GET /todos?searchText=foo
  if (req.query.searchText !== undefined) {
    const searchText = req.query.searchText;
    todos = todos.filter((todo) => todo.title.includes(searchText));
  }

  res.json(todos);
});

app.get("/todos/:id", (req, res) => {
  const todosString = fs.readFileSync("./todos.json");
  const todos = JSON.parse(todosString);
  const todo = todos.find((todo) => todo.id === parseInt(req.params.id));
  res.json(todo);
});

app.post("/todos", (req, res) => {
  const todosString = fs.readFileSync("./todos.json");
  const todos = JSON.parse(todosString);
  const newTodo = req.body;

  // new id
  let maxId = 0;
  for (let todo of todos) {
    if (todo.id > maxId) {
      maxId = todo.id;
    }
  }

  newTodo.id = maxId + 1;

  todos.unshift(newTodo);
  fs.writeFileSync("./todos.json", JSON.stringify(todos));
  res.json(todos);
});

app.delete("/todos/:id", (req, res) => {
  const todosString = fs.readFileSync("./todos.json");
  const todos = JSON.parse(todosString);

  const newTodos = todos.filter((todo) => todo.id !== parseInt(req.params.id));
  fs.writeFileSync("./todos.json", JSON.stringify(newTodos));
  res.json(newTodos);
});

app.put("/todos/:id", (req, res) => {
  const todosString = fs.readFileSync("./todos.json");
  const todos = JSON.parse(todosString);

  const todo = todos.filter((todo) => todo.id === parseInt(req.params.id))[0];
  todo.title = req.body.title;
  todo.id = parseInt(req.params.id);
  todo.completed = req.body.completed;

  fs.writeFileSync("./todos.json", JSON.stringify(todos));
  res.json(todos);
});

app.listen(3000);
