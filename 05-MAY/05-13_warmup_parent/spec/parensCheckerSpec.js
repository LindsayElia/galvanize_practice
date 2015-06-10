var app = require("../parensChecker.js")

describe("The parenthesis checker", function(){
	
	it("returns true if parenthesis are in matching pairs", function(){
		expect(app.parensChecker("()")).toEqual(true);
		expect(app.parensChecker("(())")).toEqual(true);
		expect(app.parensChekcer("()(((())))")).toEqual(true);
	})
	
	xit("returns false if parenthesis are not in matching pairs", function(){
		expect(app.parensChecker("(")).toEqual(false);
		expect(app.parensChecker(")")).toEqual(false);
		expect(app.parensChecker(")(")).toEqual(false);
		expect(app.parensChecker("())))(")).toEqual(false);
	})
	
	
});