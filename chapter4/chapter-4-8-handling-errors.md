# Handling errors

There's always the possibility for database operations to fail (for various reasons)

typical error handling in a backend with express and mongodb:

```js
app.get("/countries", async (req, res) => {
  try {
    const data = await countries.find({}).toArray();
    res.json(data);
  } catch (e) {
    console.log(e);
    res.status(500);
    res.send();
  }
});
```
