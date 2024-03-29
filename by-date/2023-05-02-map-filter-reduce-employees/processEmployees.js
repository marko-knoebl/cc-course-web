// load the "file system" module
const fs = require("fs");

// read and parse the JSON data
const EMPLOYEES = JSON.parse(fs.readFileSync("./data.json"));

// filter
/**
 * Get employees whose position is "Director"
 */
function getDirectors(employees) {
  return employees.filter(
    (employee) => employee.position === "Director"
  );
}
console.log(getDirectors(EMPLOYEES));

/**
 * Get employee with age incremented by one
 */
function getEmployeeOneYearOlder(employee) {
  const newEmployee = {
    name: employee.name,
    level: employee.level,
    position: employee.position,
    present: employee.present,
    brand: employee.brand,
    age: employee.age + 1
  }
  return newEmployee;
}
console.log(getEmployeeOneYearOlder(EMPLOYEES[0]));
console.log(getEmployeeOneYearOlder(EMPLOYEES[1]));

/**
 * Get multiple employees with each age incremented by one
 */
function getEmployeesOneYearOlder(employees) {
  return employees.map(
    (employee) => getEmployeeOneYearOlder(employee)
  );
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

function getBiggestAge1(employees) {
  let maxAge = 0;
  for (let employee of employees) {
    maxAge = employee.age > maxAge ? employee.age : maxAge;
  }
  return maxAge;
}
console.log(getBiggestAge1(EMPLOYEES));

function getBiggestAge2(employees) {
  return employees.reduce(
    // (acc, curr)
    (maxAge, employee) => {
      return employee.age > maxAge ? employee.age : maxAge;
    },
    0
  )
}
console.log(getBiggestAge2(EMPLOYEES));

function getOldestEmployee() {

}

