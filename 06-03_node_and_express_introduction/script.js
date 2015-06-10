var fs = require('fs')
var contents = fs.readFileSync("dogs.txt")

// try running node script.js in the command line (in this same folder)
// and see what this outputs:
// console.log(contents);

// we need to convert it to a string so that it in a format that humans can read
console.log(contents.toString());