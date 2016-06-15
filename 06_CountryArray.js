//Create the click events to search the array for the country
var event1 = document.getElementById("button1");
    event1.addEventListener('click',searchCountry,false);

//create the array
var countries = ["England", "France", "Italy", "Mexico", 
"Poland", "Russia", "China", "Greece", "Egypt", "India"];

//create the search array function
function searchCountry(){
    var search = document.getElementById("value1").value;
    for (var i = 0; i < countries.length; i++){
        //Search the array to see if the country is present
        if (search == countries[i]){
            document.getElementById("output").innerHTML = countries[i] + " exists in the array at location " + [i];
            break;
        } 
        //Output if country isn't found
        else if (i == (countries.length - 1)){
            document.getElementById("output").innerHTML = "The country " + search + " does not exist in this array";
        }
    }
}