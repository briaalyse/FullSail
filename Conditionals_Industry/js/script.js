//Conditional Industry

var deadlineMet = 10;
var maxDeadline = 12;
var submissionTime = 1;
var approvedExtenstion = true;

//if the student meets the 12 o'clock deadline, print to console "full credit for the assignment!"
//if the deadline met is 10
if(deadlineMet + submissionTime < maxDeadline){
	//code performed if condition is 12
	console.log("full credit for the assignment!");
}else{
	console.log("Sorry, points will be deducted")
}

(deadlineMet && approvedExtenstion) ? console.log("full credit for the assignment") : console.log("Sorry, points will be deducted!")
