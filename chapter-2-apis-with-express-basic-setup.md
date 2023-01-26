# APIs with express: basic setup of a project

## create package.json

create a _package.json_ file which will contain configuration:

option 1: create the file manually and insert the string `{}` into it

option 2: initialize the file with some default values automatically (default values may not be so useful): `npm init -y`

## install dependencies

```bash
npm install express
npm install nodemon
```

## set up scripts

in package.json:

add a script for starting the server during development (with automatic reloads)

add a script for starting the server in "production"

```json
{
  "scripts": {
    "dev": "nodemon server.js",
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "nodemon": "^2.0.20"
  }
}
```

you can run these scripts from the console via:

```bash
npm run dev
```

```bash
npm run start
```

## set up a minimal server

```js
// server.js

const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.listen(9000);
```
