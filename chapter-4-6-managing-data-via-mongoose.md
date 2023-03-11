# Managing data via mongoose

example code:

```js
import mongoose from "mongoose";

// note: this URL already contains the database name ("world")
const DB_URL = "mongodb+srv://admin:password@cluster0.xyz.mongodb.net/world";

mongoose.connect(DB_URL);

const Country = mongoose.model("Country", {
  name: String,
  continent: String,
});

async function deleteAllCountries() {
  await Country.deleteMany({});
}

async function insertSomeCountries() {
  await Country.create({ name: "Argentina", continent: "South America" });
  await Country.create({ name: "Brazil", continent: "South America" });
  await Country.create({ name: "Chile", continent: "South America" });
}

await deleteAllCountries();
await insertSomeCountries();
await mongoose.disconnect();
```
