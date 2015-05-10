/* 5/8/15 notes on recursion

Recursion is when you call a function from inside of itself
so you make the function, and then inside of it, you call the same 
function name to use it again.

Be careful of getting stuck in an infinite recursion, similar to an infinite loop.

you need just 2 things:
1. a base case(s)
2. recursive step

what is recursion?

written:
5!

means
5 * 4 * 3 * 2 * 1

take a number and multiple by every number below it, until you get to one

0! = 1
(exception)

we want to write a function that takes a number and returns the factorial

*/

function factorial(n){
	// 2 temp variables?
	// for loop from 1 to n
	// multiple each number (temp var1) by previous number (temp var2)
	// return result
}

factorial(5);
//=> 120

factorial(3);
//=> 6


// one example:
		result = n;
		while (n > 0){
			n -= 1;
			result *= n;
		} 
		return result;










