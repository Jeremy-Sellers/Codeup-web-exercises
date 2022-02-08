var userNumber = prompt("Please enter an odd number between 1 and 50");
while(userNumber %2 == 0){
    userNumber = prompt("Please enter an odd number")
    for(i = 1;i <= 50; i+=2){
        if(userNumber %2 !== 0){
        console.log(i)}
        if(i = userNumber){
            console.log("User Number!")}
    }}

var userInput = prompt("Please choose an odd number");

while(true){
    if(userInput % 2 != 0 && userInput >= 1 && userInput <= 50){
    break;}else{userInput = prompt("please enter an odd number");
    }
}
    for(i = 1; i <= 50; i+=2) {
        console.log(i)
    }if(i = userInput){
    console.log("Skipping user number " + userInput)
}