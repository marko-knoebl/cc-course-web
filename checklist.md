# chapter 1

- [ ] JavaScript versions
- [ ] `let`, `const` (and `var`)
- [ ] **arrow functions**
- [ ] **spread operator (`...`)**
- [ ] **ternary operator / conditional operator**
- [ ] **object destructuring**
- [ ] **higher-order functions**
  - [ ] **callbacks**
  - [ ] **array methods**
    - [ ] **`map`**
    - [ ] **`filter`**
    - [ ] **`reduce`**
    - [ ] **`sort`**
- [ ] **asynchronous code**
  - [ ] **asynchronous code with `async` / `await`**
  - [ ] asynchronous code with `.then`
- [ ] **APIs**
  - [ ] **using fetch to send network requests**
    - [ ] **specifying the URL**
    - [ ] **specifying the HTTP method**
    - [ ] **specifying the request body**
    - [ ] **using `URLSearchParams` to build a search parameter string**
  - [ ] (API keys)
  - [ ] **JSON format**

# chapter 2

- [ ] npm packages and _package.json_
  - [ ] `npm install foopackage`
  - [ ] `npm install`
  - [ ] `npm run`
  - [ ] `import` vs `require`
- [ ] web server concepts
- [ ] **HTTP**
  - [ ] **methods: _GET_, _POST_, ...**
  - [ ] header entries
  - [ ] **body**
  - [ ] **URLs and query strings**
  - [ ] postman
- [ ] **express.js**
  - [ ] use cases of express.js: _rendering HTML on the backend_ / **providing an API**
  - [ ] **responding to requests**
  - [ ] **types of responses**
    - [ ] serving static files (HTML, CSS, images, ...)
    - [ ] rendering templates (e.g. ejs)
    - [ ] **sending JSON**
  - [ ] **routing**
  - [ ] **handling different methods (_GET_, _POST_, ...)**
  - [ ] **handling URL parameters**
    - [ ] **/pizzas/1**
    - [ ] **/pizzas?max-price=14&sort-by=name**
  - [ ] **parsing the request body**
  - [ ] **REST APIs**
  - [ ] CORS
- [ ] **handling form submissions in the browser in JavaScript (_.preventDefault()_)**
- [ ] reading and writing files in node (_fs_ module)
- [ ] deployment / hosting

# chapter 3

- [ ] use cases of React
- [ ] **JavaScript basics for React**
  - [ ] **JavaScript modules and `import` / `export`**
  - [ ] **immutability / data management without mutations**
    - [ ] **updating properties of objects**
    - [ ] **adding properties to objects**
    - [ ] **adding elements to arrays (create)**
    - [ ] **replacing elements in arrays (update)**
    - [ ] **removing elements from arrays (delete)**
  - [ ] **destructuring assignment with arrays and objects**
- [ ] **state**
  - [ ] **using the _state hook_ (_useState_)**
  - [ ] **minimal state and derived values**
  - [ ] **input state**
    - [ ] **connecting input values to state with _value_ and _onChange_**
    - [ ] **handling various input types**
    - [ ] handling numeric inputs
- [ ] **JSX**
  - [ ] **_className_**
  - [ ] the _style_ property in JSX
  - [ ] **if / else**
  - [ ] **repeating elements**
    - [ ] **the _key_ property**
  - [ ] **adding event handlers in JSX**
    - [ ] **accessing the event object**
    - [ ] **`onClick={handleEvent}` (do) vs `onClick={handleEvent()}` (don't)**
    - [ ] **`preventDefault`**
- [ ] **development environment**
  - [ ] initializing a React project (e.g. via _vite_)
  - [ ] **_React Developer Tools_ browser plugin**
- [ ] **components**
  - [ ] **sharing data between components**
  - [ ] component libraries
  - [ ] **props in custom components**
  - [ ] **events in custom components**
  - [ ] passing content to components
- [ ] hooks
- [ ] **querying APIs**
  - [ ] **effect hook**
  - [ ] API query libraries for React: e.g. _react-query_

# chapter 4

- [ ] database basics
- [ ] setting up mongoDB
- [ ] **_databases_, _collections_ and _documents_**
- [ ] using the _mongodb_ package
- [ ] mongoDB Atlas
- [ ] **mongoDB operations**
  - [ ] **reading records**
    - [ ] **finding one by ID**
    - [ ] **finding multiple by fields**
    - [ ] **query operators and options**
      - [ ] **$lt, $gt**
      - [ ] **$or**
      - [ ] **$regex**
      - [ ] **$options**
      - [ ] ...
    - [ ] **sorting**
    - [ ] **pagination with _skip_ and _limit_**
  - [ ] **creating records**
  - [ ] **updating records**
  - [ ] **deleting records**
- [ ] **working with the _ObjectId_ type**
- [ ] **storing objects and arrays inside of documents**
- [ ] **using mongoose** for managing mondoDB databases
- [ ] **mongoose schema definition**
  - [ ] **default values**
- [ ] configuration via _.env_
- [ ] (mongoDB compass)

# chapter 5

- [ ] **React router**
  - [ ] **defining routes**
  - [ ] **links**
  - [ ] **route parameters**
    - [ ] **`useParams`**
    - [ ] **`useSearchParams`**
- [ ] **express middleware (use)**
- [ ] **index.js in folders**
- [ ] MERN exercises

# various

- [ ] issue / bug trackers
- [ ] git branches

# extras

- [ ] TypeScript
- [ ] react-query
- [ ] CSS
- [ ] authentication
- [ ] databases
  - [ ] database indexes
  - [ ] lookups in mongoDB
- [ ] testing
- [ ] hardware (processor, RAM, ...)
