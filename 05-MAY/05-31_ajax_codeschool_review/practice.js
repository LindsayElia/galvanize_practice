// this is from following along with the examples on https://www.codeschool.com/courses/jquery-the-return-flight
// Level 1 Ajax Basics

$(document).ready(function(){ 	// all the examples for the ajax lesson in codeschool are using jQuery
	$("#tour").on("click", "button", function(){
			$.ajax("/photos.html",{						// if we use .ajax here, then
				success: function (response){			// we don't need this line
					$.("photos").html(response).fadiIn();
			}
		});
	});
});		
	

