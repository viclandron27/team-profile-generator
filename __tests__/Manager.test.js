const Employee = require("../lib/Employee");
const Manager = require('../lib/Manger');
//const { test, expect } = require('@jest/globals');

test("Can set office number via constructor argument", () => {
    const testValue = 100;
    const officeNum = new Manager("Foo", 1, "test@test.com", testValue);
    expect(officeNum.office).toBe(testValue);
});

test('getRole() returns the correct role', () => {
    const roleTest = "Manager";
    const manager = new Manager('Sarah', 123, 'vic@gmial.com', 100)
    expect(manager.getRole()).toBe(roleTest);
})