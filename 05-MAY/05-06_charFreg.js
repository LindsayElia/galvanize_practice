/*
Write a function charFreq that takes a string and builds a frequency list of the characters contained in it. Represent the frequency list with a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").


"abaccbbf"

should output:

{
	a : 2
	b : 3
	c : 2
	f : 1
}

Tells me how many times the character is represented. 
The character is the key and the number of times is the value.

*/


var charFreq = function(str){
	var arrayOfChars = [];
	// convert strings to characters?
	
	for ( i = 0; i < str.length; i++){
	// assign first item in array = str.charAt(index)
		var thing = str.charAt(i);
		arrayOfChars.push(thing);
	}
	return arrayOfChars;
};


var randomListOfChar = "abaccbbf";
console.log(charFreq(randomListOfChar));


/* review with instructor:

look and see if the char already is in the object,
if it is, add one
if not, set it to one

*/

function charFreq(str) {		// this is the function expression that retains the NAME of the function, it is always called this. The way I wrote the function expression above, the variable name is referring to the function, it is not the NAME of the function, and so it can be re-defined or re-written later and I would be losing the function.
	// this is why Zubair recommended that I use this type of function expression, so that the 'charFreq' does not get altered later
	var list = {};  			// we want to create an OBJECT, not an ARRAY
	for ( i = 0; i < str.length; i++){
		var char = str.charAt(i);
		if(list[char]){				// here we are saying, if the character IS in the list
			// if this is empty, or null, it is value of falsiness (not 'false' but falsiness)
			list[char] += 1 		// this accesses the item and adds one
		} else {					// here we are saying, if the character IS NOT in the list
			list[char] == 1			// this accesses the item and sets it equal to one. This will work on the first time the object sees a new character.
			// this sets the character as the 'key' and the value, one, as the 'value'
		}
	}
	return list;
};

console.log(charFreq(randomListOfChar));


These are two ways of saying the same thing:
str[3]   -- this option does not work on all browsers, specifically, IE7
str.charAt() -- this option will work on all browsers, is the "safer" and more compatible versions


favColors = {};
favColors("Anders") = "Blue"

should return an dobject with a key-value pair of 
Anders : Blue



