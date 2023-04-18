# Finance manager app

Create an app which can help with tracking one's personal finances (income and expenses)

The UI should be implemented in React and should connect to a REST API

## Features

features for version 1.0 (required):

- Users can create transactions (income or expenses) with: amount, date, description, category - via a form
- Users can see a list of all transactions
- Negative and positive amounts are displayed with a different style (e.g. red and green)
- Users can sort the list by the date or amount (sorting should happen on the backend)
- Users can edit and delete transactions
- The app should be deployed on the web

optional features:

- Instead of loading all transactions at once, implement "pagination" - where users can step through "pages" of 10 transactions per page (this requires additional functionality in the API)
- Users can create new categories
- Users can see statistical numbers (e.g. sum of all expenses, sum of all income)
- Users can visualize some statistics (e.g. a graph that shows the account balance over time, a pie chart that shows expenses by category)

## transaction / category data

each transaction should contain at least:

- id
- amount (can be positive or negative)
- date
- description
- category id

each category should contain at least:

- id
- name
- color

possible categories:

- default
- income
- groceries
- restaurants and bars
- shopping
- ...

## API endpoints

example API calls:

- /api/transactions
- /api/transactions?sortAscending=date
- /api/transactions?type=expense&sortDescending=date
- /api/transactions?type=income&sortAscending=amount
- /api/transactions?category=groceries&sortDescending=amount
- /api/transactions?offset=20&limit=10 (implementation of "pagination")
- /api/transactions/1
- /api/transactions POST
- /api/transactions/1 DELETE
- /api/transactions/1 PUT
- /api/transactions/1 PATCH
- /api/categories
- ...

## Libraries

you can use component libraries in your project (e.g. MUI, or a _chart_ library for data visualization)

## TypeScript

You _may_ decide to support TypeScript in your front-end code (I would not recommend it for the back-end express code).

_If_ you want to use TypeScript, please allow for some parts of the app to still be in JavaScript - for those developers who don't know TypeScript.

You can do that via the file _tsconfig.json_: set _allowJs_ to _true_

## Developer / onboarding documentation

When working in a team of developers, team members will sometimes join or leave, and it's a good practice to have relevant information for developers written down.

You can write up some developer documentation in a file named _CONTRIBUTING.md_ or _DEVELOP.md_ in the repository - this can be helpful for onboarding new developers in the future.

things you can mention in the developer documentation:

- folder structure of the project
- how to set up the project for development (where to run npm install, how to start the development server(s))
- development conventions (e.g. formatting)
