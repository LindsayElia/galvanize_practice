
what we want to make:
_.each([..,..,..], function)



var _ = (function() {
	return {
		each : function( arr, funk){      // funk is a blueprint for what I want my function to do
			for (var i = 0; i < arr.length; i++){
				funk(arr[i]); // each magic
			}
		}
	};
	
})(); //self-executing function

_.each([1,2,3,4,5], console.log());