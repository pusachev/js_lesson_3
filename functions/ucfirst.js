/**
 * @author Pavel Usachev <webcodekeeper@hotmail.com>
 * @copyright Copyright (c) 2017, Pavel Usachev
 */

const ord = require('./index').ord;
const chr = require('./index').chr;
const fromChCode = 97;
const toChCode = 122;
const newLineCharCode = 10;
const offset = 32;

module.exports = function (string) {
    var firstCharToUpperInLine = false;
    var ucFirstString = '';

    for (var i=0; i < string.length; i++) {
        var char = Number(ord(string[i]));
        if (char >= fromChCode && char <= toChCode ) {
            var prevCharCode = i > 0 ? string[i - 1] : string[i];
            if (!firstCharToUpperInLine || Number(ord(prevCharCode) === newLineCharCode)) {
                ucFirstString += chr(char - offset);
                firstCharToUpperInLine = true;
            } else {
                ucFirstString += string[i];
            }
        } else {
            ucFirstString += string[i];
        }
    }

    console.log("Your upper case string is `%s`\n\n", ucFirstString);
};