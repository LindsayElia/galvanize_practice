var app = require("../warmup_student_grades.js")

describe("something to do with grades", function(){

		it("to return an array showing up, down, or even when comparing items in the array to the previous item", function(){
			expect(app.comparisonGrade([6,3,5,4,3,4,4,5])).toEqual(["down","up","down","down","up","even","up"]);
			expect(app.comparisonGrade([])).toEqual([]);
		});
		
		it("to return 'in decline' when there are 3 decreasing grades in a row", function(){
			// expect(app.gradeInDecline([10, 9, 8, 7])).toEqual(["down", "down", "down"]);
			expect(app.gradeInDecline([10, 9, 8, 7])).toEqual("in decline");
			// expect(app.gradeInDecline([10, 10, 10, 9, 9, 8, 8, 8, 8, 7])).toEqual(["even", "even", "down", "even", "down", "even", "even", "even", "down"]);
			expect(app.gradeInDecline([10, 10, 10, 9, 9, 8, 8, 8, 8, 7])).toEqual("in decline");
		});
		
		it("to return 'not in decline' when there are not 3 decreasing grades in a row", function(){
			// expect(app.gradeInDecline([10, 9, 8, 7, 8])).toEqual(["down", "down", "down", "up"]);
			expect(app.gradeInDecline([10, 9, 8, 7, 8])).toEqual("not in decline");
			// expect(app.gradeInDecline([10, 9, 8])).toEqual(["down", "down"]);
			expect(app.gradeInDecline([10, 9, 8])).toEqual("not in decline");
		});
		
});
