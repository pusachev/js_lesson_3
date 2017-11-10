/**
 * @author Pavel Usachev <webcodekeeper@hotmail.com>
 * @copyright Copyright (c) 2017, Pavel Usachev
 */

const ord = require('./index').ord;
const chr = require('./index').chr;
const fromChCode = 65;
const toChCode = 90;
const offset = 32;

module.exports = function (string) {
    var upperCaseString = '';

    for (var i=0; i < string.length; i++) {
        var char = Number(ord(string[i]));
        if (char >= fromChCode && char <= toChCode) {
            upperCaseString += chr(char + offset);
        } else {
            upperCaseString += string[i];
        }
    }

    console.log("Your upper case string is `%s`\n\n", upperCaseString);
};