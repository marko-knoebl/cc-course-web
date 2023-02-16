# Ignoring older requests

example: user is typing, for each change a new request is triggered:

_f_  
_fo_  
_foo_

problem: the responses may be received out of order

solution: cancel / ignore older requests

# Example: ignoring older requests (by using a "cleanup function")

```js
const [searchTerm, setSearchTerm] = useState("foo");

// status could be "loading" / "success" / "error"
const [status, setStatus] = useState("loading");
const [data, setData] = useState < any > null;

useEffect(() => {
  let ignore = false;
  async function loadData() {
    setStatus("loading");
    setData(null);
    const url = `/api/search/${searchTerm}`;
    try {
      const data = await fetchJson(url);
      if (!ignore) {
        setStatus("success");
        setData(data);
      }
    } catch {
      setStatus("error");
      setData(null);
    }
  }
  loadData();
  return () => {
    ignore = true;
  };
}, [searchTerm]);
```
