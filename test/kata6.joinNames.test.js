const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{
      name: 'Bart'
    }, {
      name: 'Lisa'
    }, {
      name: 'Maggie'
    }])).toEqual('Bart, Lisa & Maggie');
  });

  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{
      name: 'Bart'
    }, {
      name: 'Lisa'
    }, {
      name: 'Maggie'
    }, {
      name: 'Annabel'
    }, {
      name: 'Mike'
    }])).toEqual('Bart, Lisa, Maggie, Annabel & Mike');
  });

  test("returns string of names, seperated by commas and an ampersand", () => {
    expect(joinNames([{
      name: 'Bart'
    }])).toEqual('Bart');
  });

});
