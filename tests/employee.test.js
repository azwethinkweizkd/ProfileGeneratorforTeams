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

test("Checks to see if id was created for this input", () => {
  const id = 4;
  const newEmployee = new Employee("John", id);
  expect(newEmployee.id).toBe(id);
});

test("Checks to see if email was entered", () => {
  const email = "sample@email.com";
  const newEmployee = new Employee("John", 3, email);
  expect(newEmployee.email).toBe(email);
});

test("Test to see if an @ symbol was included within the string for the email input", () => {
  const email = "sample@email.com";
  const newEmployee = new Employee("John", 3, email);
  expect(newEmployee.email).toMatch(/@/);
});

test("the getName() method returns name input", () => {
  const name = "Kevin";
  const newEmployee = new Employee(name);
  expect(newEmployee.getName()).toBe(name);
});
test("the getId() method returns id input", () => {
  const id = 4;
  const newEmployee = new Employee("Kevin", id);
  expect(newEmployee.getId()).toBe(id);
});
test("the getEmail() method returns email input", () => {
  const email = "sample@email.com";
  const newEmployee = new Employee("John", 3, email);
  expect(newEmployee.getEmail()).toBe(email);
});
test("the getRole() method returns name input", () => {
  const newEmployee = new Employee("John", 3, "sample@email.com");
  expect(newEmployee.getRole()).toBe("Employee");
});
