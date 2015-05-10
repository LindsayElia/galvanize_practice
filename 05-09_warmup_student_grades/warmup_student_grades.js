module.exports = {
	
	comparisonGrade : function (arr){
		// takes one array
		// returns a different array
		// compares each arra items to previous, starting with first two items or second item
		// push to a new array the result of the comparison
		var compareArr = [];
		var result = "";
		for (var i = 0; i < arr.length - 1; i++){
			if (arr[i+1] > arr[i]){
				result = "up";
			} else if (arr[i+1] < arr[i]){
				result = "down";
			} else if (arr[i+1] === arr[i]){
				result = "even";
			}
			compareArr.push(result);
		} return compareArr;
	},
	
	gradeInDecline : function(arr){
		// arr = ["down", "down", "down"], for example
		// only 3 or less items in array => not in decline
		if (arr.length <= 3){
			return "not in decline";
		}
		// if 4 or more items in array...
		//PICK UP HERE
		// my funtion does not know whether "down" or "up" or "even" are greater than or less than or equal to each other. Call functions separately?
		// feed in number values only?
		
		else if (arr.length >= 4){
			for (var i = arr.length; i > 2; i--){
				// if last item in array is larger than 2nd to last item => not in decline
				if (arr[i] > arr[i-1]){
					return "not in decline";
				}
				// if the last 4 items in array are smaller or equal to each previous item => in decline
				else if (arr[i] <= arr[i-1] && arr[i-1] <= arr[i-2] && arr[i-2] <= arr[i-3]){
					return "in decline";
				}
			}
		}
	},	
		
}	// close exports object

