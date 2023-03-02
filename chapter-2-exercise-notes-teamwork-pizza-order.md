# Teamwork: Pizza

## Implementation hints

you can store all data in files named _pizzas.json_, _allergens.json_, _orders.json_

try to have a uniform endpoint naming convention: either have _/pizzas_, _/allergens_, _/orders_ or _/pizza_, _/allergen_, _/order_

Try to split your tasks inside your team so every team member has to do a variety of tasks: e.g. if one member implements the _PUT_ request for orders, another team member could implement the _DELETE_ request for orders

## Reduced tasks

the important part of this project is the API, not the UI

(advanced UIs are part of the topic "React")

For this task, you can ignore the tasks "Pizza list UI" and "Pizza order UX" - or just do a very basic implementation of them

## Added tasks / requirements

Work with GitHub issues to track your progress in this task

Implement at least some changes via _branches_

Create a deployment of your API - e.g. on _glitch.com_

To learn more about creating APIs, support **all** of these requests:

- `/api/pizzas`
- `/api/pizzas/1`
- `/api/pizzas?name=marinara`
- `/api/pizzas?avoid-allergens=1,4,7`
- `/api/pizzas?sort-ascending=price`
- `/api/pizzas?avoid-allergens=1&sort-ascending=price`
- `/api/allergens`
- `/api/allergens/1`
- `/api/orders`
- `/api/orders/1`
- `/api/orders` POST
- `/api/orders/1` PUT
- `/api/orders/1` PATCH
- `/api/orders/1` DELETE

## Optional tasks

implement more endpoints, e.g.:

- `/api/pizzas` POST
- `/api/pizzas/1` DELETE
- `/api/pizzas/1` PATCH
- `/api/pizzas?avoid-allergens-by-name=gluten,soy`
- `/api/order-suggestion?max-budget=60` (suggest an array of "random" pizzas to order based on a given maximum budget (e.g. 60€))
- ... (come up with your own ideas)

---

Instead of `require`, use the more modern `import` and `export` in your code (do your own research on how to use them in node)

Note: your team will need at least node version 13 to use `import` and `export`

---

in your presentation, tell us a little about HTTP and REST APIs
