# Exercise notes: Employee madness

## Modified tasks: different React routes

the task description and starter code use React routes like these:

- /
- /update/:id
- /create
- /employees/searchterm
- /missing
- /equipment
- /brands

instead, use React routes like these for improved structure:

- /employees
- /employees/create (creation form)
- /employees/update/:id (edit form)
- /employees?name=foo
- /employees?sortBy=name (ascending sort)
- /employees?sortBy=-name (descending sort)
- /employees/missing or /employees-missing or just /employees?missing=true
- /equipment
- /brands

## Extra task: refactor (optional)

- optional: change the backend code so it uses _import_ / _export_ instead of _require_
- optional: change the frontend code so it uses _async_ / _await_ instead of _.then_
- optional: pick clearer names instead of _EmployeeList_ and _EmployeeTable_

## Changed task: Extend the list with filter features

Create two separate fields for _position_ and _level_ - you can use either text fields or dropdowns

## Changed task: Extend the list with arrangement features

You **don't** have to add arrangement options for _first name_, _last name_ and _middle name_ - just using _name_ is enough

## Company equipment

no task changes

## The search

Instead of a format like _/employees/robert_, use _/employees?name=robert_ for the URL

note: use `useSearchParams` from react-router to access the search parameter

## Employee attendance

the page should be under _/employees-missing_

## Which employee uses which equipment

no task changes

## Pagination

no task changes

## Favorite brand

no task changes

## Sort by name

this task was already covered by "Extend the list with arrangement features" - there's nothing more to do here :)
