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

no task changes

## Sort by name

this task was already covered by "Extend the list with arrangement features" - there's nothing more to do here :)

## Extra task (optional): handle errors

If an operation fails (e.g. creating a new employee), show an error message to the user
