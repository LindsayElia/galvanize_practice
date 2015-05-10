// splice

// remove 'c'

// array.splice(start, deleteCount[, item1[, item2[, ...]]])

var arr = ['a', 'b', 'c'];
var remove = arr.splice(2,1);
console.log(arr);



var myObj = { name: "Tim", position: "Instructor"};
console.log(myObj[pet]);


/* 
print:
Thompson's number
Green's position
The entire object that represents Curry.
*/

var players = [
    {name: 'Curry', number: '30', position: 'point guard'},
    {name: 'Thompson', number: '11', position: 'shooting guard'},
    {name: 'Barnes', number: '40', position: 'small forward'},
    {name: 'Green', number: '23', position: 'power forward'},
    {name: 'Bogut', number: '12', position: 'center'}

];

var myObj = {};

console.log(myObj.players[1].number);
console.log(myObj.players[3].position);
console.log(myObj.players[0]);

// real answer:

var players = [
    {name: 'Curry', number: '30', position: 'point guard'},
    {name: 'Thompson', number: '11', position: 'shooting guard'},
    {name: 'Barnes', number: '40', position: 'small forward'},
    {name: 'Green', number: '23', position: 'power forward'},
    {name: 'Bogut', number: '12', position: 'center'}

];

console.log(players[1].number);
console.log(players[3].position);
console.log(players[0]);




var isPrime = function(x){
	var number = x;
	if (number === (number / 1) && (number / number)){
		console.log("true");
	}
	else {
		console.log("false");
	}
};









