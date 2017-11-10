/**
 * @author Pavel Usachev <webcodekeeper@hotmail.com>
 * @copyright Copyright (c) 2017, Pavel Usachev
 */

const util = require("./index").util;

module.exports = function (string) {
    console.log("Your ucword string is `%s`\n\n", util.ucwords(string));
};