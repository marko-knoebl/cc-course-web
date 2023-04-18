const mainElement = document.querySelector(".main");

// "modern" version
async function loadFirstPokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon/1a";

  const response = await fetch(url);
  if (!response.ok) {
    mainElement.innerHTML += `<div>error while loading</div>`;
    // exit this function
    return;
  }
  const firstPokemonData = await response.json();
  console.log(firstPokemonData);

  // TODO: show pokemon in the HTML document

  // e.g.:
  // - show name
  // - show height
  // - show front image

  mainElement.innerHTML += `<h2>2${firstPokemonData.name}</h2>`;
}

// "older" version
function loadFirstPokemonThen() {
  const url = "https://pokeapi.co/api/v2/pokemon/1";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      mainElement.innerHTML += `<h2>1${data.name}</h2>`;
    });
}

loadFirstPokemon();
loadFirstPokemonThen();
