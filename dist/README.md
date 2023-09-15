
# Number Separator JS v0.2.0

Welcome to Number Separator JS, the library that makes working with numbers in string format a breeze. This library offers essential functionality to manipulate and format numbers within a string. Currently, it exports two main functions:

1. `numberSeparator`: This function identifies all numbers within your input string and separates them with commas every three digits.

2. `separateStringNumber`: This function takes a complete string and returns an object with two attributes: `numericParts` (an array of numeric parts) and `nonNumericParts` (an array of non-numeric parts).

by the way you can use this library on both CommonJs and Es6 Modules!

## Installation

You can install Number Separator JS using npm with the following command:

```bash
npm install number-separator-js
```

## Usage

### CommonJS (require)

```javascript
const { numberSeparator, separateStringNumber } = require('number-separator-js');

const formattedString = numberSeparator({
  text: 'Your input string containing numbers',
  symbol: ',', // Optional, replace with your preferred symbol
  fixed: 2,    // Optional, fixes all numbers to two decimal places
  separateMore: true // Optional, separates decimal parts too
});

console.log(formattedString);

const result = separateStringNumber('Your input string containing numbers');

console.log(result.numericParts); // Array of numeric parts
console.log(result.nonNumericParts); // Array of non-numeric parts
```

### ES6 Modules (import)

```javascript
import { numberSeparator, separateStringNumber } from 'number-separator-js';

const formattedString = numberSeparator({
  text: 'Your input string containing numbers',
  symbol: ',', // Optional, replace with your preferred symbol
  fixed: 2,    // Optional, fixes all numbers to two decimal places
  separateMore: true // Optional, separates decimal parts too
});

console.log(formattedString);

const result = separateStringNumber('Your input string containing numbers');

console.log(result.numericParts); // Array of numeric parts
console.log(result.nonNumericParts); // Array of non-numeric parts

```


## Features

- Find all numbers in a string and format them with commas.
- Customize formatting with optional attributes like symbol, fixed, and separateMore.
- Identify and separate numeric and non-numeric parts of a string.



## Contributing

We welcome contributions to make Number Separator JS even better! If you're interested in enhancing this library or have specific ideas in mind, here's how you can contribute:

1. Fork the [Number Separator JS GitHub repository](https://github.com/shayan1999/numberSeparatorJS).
2. Make your changes and improvements.
3. Ensure that your code passes the CI tests.
4. Submit a pull request, and we'll review your changes.

### Contact Information

We also encourage discussions and knowledge sharing! Feel free to reach out on my social media pages, where we can chat and collaborate:

* GitHub: [@shayan1999](https://github.com/shayan1999)
* GitLab: [@shayan1999](https://gitlab.com/shayan1999)
* Telegram: [@shyn99](https://t.me/shyn99)
* LinkedIn: [Ali Rostami](https://www.linkedin.com/in/ali-rostami-shyn/)

Check the "Contributing" section in the project repository for details on future features we're looking to add to this library(Coming Soon).
## License

Number Separator JS is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).


## Acknowledgements

We'll be acknowledging our contributors in this section in the future. Stay tuned for updates!


# Hi, I'm Shayan! 👋



## 🚀 About Me
I am a front-end developer who knows a little bit of back-end you can follow me on my git accounts and LinkedIn

