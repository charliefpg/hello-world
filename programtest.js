var book = require("../lib/grades1").book;


exports["Can average grades"] = function(test){
	book.addGrade(90);
	book.addGrade(85);
	book.addGrade(72);
	
	var average = book.getAverage();
    
	test.equal(average, 82.33333333333333);
	test.done();
	
};