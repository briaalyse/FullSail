// Personal Conditional

var teenAge = 19;
var minAge = 18;
var wPermitAge = 16

// if the teen is 18 or older, print to the console "you may take the driving test!"
if(teenAge > minAge){
	//code performed if condition is true.
	console.log("You may take the driving test!");
}else if (teenAge > wPermitAge) {
	//you can take the test if you have your permit
	console.log ("if you have your permit, you can take the driving test.")
	
} else{
	//you are not of age to obtain your license
	console.log ("You are not of age to obtain your license.")
}