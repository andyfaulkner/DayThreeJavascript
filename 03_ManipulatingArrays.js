//Global varible declaration
var randomArray = [];

//Create a load method to create an array of random numbers and show on DOM
document.addEventListener('load',randomArrayMethod(),false);

//Create the click events to call the different methods
var event1 = document.getElementById("shift");
    event1.addEventListener('click',shiftMethod,false);
var event2 = document.getElementById("unShift");
    event2.addEventListener('click',unshiftMethod,false);
var event3 = document.getElementById("push");
    event3.addEventListener('click',pushMethod,false);
var event4 = document.getElementById("pop");
    event4.addEventListener('click',popMethod,false);

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

//Create shift method
function shiftMethod(){
    randomArray.shift();
    arrayToScreen();
}

//Create unshift method
function unshiftMethod(){
    randomArray.unshift(Math.floor((Math.random() * 1000) + 1));
    arrayToScreen();
}

//Create push method
function pushMethod(){
    randomArray.push(Math.floor((Math.random() * 1000) + 1));
    arrayToScreen();
}

//Create pop method
function popMethod(){
    randomArray.pop();
    arrayToScreen();
}