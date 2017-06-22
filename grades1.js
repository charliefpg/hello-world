var gradeBook = {
    
	_grades1: [],
	
    addGrade: function(newGrade){
		this._grades1.push(newGrade);
		
	},
	
	// getCountOfGrades: function(){
		// return this._grades.length; 
		
	// },
	
	getAverage: function(){
		var total = 0;
		for (var i = 0; i < this._grades1.length; i += 1){
			total += this._grades1[i];			
		}
		return total / this._grades1.length;
	},
	
	reset: function(){
		this._grades1=[];
	},    

};

exports.book = gradeBook;