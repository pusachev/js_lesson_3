/**
 * @author Pavel Usachev <webcodekeeper@hotmail.com>
 * @copyright Copyright (c) 2017, Pavel Usachev
 */

const readline = require("readline-sync");
const ord = require('./index').ord;
const chr = require('./index').chr;

module.exports = function (string) {


    var replacedString = '';

    for (var i=0; i < string.length; i++) {
        if (string[i] === charToReplace[0]) {
            replacedString += replaceChar[0];
        } else {
            replacedString += string[i]
        }
    }

    console.log("Your replaced string is `%s`\n\n", replacedString);
};