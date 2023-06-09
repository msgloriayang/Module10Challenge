const Engineer = require("../lib/Engineer");

test('tests if engineer is a new object created', () => {
  const engineer = new Engineer('Justin', 44, 'justin@creed.com', '69')

  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
})