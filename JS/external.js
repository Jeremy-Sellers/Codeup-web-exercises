console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

var userFavoriteColor = prompt("What is your favorite color?");

alert("Great, " + userFavoriteColor + " is my favorite color too!");

var movieCost = Number(prompt("If you rented movies for 9 days at $3 a day, how much would you have to pay?"));

alert("Total movie cost is " + movieCost + " dollars");

var googlePay = Number(prompt("If you worked for Google for 6 hours at $400 an hour, how much would you be paid?"));

var amazonPay = Number(prompt("If you worked at Amazon for 4 hours for $380 an hour, how much would you be paid?"));

var facebookPay = Number(prompt("If you worked for Facebook for 10 hours for $350 an hour, how much would you be paid?"));

var totalPayment = googlePay + amazonPay + facebookPay;

var totalPayment = alert("Your total pay is " + totalPayment + " dollars");

var classHasRoom = confirm("Does the class have room?")
var scheduleNonConflicting = confirm("Does the class fit your schedule?");

var enrollment = (classHasRoom && scheduleNonConflicting)
if(enrollment){
    alert("You're good to enroll!")
}else{
    alert("You're unable to enroll")
}

var purchasedItems = Number(prompt("How many items have you bought?"));
var offerValid = true;
var premiumMember = confirm("Are you a premiumMember?");

if(offerValid && (purchasedItems >= 3 || premiumMember)){
    alert("You qualify for our special Offer!")
}else{
    alert("Offer not currently available")
}