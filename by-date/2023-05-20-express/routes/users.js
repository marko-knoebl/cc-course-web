const express = require("express");
const fs = require("fs");

const usersRouter = new express.Router();

function readUsers() {
  const fileContent = fs.readFileSync("data/users.json", "utf-8");
  const userData = JSON.parse(fileContent);
  return userData;
}

// CRUD
// - read (GET)
// - create (POST)
// - update (PATCH, PUT)
// - delete (DELETE)

// read
usersRouter.get("/", (req, res) => {
  try {
    // read json file
    const userData = readUsers();
    res.json(userData);
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send();
  }
});

usersRouter.get("/stats", (req, res) => {
  try {
    // read json file
    const userData = readUsers();
    res.json({ numUsers: userData.length, backLink: "http://localhost:3000/" });
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send();
  }
});

// create
usersRouter.post("/", (req, res) => {
  // read data from the request (body)
  const newUser = req.body;

  try {
    const userData = readUsers();
    userData.push(newUser);
    const usersString = JSON.stringify(userData);
    fs.writeFileSync("data/users.json", usersString);
    res.json({ status: "success" });
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send();
  }
});

// // update
// usersRouter.patch();
// usersRouter.put();

// // delete
// usersRouter.delete();

// named export
exports.usersRouter = usersRouter;
