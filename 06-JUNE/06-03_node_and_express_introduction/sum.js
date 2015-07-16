/* Write a script called sum.js which will console.log the sum of all provided numeric arguments. 
When we call node sum.js 4 30 1, it should print out 35.  */

var total = 0;

// var nums = [4,30,1];


for (var i = 2; i < process.argv.length; i++) {  // replace nums.length with process.argv.length
									// we want to start at 2 because when we run console.log in Node
									// the result is ALWAYS 'node' then 'filename' then our results
	total = total + parseInt(process.argv[i]);		// replace nums[i] with process.argv[i]	
									// we need to put it inside of parseInt because it comes in as a string??
	
	return total;
}									



console.log();		// not sure we don't need to pass anything in here??


// *********** from Daily Plan / Colt's version: *********

var total = 0
for(var i = 2; i < process.argv.length; i++){
    total += parseInt(process.argv[i])
}
console.log(total)