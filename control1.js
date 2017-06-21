var getDieRoll = function(dieSize) {
	var result = Math.ceil(dieSize * Math.random());
	return result;	
};

// var things =  [1, 2, 3, "pizza"]
// console.log(things[3]);
// for(var i = 0; i < things.length; i++){
//   console.log(things[i]);

for(var i = 0; i < process.argv.length; i++){
	console.log(process.argv[i]);
	console.log(i);
}

var roll = getDieRoll(6)

//for(var i = 0 ; i < roll ; i += 1) {
for(var i = 0 ; i < 10 ; i += 1) {
	if (roll >= 4){
		console.log("*");
	}
     
    else if(roll <= 3){
	    console.log("-");	
	}		
//	console.log(roll);
//  roll = getDieRoll(6);
};

// var i = 0;
// while(1 < 10) {
	//...
//	i += 1;
//}

if(roll >= 3 && roll <= 5) {
    console.log("Great Roll! :D");		
}
else if(roll == 2){
	console.log("That was an terrible roll :(");	
}
else {
	console.log("That was an okay roll :/");	
};

console.log("You rolled a " + roll)