import { useEffect, useState } from "react";

// data loader function
async function fetchRate(from, to) {
  const res = await fetch(
    `https://api.exchangerate.host/convert?from=${from}&to=${to}`
  );
  const data = await res.json();
  return data.result;
}

// React component
export default function ExchangeRate() {
  const [from, setFrom] = useState("eur");
  const [to, setTo] = useState("usd");

  const [status, setStatus] = useState("");
  const [rate, setRate] = useState(null);

  async function loadRate() {
    setRate(null);
    setStatus("loading");
    const newRate = await fetchRate(from, to);
    if (newRate === null) {
      setStatus("error");
    } else {
      setStatus("success");
    }
    setRate(newRate);
  }

  useEffect(() => {
    loadRate();
  }, [from, to]);

  return (
    <div>
      <button
        onClick={() => {
          setFrom("usd");
          setTo("eur");
        }}
      >
        reset
      </button>
      <input value={from} onChange={(event) => setFrom(event.target.value)} />
      <input value={to} onChange={(event) => setTo(event.target.value)} />
      <button onClick={loadRate}>load rate</button>
      <div>{status}</div>
      <div>{rate}</div>
    </div>
  );
}
