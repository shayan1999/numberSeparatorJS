import {
  numberSeparator,
  removeUselessZeros,
  separateStringNumber,
} from "number-separator-js";

console.log(numberSeparator({ text: "hello 1242" }));

window.separate = function separate(
  text,
  symbol,
  fixed,
  separateMore,
  allowUselessZeros
) {
  return numberSeparator({
    text,
    symbol,
    fixed,
    separateMore,
    allowUselessZeros,
  });
};

window.removeUseless = function removeUseless({
  number,
  returnType,
  acceptDecimal,
  fixed,
}) {
  return removeUselessZeros({ number, returnType, acceptDecimal, fixed });
};

window.getSeparateItems = function getSeparateItems(text) {
  return separateStringNumber(text);
};
