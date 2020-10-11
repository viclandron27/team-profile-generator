const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("Can set intern's school via constructor argument", () => {
    const schoolTest = 'ABC';
    const userSchool = new Intern("Max", 1, "test@test.com", schoolTest);
    expect(userSchool.school).toBe(schoolTest);
  });

test('getRole() returns the correct role', () => {
    const roleTest = "Intern";
    const intern = new Intern('Sarah', 123, 'vic@gmial.com', 'FIU')
    expect(intern.getRole()).toBe(roleTest);
})