export type numberSeparatorProps = {
  text: string;
  fixed?: number;
  separateMore?: boolean;
  symbol?: string;
  allowUselessZeros?: boolean;
};

export type numberSeparatorFuncType = (numberSeparatorFuncType) => string;

export type separateStringNumberType = (inputString: string) => {
  numericParts: string[];
  nonNumericParts: string[];
};

export type separateNumbersAndTextType = (inputString: string) => {
  numericParts: string[];
  nonNumericParts: string[];
  startWithNumber: boolean;
};

export type removeEmptyItemsType = (nonNumericParts: string[]) => string[];

export type joinNumbersAndTextType = (
  numericParts: string[],
  nonNumericParts: string[],
  startWithNumber: boolean
) => string;

export type removeUselessZerosPropsType = {
  number: string | number;
  returnType?: "string" | "number";
  acceptDecimal?: boolean;
  fixed?: number;
};
