# Express middleware

## Middleware concept

minimal architechture of an express app:

request --> request handler function --> response

extended architecture:

request --> middleware function 1 --> middleware function 2 --> ... --> request handler function --> response

## Code example

```js
// MIDDLEWARE

// log all API accesses with IP adress and date
app.use("/api", logger);
// allow Cross-Origin access
app.use("/api", allowCors);
// if the request contains a body whose type is JSON,
//   parse the body and store it as req.body
app.use("/api", express.json());
// for requests to any endpoint under /api/admin,
//   the user must be logged in and have admin rights
app.use("/api/admin", requireAdminRights);
// ...

// ACTUAL ENDPOINTS

app.get("/api/todos", (req, res) => {
  // ...
});
app.post("/api/admin/resetDatabase", (req, res) => {
  // ...
});
```

## Writing middleware

example: logging every request

```js
function logger(req, res, next) {
  const date = new Date().toISOString();
  const ip = req.ip;
  console.log(`Access on ${date} from ${ip}`);
  next();
}
```

example: allowing cross-origin access

```js
function allowCors(req, res, next) {
  // allow API calls from any website
  res.header("Access-Control-Allow-Origin", "*");
  next();
}
```

example: requiring admin rights

```js
function requireAdminRights(req, res, next) {
  // ... (check for logged in status and admin rights here)

  if (isAdmin) {
    // go to the next middleware / response function
    next();
  } else {
    res.status(403);
    res.send();
    // DON'T go to the next step (don't call next())
  }
}
```

## Middleware from libraries

whenever possible, you should use middleware from existing libraries instead of writing your own

example middleware from libraries:

- `express.json()`: for parsing a _request body_ as JSON
- _cors_: npm package
- _morgan_: npm package for logging
- _compression_: npm package
- [list of packages on expressjs.com](https://expressjs.com/en/resources/middleware.html)
