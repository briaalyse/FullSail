//Conditional Wacky

var laughsInADay = 11;
var minLaughs = 10;
var energyDrinks = 1;

if(laughsInADay < minLaughs){
	//if laughs in a day is less than min laughs, print to console "why are you so serious??"
	console.log("why are you so serious??")
}else{
	console.log("you are so silly today!")
}

(laughsInADay > minLaughs && energyDrinks) ? console.log("you are super hyper!") : console.log("are you tired??")