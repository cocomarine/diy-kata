const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toEqual([5, 4, 3, 2, 1]);
  });

  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(7400)).toEqual([0, 0, 4, 7]);
  });

  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(0)).toEqual([0]);
  });

});
