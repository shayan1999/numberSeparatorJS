# Number Separator js

the main purpose of this project is to help you find numbers in a string and easily separate them every three numbers You can use this both on the client side and in your Nodejs projects.

this project was one of the most usable utilities that I use in my projects so I made this to make my life and yours easier If you have any other ideas we can make it together

## Installation

Install this project easily with npm

```bash
  npm install number-separator-js
```

## Usage/Examples

node js

```javascript
const { numberSeparator, seprateStringNumber } = require("number-separator-js");

let text = "2341";

console.log(numberSeparator({ text }));
console.log(seprateStringNumber(text));
```

client side

```javascript
import { numberSeparator, seprateStringNumber } from "number-separator-js";

let text = "2341";

console.log(numberSeparator({ text }));
console.log(seprateStringNumber(text));
```

## API Reference

#### Separate every number in your string

```http
  numberSeparator({
    text: "-2313.12$ and 234$",
    // it is your main input
    fixed: 3,
    // it will work just like toFixed(x) of js
    seprateMore: false,
    // it will seprate your decimal part too
    symbol: ","
    // you can change separator symbol here
  })
  // it will return "-2,313.12$ and 234$"
```

| Parameter     | Type      | Description               |
| :------------ | :-------- | :------------------------ |
| `text`        | `string`  | **Required**. input text. |
| `fixed`       | `number`  | **Not Required**          |
| `seprateMore` | `boolean` | **Not Required**          |
| `symbol`      | `string`  | **default is ,**          |

#### get numeric and nonNumeric parts of string

```http
  seprateStringNumber("-2313.12$ and 234$");
/*
it will return
    {
      numericParts:[-2313.12, 234],
      nonNumericParts: ["$ and ", "$"]
    }
*/

```

| Parameter | Type     | Description              |
| :-------- | :------- | :----------------------- |
| `text`    | `string` | **Required**. input text |

## License

[MIT](https://choosealicense.com/licenses/mit/)

# Hi, I'm Shayan! 👋

## 🚀 About Me

I am a front-end developer who knows a little bit of back-end you can follow me on my git accounts and LinkedIn

## Authors

- [@shayan1999(github)](https://www.github.com/shayan1999)
- [@shayan1999(gitlab)](https://gitlab.com/shayan1999)
