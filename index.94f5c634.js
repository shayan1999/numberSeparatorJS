function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $61000601cd85ff1a$exports = {};

$parcel$export($61000601cd85ff1a$exports, "numberSeparator", () => $61000601cd85ff1a$export$9307ef80c9b9751c);
$parcel$export($61000601cd85ff1a$exports, "seprateStringNumber", () => $61000601cd85ff1a$export$fdd5b7207c7e6394);
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


var $61000601cd85ff1a$var$__spreadArray = undefined && undefined.__spreadArray || function(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var $61000601cd85ff1a$export$9307ef80c9b9751c = function(_a) {
    var text = _a.text, _b = _a.fixed, fixed = _b === void 0 ? null : _b, _c = _a.seprateMore, seprateMore = _c === void 0 ? false : _c, _d = _a.symbol, symbol = _d === void 0 ? "," : _d;
    var _e = (0, $41ad4a9cff39e951$export$4c0a5405fc0dc720)(text), nonNumericParts = _e.nonNumericParts, numericParts = _e.numericParts, startWithNumber = _e.startWithNumber;
    var localNumeric = $61000601cd85ff1a$var$__spreadArray([], numericParts, true);
    for(var i = 0; i < localNumeric.length; i++){
        var localNumber = "".concat(Number(localNumeric[i]));
        if (fixed !== null && fixed !== undefined) localNumber = "".concat(Number(localNumber).toFixed(fixed));
        var parts = localNumber.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, symbol);
        if (seprateMore && parts[1]) parts[1] = parts[1].replace(/\B(?=(\d{3})+(?!\d))/g, symbol);
        localNumeric[i] = parts.join(".");
    }
    var result = (0, $41ad4a9cff39e951$export$c9abc37d5234bc20)(localNumeric, (0, $41ad4a9cff39e951$export$43aa4c9867d82b6f)(nonNumericParts), startWithNumber);
    return result;
};
var $61000601cd85ff1a$export$fdd5b7207c7e6394 = function(inputString) {
    var _a = (0, $41ad4a9cff39e951$export$4c0a5405fc0dc720)(inputString), numericParts = _a.numericParts, nonNumericParts = _a.nonNumericParts;
    var noneNumericPartsRemovedEmpty = (0, $41ad4a9cff39e951$export$43aa4c9867d82b6f)(nonNumericParts);
    return {
        numericParts: numericParts,
        nonNumericParts: (0, $41ad4a9cff39e951$export$43aa4c9867d82b6f)(noneNumericPartsRemovedEmpty)
    };
};


console.log((0, $61000601cd85ff1a$exports.numberSeparator)({
    text: "hello 1242"
}));
window.separate = function separate(text, symbol, fixed, seprateMore) {
    return (0, $61000601cd85ff1a$exports.numberSeparator)({
        text: text,
        symbol: symbol,
        fixed: fixed,
        seprateMore: seprateMore
    });
};
window.getSeparateItems = function getSeparateItems(text) {
    return (0, $61000601cd85ff1a$exports.seprateStringNumber)(text);
};


//# sourceMappingURL=index.94f5c634.js.map
