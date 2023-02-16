example: sending data from the browser to an API:

```js
const data = { id: 11, name: "John Doe" };
const res = await fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  body: JSON.stringify(data),
  headers: { "Content-Type": "application/json" },
});
```
