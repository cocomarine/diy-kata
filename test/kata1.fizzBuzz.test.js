const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  test("returns Fizz when passed a multiple of 3", () => {
    expect(fizzBuzz(6)).toEqual('Fizz');
  });

  test("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(10)).toEqual('Buzz');
  });

  test("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(30)).toEqual('FizzBuzz');
  });

  test("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(8)).toEqual(8);
  });
});
