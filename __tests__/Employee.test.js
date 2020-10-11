//const Employee = require('../lib/Employee');
const { test } = require('@jest/globals');

//const { jest } = require('@jest/globals')

jest.mock('../lib/Employee');

//test creating Employee info object
test('creates Employee object', () => {
    const employee = new employee('Sarah');

    expect(employee.name).toBe('Sarah');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

//test getting name from user

//test getting id from user

//test getting email from user