import {
  numberSeparatorProps,
  numberSeparatorFuncType,
  seprateStringNumberType,
} from "./types";
import {
  separateNumbersAndText,
  joinNumbersAndText,
  removeEmptyItems,
} from "./utils";

export const numberSeparator: numberSeparatorFuncType = ({
  text,
  fixed = null,
  seprateMore = false,
  symbol = ",",
}: numberSeparatorProps) => {
  const { nonNumericParts, numericParts, startWithNumber } =
    separateNumbersAndText(text);

  let localNumeric: string[] = [...numericParts];

  for (let i = 0; i < localNumeric.length; i++) {
    let localNumber = localNumeric[i];

    if (fixed !== null && fixed !== undefined) {
      localNumber = `${Number(localNumber).toFixed(fixed)}`;
    }

    const parts: string[] = localNumber.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, symbol);
    if (seprateMore && parts[1]) {
      parts[1] = parts[1].replace(/\B(?=(\d{3})+(?!\d))/g, symbol);
    }
    localNumeric[i] = parts.join(".");
  }

  const result: string = joinNumbersAndText(
    localNumeric,
    nonNumericParts,
    startWithNumber
  );

  return result;
};

export const seprateStringNumber: seprateStringNumberType = (
  inputString: string
) => {
  const { numericParts, nonNumericParts } = separateNumbersAndText(inputString);
  const noneNumericPartsRemovedEmpty = removeEmptyItems(nonNumericParts);

  return {
    numericParts,
    nonNumericParts: removeEmptyItems(noneNumericPartsRemovedEmpty),
  };
};
