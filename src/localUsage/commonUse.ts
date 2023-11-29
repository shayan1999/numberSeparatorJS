import { numberSeparator, removeUselessZeros } from "../index";

console.log(
  numberSeparator({ text: "123.2402", fixed: 3, allowUselessZeros: false })
);
