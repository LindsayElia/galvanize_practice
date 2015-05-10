
function bubbleSort(arr) {
	// do a first pass by writing the function to sort through all of the items *just once*
	// use console.log to print out what is happening, just so
	// I can see what is going on with my code!
	for(var i = 0; i < arr.length; i++){
// console.log(arr);			// this console.log is just to see where I am
	
		for(var j = 0; j < arr.length; j++){
			if(arr[j] > arr[j+1]){

// console.log(arr);			// this console.log is just to see where I am

			var temp = arr[j];		// swap the things!
			arr[j] = arr[j+1];
			arr[j+1] = temp;
			}
		}
// console.log(arr);			// this console.log is just to see where I am
	} console.log(arr);
							// if we want to return a separate array, in addition to console.log 'ing it,
							// will need to return a new array
							// default of libraries is to return a new array, preserving the old one
							// when I see bubbleSort!(numbers) that usually means that the function is descructive, and
							// the original array is destroyed or replaced with the sorted info
};

var numbers = [45,1,4,6];
bubbleSort(numbers);


// we can still optimize to not go through all of the items if they were not swapped during the last pass through
// do not compare last item in each successive loop through i

// also can optimize to stop once the array is sorted, and not continue through the loop i
// figure out when to stop? if no swaps, break the loop

// we'll be doing these this afternoon