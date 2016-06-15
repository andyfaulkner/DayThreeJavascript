//Global varible declaration
var randomArray = [];

//Create a load method to create an array of random numbers and show on DOM
document.addEventListener('load',randomArrayMethod(),false);

//Create the click events to call the splicing method
var event1 = document.getElementById("button1");
    event1.addEventListener('click',spliceMethod,false);

//Create the random array function and print to screen
function randomArrayMethod(){
    for (var i = 0; i < 10; i++) {
        randomArray[i] = Math.floor((Math.random() * 1000) + 1)
    }
    arrayToScreen();
}

//Create print to screen function to reuse in each method
function arrayToScreen(){
    var outputString = "";
    for (var i = 0; i < randomArray.length; i++){
        outputString += "The value in array position " + i + " is " + randomArray[i] + "<br>";
    }
    document.getElementById("output").innerHTML = outputString;
}

//Create the splice function and update the screen
function spliceMethod(){
    var valueToAdd = document.getElementById("value1").value;
    var position = (parseInt(document.getElementById("value2").value));
    randomArray.splice(position, 0, valueToAdd);
    arrayToScreen();
}