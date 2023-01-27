# Teamwork: Pizza

## Implementation hints

you can store all data in files named _pizzas.json_, _allergens.json_, _orders.json_

try to have a uniform endpoint naming convention: either have _/pizzas_, _/allergens_, _/orders_ or _/pizza_, _/allergen_, _/order_

Try to split your tasks inside your team so every team member has to do a variety of tasks: e.g. if one member implements the _PUT_ request for orders, another team member could implement the _DELETE_ request for orders

## Reduced tasks

the important part of this project is the API, not the UI

We will learn more about creating UIs when we get to React

For this task, you can ignore the tasks "Pizza list UI" and "Pizza order UX" - or just do a very basic implementation of them

## Added tasks / requirements

Instead of `require`, use `import` and `export` in all your JavaScript (do your own research on how to use them in node)

Work with GitHub issues to track your progress in this task

Implement at least some changes via _branches_

To learn more about creating APIs, implement **all** of these endpoints:

- `/api/pizzas`
- `/api/pizzas/1`
- `/api/pizza-search?name=marinara`
- `/api/pizza-search?avoid-allergen=1`
- `/api/allergens`
- `/api/allergens/1`
- `/api/orders` GET
- `/api/orders/1` GET
- `/api/orders` POST
- `/api/orders/1` PUT
- `/api/orders/1` DELETE

## Optional tasks

implement more endpoints:

- `/api/pizza-search?max-price=14&avoid-allergen=1`
- `/api/pizza-search?avoid-allergen-by-name=gluten`
- `/api/order-suggestion?max-budget=60` (suggest an array of "random" pizzas to order based on a given maximum budget (e.g. 60€))
- ... (come up with your own ideas)

in your presentation, tell us a little about HTTP and REST APIs
