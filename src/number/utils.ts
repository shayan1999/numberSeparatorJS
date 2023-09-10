import {
  separateNumbersAndTextType,
  removeEmptyItemsType,
  joinNumbersAndTextType,
} from "./types";

export const separateNumbersAndText: separateNumbersAndTextType = (
  inputString: string
) => {
  const numericParts: string[] = inputString.match(/[-+]?\d*\.?\d+/g) || [];

  const nonNumericParts: string[] = inputString.split(/[-+]?\d*\.?\d+/g);

  return {
    numericParts,
    nonNumericParts: nonNumericParts,
    startWithNumber: inputString.search(numericParts[0]) === 0,
  };
};

export const removeEmptyItems: removeEmptyItemsType = (
  nonNumericParts: string[]
) => {
  return nonNumericParts.filter((part) => part !== "");
};

export const joinNumbersAndText: joinNumbersAndTextType = (
  numericParts,
  nonNumericParts,
  startWithNumber
) => {
  let result = "";
  for (
    let i = 0;
    i < Math.max(numericParts.length, nonNumericParts.length);
    i++
  ) {
    if (!startWithNumber) {
      result += (nonNumericParts[i] || "") + (numericParts[i] || "");
    } else {
      result += (numericParts[i] || "") + (nonNumericParts[i] || "");
    }
  }
  return result;
};
