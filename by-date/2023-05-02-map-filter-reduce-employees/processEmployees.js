// load the "file system" module
const fs = require("fs");

// read and parse the JSON data
const EMPLOYEES = JSON.parse(fs.readFileSync("./data.json"));

/**
 * Get employees whose position is "Director"
 */
function getYoungDirectors(employees) {
  // TODO
}
console.log(getYoungDirectors(EMPLOYEES));

/**
 * Get employee with age incremented by one
 */
function getEmployeeOneYearOlder(employee) {
  // TODO
}
console.log(getEmployeeOneYearOlder(EMPLOYEES[0]));
console.log(getEmployeeOneYearOlder(EMPLOYEES[1]));

/**
 * Get multiple employees with each age incremented by one
 */
function getEmployeesOneYearOlder(employees) {
  // TODO
}
console.log(getEmployeesOneYearOlder(EMPLOYEES));
console.log(getEmployeesOneYearOlder(EMPLOYEES));

/**
 * Get the first names of all employees
 */
function getFirstNames(employees) {
  // TODO
}
console.log(getFirstNames(EMPLOYEES));
