# Exercise: movie app

functionality:

- browsing movies
- viewing / adding comments

## Steps / parts

- movie database migration
- REST API
- React frontend

## Database migration

write a node script that can "migrate" / transform data from one database to another database

the script can be named _migrateDb.js_

The source data should be the default movie dataset from _mongoDb cloud_

step 1: migrate movies

only process movies that meet these criteria:

- the _poster_ field must exist
- the _type_ field must be "movie" (not "series")
- the _imdb.rating_ field must be at least 8.5

go through the movies in small batches (e.g. of size 10) and insert them into a new database, named "cinema" under a new collection name: "films"

the structure should transform from this:

- movies
  - \_id
  - title
  - plot
  - genres
  - runtime
  - year
  - imdb
    - rating
  - poster
  - ...

to a different format, e.g.:

- films
  - \_id (should be kept as the same ID as in the previous database)
  - name
  - plot
  - genres
  - duration
  - year
  - imdbRating
  - poster

step 2: migrate comments

Go through all movies in the new database, find associated comments in the old database, and migrate those comments. Keep the same data format in the new database

note: with the options above, you should get 148 films and 2918 comments in the new database

step 3 (optional): migrate more movies and comments

If you have successfully migrated the movies with rating >= 8.5, you can try migrating more movies: Try a lower rating and see how many you can migrate

## REST API

Create a REST API for movies (GET requests): they should be searchable by various criteria, e.g. title, genre, ...

- _/api/movies_
- _/api/movies/id_
- _/api/movies?year=2000_
- _/api/movies?title=foo_
- ...

each query should be limited to return at most 20 results

_extra task_: you _can_ implement _pagination_ to make more results available

Create a REST API for comments: they should be available by movieId, e.g.:

- _/api/comments_
- _/api/comments/id_
- _/api/comments?movieId=2e4239a31cd_
- _/api/comments_ POST
- ...

## React frontend

A user can search for movies by specifying various criteria, e.g. title, genre, ...

When searching for movies, the title and a movie poster are displayed

A user can select a movie to display details about it: e.g. year, duration, plot, genres

When displaying the detail view of a movie, associated comments are also displayed

End users should be able to create new comments for a movie

## Extras

instead of displaying everything on one page, use _react router_ to create multiple views

## Notes

For inspiration / React starter code, you can look at _exercise 12_ of the React exercise book ([solution of exercise 12](https://codesandbox.io/s/u5sifc?file=/src/App.jsx))

You _don't_ have to include a movie player - you can just include a placeholder

Some images will not exist - they are probably outdated - you can just show a blank space where the image would be.
