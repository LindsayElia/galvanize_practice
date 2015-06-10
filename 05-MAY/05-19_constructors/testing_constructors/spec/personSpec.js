//var something = require ("../person.js");		// we don't need the .js part of the file name but it's nice to see it :)
var Person = require("../person.js");
var elie;

describe("Person", function(){				// passing 'function()' in as a parameter here is an example of a 'callback'
		beforeEach(function(){				// before each block of testing, define some code that I can re-use in each block of tests
											// we do this by using 'beforeEach'
			elie = new Person("Elie", 27, "purple");	// problem if we use 'var' on this line, then it's not a global variable
		});
		
		describe("Initialization", function(){		// we're describing inside of a describe...woah!
			it ("has a name assigned", function(){	// all we're doing with this initialization is checking that
				expect(elie.name).toEqual("Elie");	// all of our things are defined / exist
			});
			it ("has an age assigned", function(){
				expect(elie.notAge).toEqual(27);
			});
			it ("has a favorite color assigned", function(){
				expect(elie.favColor).toEqual("purple");
			});
		});
		

});