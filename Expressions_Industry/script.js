//Industry Expressions
//Bria Shaw
//March 31, 2014

//The balance in the account is the result of the deposits minus the withdrawals and fees

var depositOfFunds = 3459; //this is the sum of all of the checks and cash deposits made to the account. 
var depositOfFunds = prompt("enter amount of all deposits", 3459);
var withdrawalOfFunds = 2903; //this is the sum of all of the cash and checks disbursed from the account. 
var withdrawalOfFunds = prompt("enter amount of all withdrawals", 2903);
var accruedFees = 206; //this the sum of the maintenance, membership and overdraft fees taken from the account.
var accruedFees = prompt("enter amount of all fees", 206);
var accountBalance = "Your account balance is" + depositOfFunds - withdrawalOfFunds - accruedFees + ".";
// the account balance can be found when you take the amount from the deposits, subtract the amount from 
//the withdrawals and subtract the amount from the fees. 
console.log(accountBalance);

