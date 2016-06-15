//Global varible declaration
var valueArray = [];

//Create a click event to accept the values
var event1 = document.getElementById("button1");
    event1.addEventListener('click',addToArray,false);

//Start the main program logic
function addToArray(){
    //declare local varible for printing
    var outputString = "";
    
    //Grab user inputs and add to an array then increase the count
    valueArray.push(parseInt(document.getElementById("value1").value));
    
    //itterate through the array and print the values to the screen
    for (var i = 0; i < valueArray.length; i++){
         outputString += "The value in array position " + i + " is " + valueArray[i] + "<br>";
    }
    //Output the array to the screen
    document.getElementById("output").innerHTML = outputString;
}