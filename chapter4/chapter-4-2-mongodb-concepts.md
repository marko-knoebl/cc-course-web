# mongoDB concepts

## structure / hierarchy

- database
  - collection (table in other databases)
    - document (row / record in other databases)
      - field

## data types

- numbers
  - int (32 bit) / long (64 bit)
  - double (64 bit floating point)
- bool
- string
- date (date + time)
- array
- object
- null

full list: https://www.mongodb.com/docs/manual/reference/bson-types/

## IDs

each document automatically gets a unique ID field

```js
country = {
  _id: ObjectId("5e715e1b31315b0be066db84"),
  name: "Argentina",
  continent: "South America",
};
```
