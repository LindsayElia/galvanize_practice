module.exports = {				// this is just an object, so we can put things in it or not, and call things from outside into it????
	map : function(arr, func){
		// show error string message if no func passed in
		if(!func){
			return "You need to pass in a function";
		}
		
		
		// make a new result array
		var result = [];
		// loop through array
		for (i = 0; i < arr.length; i++){
			// apply func to each value in arr
			// add the new value to a new array
			// one way to write this:    result[i] = func(arr[i]); 
			// - - OR - - we can write it like this:
			value = func(arr[i]);
			result.push(value);
		}
		return result;
	}
	
}