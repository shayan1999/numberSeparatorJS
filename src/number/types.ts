export type numberSeparatorProps = {
  text: string;
  fixed?: number;
  seprateMore?: boolean;
  symbol?: string;
};

export type numberSeparatorFuncType = (numberSeparatorFuncType) => string;

export type seprateStringNumberType = (inputString: string) => {
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
