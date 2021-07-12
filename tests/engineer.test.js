const Engineer = require("../js/engineer");

test("If a GitHub username was entered within this field", () => {
  const gitHubUser = "sampleuser123";
  const newgitHubUser = new Engineer("John", 3, "sample@email.com", gitHubUser);
  expect(newgitHubUser.gitHubUser).toBe(gitHubUser);
});
test("the getRole() method returns name input", () => {
  const newEngineer = new Engineer("John", 3, "sample@email.com");
  expect(newEngineer.getRole()).toBe("Engineer");
});
