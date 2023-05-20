const { Router } = require("express");

const userData = ["adrian", "agata", "marko"];

const usersRouter = new Router();

// CRUD
// - read
// - create
// - update
// - delete

// read
usersRouter.get("/", (req, res) => {
  res.json(userData);
});

// create
usersRouter.post("/", (req, res) => {
  // read data from the request (body)
  const newUser = req.body;
  userData.push(newUser);
  res.json({ status: "success" });
});

// // update
// usersRouter.patch();
// usersRouter.put();

// // delete
// usersRouter.delete();

exports.usersRouter = usersRouter;
