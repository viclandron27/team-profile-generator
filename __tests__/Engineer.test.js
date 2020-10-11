const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("Can set github username via constructor argument", () => {
    const githubTest = 'jsmith';
    const githubUser = new Engineer("Max", 1, "test@test.com", githubTest);
    expect(githubUser.github).toBe(githubTest);
  });

test('getRole() returns the correct role', () => {
    const roleTest = "Engineer";
    const engineer = new Engineer('Sarah', 123, 'vic@gmial.com', 'jsmith')
    expect(engineer.getRole()).toBe(roleTest);
})