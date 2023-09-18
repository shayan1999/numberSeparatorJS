import {numberSeparator, seprateStringNumber} from "number-separator-js";

console.log(numberSeparator({text: 'hello 1242'}));

window.separate= function separate(text, symbol, fixed, seprateMore){
    return numberSeparator({text, symbol, fixed, seprateMore})
}

window.getSeparateItems= function getSeparateItems(text){
    return seprateStringNumber(text);
}