# Exercise notes: Employee madness

## Changed task: Extend the list with filter features

Create two separate fields for _position_ and _level_ - you can use either text fields or dropdowns

## Changed task: Extend the list with arrangement features

You **don't** have to add arrangement options for _first name_, _last name_ and _middle name_ - just using _name_ is enough

## Company equipment

no task changes

## The search

Instead of a format like _/employees/robert_ on the front-end, use _/employees?name=robert_ for the React Router URL

note: use `useSearchParams` from react-router to access the search parameter

## Employee attendance

the page should be under _/employees-missing_

## Which employee uses which equipment

no task changes

## Pagination

no task changes

## Favorite brand

If the task description on Journey is unclear, here it is in my words:

Add a favorite brand to each employee.

There should be a separate collection called "FavoriteBrand" with 3 predefined brands in it (e.g. "Acer", "Razer", "HP").

Each employee should have a field _favoriteBrand_ which references the ID of one of the brands. This should be populated randomly inside of _populate.js_.

When the employees are listed, you should display the _name_ of each brand (The _id_ of the brand would be rather simple to get, the _name_ now has to be looked up in the FavoriteBrand collection)

### Hints: looking up brand names

Possibilities for looking up brand names:

fetch all brands, and look up the information in JavaScript in the browser during rendering

OR

include the brand name information in the API response via the database query (via _populate_ in mongoose)

---

"original" results **without** `.populate()`:

```json
[
  {
    "_id": "ObjectId(...)",
    "name": "...",
    "level": "Junior",
    "favoriteBrand": "ObjectId(...)"
  },
  {
    "_id": "ObjectId(...)",
    "name": "...",
    "level": "Senior",
    "favoriteBrand": "ObjectId(...)"
  }
]
```

results **with** `.populate()`:

```json
[
  {
    "_id": "ObjectId(...)",
    "name": "...",
    "level": "Junior",
    "favoriteBrand": { "_id": "ObjectId(...)", "name": "Acer" }
  },
  {
    "_id": "ObjectId(...)",
    "name": "...",
    "level": "Senior",
    "favoriteBrand": { "_id": "ObjectId(...)", "name": "HP" }
  }
]
```

## Sort by name

this task was already covered by "Extend the list with arrangement features" - there's nothing more to do here :)

## Extra task (optional): handle errors

If an operation fails (e.g. creating a new employee), show an error message to the user
