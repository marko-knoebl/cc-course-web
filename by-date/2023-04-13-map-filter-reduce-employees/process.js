const fs = require("fs");

const EMPLOYEES = JSON.parse(fs.readFileSync("./employees.json"));
const EQUIPMENT = JSON.parse(fs.readFileSync("./equipment.json"));

// difficulty: easy
/**
 * Return the number of MacBooks used by employees within the company.
 * Example input:
 * [{ name: "a", equipment: "macbook"}, { name: "b", equipment: "macbook"} ]
 * Corresponding output:
 * 2
 */
function countMacbooks(employees) {
  // TODO
}

console.log(countMacbooks(EMPLOYEES));

// difficulty: normal
/**
 * Return the total value of all equipment used by employees.
 * E.g.
 * if 2 employees are using a MacBook (1500€)
 * and 2 employees are using a ThinPad (1400€)
 * then the total value is 2 * 1500 + 2 * 1400
 */
function totalEquipmentValue(employees, equipment) {
  // TODO
}

console.log(totalEquipmentValue(EMPLOYEES, EQUIPMENT));

// difficulty: normal
/**
 * Return an array of employees with their equipment type as an
 * additional string property
 *
 * Example input data:
 * Employees:
 * [
 *   { name: "a", equipment: "macbook" },
 *   { name: "b", equipment: "thinkpad" },
 *   { name: "c", equipment: "iphone" }
 * ]
 * Corresponding output:
 * [
 *   { name: "a", equipment: "macbook", equipmentType: "laptop" },
 *   { name: "b", equipment: "thinkpad", equipmentType: "laptop" },
 *   { name: "c", equipment: "iphone", equipmentType: "phone" }
 * ]
 */
function addEquipmentType(employees, equipment) {
  // TODO
}

console.log(addEquipmentType(EMPLOYEES, EQUIPMENT));
