const fs = require("fs");

const EMPLOYEES = JSON.parse(fs.readFileSync("./data.json"));

// a lot easier than typical PA tasks
/**
 * Get employees whose position is "Director"
 * and age is < 30
 */
function getYoungDirectors(employees) {
  return employees.filter(
    (employee) => employee.position === "Director" && employee.age < 30
  );
}
console.log(getYoungDirectors(EMPLOYEES));

// a lot easier than typical PA tasks
/**
 * Get the names of young directors
 * ["Alice", "Bob"]
 */
function getYoungDirectorNames(employees) {
  let youngDirectors = getYoungDirectors(employees);
  let names = youngDirectors.map((director) => director.name);
  return names;
}
console.log(getYoungDirectorNames(EMPLOYEES));

// a bit easier than typical PA tasks
/**
 * Get the age of the youngest director, e.g. 20
 */
function getYoungestDirectorAge(employees) {
  return employees.reduce((youngestEmployeeAge, employee) => {
    if (youngestEmployeeAge < employee.age) {
      return youngestEmployeeAge;
    } else {
      return employee.age;
    }
  }, employees[0].age);
  // return employees.reduce((acc, curr) => )
}
console.log(getYoungestDirectorAge(EMPLOYEES));

// a bit easier than typical PA tasks
/**
 * Get the youngest director as an object
 */
function getYoungestDirector(employees) {
  return employees.reduce((youngestEmployee, employee) => {
    if (youngestEmployee.age < employee.age) {
      return youngestEmployee;
    } else {
      return employee;
    }
  }, employees[0]);
}
console.log(getYoungestDirector(EMPLOYEES));

// harder than typical PA tasks
/**
 * Count occurences of certain positions
 * Result could be:
 * {
 *   "Main Actor": 5,
 *   "Joker": 10,
 *   ...
 * }
 */
function countPositions(employees) {
  return employees.reduce((groupedEmployees, employee) => {
    // make a copy
    const copiedGroupedEmployees = { ...groupedEmployees };
    if (copiedGroupedEmployees[employee.position] === undefined) {
      copiedGroupedEmployees[employee.position] = 1;
    } else {
      copiedGroupedEmployees[employee.position]++;
    }
    return copiedGroupedEmployees;
  }, {});
}
console.log(countPositions(EMPLOYEES));
