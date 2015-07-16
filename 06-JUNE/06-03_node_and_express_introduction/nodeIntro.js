var otherModule = require("fs");		// we can name this variable whatever, but the module we are using is the fs module
var contents = otherModule.readFileSync("dogs.txt");

var _ = require(underscore.js);	// for example, as compared to linking to the underscore.js library when running JavaScript in the browser



//need to convert to string in order for command line to not print the result as a bunch of 'buffer' numbers
//we add .toString() to the end of any results we return, like so:
contents = "hello";
console.log(contents.toString())
