# APIs

example: https://jsonplaceholder.typicode.com

data formats: **JSON**, XML, ...

API keys

## example APIs

- Pokemon: https://pokeapi.co/
- Star Wars: https://swapi.dev/
- Rick and Morty: https://rickandmortyapi.com/
- NASA: https://api.nasa.gov/
- WeatherAPI: https://www.weatherapi.com/

big list of public APIs: https://github.com/public-apis/public-apis

## format of an API request

parts / parameters of an API request:

- URL
  - base: e.g. api.weather.com/
  - resources: e.g. /weather
  - query string: e.g. ?day=2023-03-28&place=vienna
- method: GET, POST, ...
- headers:
  - authorization (e.g. user identification, API key)
- body (e.g. JSON)

## format of an API response

- HTTP status (e.g. 200)
- headers:
  - Content-Type
  - CORS
- body (e.g. JSON)
