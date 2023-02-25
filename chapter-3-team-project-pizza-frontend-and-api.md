# Team project: Pizza frontend and API

## Tasks

Main project: Create a React web app for searching for and ordering pizzas

Extra project: Create a React web app for the owners of the pizza place - for managing pizzas and orders - as a separate React project

The projects should connect to an existing back-end / API

### Detailed tasks

- Pizza search and adding to order
  - see a list of all pizzas
  - filter pizzas by name
  - filter pizzas by price
  - filter pizzas by avoiding 1 allergen (avoiding multiple allergens doesn't have to be supported)
  - sort pizzas by a certain criterion (e.g. price, name)
  - all filtering / sorting should happen on the back-end, not on the front-end
  - add a pizza to the active order (this can happen on the front-end, no back-end interaction necessary)
- reviewing and placing an order
  - see a list of all pizzas in the active order (on the front-end)
  - possibility to remove an item from the order (on the front-end)
  - fill out a form with delivery data (e.g. address) and submit it; the form should have some data validation (form data is sent to back-end)

<!-- sep -->

- optional: managing pizzas and orders
  - managing orders
    - possibility to see all orders
    - possibility to only see incomplete orders
    - possibility to mark an order as completed
  - possibility to add a new pizza via a "form"
    - specifying a name
    - specifying a price
    - specifying a list of ingredients
    - specifying allergens (via checkboxes)

## Guidelines

Don't use any component libraries - create all UI components by yourselves

Those students who are more familiar with APIs and _fetch_ should take care of these aspects of the application

The website(s) should only consist of a single page - e.g. the list of pizzas and the order previw / form should all be on one page; in chapter 5 you will learn how to show different "pages" via the "React Router"

## API and hosting

You can use this API for development:

- [hosted version](https://young-berry-chiller.glitch.me/)
- [code](https://github.com/marko-knoebl/cc-pizza-api)

Recommendation: Instead of relying on the hosted version, I would recommend cloning the repository and running the API locally at _localhost:3000_

## Project structure

possible structure of a React project:

- pizza-frontend-customer/
  - src/
    - config.js (contains configuration, e.g. `API_URL = "https://young-berry-chiller.glitch.me/"`)
    - App.jsx
    - components/ (general / reusable components)
      - Button.jsx
      - TextInput.jsx
      - ...
    - features/
      - pizzalist/
        - PizzaList.jsx
        - FilterForm.jsx
        - ...
      - order/
        - OrderList.jsx
        - AdressForm.jsx
        - ...
    - api/ (connects to the backend API via _fetch_ calls)
      - pizzas.js (_fetchPizzas_, _fetchPizza_, ...)
      - orders.js (_fetchPlaceOrder_)

## API communication functions

Implement API communication functions like these:

```js
const allPizzas = await fetchPizzas();
// all pizzas up to a certain price, sorted ascending by name
const filteredPizzas = await fetchPizzas({ maxPrice: 9.5, sortAsc: "name" });
```

```js
// send a post request for a new order
await fetchPlaceOrder({
  pizzas: [
    { id: 1, amount: 2 },
    { id: 2, amout: 1 },
  ],
  customer: { name: "John", email: "jd@example.com" },
  // ...
});
```
