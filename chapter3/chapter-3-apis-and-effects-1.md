# APIs and synchronizing with effects

## Example: Manually triggering an API query

an API query could be triggered when a user clicks a button

```js
const [searchTerm, setSearchTerm] = useState("");

// status could be "loading" / "success" / "error"
const [status, setStatus] = useState("loading");
const [data, setData] = useState(null);

// this function can be connected to a "search" button
async function loadData() {
  setStatus("loading");
  setData(null);
  const url = `/api/search/${searchTerm}`;
  try {
    const newData = await fetchJson(url);
    setStatus("success");
    setData(newData);
  } catch {
    setStatus("error");
    setData(null);
  }
}
```

## Exercises

try loading data from these endpoints and showing them in React:

exchange rates between currencies:

- https://api.exchangerate.host/convert?from=CURRENCY&to=CURRENCY

articles on "Hacker News":

https://hn.algolia.com/api/v1/search?query=SEARCHSTRING

todo items:

- https://jsonplaceholder.typicode.com/todos/TODO_ID

# useEffect

https://beta.reactjs.org/learn/synchronizing-with-effects

## Example: automatically triggering a query when some state changes

an API query could be triggered when a user types in an input field, selects a different entry in a dropdown, ...

using the _effect hook_:

```js
useEffect(
  () => {
    // this is the effect - the action that should
    // be triggered when a dependency changes
  },
  // array of dependencies
  [searchTerm]
);
```

example: 

```js
// this state is connected to an input field
const [searchTerm, setSearchTerm] = useState("");

// status could be "loading" / "success" / "error"
const [status, setStatus] = useState("loading");
const [data, setData] = useState(null);

useEffect(() => {
  // define an asynchronous data loading function
  async function loadData() {
    setStatus("loading");
    setData(null);
    const url = `/api/search/${searchTerm}`;
    try {
      const data = await fetchJson(url);
      setStatus("success");
      setData(data);
    } catch {
      setStatus("error");
      setData(null);
    }
  }
  // immediately call the function
  loadData();
}, [searchTerm]);
```
