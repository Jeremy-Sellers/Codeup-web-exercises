
function showMultiplicationTable(number){
    for(var i = 1; i <= 10; i++){
        console.log(number * i)
    };
};

for (i = 0; i < 10; i++){
   var randomNumber = Math.floor(Math.random() * 200) + 3
if(randomNumber % 2 === 0){console.log(randomNumber + " is even")}else{
    console.log(randomNumber + " is odd")}
};

for (var i = 0; i <= 100; i++){
    console.log(i);
}

for(i = 1; i < 10; i++){
    var j = i.toString()
    console.log(j.repeat(i))
};


var number = 105
for (i = 0; i <= 19; i++){
    console.log(number-=5)
};