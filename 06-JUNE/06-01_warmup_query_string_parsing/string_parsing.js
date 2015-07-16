/*
Warmup - Query String Parsing

Query strings are often used to pass data from one "page" to another, through the URL. The query string is a list of key-value pairs at the end of a URL. The query string always starts with a ?, and the key-value pairs are separated by &'s. Take a look at the following examples:

http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA

http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week

Write a function called parseQueryString which takes a URL string as an argument and returns a Javascript object containing the key-value pairs from the query string. For example:

*/

parseQueryString("http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA")
//=> 
	{
		find_desc: "tacos", 
		find_loc: "San+FranciscoCA"
	}

parseQueryString("http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week")
//=> {q: "dogs", sort: "top", t: "week"}



module.exports ={
	
	parseQueryString : function(urlString){
		var breaker;
		for (var i =0; i < urlString.lentgh; i++){
			if ([i] === "?"){
				breaker = [i]
			}
		}
		
		url.split("?") // does the same thing - this is what I was trying to do!
		// splits into two items in a new array
		//we want to get the 2nd of the two items, or the last item in the new array we've just made
		//we would get more than two items if there were more than one "?" in our original string
		url.split("?")[1]
		//or
		url.split("?").length-1
		//or
		url.split("?").pop()
		
		// then split again using the "=" instead of the "?"
		// assign to new variable
		
		result = { pair[0] : pair[1]}		// my idea...not kosher?
		result[pair[0]] = pair[1];	// assign the value at index 1 to be the value of the variable named after index 0
		
		return result; //object containing the key-value pairs;
		
		
		// we want to split by the ?
		// then split by the &
		// then take each item from the array we split by the &
		// and do a forEach or a map to split them into pairs with variable-value
		// we started by making result = {}
		// and in our forEach we are adding to the object 'result'
	},
	
	

	
}
























