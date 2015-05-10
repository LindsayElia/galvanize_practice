/* 
exercise: use forEach to find the minimum value of an array

var numbers = [56,34,-10,99]

numbers.forEach
save in a variable, the lowest value
*/

var minNum = function(x){
	forEach.x
	var min = numbers[0];
	numbers.forEach(function(){    // nested function, parents are around brackets
		if  n < min {
			min = n;
		}
	})
}

var numbers = [56,34,-10,99];

console.log(minNum(numbers));



////check that this works......getting errors when I try in console & jsbin is down

numbers.forEach(function(){
	var min = numbers[0];
	if (n < min) {
		min = n
	}
})

var numbers = [56,34,-10,99];

console.log(minNum(numbers));

// we are looping through, and constantly adjusting that value,
// if the condition is true


