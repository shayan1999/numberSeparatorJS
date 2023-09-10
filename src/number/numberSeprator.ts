export const numberSeparator = ({
  number,
  fixed = null,
  seprateMore = false,
  symbol = ",",
}) => {
  const { nonNumericParts, numericParts, startWithNumber } =
    separateNumbersAndText(number);
  let localNumeric = [...numericParts];
  for (let i = 0; i < localNumeric.length; i++) {
    let localNumber = localNumeric[i];
    if (fixed !== null && fixed !== undefined) {
      localNumber = `${Number(localNumber).toFixed(fixed)}`;
    }
    const parts = localNumber.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, symbol);
    if (seprateMore && parts[1]) {
      parts[1] = parts[1].replace(/\B(?=(\d{3})+(?!\d))/g, symbol);
    }
    localNumeric[i] = parts.join(".");
  }
  return joinNumbersAndText(localNumeric, nonNumericParts, startWithNumber);
};

function separateNumbersAndText(inputString) {
  const numericParts = inputString.match(/[-+]?\d*\.?\d+/g) || [];

  const nonNumericParts = inputString.split(/[-+]?\d*\.?\d+/g);

  return {
    numericParts,
    nonNumericParts: nonNumericParts,
    startWithNumber: inputString.search(numericParts[0]) === 0,
  };
}

function removeEmptyItems(nonNumericParts) {
  return nonNumericParts.filter((part) => part !== "");
}

function joinNumbersAndText(numericParts, nonNumericParts, startWithNumber) {
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
}

export const seprateStringNumber = (inputString) => {
  const {numericParts, nonNumericParts}= separateNumbersAndText(inputString);
  const noneNumericPartsRemovedEmpty= removeEmptyItems(nonNumericParts);

  return{
    numericParts,
    nonNumericParts: removeEmptyItems(noneNumericPartsRemovedEmpty),
  }
};
