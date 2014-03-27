//Conditonals Personal

var moisturizeSkin = true
var deepMoisturizer = true

if(moisturizeSkin){
	//if skin moisturizing is true, print to console "You have smooth skin!"
	console.log("You have smooth skin!")
}else{
	console.log("OMG, I am breaking out!")
}

(moisturizeSkin = false && deepMoisturizer) ? console.log("You have smooth Skin!") : console.log("OMG, I am breaking out!")