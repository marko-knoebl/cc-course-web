# Exercise notes: package manager API

## fileReaderAsync

There's a file named _fileReader.js_ in the code.

I would suggest ignoring it: You can just use _node_'s built-in functions - from "fs" or "fs/promises":

You can use the synchronous versions:

```js
const fs = require("fs");

// ...

fs.readFileSync(...);
fs.writeFileSync(...);
```

or the asynchronous versions from "fs/promises":

```js
const fs = require("fs/promises");

// ...

await fs.readFile(...);
await fs.writeFile(...);
```

## Research

extra task: do some research on these functions which are used in the code and find out why they are needed:

- `express.json()`
- `express.urlencoded()`
- `cors()`
