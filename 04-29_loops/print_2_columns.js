/*
Instructions:

Print the numbers 1 to 10 and also the number 10 to 1, side by side. The output should look like this:

1  10
2  9
3  8
4  7
5  6
6  5
7  4
8  3
9  2
10  1

*/



/*
for (var i = 0 && var y = 10; i < 10; i++ && y--) {
   console.log((i + 1)+(y))
   	???
}
*/



for (var y = 10; y > 0; y--) {
   console.log(y)
}

for (var i = 0; i < 10; i++) {
   console.log((i+1) + "   " + (10 - i));
}


/*
do the same as above, except this time use a while loop
instead of a for loop
*/


var i = 0
while (i < 10) {
	console.log((i+1) + "   " + (10 - i));
	i++
} 


// or could also do:


var i = 0
var j = 10
while (i < 10) {
	console.log((i+1) + "   " + (j));
	i++;
	j--;
} 



/* 
how to reverse the letters in a word?
*/

//word is kittens
//i is the first letter = k
//j is the last letter = s

var temp = str[i]; 		// set a temporary variable to remember that i is the letter k
strArr[i] = strArr[j];	// set the first letter to the value of the last letter
strArr[j] = temp; 		// set the value of j to temp which is the letter k

// this is how you swap letters
// iterate nuber of time as the length of the word...
// wait, 
// we want to stop swapping when we get to the center of the string
// otherwise we'll just swap all the letters back

// divide length by 2
// what if length is an odd number?

// call this project gnilleps instead of palindrome
// the thing we want to do is to reverse all of the letters, 
// not check to see if they're equal to each other
// gnilleps is the cranium game where you spell words backwards























