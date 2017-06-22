var dice = require("./diceDie");
var die = dice.die;

// console.log(dice);

// var die = {
	// size: 6,
    // totalRolls: 0,
	// roll: function(){
	    // var result = Math.ceil(this.size * Math.random());
		// this.totalRolls += 1;
	    // return result;
	// }
// };

die.size=10;
console.log(die.roll());
console.log(die.roll());
console.log(die.roll());
console.log("Total Rolls " + die.totalRolls);

console.log(die);
