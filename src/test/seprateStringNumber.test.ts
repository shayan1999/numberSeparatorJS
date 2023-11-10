import { separateStringNumber } from "../index";

describe("separateStringNumber functions:::", () => {
  it("only two numbers check separated with - symbol", () => {
    expect(separateStringNumber("123-2234").numericParts).toEqual([
      "123",
      "-2234",
    ]);
    expect(separateStringNumber("123-2234").nonNumericParts).toEqual([]);
  });

  it("normal test", () => {
    expect(separateStringNumber("hello 123 world").numericParts).toEqual([
      "123",
    ]);
    expect(separateStringNumber("hello 123 world").nonNumericParts).toEqual([
      "hello ",
      " world",
    ]);
  });
});
