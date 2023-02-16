# Fetch and asynchronous JavaScript

sending HTTP requests from JavaScript:

```js
async function fetchTodos() {
  // request a URL and wait for the response header to arrive
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  // read the response body as JSON (as soon as it has arrived)
  const data = await res.json();
  return data;
}
```

additional request configuration (method, headers):

```js
const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify(someData),
  headers: {
    Authentication: "Bearer a45fc...",
    "Content-Type": "application/json",
  },
});
```
