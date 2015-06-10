// making a comparator operator between the computer and human. It works!! :)
var compScoreCounter = 0;
var humanScoreCounter = 0;

function compRando() {
	var compGuess = Math.floor(Math.random() * 3);
	// console.log(compGuess);

	if (compGuess === 0) { 
		console.log(0);	;
		return 0;

	} else if (compGuess === 1) {
		console.log(1);
		return 1;
	
	} else if (compGuess === 2) {
		console.log(2);
		return 2;	
	}
}

function humanRando() {
 
	var humanGuess = prompt("Choose one: 'rock', 'paper', or 'scissors'. Don't use quotes please");

	
	if (humanGuess === 'rock') { 
		console.log(0);	
		return 0;

	} else if (humanGuess === 'paper') {
		console.log(1);
		return 1;
	
	} else if (humanGuess === 'scissors') {
		console.log(2);;
		return 2;	
	
	} else {
		alert("Try again!");
		userRando();
	} 	
}


function compareGuesses(compRando, humanRando) {
	if (compGuessHolder === humanGuessHolder) {
		alert("It's a tie, I hate you! Play again.");
	}
	else if (compGuessHolder === 0 && humanGuessHolder === 1) {
		alert("You won this time! Play again.");
		humanScoreCounter += 1;
	} 
	else if (compGuessHolder === 0 && humanGuessHolder === 2) {
		alert("Sorry, the computer wins this time. Play again.");
		compScoreCounter += 1;
	}
	else if (compGuessHolder === 1 && humanGuessHolder === 0) {
		alert("Sorry, the computer wins this time. Play again.");
		compScoreCounter += 1;
	}
	else if (compGuessHolder === 1 && humanGuessHolder === 2) {
		alert("You won this time! Play again.");
		humanScoreCounter += 1;
	}
	else if (compGuessHolder === 2 && humanGuessHolder === 0) {
		alert("You won this time! Play again.");
		humanScoreCounter += 1;
	}
	else if (compGuessHolder === 2 && humanGuessHolder === 1) {
		alert("Sorry, the computer wins this time. Play again.");
		compScoreCounter += 1;
	}

}


// make the computer guess first so that it doesnt cheat!!!

var compGuessHolder = compRando();
var humanGuessHolder = humanRando();

// compRando();
// userRando();
compareGuesses();
console.log(compScoreCounter);
console.log(humanScoreCounter);