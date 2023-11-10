import { numberSeparator } from "../index";

const examples = [
  { testCase: "hello world 123665", expect: "hello world 123,665" },
  { testCase: "123665.23 hello world", expect: "123,665.23 hello world" },
  { testCase: "12376 world 321234", expect: "12,376 world 321,234" },
  { testCase: "hello 12376 world", expect: "hello 12,376 world" },
  { testCase: "check 1234.233", expect: "check 1,234.233" },
  { testCase: "22344-123213", expect: "22,344-123,213" },
];

describe("numberSeparator functions:::", () => {
  it("only number tests::", () => {
    expect(numberSeparator({ text: "223567123" })).toBe("223,567,123");
    expect(numberSeparator({ text: "223567123", symbol: "-" })).toBe(
      "223-567-123"
    );
    expect(numberSeparator({ text: "23477.23" })).toBe("23,477.23");
    expect(numberSeparator({ text: "23477.2311", separateMore: true })).toBe(
      "23,477.2,311"
    );
    expect(numberSeparator({ text: "23477.2311", symbol: "-", fixed: 3 })).toBe(
      "23-477.231"
    );
  });
  it("find numbers in a full string and put comma::", () => {
    for (let i = 0; i < examples.length; i++) {
      expect(numberSeparator({ text: examples[i].testCase })).toBe(
        examples[i].expect
      );
    }
  });
  it("exceptions::", () => {
    expect(numberSeparator({ text: "" })).toBe("");
    expect(
      numberSeparator({ text: "", symbol: "-", fixed: 4, separateMore: true })
    ).toBe("");
    expect(numberSeparator({ text: "hello world" })).toBe("hello world");
    expect(numberSeparator({ text: "-0000.12" })).toBe("-0.12");
    expect(numberSeparator({ text: "-0000.1233", fixed: 3 })).toBe("-0.123");
  });
});
