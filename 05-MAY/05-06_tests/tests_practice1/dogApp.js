module.exports = {				// a module is an object, just like any other object, 
								// that you name with this format
	
	
bark : function (){
	return "Woof!";
};

play : function (){						// changed format from  function play(){}  to  play : function(){}
	return "the dogs are playing!";
};

}								// put all the stuff I want to export inside of the module object



// main app will always have a bunch of 'require' this & that
// main server file
// have to use 'require' in the variable name when setting it in the reference file? or the export file?

dogApp = {

}
	
	
	part1 = {
		bark : function() {
			
		}
	}
	
	part2 = {
		bark : function() {
			
		}
	}
	


