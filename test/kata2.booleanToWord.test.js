const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  test("return Yes when passsed true", () => {
    expect(booleanToWord(1)).toEqual('Yes');
  });

  test("retrun No when passed false", () => {
    expect(booleanToWord(5)).toEqual('No');
  });

  test("retrun No when passed false", () => {
    expect(booleanToWord('true')).toEqual('No');
  });

  test("retrun No when passed false", () => {
    expect(booleanToWord(true)).toEqual('Yes');
  });

});
