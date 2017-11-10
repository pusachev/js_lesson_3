/**
 * @author Pavel Usachev <webcodekeeper@hotmail.com>
 * @copyright Copyright (c) 2017, Pavel Usachev
 */

const readline = require("readline-sync");

var userInput;

while (userInput != '0') {

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
            require('./functions/ucfirstall')(getString());
            break;
        case 5:
            require('./functions/invers')(getString());
            break;
        case 6:
            require('./functions/replace')(getString());
            break;
        case 7:
            require('./functions/parce-number')(getString());
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
           "(3) string to upper case first letter first word\n" +
           "(4) string to upper case first letter in all words\n" +
           "(5) string inverse case\n" +
           "(6) replace character in string\n" +
           "(7) convert string to int\n" +
           "(0) exit";
}

function getUserChoice()
{
    return readline.question("Please enter you choice: ");
}

function getString()
{
    return readline.question("Please enter a string: ");
}