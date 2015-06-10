
// Defining the animal base class
function Animal() {
  this.awake = false;
}

// Member methods
Animal.prototype.speak = function() {
  return "bark";
}

Animal.prototype.feed = function() {
  if (this.awake) {
    return "Nom Nom Nom";
  }

  return "";
}

Animal.prototype.wakeUp = function() {
  this.awake = true;
}

Animal.prototype.sleep = function() {
  this.awake = false;
}


// Child class of animal, Pig
function Pig() {
	Animal.call(this);
}

Pig.prototype = Object.create(Animal.prototype);

Pig.prototype.constructor = Pig;

Pig.prototype.speak = function() {
	return "oink";
}


// Child class of animal, Hippo
function Hippo() {
  Animal.call(this);
}

Hippo.prototype = Object.create(Animal.prototype);

Hippo.prototype.constructor = Hippo;

Hippo.prototype.speak = function() {
  return "roar";
}


// Child class of animal, Monkey
function Monkey() {
  Animal.call(this);
}

Monkey.prototype = Object.create(Animal.prototype);

Monkey.prototype.constructor = Monkey;

Monkey.prototype.speak = function() {
  return "hahahahaHa";
}

var pig = new Pig();
var hippo = new Hippo();
var monkey = new Monkey();

pig.speak();
hippo.speak();
monkey.speak();
