const toSelect = document.querySelector("#to-select");
const result = document.querySelector("#result");

toSelect.addEventListener("change", () => {
  loadExchangeRate("usd", toSelect.value);
});

async function loadExchangeRate(from, to) {
  // e.g. from="usd", to="gbp"

  // wait for the response
  const res = await fetch(
    `https://api.exchangerate.host/convert?from=${from}&to=${to}`
  );
  // read the body as JSON
  const data = await res.json();

  result.innerText = `result: ${data.result}`;
}
