/**
 * @author Pavel Usachev <webcodekeeper@hotmail.com>
 * @copyright Copyright (c) 2017, Pavel Usachev
 */

const readline = require("readline-sync");

var userInput = null;

while (userInput != 0) {

    console.log(getMessage());
    userInput = getUserChoice();

    switch (Number(userInput)) {
        case 0:
            break;
        case 1:
            require('./functions/uppercase')(getString());
            break;
        case 2:
            require('./functions/lowercase')(getString());
            break;
        case 3:
            require('./functions/ucfirst')(getString());
            break;
        case 4:
            require('./functions/ucwords')(getString());
            break;
        case 5:
            require('./functions/invers')(getString());
            break;
        case 6:
            var string = getString();
            var from = readline.question("Please enter a character to be replaced: ");
            var to = readline.question("Please enter a char which will replaced: ");

            require('./functions/replace')(string, from, to);
            break;
        case 7:
            require('./functions/parse-number')(getString());
            break;
        case 8:
            require('./functions/reverse')(getString());
            break;
        default:
            console.log("Invalid input");
            break;
    }
}

console.log("Bye!\n");

function getMessage()
{
    return "Please choose next functions:\n" +
           "(1) string to upper case\n" +
           "(2) string to lower case\n" +
           "(3) ucfirst string\n" +
           "(4) ucwords string\n" +
           "(5) string inverse case\n" +
           "(6) replace character in string\n" +
           "(7) convert string to int\n" +
           "(8) reverse string\n" +
           "(0) exit\n";
}

function getUserChoice()
{
    return readline.question("Please enter you choice: ");
}

function getString()
{
    return readline.question("Please enter a string: ");
}