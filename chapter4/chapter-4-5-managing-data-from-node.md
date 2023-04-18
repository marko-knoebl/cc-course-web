# Managing data from node

example code:

```js
import { MongoClient } from "mongodb";

const DB_URL = "mongodb+srv://admin:password@cluster0.xyz.mongodb.net/";

const client = new MongoClient(DB_URL);
const database = client.db("world");

const countries = database.collection("countries");

async function deleteAllCountries() {
  await countries.deleteMany({});
}

async function insertSomeCountries() {
  await countries.insertOne({ name: "Argentina", continent: "South America" });
  await countries.insertOne({ name: "Brasil", continent: "South America" });
  await countries.insertOne({ name: "Chile", continent: "South America" });
}

await deleteAllCountries();
await insertSomeCountries();
await client.close();
```

note: you can get the DB_URL from Atlas: _cloud.mongodb.com > connect > connect your application
