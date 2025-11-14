import { employees } from "./dataset.js";

// challenge 1
function getFirstEmployeeFirstName() {
  return employees[0].firstName;
}
const firstEmployeeFirstName = getFirstEmployeeFirstName();
console.log(firstEmployeeFirstName);

// challenge 2
function getLastEmployeeLastName() {
  return employees[0].firstName;
}
const lastEmployeeLastName = getLastEmployeeLastName();
console.log(lastEmployeeLastName);

// challenge 3
function getEmployeeDepartmentById(employees, id) {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === id) {
      return employees[i].department;
    }
  }
  return "Not found";
}

// challenge 4
function countEmployees(employees) {
  return employees.length;
}

// challenge 5
function hasInactiveEmployees(employees) {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].active === false) {
      return true;
    }
  }
  return false;
}

// challenge 6
function calculateAverageAge(employees) {
  if (employees.length === 0) {
    return 0;
  }

  let totalAge = 0;
  let i = 0;
  while (i < employees.length) {
    totalAge += employees[i].age;
    i++;
  }

  return totalAge / employees.length;
}
