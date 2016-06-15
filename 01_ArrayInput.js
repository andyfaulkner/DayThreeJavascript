//Create a click event to accept the values
var event1 = document.getElementById("button1");
    event1.addEventListener('click',addToArray,false);

//Start the main program logic
function addToArray(){
    //set local varibles
    var valueArray = [];
    var outputString = "";
    //Grab user inputs and add to an array
    valueArray[0] = parseInt(document.getElementById("value1").value);
    valueArray[1] = parseInt(document.getElementById("value2").value);
    valueArray[2] = parseInt(document.getElementById("value3").value);
    
    //itterate through the array and print the values to the screen
    for (var i = 0; i < valueArray.length; i++){
         outputString += "The value in array position " + i + " is " + valueArray[i] + "<br>";
    }
    document.getElementById("output").innerHTML = outputString;
}