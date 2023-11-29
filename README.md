# Number Separator JS v0.3.0

Welcome to Number Separator JS, the library that makes working with numbers in string format a breeze. This library offers essential functionality to manipulate and format numbers within a string. Currently, it exports two main functions:

1. `numberSeparator`: This function identifies all numbers within your input string and separates them with commas every three digits.

2. `separateStringNumber`: This function takes a complete string and returns an object with two attributes: `numericParts` (an array of numeric parts) and `nonNumericParts` (an array of non-numeric parts).

3. `removeUselessZeros`: This function take a numeric amount(called number but it can be a number or string) and If the number is decimal, Deletes useless zeros after the decimal point.

by the way you can use this library on both CommonJs and Es6 Modules!

## Demo

you can checkout demo of the project in this [link](https://shayan1999.github.io/numberSeparatorJS/)

## Installation

You can install Number Separator JS using npm or yarn with the following commands:

```bash
npm install number-separator-js
# or
yarn add number-separator-js
```

## Changes in this version

we added removeUselessZeros function to this library thanks to [@mary139](https://github.com/mary139)
so now you can use it directly or use some of it functionalities from our basic numberSeparator function (check usage part)
and we added test cases on repo for our contributors and reliability of project.

## Usage

### CommonJS (require)

```javascript
const {
  numberSeparator,
  separateStringNumber,
  removeUselessZeros,
} = require("number-separator-js");

const formattedString = numberSeparator({
  text: "Your input string containing numbers",
  symbol: ",", // Optional, replace with your preferred symbol
  fixed: 2, // Optional, fixes all numbers to two decimal places
  separateMore: true, // Optional, separates decimal parts too
});

console.log(formattedString);

const result = separateStringNumber("Your input string containing numbers");

console.log(result.numericParts); // Array of numeric parts
console.log(result.nonNumericParts); // Array of non-numeric parts

const resultNumber = removeUselessZeros({
  number: "12.000", // it takes both string or numbers
  returnType: "number", // Optional, it takes "number" | "string" for the return type
  acceptDecimal: true, // Optional, it's default value is true change it to false if you want to remove decimal part of number
  fixed: 2, // Optional, fixes all numbers to two decimal places
});

console.log(resultNumber);
```

### ES6 Modules (import)

```javascript
import {
  numberSeparator,
  separateStringNumber,
  removeUselessZeros,
} from "number-separator-js";

const formattedString = numberSeparator({
  text: "Your input string containing numbers",
  symbol: ",", // Optional, replace with your preferred symbol
  fixed: 2, // Optional, fixes all numbers to two decimal places
  separateMore: true, // Optional, separates decimal parts too
  allowUselessZeros: false, // Optional, the default value is true if you set it to false it will remove useless zeros for you
});

console.log(formattedString);

const result = separateStringNumber("Your input string containing numbers");

console.log(result.numericParts); // Array of numeric parts
console.log(result.nonNumericParts); // Array of non-numeric parts

const resultNumber = removeUselessZeros({
  number: "12.000", // it takes both string or numbers
  returnType: "number", // Optional, it takes "number" | "string" for the return type
  acceptDecimal: true, // Optional, it's default value is true change it to false if you want to remove decimal part of number
  fixed: 2, // Optional, fixes all numbers to two decimal places
  allowUselessZeros: false, // Optional, the default value is true if you set it to false it will remove useless zeros for you
});

console.log(resultNumber);
```

## Features

- Find all numbers in a string and format them with commas.
- Customize formatting with optional attributes like symbol, fixed, and separateMore.
- Identify and separate numeric and non-numeric parts of a string.
- remove useless zero of numbers for example : 012.00 => 12

## Contributing

We welcome contributions to make Number Separator JS even better! If you're interested in enhancing this library or have specific ideas in mind, here's how you can contribute:

1. Fork the [Number Separator JS GitHub repository](https://github.com/shayan1999/numberSeparatorJS).
2. Make your changes and improvements.
3. Ensure that your code passes the CI tests.
4. Submit a pull request, and we'll review your changes.

# Contributors

[Maryam Alishahi](https://github.com/mary139): our first contributor We owe remove useless zero function to her

### Contact Information

We also encourage discussions and knowledge sharing! Feel free to reach out on my social media pages, where we can chat and collaborate:

- GitHub: [@shayan1999](https://github.com/shayan1999)
- GitLab: [@shayan1999](https://gitlab.com/shayan1999)
- Telegram: [@shyn99](https://t.me/shyn99)
- LinkedIn: [Ali Rostami](https://www.linkedin.com/in/ali-rostami-shyn/)

Check the "Contributing" section in the project repository for details on future features we're looking to add to this library(Coming Soon).

## License

Number Separator JS is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

## Acknowledgements

in this version we get our first contributor [Maryam](https://github.com/mary139)

We'll be acknowledging our contributors in this section in the future. Stay tuned for updates!

# Hi, I'm Shayan! 👋

## 🚀 About Me

I am a front-end developer who knows a little bit of back-end you can follow me on my git accounts and LinkedIn
