/* Instructions:

Write a function translate that will return a version of the string that has been translated into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example:

translate("this is fun")
//=> "tothohisos isos fofunon"

*/


var translate = function(str){
	// convert the characters in the string into an array
	roArray = [];
	var arrayLength = str.length;
	var vowels = ["a", " e", "i", "o", "u", " ", "."]  // keep a list of characters we do not want to double, to make it easier to edit in the future than comparing to each one at a time
	for (var i = 0; i < arrayLength; i++){
		// original: if (str[i] !== "a" || str[i] !== "e" || str[i] !== "i" || str[i] !== "o" || str[i] !== "u" || str[i] !== " ") {
		// this is okay, but not as nice as using underscore_contains if (vowels.indexOf(str[i]) != -1) {
		// to use underscore in jsbin, click 'add library'
		if (_.contains(vowels, str[i])) {
			roArray = roArray.push(str[i]);
			roArray = roArray.push("o");
			roArray = roArray.push(str[i]);
			// do stuff - concantenate an "o"
			// concantenate the same letter again
			// put into new array
			// roArray.push(x[i]);
			console.log(roArray); // to check
		}
		else {
			roArray = roArray.push(str[i]);
			// put into new array
			console.log(roArray); // to check
		}
	}					// is this in the correct spot?
	 console.log(roArray.join('')); 
	// need to put roArray into new string
};

translate("this is fun");


//cleaned up version:

var translate = function(str){
	roArray = [];
	var arrayLength = str.length;
	var vowels = ["a", " e", "i", "o", "u", " ", "."]  // keep a list of characters we do not want to double, to make it easier to edit in the future than comparing to each one at a time
	for (var i = 0; i < arrayLength; i++){
		roArray.push(str[i]).
		if (!_.contains(vowels, str[i])) { //need to load underscore.js library for this to work, use jsbin
			roArray.push("o" + str[i])
		}
	}

translate("this is fun");






