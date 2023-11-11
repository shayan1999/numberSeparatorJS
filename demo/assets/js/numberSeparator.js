import { numberSeparator, separateStringNumber } from "number-separator-js";

console.log(numberSeparator({ text: "hello 1242" }));

window.separate = function separate(text, symbol, fixed, separateMore) {
  return numberSeparator({ text, symbol, fixed, separateMore });
};

window.getSeparateItems = function getSeparateItems(text) {
  return separateStringNumber(text);
};
