need a file called

<appname>.js, inside of a folder called 'test' ?
and
spec.js

in <leap.js> put:

// first pass of code looks like:
module.exports = {
	calculate : function(){
		return .1; // this is my fancy leap year function object thingy
	}
}
//then change code to look like:
module.exports = {
	calculate : function(earnings){
		return earnings * .1;
	}
}



in spec.js put:
var calc = require("../<appname")

and the tests


to run test, the command in terminal is 'jasmine'


tests:

// describe
// it
// expect
// shouldEqual

// in tests, can we use variables instead of actual numbers?
// yes but you have to assign a value to the variable, in the file, before you run the test


describe ("Tax Calulator", function(){				// name of what I'm testing, or category of things I'm testing
	// write tests below
	it("should return .1 when given $1", function(){		// each test takes the form of an 'it' block
		// here is where we write the actual test
		expect(calc.calculate(1)).toEqual(.1)					// 'calculate' is the name of the function we're looking for
					// 1 is what we are inputting, and .1 is what we want to get returned back to us
		expect(calc.calculate(10)).toEqual(1)		// test the upper limit of my function
	})
	
	it("should tax 7% on the second $10", function(){
		expect(calc.calculate(15)).toEqual(1.05)
	})
});


describe ("underscore clone")(){
	it("should return minimum element in an array"), function(){
		expect.	//... etc
	}
};






