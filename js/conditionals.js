"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(string){
    if(string === "red"){
        return "Tomatos are red"
    } else if(string === "blue"){
        return"The sky is blue";
    }else if(string === "orange"){
        return"An orange is orange";
    }else if(string === "yellow"){
        return"Lemons are yellow";
    }else if(string === "green"){
        return"Limes are green";
    }else {return"I dont know anything about " + string};
};
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function analyzeColorSwitch(string) {
    switch (string) {
        case "red":
            console.log("tomatos are red");
            break;
        case "orange":
            console.log("oranges are orange");
            break;
        case "yellow":
            console.log("lemons are yellow");
            break;
        case "green":
            console.log("Limes are green");
            break;
        case "blue":
            console.log("The sky is blue");
            break;
        default:
            console.log("I dont know anything about " + randomColor);
            break;
    }
}

console.log(analyzeColorSwitch(randomColor));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userColor = prompt("Choose a color");
var returnValue = analyzeColor(userColor);
alert(returnValue);

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(num1, num2){
    if(num1 === 0){
        var discount0 = 0;
       return "your total is " + num2;
    }else if(num1 === 1){
        var discount1 = .1;
        return "your total is " + (num2 - (num2 * discount1));
    }else if(num1 === 2){
        var discount2 = .25;
        return "your total is " + (num2 - (num2 * discount2));
    }else if(num1 === 3){
        var discount3 = .35;
        return "your total is " + (num2 - (num2 * discount3));
    }else if(num1 === 4){
        var discount4 = .5;
        return "your total is " + (num2 - (num2 * discount4));
    }else if(num1 === 5){
        var discount5 = 1;
        return "your total is " + (num2 - (num2 * discount5));
    }
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
 //Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 6);

 var userBill = prompt("What is your total bill?");
 var totalAfterDiscount = calculateTotal(luckyNumber,userBill);
alert("your lucky number is " + luckyNumber);
alert("your price before discount was " + userBill + " dollars");
alert("your price after discount is " + totalAfterDiscount + " dollars");
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
var userDecision = confirm("Would you like to enter a number?");

if(userDecision){
    var inputNumber = Number(prompt("Please enter number here"))
}

    if (typeof inputNumber === "number" && !isNaN(inputNumber)){
        alert("input is a valid number");
        if (inputNumber % 2 === 0){
        alert("Your number is even");
        }else{alert("Your number is odd")};

        alert("Your number plus 100 is " + (inputNumber + 100));

        if(inputNumber > 0){
        alert("Your number is positive")
        }else {alert("Your number is negative")};}
        else{alert("input is an invalid number")};
