var getDieRoll = function(dieSize) {
	var result = Math.ceil(dieSize * Math.random());
	return result;	
};

var roll = getDieRoll(6);

//while(roll == 2 || roll == 4 || roll ==6) {
//	console.log(roll);
//	roll = getDieRoll(6);	
//}
do {
	roll = getDieRoll(6);
	console.log(roll);
}while(roll == 2 || roll == 4 || roll ==6)

if (roll == 1 || roll == 3 || roll == 5) {
    console.log("Great Roll! :D");		
}
else if (roll == 2){
	console.log("That was an terrible roll :(");	
}
else {
	console.log("That was an okay roll :/");	
};

console.log("You rolled a " + roll)