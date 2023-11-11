import { removeUselessZeros } from "../index";

describe("removeUselessZeros functions:::", () => {
  it("check accept decimal", () => {
    expect(removeUselessZeros({ number: "0.1" })).toEqual("0.1");
    expect(removeUselessZeros({ number: ".2" })).toEqual(".2");
  });

  it("check remove decimal", () => {
    expect(removeUselessZeros({ number: "0.1", acceptDecimal: false })).toEqual(
      "0"
    );
    expect(
      removeUselessZeros({ number: "23.56", acceptDecimal: false })
    ).toEqual("23");
  });

  it("remove useless zeros", () => {
    expect(removeUselessZeros({ number: "37.000" })).toEqual("37");
    expect(
      removeUselessZeros({ number: "39.001", acceptDecimal: false })
    ).toEqual("39");
  });

  it("keep useful zeros", () => {
    expect(removeUselessZeros({ number: "37.001", fixed: 5 })).toEqual(
      "37.001"
    );
    expect(removeUselessZeros({ number: "37.00013", fixed: 5 })).toEqual(
      "37.00013"
    );
    expect(removeUselessZeros({ number: "37.00010", fixed: 5 })).toEqual(
      "37.0001"
    );
    expect(
      removeUselessZeros({ number: "39.0001", acceptDecimal: false })
    ).toEqual("39");
  });

  it("check return type", () => {
    expect(
      removeUselessZeros({
        number: "37.001",
        fixed: 5,
        returnType: "number",
      })
    ).toEqual(37.001);
    expect(
      removeUselessZeros({
        number: "39.0001",
        acceptDecimal: false,
        returnType: "number",
      })
    ).toEqual(39);
  });
});
