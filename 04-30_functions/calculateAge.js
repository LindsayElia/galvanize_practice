// FUNCTIONS!!!!!	

/* 
Write a function called calculateAge that takes 2 arguments: 
birth year and current year. Calculate the 2 possible ages 
based off of the arguments, and output the result to the 
screen like so: "You are either 46 or 47". 

BONUS: Figure out how to get the current year in JavaScript instead of passing it in.
*/

/*
var blah = 3;

var calulateAge = function(x,y){
	birthYear = 1981;
	currentYear = 2015;
	return birthYear + currentYear;
};

// var saySomething = prompt("You are either " + blah + " or " + blah + ".");

prompt("Hello");
*/




var calulateAge = function(birthYear, currentYear){
	var age1 = currentYear - birthYear;
	var age2 = currentYear - birthYear - 1;
	console.log("You are either " + age1 + " or " + age2 + ".");
}















