var parseURL = require("../string_parsing.js")

describe("Query String Parsing", function() {

    it("returns only the string after the '?'", function() { 		expect(parseURL.parseQueryString("http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA")).toEqual("find_desc=tacos&find_loc=San+FranciscoCA");
		expect(parseURL.parseQueryString("http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week")).toEqual("q=dogs&sort=top&t=week");   
    });
	
	xit("returns two arrays from the string", function(){
		expect(parseURL.parseQueryString("find_desc=tacos&find_loc=San+FranciscoCA")).toEqual(["find_desc", "find_loc"],["tacos", "San+FranciscoCA"]);
		expect(parseURL.parseQueryString("q=dogs&sort=top&t=week")).toEqual(["q", "sort", "t"],["dogs", "top", "week"]);
	});
	
	
	xit("", function(){
		expect(parseURL.parseQueryString("")).toEqual("");
		expect(parseURL.parseQueryString("")).toEqual("");
	});
	
	xit("", function(){
		expect(parseURL.parseQueryString("")).toEqual("");
		expect(parseURL.parseQueryString("")).toEqual("");
	});
	
	xit("", function(){
		expect(parseURL.parseQueryString("")).toEqual("");
		expect(parseURL.parseQueryString("")).toEqual("");
	});

/*	////////////////////
  parseQueryString("http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA")
  //=> 
  {	
	 find_desc: "tacos", 
	 find_loc: "San+FranciscoCA"
  }

  parseQueryString("http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week")
  //=> 
  {
	  q: "dogs", 
	  sort: "top", 
	  t: "week"
  }
///////////////////		*/

});





