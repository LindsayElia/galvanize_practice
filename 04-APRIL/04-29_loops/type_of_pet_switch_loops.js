var typeOfPet = prompt("What type of pet do you have?");
switch (typeOfPet) {
    case "dog":
       console.log("A " + typeOfPet + " is a normal pet");
       break;
    case "cat":
       console.log("A " + typeOfPet + " is a normal pet");
       break;
    case "parrot":
       console.log("A " + typeOfPet + " is a normal pet");
       break;
    case "liger":
       console.log("WOW! You have a liger.  You are so cool!");
       break;
    default:
       console.log("I have never heard of that type of pet");
       break;
}


/// is exactly the same as

var typeOfPet = prompt("What type of pet do you have?");
switch (typeOfPet) {
    case "dog":
    case "cat":
    case "parrot":
       console.log("A " + typeOfPet + " is a normal pet");
       break;
    case "liger":
       console.log("WOW! You have a liger.  You are so cool!");
       break;
    default:
       console.log("I have never heard of that type of pet");
       break;
}


/// while saving duplicate typing.
// the switch & case option checks dog then moves to check OR cat then moves to check OR parrot, then if none of these, it goes to liger