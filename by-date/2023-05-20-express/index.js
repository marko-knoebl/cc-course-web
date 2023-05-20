// similar to import
const express = require("express");
const { usersRouter } = require("./routes/users");

// create an express server
const app = express();

// use "middleware" that parses JSON data for every request
app.use(express.json({ strict: false }));

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/about", (req, res) => {
  res.send("about page");
});
app.get("/time", (req, res) => {
  res.send(`the time is: ${new Date().toISOString()}`);
});

app.use("/users", usersRouter);

app.listen(3000);
