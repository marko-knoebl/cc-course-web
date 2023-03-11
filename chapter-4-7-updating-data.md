# Updating data

mongodb: updating some countries:

```js
async function updateSomeCountries() {
  await countries.updateOne(
    { name: "Argentina" },
    { $set: { continent: "S. America" } }
  );
  await countries.updateOne(
    { name: "Brazil" },
    { $set: { continent: "S. America" } }
  );
}
```

mongoose: updating some countries (option 1):

```js
async function updateSomeCountries() {
  await Country.updateOne(
    { name: "Argentina" },
    { $set: { continent: "S. America" } }
  );
  await Country.updateOne(
    { name: "Brazil" },
    { $set: { continent: "S. America" } }
  );
}
```

mongoose: updating some countries (option 2):

```js
async function updateSomeCountries() {
  const argentina = await Country.findOne({ name: "Argentina" });
  argentina.continent = "S. America";
  await argentina.save();

  const brazil = await Country.findOne({ name: "Brazil" });
  brazil.continent = "S. America";
  await brazil.save();
}
```

the second option in mongoose can be more convenient when using a "middleware" in express (we will get to that in chapter 5)
