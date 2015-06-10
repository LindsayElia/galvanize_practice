/*
Warmup - backronyms
Write a function that takes an acronym as an argument and returns a sentence that it could represent.

Example: backronym('ABCD'); // => April Building Caller District

Notes:

You can chose what words are returned.
Each letter may represent the same word every time.

Stretch Goals
Return a variety of words for each letter. Don't return the same word every time. 
(It's okay if it eventually repeats, but the 'user' should think it is pretty much random).
*/


// get the string of letters
// parse the string of letters
// loop through the items in the lettersArr
// when a match is found, take that index # and then
// return the index number from the wordsArr



var comma = ",";
var stringToSplit = "B,C,D";

function splitString(stringToSplit, separator){
	var arrayOfStrings = stringToSplit.split(separator);
	return arrayOfStrings;
}

// console.log(splitString(stringToSplit, comma));

var backronym = function(arrayOfStrings){
	
	var lettersArr = ["A", "B", "C", "D", "E,"];
	var wordsArr = ["Amazing ", "Beautiful ", "Cats ", "Dogs ", "Elephants "];
	var resultArr = [];
	
	for (var i = 0; i < lettersArr.length; i++){
		// my comparison is not quite working, this is comparing the first item in the inputArr
		// to the first item in the lettersArr, 
		// and instead I want it to loop
		
		if (arrayOfStrings[i] == lettersArr[i]){
			resultArr.push(wordsArr[i]);
		}
	}
	return resultArr;
};


// console.log(backronym(tempString, comma));


// input: backronym('ABCD'); 
// => Amazing Beautiful Cats Dogs





// *********** CLASS NOTES ******************  
// *********** CLASS NOTES ****************** 
// *********** CLASS NOTES ******************  





// can use a switch statement to analize all the cases, 
// if typing all of them out like David did

// key-value pair
// look for the keys in the object
// "A" being the key and "Amazing " being the value

var dictionary = {
	"A" : "Amazing"
	"B" : "Beautiful"
}

// these will both work to get the letters out of the string
// str[i]
// str.charAt[i]
// rather than using str.split(separator);

for (var i = 0; i < str.length; i++){
	answer += dictionary[str[i]];
}

console.log(answer);

// we can expand our dictionary to add more words

var dictionary = {
	"A" : ["Amazing", "Aardvark", "Aha"]
	"B" : ["Beautiful", "Bongos", "Baby"]
	"C" : ["Cats", "Custard", "Coolio"]
}

// add a counter and increase the count each time the letter is used
var frequency = {
	"A" : 0;
	"B" : 0;
	"C" : 0;
}

for (var i = 0; i < str.length; i++){
	// answer += dictionary[str[i]][index];
	var index = frequency[str[i]];
	answer += dictionary[str[i]][index]
	// dictionary [ "A"] [ 3 ]
	frequency[str[i]] += 1;
	
}
