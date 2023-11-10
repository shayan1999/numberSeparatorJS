import { numberSeparatorProps, removeUselessZerosPropsType } from "./types";
import {
  separateNumbersAndText,
  joinNumbersAndText,
  removeEmptyItems,
} from "./utils";

export const numberSeparator = ({
  text,
  fixed = null,
  separateMore = false,
  symbol = ",",
}: numberSeparatorProps) => {
  const { nonNumericParts, numericParts, startWithNumber } =
    separateNumbersAndText(text);
  let localNumeric: string[] = [...numericParts];
  for (let i = 0; i < localNumeric.length; i++) {
    let localNumber = `${Number(localNumeric[i])}`;

    if (fixed !== null && fixed !== undefined) {
      localNumber = `${Number(localNumber).toFixed(fixed)}`;
    }

    const parts: string[] = localNumber.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, symbol);
    if (separateMore && parts[1]) {
      parts[1] = parts[1].replace(/\B(?=(\d{3})+(?!\d))/g, symbol);
    }
    localNumeric[i] = parts.join(".");
  }

  const result: string = joinNumbersAndText(
    localNumeric,
    removeEmptyItems(nonNumericParts),
    startWithNumber
  );

  return result;
};

export const separateStringNumber = (inputString: string) => {
  const { numericParts, nonNumericParts } = separateNumbersAndText(inputString);
  const noneNumericPartsRemovedEmpty = removeEmptyItems(nonNumericParts);

  return {
    numericParts,
    nonNumericParts: removeEmptyItems(noneNumericPartsRemovedEmpty),
  };
};

export const removeUselessZeros = ({
  number,
  returnType = "string",
  acceptDecimal = true,
  fixed = 3,
}: removeUselessZerosPropsType): string | number => {
  const stringNumber = number.toString();

  if (stringNumber.length <= 2 && stringNumber.includes(".")) {
    return stringNumber;
  }

  const truncatedNumber = acceptDecimal ? +number : Math.trunc(+number);
  const toFixedString = truncatedNumber.toFixed(fixed).toString();

  let newAmount = parseFloat(toFixedString);
  const result = returnType === "string" ? String(newAmount) : newAmount;
  return result;
};
