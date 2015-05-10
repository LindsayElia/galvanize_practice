/*
What is TDD?
1. Decide what the code will do
2. Write a test that will pass if the code does that thing
3. Run the test, see it fail
4. Write the code
5. Run the test, see it pass
*/ 

/*
Instructions:
Write tests for a leap year calculator. Write a function which takes a year as an argument 
and returns true if it's a leap year and false otherwise. Here are the rules we'll use:

Every year whose number is perfectly divisible by four is a leap year,
except for years which are both divisible by 100 and not divisible by 400.
1600 and 2000 are leap years, but the century years 1700, 1800, and 1900 are not.

Start by identifying a bunch of test cases
Write a test
Make it pass
Write a test
Make it pass
Repeat a bunch of times
*/

/* my code should do what?
define a function or object? that is leapYear
take in a numerical value for year input
check to see if the input year is divisible by four
it is, say it's a leap year
	or move on to next condition
if NOT, say it is NOT a leap year

if year is divisible by 100 AND NOT divisible by 400, say it is NOT a leap year
if it is divisible by both, say that it is a leap year 

if year is 1600 or 2000 then it is a leap year
if year is 1700, 1800, or 1900, then it is NOT a leap year


*/


module.exports = {
	knownTrues : function(num){
		if (num === 1600 || num === 2000){
			return true;
		} 
	},
	
	knownFalses : function(num){
		if (num === 1700 || num === 1800 || num === 1900){
			return false;
		} 
	},
	
	divisibleByFour : function(num){
		if (num % 4 === 0){
			return true;
		} else {
			return false;
		}
	},
	
	notDivisibleByFourHundred : function(num){
		if (num % 100 === 0 && !(num % 400 === 0)){
			return false;
		} else {
			return true;
		}
	},

};

/*
var year = 2015;
console.log(knownTrues(knownFalses(divisibleByFour(notDivisibleByFourHundred(year)))));
*/













