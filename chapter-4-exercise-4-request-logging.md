# Exercise: request logging

topics: _express middleware_, _mongodb_

## Background materials

read through [chapter-2-topic-3-express-middleware.md](chapter-2-topic-3-express-middleware.md)

## Task 0: database and API

for this task, you need an existing database and API - for example: _todos_, _finance_, _pizza_

## Task 1: log requests

create middleware in one of your express APIs and store _logs_ about API requests in a database collection

the collection should be called _logs_

you can log the date, IP adress, requested URL, ...

## Task 2: limit number of log entries

Only log the last 20 requests. Before adding another request to the log, check if there are already 20, and make room by deleting the oldest if necessary

Question (send the answer to Marko in Discord): _reading_, _writing_ and _deleting_ are all asynchronous in mongodb. What problem could happen if two new log events happen at basically the same time?

## Task 3: make access statistics available in the API

query: how many API queries were there in the last 10 minutes?

request:

`/api/access-stats?timeframe=10`

response:

```json
{ "number": 12 }
```
