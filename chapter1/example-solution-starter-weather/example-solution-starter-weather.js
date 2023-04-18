// global declarations

const API_KEY = "asdfiasdnahsdf";
const weatherDisplay = document.querySelector(".weather-display");
const autocompleteList = document.querySelector(".autocomplete-list");

// API

async function fetchWeather(city) {
  // ...
}

async function fetchCityAutcomplete(term) {
  // ...
}

// UI update functions

// is called when the user hits enter
async function showWeather(city) {
  showSpinner();
  const weatherData = await fetchWeather(city);
  hideSpinner();
  showWeatherData(weatherData);
  // ...
}

// is called whenever the content of the input field changes
async function updateAutocomplete() {
  if (searchText.length >= 3) {
    const suggestions = await fetchCityAutcomplete();
    showAutocompleteSuggestions(suggestions);
  } else {
    hideAutocompleteSuggestions();
  }
}

function showWeatherData(data) {
  weatherDisplay.innerText = "";
  weatherDisplay.appendChild(weatherDisplayComponent(data));
}

function showAutocompleteSuggestions(suggestions) {
  hideAutocompleteSuggestions();
  for (let suggestion of suggestions) {
    autocompleteList.appendChild(SuggestionComponent(suggestion));
  }
}

function hideAutocompleteSuggestions() {
  autocompleteList.innerText = "";
}
