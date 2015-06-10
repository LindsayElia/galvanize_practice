var mongoose = require("mongoose");		// require mongoose for this file
mongoose.connect("mongodb://localhost/dog_park");	//connect to wherever our database lives, in this case, on our computer and 
//the name of the database we are using is dog_park
mongoose.set("debug", true);		//this line logs what mongoose is doing in the command line for us, to help with debugging

// set up a schema to tell us what all of our dog items must contain
var dogSchema = new mongoose.Schema({
	name: String,
	breed: String,
	age: Number
});

// make a variable that is an instance of the schema we just defined above
var Dog = mongoose.model("Dog", dogSchema);

// make a new dog #1
// we can do it this way, by coping this whole chunk & creating a new one for each dog, or
// making an array inside of this one where we create the object, so we don't repeat ourselves
// Dog.create({		// array would go around this object like [{name: "Charlie", breed: "Lab", age: 2},{...},{...}]
// 	name: "Charlie",
// 	breed: "Lab",
// 	age: 2
// },
// function(error, dogData){
// 	if(error){
// 		console.log("sorry there's an error: " + error)
// 	}
// 	else {
// 		console.log("here's the dog you just created: " + dogData)
// 	}
// })

// make a new dog #2
// Dog.create({
// 	name: "Wyatt",
// 	breed: "Lab",
// 	age: 11
// },
// function(error, dogData){
// 	if(error){
// 		console.log("sorry there's an error: " + error)
// 	}
// 	else {
// 		console.log("here's the dog you just created: " + dogData)
// 	}
// })

// // make a new dog #3
// Dog.create({
// 	name: "Sitka",
// 	breed: "Malamute",
// 	age: 2
// },
// function(error, dogData){
// 	if(error){
// 		console.log("sorry there's an error: " + error)
// 	}
// 	else {
// 		console.log("here's the dog you just created: " + dogData)
// 	}
// })

// my solution to the exercise in class
// Dog.find(function(error, dogData){
// 	if (error){
// 		console.error(error);
// 	}
// 	else {
// 		console.log(dogData); //not done yet...!
// 	}
// });

// Dog.find({age:1});

// Colt's solution:
// the first {} here (on the next line of code) is optional, just like when we do db.library.find()
// // in the command line when running mongo, we can use db.library.find() or db.library.find({})
// Dog.find({},function(error, dogData){
// 	if (error){
// 		console.error(error);
// 	}
// 	else {
// 		var dogPack = dogData;
// 		dogPack.forEach(function(dog({
// 			console.log(dog.name + " says woof!");
// 		})))
// 	}
// })

// Colt's solution to update
// same as code above, except replace Dog.find with Dog.update


//2nd exercise: 

// 1: Your dog had a new litter of 4 puppies! You decided on names 
// already: ["Tater", "Garfunkel", "Luna", "Remus"] Loop through this array of 
// names and create a new Dog for each one. Set age to 0 and breed to Mutt

// my solution:
// Dog.create([
// 	{name: "Tater"},
// 	{name: "Garfunkel"},
// 	{name: "Luna"},
// 	{name: "Remus"}
// ],
// function(error, dogData){
// 	if(error){
// 		console.log("sorry there's an error: " + error)
// 	}
// 	else {
// 		console.log("here's the dog you just created: " + dogData)
// 	}
// })

// Dog.update({},{age:0, breed:"Mutt"},{multi:true}, function(error, dogData){
// 	if (error){
// 		console.error(error);
// 	} else {
// 		console.log("success!");
// 	}
// });

//Colt's solution:
["Tater","Garfunkel", "Luna", "remus"].forEach(function(name){
	Dog.create({
		name: name,
		breed: "Mutt",
		age: 0
	}, function (err, dog){
		console.log("done");
		console.log(dog);
	})
})


// 2: OH NO!!! Garfunkel's mom accidentally stepped on him and crushed him :( Remove him from the database

// Dog.remove({name:"Garfunkel"}, function(error, dogData){
// 	if(error){
// 		console.error(error);
// 	} else {
// 		console.log("successfully removed item(s)");
// 	}
// })

//3: It's the new litter's first birthday! Find all dogs that are 0 years old and update them to be 1!

Dog.update({age:0},{age:1},{multi:true}, function(error, dogData){
	if(error){
		console.error(error);
	} else {
		console.log(dogData);
	}
})

