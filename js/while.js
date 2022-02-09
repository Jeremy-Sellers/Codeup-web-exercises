var counter = 1;
var number = 1
while(counter < 17){
    number = number * 2;
    console.log(number)
    counter++
}

var allCones = Math.floor(Math.random() * 50) + 50;
do{
    var conesSold = Math.floor(Math.random() * 5) + 1;
    console.log(conesSold + " Cone(s) ordered");
    if (conesSold > allCones){
        console.log("I can't sell that many cones I only have " + allCones)
    }else{
    allCones -= conesSold}
    console.log(allCones + " Cone(s) remaining");
    }while(allCones > 0)
console.log("I sold all my cones!")



