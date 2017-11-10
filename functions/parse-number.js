/**
 * @author Pavel Usachev <webcodekeeper@hotmail.com>
 * @copyright Copyright (c) 2017, Pavel Usachev
 */

const util = require("./index").util;

module.exports = function (string) {
    console.log("Number `%d`\n\n", Number(util.parseNumber(string)));
};