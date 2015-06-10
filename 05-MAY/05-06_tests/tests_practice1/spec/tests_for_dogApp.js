var externalCode = require("../dogApp.js");  // if I move this file into a different folder, I need to include the path, like ../dogApp.js or wherever it is, otherwise it won't be able to fine it

// can call 'bark' but must refer to external code, first, in the other 
// file people are using to reference my files

externalCode.bark()		// this will run the bark funtion in the dogApp.js file
						// I can name 'externalCode' to be anything, 
						// other people just need to use it