/**
 * @author Pavel Usachev <webcodekeeper@hotmail.com>
 * @copyright Copyright (c) 2017, Pavel Usachev
 */

const ord = require('./index').ord;
const chr = require('./index').chr;
const fromChCode = 97;
const toChCode = 122;
const newLineCharCode = 10;
const spaceCharCode = 32;
const questionCharCode = 63;
const exclamationPointCharCode = 63;
const pointCharCode = 46;
const offset = 32;

module.exports = function (string) {
    var firstCharToUpperInLine = true;
    var ucFirstString = '';

    for (var i=0; i < string.length; i++) {
        var char = Number(ord(string[i]));
        var prevCharCode = i > 0 ? string[i - 1] : string[i];
        if (char >= fromChCode && char <= toChCode ) {
            if (isLegalCharCode(ord(prevCharCode))) {
                ucFirstString += chr(char - offset);
                firstCharToUpperInLine = false;
            } else {
                ucFirstString += string[i];
            }
        } else {
            ucFirstString += string[i];
        }
    }

    function isLegalCharCode(prevCharCode) {
        console.log(prevCharCode === spaceCharCode);
        return prevCharCode === newLineCharCode
                || prevCharCode === questionCharCode
                || prevCharCode === exclamationPointCharCode
                || prevCharCode === pointCharCode
                || prevCharCode === spaceCharCode
                || firstCharToUpperInLine === true;
    }

    console.log("Your upper case string is `%s`\n\n", ucFirstString);
};