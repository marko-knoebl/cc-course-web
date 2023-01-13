# Fetch and asynchronous JavaScript

sending HTTP requests from JavaScript:

```js
async function fetchTodos() {
  // request a URL and wait for the response header to arrive
  const res = await fetch("https://jsonplaceholder.com/todos");
  // read the response body as JSON (as soon as it has arrived)
  const data = await res.json();
  return data;
}
```
