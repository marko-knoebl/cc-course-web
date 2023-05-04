// example API query:
// https://api.exchangerate.host/convert?from=USD&to=EUR

const BASE_URL = "https://api.exchangerate.host/convert";
const CURRENCIES = ["eur", "jpy", "gbp", "rub"];

const exchangeRateDisplay = document.querySelector(".exchangerate-display");
const toDropdown = document.querySelector(".to-dropdown");

/**
 * load an exchange rate from an API
 * and show it in the element "exchangerate-display"
 */
async function loadExchangeRate(from, to) {
  const url = BASE_URL + `?from=${from}&to=${to}`;
  const res = await fetch(url);
  if (!res.ok) {
    exchangeRateDisplay.innerText = "Could not fetch data";
    return;
  }
  const data = await res.json();
  const rate = data.result;
  exchangeRateDisplay.innerText = rate;
}

/**
 * include options in the dropdown menu
 */
function populateDropdown() {
  // create an array with <option> elements
  const optionElements = CURRENCIES.map(
    (currency) =>
      `<option value="${currency}">${currency.toUpperCase()}</option>`
  );
  // include the option elments in the dropdown
  toDropdown.innerHTML = optionElements.join();

  toDropdown.addEventListener("input", (e) => {
    const newValue = e.target.value;
    loadExchangeRate("usd", newValue);
  });
}

populateDropdown();
loadExchangeRate("usd", CURRENCIES[0]);
