

setInterval(function(){ 
	alert("WOOF WOOF"); 
}, 3000);

setTimeout(function(){ 
	alert("Hello"); 
}, 5000);

function alertJustOnce(action1, num1, action2, num2){
	waitID = num1;
	action1(){
		stopID = num2;
		action2();
	}
}

alertJustOnce(function(){
	(function(), num2){
		}, num1);
};

alertJustOnce(function(){
	setInterval(),
	}, 3000);
};

// declare new function alertJustOnce
// pass two timers & two functions into it
// call first function to alert on an interval at first num
// call second functino to stop al
// call both? using ()()




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
