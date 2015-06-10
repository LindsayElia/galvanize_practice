function Person(name, notAge, favColor){
	this.name = name;
	this.notAge = notAge;
	this.favColor = favColor;
};

module.exports = Person;		// we can export just the one thing, but we'll need to do it after we define the one thing