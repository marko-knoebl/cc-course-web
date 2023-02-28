# Exercise notes: abandoned packages

## Irrelevant code

the template in _server.js_ contains some irrelevant code - just delete all the code from the file and start from scratch!

## Incorrect data

Note: in _pkgs.json_, there is a minor mistake in the package data:

For the package _busboy_, the version released on _2022-05-02_ should be version _4.18.0_ and the version released on _2022-06-02_ should be version _4.18.1_

You can just ignore the mistake or correct it in your repository 

## Hints for reading / writing JSON files

In particular, there's `fs.writeFileSync` which can be used to write / read text content of files.

A JSON file is just a Text file in a specific format.

## Hint: maintained packages

you can use a helper function to check if a specific package is maintained

```js
/**
 * Determines if a package is maintained.
 * Checks all dependencies:
 * If one of the dependencies has a newer version than the package,
 *   the package is unmaintained
 * Otherwise, the package is maintained
 *
 * param id: id of the package to check
 * param allPackages: array of all available packages
 */
function isMaintained(id, allPackages) {
  // ...
}
```
