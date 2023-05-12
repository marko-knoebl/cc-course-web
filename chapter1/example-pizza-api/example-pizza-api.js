const BASE_URL = "https://young-berry-chiller.glitch.me";

async function fetchPizzaList() {
  // res = HTTP response
  //   status code (e.g. 404 (not found), 403 (forbidden), 200 (ok), ...)
  //   headers (e.g. content type, date, ...)
  //   body
  const res = await fetch(`${BASE_URL}/api/pizzas`);
  // wait for and parse the "body"
  const data = await res.json();
  console.log(data);
  return data;
}

async function fetchOnePizza() {
  const res = await fetch(`${BASE_URL}/api/pizzas/1`);
  const data = await res.json();
  console.log(data);
  return data;
}

async function fetchPizzaQuery() {
  const maxPrice = 10;
  const sortAsc = "name";

  const query = new URLSearchParams({
    "max-price": maxPrice,
    "sort-asc": sortAsc,
  }).toString();

  const res = await fetch(`${BASE_URL}/api/pizzas?${query}`);
  const data = await res.json();
  console.log(data);
  return data;
}

async function addNewPizza() {
  const newPizza = { name: "test", ingredients: [], price: 12, allergens: [] };

  const res = await fetch(`${BASE_URL}/api/pizzas`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPizza),
  });
  const data = await res.json();
  console.log(data);
  return data
}

//fetchPizzaList();
//fetchOnePizza();
//fetchPizzaQuery();
addNewPizza();
