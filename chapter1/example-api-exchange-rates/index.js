const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/";
const CURRENCIES = ["eur", "jpy", "gbp", "rub"];

const exchangeRateDisplay = document.querySelector(".exchangerate-display");
const toDropdown = document.querySelector(".to-dropdown");

/**
 * load an exchange rate from an API
 * and show it in the element "exchangerate-display"
 */
async function loadExchangeRate(from, to) {
  const url = BASE_URL + `${from}/${to}.json`;
  const res = await fetch(url);
  if (!res.ok) {
    exchangeRateDisplay.innerText = "Could not fetch data";
    return;
  }
  const data = await res.json();
  const rate = data[to];
  exchangeRateDisplay.innerText = rate;
}

/**
 * include options in the dropdown menu
 */
function populateDropdown() {
  toDropdown.innerHTML = CURRENCIES.map(
    (currency) =>
      `<option value="${currency}">${currency.toUpperCase()}</option>`
  ).join();

  toDropdown.addEventListener("input", (e) => {
    const newValue = e.target.value;
    loadExchangeRate("usd", newValue);
  });
}

populateDropdown();
loadExchangeRate("usd", CURRENCIES[0]);
