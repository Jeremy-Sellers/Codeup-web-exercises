"use strict";

// alert("Hello, world");

// var userChoice = confirm("We've been trying to reach you about your vehicles extended warranty!")
// console.log(userChoice);
//
// if(userChoice){
//     alert("Thanks for renewing your warranty!")
// }else{
//    alert("You should really consider it!")
//}
var currentSpeed = Number(prompt("How fast are you going right now?"));
console.log("your current speed is " + currentSpeed);

var plannedSpeedIncrease = Number(prompt("How many more miles per hour do you plan to go?"));

var newSpeed = currentSpeed + plannedSpeedIncrease;

alert("your planned speed is " + newSpeed);

var distanceLeft = Number(prompt("How far do you still have to go?"));

var timeToDestinationAtCurrentSpeed = (distanceLeft/currentSpeed) * 60;
alert("the time to destination at current speed is "+ timeToDestinationAtCurrentSpeed + " minutes");

var timeToDestinationAtNewSpeed = (distanceLeft/newSpeed) * 60;
alert("The time to destination at new speed is " + timeToDestinationAtNewSpeed + " minutes");