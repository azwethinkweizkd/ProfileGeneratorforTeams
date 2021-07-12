const Intern = require("../js/intern");

test("If a School was entered within this field", () => {
  const school = "Florida Gulf Coast University";
  const newSchool = new Intern("John", 3, "sample@email.com", school);
  expect(newSchool.school).toBe(school);
});

test("the getRole() method returns name input", () => {
  const newIntern = new Intern("John", 3, "sample@email.com");
  expect(newIntern.getRole()).toBe("Intern");
});
