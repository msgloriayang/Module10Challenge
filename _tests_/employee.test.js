const Employee = require("../lib/Employee");

test('tests if employee is a new object created', () => {
  const employee = new Employee('Adonis', 21, 'adonis@creed.com')

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
})