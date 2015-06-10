// NOTES from 5/20/15 review of class & prototypes
/*
var pig = new Pig();
var hippo = new Hippo();
var monkey = new Monkey();
So for the 3 examples, there are 3 different functions that create 3 different objects. 

Each object should be able to do the following things:
awake - this should default to false
speak() - a method that returns "oink!" for the pig object, "roar!" for the hippo object, 
and "hahahahaHA!" for the monkey object.
feed() - if the animal is awake, return "NOM NOM NOM"
wakeUp() - a method that changes the awake property to true
sleep() - a method that changes the awake property to false
Exercise

Implement the above 3 objects. Make sure that speak works correctly for each type of animal. 
HINT You should be doing a lot of copying and pasting. You should be asking yourself, there must be a better way!

*/

function Pig(false){
	this.awake = awake
};

var pig = new Pig();

Pig.prototype.speak = function(){
	
}


Pig.prototype.speak = function(){
	
}



// ***************  AFTER LUNCH  ***************

/*
Exercise

Type Object.prototype and Cat.prototype into the console. Expand the tabs on the cat prototype. 
Look at the __proto__ property. What do you notice?

*/




/*
Exercise

Rewrite the earlier exercise to use inheritance. Have the Pig, Hippo and Monkey inherit from the Animal class.
*/









