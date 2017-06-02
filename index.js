var chalk = require("chalk");

var message = "Hello " + chalk.yellow("World") + " "+ chalk.green("OMG!");;

var text = "Wolrd of " + chalk.red("lightHouseLabs");
console.log(message);
console.log(text);

var msg = chalk.black('message');

console.log(msg);