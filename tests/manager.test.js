const Manager = require("../js/manager");

test("If an office number was entered for this field", () => {
  const officeNumber = 12345;
  const newOffNum = new Manager("John", 3, "sample@email.com", officeNumber);
  expect(newOffNum.officeNumber).toBe(officeNumber);
});

test("the getRole() method returns name input", () => {
  const newManager = new Manager("John", 3, "sample@email.com");
  expect(newManager.getRole()).toBe("Manager");
});
