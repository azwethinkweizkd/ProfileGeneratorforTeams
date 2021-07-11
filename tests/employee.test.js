const Employee = require("../js/employee");

test("If a name was set with the constructor arguments", () => {
  const name = "Kevin";
  const newEmployee = new Employee(name);
  expect(newEmployee.name).toBe(name);
});

test("Can instantiate employee instance", () => {
  const newEmployee = new Employee();
  expect(typeof newEmployee).toBe("object");
});
