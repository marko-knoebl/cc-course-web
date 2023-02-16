# APIs and synchronizing with effects

https://beta.reactjs.org/learn/synchronizing-with-effects

# Example: Manually triggering loading

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

# Example: automatically triggering loading when some state changes

```js
const [searchTerm, setSearchTerm] = useState("");

// status could be "loading" / "success" / "error"
const [status, setStatus] = useState("loading");
const [data, setData] = useState(null);

useEffect(() => {
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
  loadData();
}, [searchTerm]);
```
