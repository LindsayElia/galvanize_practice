var app = require("../map.js")

/*
describe("the map function", function(){			// describe is the way to group multiple tests together
													// I could also write this out as a named function, but that's silly because we won't need to call the same tests more than once
	
	it("maps a function to a new array", function(){	// want this to refer to one function and have the tests inside of this all have to do with this function
		expect()
		expect()
		expect()				// you can put multiple 'expect's into the same test
								// if any of them fail, the whole test will fail
		
		
	})
	
	it("throws an error when missing a function argument", function(){
		
	})
})


// What should does the map.js code look like?

function double(x){
	return x * 2;
}

map([1,2,3], double) // I do NOT want to pass in 'double()' because it will run the function immediately and we do not want that
// should give back [2,4,6]


// what the fuck is the 'map' function? are we making it up? is it a thing?


// we could also write it like this, to be anonymous:

map([1,2,3], function(x){
	return x*2;
})

// and if I want to execute this, I would put () at the end of that function
// in this example, the (x) is passing in a varable
// in the previous example, () just after 'function name' aka 'double' would be executing the function

*/

// full version:
// NOTE: I HAVE SOME PARENTHESIS / BRACKETS ISSUES WITH THIS SO DON'T COPY IT VERBATIM!!!

describe("the map function", function(){
	
	it("maps a function to a new array", function(){
		
		expect(app.map([1,2,3], function(x){
			return (x * 2);
		})).toEqual([2,4,6]);
	
		expect(app.map(["jAyA", "anDERS", "matthew"], function(str){
			return str.toUpperCase();
		})).toEqual(["JAYA", "ANDERS", "MATTHEW"]);
	
	});
	
	it("handles invalid arguments", function(){
		expect(app.map([1,2,3])).toEqual("You need to pass in a function");
		/* expect(app.map(function(){
			return					// we would write typeOf to check for the array first, expecting a string or a list of numbers, so we can check that the array is passed
			// javascript only tests in the order things are input
			// so the way this is written, javascript will think 'function...' is the array and it would pass the test
		*/
		}))
	
	
	});

});













