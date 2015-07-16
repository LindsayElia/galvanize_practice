// var express = require("express");
// var app = express();

var request = require("request");

// app.set("view engine", "ejs");

console.log("1 - hello");
console.log("2 - " + process.argv)

// var inputURL = process.argv[2];
// console.log(inputURL);

var imdbID = process.argv[2];
console.log("3 - " + imdbID);

request.get("http://www.omdbapi.com/?i=" + imdbID + "&plot=short&r=json", function(error, response, body){
	if (error){
		console.log("error: " + error);
	}
	else if (!error && response.statusCode === 200) {
		//console.log(body);	// show the HTML for the URL we are requesting
		var data = JSON.parse(response.body)
		// console.log(data);
		console.log("Title: " +data.Title);
		console.log("Year: " + data.Year);
		console.log("Actors: " + data.Actors);
		console.log("Genre: " + data.Genre);
		console.log("Runtime: " + data.Runtime);
	}
});

console.log("4 - goodbye");

// app.get("/", function(req, res){
// 	res.render("index");
// });

// app.listen(3000, function(){
// 	console.log("server starting on port 3000");
// });