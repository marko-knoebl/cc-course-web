## functional patterns

- What is a callback function?
- What is ECMA script ? What is the difference between Javascript & ECMA script ?
- What is the difference between `let` & `var` ?
- ~~Write an example where using the `var` declaration instead of the `let` could create a hard to debug code.~~
- Give a practical example where you would use the `reduce` function in javascript.
- Give a practical example where you would use the `map` function in javascript.
- Give a practical example where you would use the `filter` function in javascript.

## Web basics

- What is a web server?
- Explain the client-server architecture.
- What is the difference between synchronous and asynchronous execution?
- What is `npm`? Why is it useful?
- ~~What is the difference between the `depdendencies` & `devDependencies` in a `package.json` file ?~~
- What would be the impact of javascript `fetch` if it was not asyncronous ?
- Why benefits would bring to a developer to use the `Postman` application ?
- List the parts of the URL.
- What is query parameter?
- What kind of HTTP status codes do you know?
- How does an HTTP Request look like? What are the most relevant HTTP header fields?
- How does an HTTP Response look like? What are the most relevant HTTP header fields?
- Why should you ignore the `node_modules` folder in `.gitignore` ?

## Rest API: Serve and Fetch

- ~~Why is it recommend for a developer to use the http methods `get`, `put`, `delete` ?~~
- In a REST API, what are the HTTP methods _GET_, _PUT_ and _DELETE_ used for? (replacement question for the question above)
- ~~How does a `POST` request look like when it is made from a web browser (on the front end written) ?~~
- What is an API?
- What is REST API?
- What is JSON and how do we use it?
- What is API versioning ?
- Give 3 examples of HTTP response status codes ? Explain what each number means.

## Advanced JavaScript

- How does the `ternary operator` looks like in javascript?
- How to import a function from another module in JavaScript?
- What is a shallow copy on an object?
- What is a callback function? Tell some examples of its usage.
- What is object destructuring in javascript?
- What is array destructuring in javascript?
- What is the spread operator in `js` ?
- What are the differences between the `arrow` function and the regular `function`?
- What is the `import` keyword used for?
- What is the `require` used for?
- What are template literals?

## Testing basics

- ~~What is code coverage? Why is it used?~~
- ~~What is a test case? What is an assertion? Give examples!~~
- ~~What are the unit testing best practices? (Eg. how many assertion should a test case contain?)~~
- ~~What is arrange/act/assert pattern?~~
- ~~How do you test asynchronous code with `jest` ?~~
- ~~What is `setup` & `teardown` in jest ?~~
- ~~Give an example when you would use in `jest` the `toBe` & `toEqual` assertions.~~

## React basics

- What benefits does it bring for a developer to use `components` (opposed of writing all the code in a single file) ?
- What is the difference between Element and Component?
- How do you pass values between components in `react`?
- What is `key` prop?
- How does a child component pass data to it's parent component ?
- ~~Write the code to create in JSX an HTML DIV element that has the innerText the contents of the variable `let name = 'Andrew'`~~
- Write the code to create in JSX an unordered list from the array `let names = ["Mathew", "John", "Maverik"]`
- Write the code to set the background color red of a div in JSX.

## Testing react

- ~~What are unit tests, integration tests? What is the major difference between these two?~~
- ~~What is unit testing?~~
- ~~What does `mocking` mean from a testing perspective ? Give an example when you would use it.~~
- ~~How do you test that function was called `at least` 2 times using `jest` ?~~
- ~~Name 4 benefits a developer gets from writing tests.~~

## React patterns

- ~~What is the difference between Real DOM and Virtual DOM?~~
- ~~When adding an item to an array, why is it necessary to pass a new array to the `useState` hook ?~~
- When adding an item to an array in the state, why is it necessary to pass a new array to the setter function? (replacement question for the question above)
- Describe what techniques or tools you use to debug a react app.
- What is the difference between a react `class` component & a `functional` component ?
- ~~Name 3 lifecycle states in a react `functional` component.~~
- What is conditional rendering in `react` ? Give an example.
- ~~Write the code that prints to the console `component destroyed` when the component it is part of is removed from the DOM tree.~~
- Why is there an infinite loop in this code

```function App() {
  const [count, setCount] = useState(0); //initial value of this
  useEffect(() => {
    setCount((count) => count + 1); //increment this Hook
  }); //no dependency array.
  return (
    <div className="App">
      <p> value of count: {count} </p>
    </div>
  );
}
```

- ~~Why is there an infinite loop in this code~~

X

# Mongo & mongoose

- What is a database schema ?
- ~~Why is the `id` unique in a database ?~~
- What are the advatanges & disadvatages of using `lean()` function in a mongo query ?
- Write the code to store the object `{name: "Andrew", age: 10}` to a mongo database. You can ignore the part of connection parameters.
- Write the code to delete from a mongo database all employees that are over 18 years. The scheme for an employee is `{name: string, age: int}`. You can ignore the part of connection parameters.
- Write the code to display in the console from a mongo database the employees who are over 18 years. The scheme for an employee is `{name: string, age: int}`. You can ignore the part of connection parameters.
- Write the code to update from a mongo database the employees with name='John' and set the new age to 8. The scheme for an employee is `{name: string, age: int}`. You can ignore the part of connection parameters.

# Authentication (cookies + google)

- ~~How to properly store passwords?~~
- ~~What is encryption and decryption?~~
- ~~What is hashing?~~
- ~~What is OAuth2?~~
- ~~What is the difference between encryption and hashing? When would you use which?~~
- ~~How/where would you store sensitive data (like db password, API key, ...) of your application?~~
- ~~What would you use a session for?~~
- ~~What would you use a cookie for?~~

# MERN stack

- ~~What does `MERN` stand for in the context of web development ?~~
- What is routing in the context of a `react` app ?
- What is routing in the context of an `express` app ?
- What is `CORS` policy ?
- ~~What advantages does a developer have for using `bootstrap` or `material ui` ?~~
