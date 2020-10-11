const Employee = require('../lib/Employee');
const { test, expect } = require('@jest/globals');

//jest.mock('../lib/Employee');

//test getting name from user
test('gets an employee object', () => {
    const employee = new Employee('Sarah', 123, 'vic@gmial.com');

    expect(employee.getName()).toBe('Sarah');
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toBe('vic@gmial.com');

})

test('getRole() returns the correct role', () => {
    const roleTest = "Employee";
    const employee = new Employee('Sarah', 123, 'vic@gmial.com')
    expect(employee.getRole()).toBe(roleTest);
})