// notes from 5/19/15 introduction to class & prototypes

function Person(name, age, height, favPet){
  this.name = name;
  this.age = age;
  this.height = height;
  this.favPet = favPet;
  this.sayHi = function (){
    alert(this.name);
  };
}

var lindsayPerson = new Person("lindsay", 33, 5.2, "Raya");

lindsayPerson.sayHi();




////


function House(baths, bedrooms, sqF){
  this.a = baths;
  this.b = bedrooms;
  this.c = sqF;
}

House();

House.prototype.expand = function(){
  this.sqF = this.sqF + 1000;
};

var linHouse = new House(2,4,2000);

linHouse.expand();


////


function House(baths, bedrooms, sqF){
  this.a = baths;
  this.b = bedrooms;
  this.c = sqF;
}

var linHouse = new House(2,4,2000);

House.prototype.addToNeighborhood = function(){
  // this.neighborhood.push(House.instanceOf.this);
  // wrong...! neighborhood.push(House.instanceOf.this);
    if (linHouse instanceOf House){
      this.neighborhood.oush(linHouse);
  }
};


var newArr = [1,2,3];
newArr.indexOf();
// returns

newArr.indexOf();
// returns

// if it is not in the array, it is equal to -1
// if the indexOf returns nothing, it returns -1