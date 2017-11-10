/**
 * @author Pavel Usachev <webcodekeeper@hotmail.com>
 * @copyright Copyright (c) 2017, Pavel Usachev
 */

var util = {
    "upperCaseRange": {
        "from": 65,
        "to": 90
    },
    "loweCaseRange": {
        "from": 97,
        "to": 122
    },
    "numberRange": {
        "from": 48,
        "to": 57
    },
    "specialSymbolCharCode": {
        "newLine": 10,
        "exclamationPoint": 33,
        "space": 32,
        "question": 63,
        "plus": 43,
        "minus": 45,
        "point": 46
    },
    "offset": 32,
    "ord": String.prototype.charCodeAt.apply.bind(String.prototype.charCodeAt),
    "chr": String.fromCharCode,
    "toUpperCase": function (chr) {
        var chrCode = this.ord(chr);

        if (this.isLowerCaseChar(chrCode)) {
            return this.chr(chrCode - this.offset);
        }

        return chr;
    },
    "toLowerCase": function (chr) {
        var chrCode = this.ord(chr);

        if (this.isUpperCaseChar(chrCode)) {
            return this.chr(chrCode + this.offset);
        }

        return chr;
    },
    "inverseCharCase": function (chr) {
        var chrCode = this.ord(chr);

        if (this.isUpperCaseChar(chrCode)) {
            return this.toLowerCase(chr);
        }

        if (this.isLowerCaseChar(chrCode)) {
            return this.toUpperCase(chr);
        }

        return chr;
    },
    "ucfirst": function (string) {

        var result = '';

        for (var i = 0; i < string.length; i++) {
            if (i === 0) {
                result += this.toUpperCase(string[i]);
            } else {
                result += string[i];
            }
        }

        return result;
    },
    "ucwords": function (string) {
        var result = '';

        for (var i = 0; i < string.length; i++) {
            var prevChar = (i === 0) ? string[i] : string[i-1];
            var prevCharCode = this.ord(prevChar);

            if (prevCharCode === this.specialSymbolCharCode.space) {
                result += this.toUpperCase(string[i]);
            } else {
                result += string[i];
            }
        }

        return result;
    },
    "replace": function (string, fromChar, toChar) {
        var result = '';

        for (var i = 0; i < string.length; i++) {
            result += (string[i] === fromChar) ? toChar : string[i];
        }

        return result;
    },
    "parseNumber": function (string) {
        var pointInString = false;
        var result = '';

        for (var i=0; i < string.length; i++) {

            var charCode = this.ord(string[i]);

            if (this.isNumber(charCode)) {
                result += string[i];
            } else if((charCode === this.specialSymbolCharCode.plus || charCode === this.specialSymbolCharCode.minus) && i === 0 ) {
                result += string[i];
            } else if (charCode === this.specialSymbolCharCode.point && !pointInString) {
                result += string[i];
                pointInString = true;
            } else {
                continue;
            }
        }

        if (result.length === 0) {
            result = 0;
        }

        return result;
    },
    "reverse": function (string) {
        var result = '';

        var i = string.length;

        while (i !== 0 ) {
            result += string[i-1];
            i--;
        }

        return result;
    },
    "isLowerCaseChar": function (chrCode) {
        return chrCode >= this.loweCaseRange.from && chrCode <= this.loweCaseRange.to;
    },
    "isUpperCaseChar": function (chrCode) {
        return chrCode >= this.upperCaseRange.from && chrCode <= this.upperCaseRange.to;
    },
    "isNumber": function (chrCode) {
        return chrCode >= this.numberRange.from && chrCode <= this.numberRange.to;
    }
};

module.exports = {
    "util": util
};