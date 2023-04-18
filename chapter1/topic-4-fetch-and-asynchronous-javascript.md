# Fetch and asynchronous JavaScript

sending HTTP requests from JavaScript:

```js
async function fetchTodos() {
  // request a URL and wait for the response header to arrive
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  // check if the response status is ok (e.g. 200) {
  if (!res.ok) {
    throw new Error("Error while fetching", { cause: res });
  }
  // read the response body as JSON (as soon as it has arrived)
  const data = await res.json();
  return data;
}
```

additional request configuration (method, headers):

```js
async function fetchAddTodo(newTitle) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({ title: newTitle, completed: false }),
    headers: {
      "Content-Type": "application/json",
      Authentication: "Bearer a45fc...",
    },
  });

  // ...
}
```

note: the method (e.g. POST) **must** be uppercase
