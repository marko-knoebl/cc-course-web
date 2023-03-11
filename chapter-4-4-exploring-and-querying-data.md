# Exploring and querying data

in Atlas, click _browser collections_

## exploring "sample_mflix"

collections / "tables":

- comments
- movies
- sessions
- theaters
- users

example fields of a record / document:

- movies
  - \_id
  - title
  - runtime
  - year
  - released
  - cast
  - ...

## Queries

example filter query: movies from 2010 whose runtime is more than 3 hours

```mongodb
{ year: 2010, runtime: { $gt: 180 } }
```

## Tasks

explore some of the sample data with queries

you can explore these filter operators:

- _$lt_, _$gt_
- _$or_, _$and_
- _$regex_, _$options_

you can also use _sort_ options (in the _options_ dropdown)
