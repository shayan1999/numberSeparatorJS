function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $0b20331c371742da$exports = {};

$parcel$export($0b20331c371742da$exports, "numberSeparator", () => $0b20331c371742da$export$9307ef80c9b9751c);
$parcel$export($0b20331c371742da$exports, "removeUselessZeros", () => $0b20331c371742da$export$7ea2c3b9897f39d4);
$parcel$export($0b20331c371742da$exports, "separateStringNumber", () => $0b20331c371742da$export$abee473e2046f899);
var $41ad4a9cff39e951$export$4c0a5405fc0dc720 = function(inputString) {
    var numericParts = inputString.match(/[-+]?\d*\.?\d+/g) || [];
    var nonNumericParts = inputString.split(/[-+]?\d*\.?\d+/g);
    return {
        numericParts: numericParts,
        nonNumericParts: nonNumericParts,
        startWithNumber: inputString.search(numericParts[0]) === 0
    };
};
var $41ad4a9cff39e951$export$43aa4c9867d82b6f = function(nonNumericParts) {
    return nonNumericParts.filter(function(part) {
        return part !== "";
    });
};
var $41ad4a9cff39e951$export$c9abc37d5234bc20 = function(numericParts, nonNumericParts, startWithNumber) {
    var result = "";
    for(var i = 0; i < Math.max(numericParts.length, nonNumericParts.length); i++)if (!startWithNumber) result += (nonNumericParts[i] || "") + (numericParts[i] || "");
    else result += (numericParts[i] || "") + (nonNumericParts[i] || "");
    return result;
};


var $0b20331c371742da$var$__spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var $0b20331c371742da$export$9307ef80c9b9751c = function(_a) {
    var text = _a.text, _b = _a.fixed, fixed = _b === void 0 ? null : _b, _c = _a.separateMore, separateMore = _c === void 0 ? false : _c, _d = _a.symbol, symbol = _d === void 0 ? "," : _d, _e = _a.allowUselessZeros, allowUselessZeros = _e === void 0 ? true : _e;
    var _f = (0, $41ad4a9cff39e951$export$4c0a5405fc0dc720)(text), nonNumericParts = _f.nonNumericParts, numericParts = _f.numericParts, startWithNumber = _f.startWithNumber;
    var localNumeric = $0b20331c371742da$var$__spreadArray([], numericParts, true);
    for(var i = 0; i < localNumeric.length; i++){
        var localNumber = "".concat(Number(localNumeric[i]));
        if (fixed !== null && fixed !== undefined) localNumber = "".concat(Number(localNumber).toFixed(fixed));
        if (!allowUselessZeros) localNumber = "".concat($0b20331c371742da$export$7ea2c3b9897f39d4({
            number: localNumber,
            returnType: "string"
        }));
        var parts = localNumber.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, symbol);
        if (separateMore && parts[1]) parts[1] = parts[1].replace(/\B(?=(\d{3})+(?!\d))/g, symbol);
        localNumeric[i] = parts.join(".");
    }
    var result = (0, $41ad4a9cff39e951$export$c9abc37d5234bc20)(localNumeric, (0, $41ad4a9cff39e951$export$43aa4c9867d82b6f)(nonNumericParts), startWithNumber);
    return result;
};
var $0b20331c371742da$export$abee473e2046f899 = function(inputString) {
    var _a = (0, $41ad4a9cff39e951$export$4c0a5405fc0dc720)(inputString), numericParts = _a.numericParts, nonNumericParts = _a.nonNumericParts;
    var noneNumericPartsRemovedEmpty = (0, $41ad4a9cff39e951$export$43aa4c9867d82b6f)(nonNumericParts);
    return {
        numericParts: numericParts,
        nonNumericParts: (0, $41ad4a9cff39e951$export$43aa4c9867d82b6f)(noneNumericPartsRemovedEmpty)
    };
};
var $0b20331c371742da$export$7ea2c3b9897f39d4 = function(_a) {
    var number = _a.number, _b = _a.returnType, returnType = _b === void 0 ? "string" : _b, _c = _a.acceptDecimal, acceptDecimal = _c === void 0 ? true : _c, _d = _a.fixed, fixed = _d === void 0 ? 3 : _d;
    var stringNumber = number.toString();
    if (stringNumber.length <= 2 && stringNumber.includes(".")) return stringNumber;
    var truncatedNumber = acceptDecimal ? +number : Math.trunc(+number);
    var toFixedString = truncatedNumber.toFixed(fixed).toString();
    var newAmount = parseFloat(toFixedString);
    var result = returnType === "string" ? String(newAmount) : newAmount;
    return result;
};


console.log((0, $0b20331c371742da$exports.numberSeparator)({
    text: "hello 1242"
}));
window.separate = function separate(text, symbol, fixed, separateMore, allowUselessZeros) {
    return (0, $0b20331c371742da$exports.numberSeparator)({
        text: text,
        symbol: symbol,
        fixed: fixed,
        separateMore: separateMore,
        allowUselessZeros: allowUselessZeros
    });
};
window.removeUseless = function removeUseless({ number: number, returnType: returnType, acceptDecimal: acceptDecimal, fixed: fixed }) {
    return (0, $0b20331c371742da$exports.removeUselessZeros)({
        number: number,
        returnType: returnType,
        acceptDecimal: acceptDecimal,
        fixed: fixed
    });
};
window.getSeparateItems = function getSeparateItems(text) {
    return (0, $0b20331c371742da$exports.separateStringNumber)(text);
};


//# sourceMappingURL=index.b1223deb.js.map
