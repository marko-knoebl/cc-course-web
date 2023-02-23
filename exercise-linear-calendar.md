# Linear calendar

## Data structure

minimum data for an event:

- id
- name / title
- start date and time
- category id

minimum data for a category:

- id
- name
- color (_could_ be randomly picked by the API when a new category is created)

There should be one category named _default_ which cannot be deleted

## API endpoints

- _/api/events_
- _/api/events/1_
- _/api/events?from=2023-03-01_ (only events on or later than this date)
- _/api/events?from=now_ (only future events)
- _/api/events?from=2023-03-01&to=2023-03-31_
- _/api/events?category=work&from=2023-03-01_
- _/api/events_ POST
- _/api/events/1_ PUT
- _/api/events/1_ PATCH
- _/api/events/1_ DELETE
- _/api/categories_
- _/api/categories/1_
- _/api/categories_ POST
- _/api/categories/1_ PUT
- _/api/categories/1_ PATCH
- _/api/categories/1_ DELETE

## optional: validation / errors

return some errors (with status codes) for invalid data / invalid queries:

e.g.:

when an event ID doesn't exist: _GET /api/events/666_ -> Error 404

when data of a new event is invalid: e.g. providing a start date of _2023-03-99_ -> Error 400

when trying to delete the _default_ category - which cannot be deleted: _DELETE /api/categories/1_ -> Error 403

## User interface (React)

- users can create, update and delete calendar entries
- calendar entries are shown in a linear fashion, underneath each other, sorted by date/time
- calendar entries can have different categories (e.g. "default", "work", "personal", ...)
- calendar entries are shown in different colors based on their categories
- users can add / edit / delete available calendar categories
- calendar entries can be shown / hidden based on their category
