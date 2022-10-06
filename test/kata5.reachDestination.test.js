const { reachDestination } = require("../src");

describe("reachDestination", () => {
  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(44, 10)).toEqual("I should be there in 4.5 hours.");
  });

  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(2, 10)).toEqual("I should be there in 0.5 hours.");
  });

  test("returns string with estimated time of arrival", () => {
    expect(reachDestination(121, 10)).toEqual("I should be there in 12.5 hours.");
  });

});
