/*Warm Up
Description: Given a "square" array of subarrays, find the sum of values from the first value of the first array, 
the second value of the second array, the third value of the third array, and so on...

Example 1:

	var exampleArray =

              [[1, 0, 0, 0],		// first item

              [0, 1, 0, 0],			// second item

              [0, 0, 1, 0],			// third item

              [0, 0, 0, 1]]			// 4th item, etc

	diagonalSum(exampleArray) // => 4 

Example 2:

	var exampleArray =

             [[1, 0, 0, 0, 0],

              [0, 1, 0, 0, 0],

              [0, 0, 1, 0, 0],

              [0, 0, 0, 1, 0],

              [0, 0, 0, 0, 1]]

	diagonalSum(exampleArray) // => 5
*/

// want to take the first item of the first array, the matching index of the same array num
// if outerArr.length === 0 then look at innerArray[0]

var diagonalSum = function(array1){
	// console.log("hi");		// test that I set up the program correctly
	var outerArray = array1;
	var counter = 0;
	
	// cycle throught the outer array and push each inner array into new arrays
	for (var i = 0; i < outerArray.length; i++){
	//	console.log(outerArray[i][i]);			// by putting [i][i], that is getting the value within the value at the same spot that the outerArray number we're at
	counter = counter + (outerArray[i][i]);		// save the inner numbers to the sum variable
		console.log(counter);					// check to make sure the counter is working
		 // return counter;
	}	
}

var array1 = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]];
var array2 = [[3,3,5,6,7],[1,2,3,4,5],[3,2,1,4,3],[1,1,1,0,0,],[2,3,4,1,1]];


diagonalSum(array1);
// diagonalSum(array2);



