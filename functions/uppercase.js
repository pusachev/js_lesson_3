/**
 * @author Pavel Usachev <webcodekeeper@hotmail.com>
 * @copyright Copyright (c) 2017, Pavel Usachev
 */

const util = require('./index').util;

module.exports = function (string) {
    var result = '';

    for (var i=0; i < string.length; i++) {
       result += util.toUpperCase(string[i]);
    }

    console.log("Your upper case string is `%s`\n\n", result);
};