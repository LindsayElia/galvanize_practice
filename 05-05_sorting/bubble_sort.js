
var arrayToSort = [45, 13, 8, 27, 81, 33];		// array with data to sort

var bubbleSort = function(arr){
	var sortedArr = arr;					// initialize array to the value of the arrayToSort
											// it will and hold the values while we are sorting
											// making a new array preserves the original array
	
	var compareToMax = function(x,y){			// write a function to compare and return the larger of two values
		if (x >= y) {
			return x;
		} else {
			return y;
		}
	};
	
	var compareToMin = function(a,b){			// write a function to compare and return the smaller of two values
		if (a <= b) {
			return a;
		} else {
			return b;
		}
	};
	
	for (i = 0; i < (arr.length-1); i++){		
		for (i = 0; i < (arr.length-1); i++){	
			var item1 = arr[i];					// temporary variable to hold the first iten in the array at position i
			var item2 = arr[i+1];				// temporary variable to hold the second item in the array at position i

			var largerValue = compareToMax(item1,item2);	// compare the first item in the array to the second, 
			// and define largerValue as the larger of the two items
			// use as a temporary placeholder for later
			var smallerValue = compareToMin(item1,item2);	// define the smaller value as the smaller of the two items
			// use as a temporary placeholder for later
		
			// I want to take both values out of the array and then push them back in in the order I want them
			// push the larger of the two items into the second position
			// next loop moves to the second position and pushes the larger of those two items into the third position
			// repeat
		
			var arrayTemp1 = [];
			var arrayTemp2 = [];
			var arrayTemp3 = [];
		
			// take two items out of the array at position i and insert the smaller of the two items and then the larger of the two 
			// items in that spot
			var arrayTemp1 = sortedArr.splice(arr[i], 2);
			var arrayTemp2 = arrayTemp1.unshift(largerValue);
			var arrayTemp3 = arrayTemp2.unshift(smallerValue);
			return sortedArr;

		}
	}
};

// instructor's example placed the var arrayToSort here rather than at top of file
console.log(bubbleSort(arrayToSort));	// run the functions on the data


// to swap
// var tempArr = arr[rand2];			// these 3 (here, blow) lines are how you do a swap!!!
// arr[temp1] = arr [rand1];		// swap, re-order from the new starting point
// arr[temp2] = temp;				// swap