const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    expect(getEmployerRole('Javid', [{
      name: 'Satti',
      role: 'Developer'
    }, {
      name: 'Jenny',
      role: 'Sales Associate'
    }, {
      name: 'Javid',
      role: 'Human Recommended Reading Assistant'
    }])).toEqual('Human Recommended Reading Assistant');
  });

  test("returns the employee's role in the company", () => {
    expect(getEmployerRole('Satti', [{
      name: 'Satti',
      role: 'Developer'
    }, {
      name: 'Jenny',
      role: 'Sales Associate'
    }, {
      name: 'Javid',
      role: 'Human Recommended Reading Assistant'
    }])).toEqual('Developer');
  });
});
