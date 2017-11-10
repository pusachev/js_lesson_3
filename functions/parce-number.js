/**
 * @author Pavel Usachev <webcodekeeper@hotmail.com>
 * @copyright Copyright (c) 2017, Pavel Usachev
 */

const ord = require('./index').ord;
const chr = require('./index').chr;
const fromChCode = 48;
const toChCode = 57;
const plusCharCode = 43;
const minusCharCode = 45;
const pointCharCode = 46;

module.exports = function (string) {
    var pointInString = false;
    var number = '';

    for (var i=0; i < string.length; i++) {
        var char = Number(ord(string[i]));
        if (char >= fromChCode && char <= toChCode ) {
            number += string[i];
        } else if((char === plusCharCode || char === minusCharCode) && i === 0 ) {
            number += string[i];
        } else if (char === pointCharCode && !pointInString) {
            number += string[i];
            pointInString = true;
        } else {
            continue;
        }
    }

    if (number.length === 0) {
        number = 0;
    }

    console.log("Number `%d`\n\n", Number(number));
};