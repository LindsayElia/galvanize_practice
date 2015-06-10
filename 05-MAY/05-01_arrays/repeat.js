
/*
Exercise Write a function called repeat which takes two arguments: 
the number of times it should repeat, and a function to call each time.
*/


function repeat(times,action) {
	for (i = 0; i < times; i++){
		action(i);
	}
})

repeat(5,console.log("hello"))


// sudo code:
function repeat (num, action){
	loop num times
		call action()
}

//equivalent of calling this num times:
(function(x) {
	console.log("yea");
})()


// example from instructor:
function repeat (num, action){
	for (i = 0; i < num; i++){   // no protection if user enters a negative num
		// console.log("hello class") // my pretend function, that I am repeating 'num' number of times
		action()
	}
}

// then I call...
repeat(5, function() {	
								// I put whatever function I want in here, inside of the brackets
})

// for example:
repeat(5, function() {	
	console.log("woof");
})




// alternative ways of looping through the counter:

function repeat (num, action){
	for (var i = num; i > 0; i--){   // works exactly the same way as above, just a different way to write it
		
	}
	
}


function repeat (num, action){
	var i = 0;
	while (i < num) {			// works same way as above, just a different way to write it
		i++
	}  
}


// another example:

repeat(2, function(){
	alert("Hi Lindsay")    // I change this. Whatever I enter here is what will be repeated 'num' number of times
})



// my original function 'repeat' (below, again)
// is just telling us to repeat whatever function we enter into the call (above here)

function repeat (num, action){    // defining the function 'repeat'
	for (i = 0; i < num; i++){  
		action()
	}
}


repeat (num, function(){		// running the function 'repeat' on a 'num' and any function
	//...write functino here
})




