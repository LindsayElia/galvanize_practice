var callLeapYear = require("../leapYearCalc.js")

// include "Spec.js" as the end of all file names that Jasmine uses

// name of what I'm testing, or category of things I'm testing
describe("Leap Year Calculator", function(){	
	// write tests below
	
	// each test takes the form of an 'it' block
	it("should return true when given 1600", function(){		
		// here is where we write the actual test
		expect(callLeapYear.knownTrues(1600)).toEqual(true)	
		// 'leapYearCalc' is the name of the function we're looking for
	});
	
	it("should return true when given 2000", function(){
		expect(callLeapYear.knownTrues(2000)).toEqual(true)
	});
	
	it("should return false when given 1700", function(){
		expect(callLeapYear.knownFalses(1700)).toEqual(false)
	});
	
	it("should return false when given 1800", function(){
		expect(callLeapYear.knownFalses(1800)).toEqual(false)
	});
	
	it("should return false when given 1700", function(){
		expect(callLeapYear.knownFalses(1900)).toEqual(false)
	});
	
	it("should return false when given a number not divisble by 4", function(){
		expect(callLeapYear.divisibleByFour(3)).toEqual(false)
	});
	
	it("should return true when given a number divisble by 4", function(){
		expect(callLeapYear.notDivisibleByFourHundred(4)).toEqual(true)
	});
	
	it("should return false when given a number divisble by 100 and not divisible by 400", function(){
		expect(callLeapYear.notDivisibleByFourHundred(500)).toEqual(false)
	});
	
	it("should return true when given a number divisble by 100 and divisible by 400", function(){
		expect(callLeapYear.notDivisibleByFourHundred(400)).toEqual(true)
	});

});