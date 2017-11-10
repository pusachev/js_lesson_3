/**
 * @author Pavel Usachev <webcodekeeper@hotmail.com>
 * @copyright Copyright (c) 2017, Pavel Usachev
 */

const util = require("./index").util;

module.exports = function (string, fromChar, toChar) {
    console.log("Your replaced string is `%s`\n\n", util.replace(string, fromChar, toChar));
};