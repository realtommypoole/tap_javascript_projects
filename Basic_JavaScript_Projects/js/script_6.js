window.alert(Math.random()); //TEST CONNECTION FUNCTION, using this to make sure js is linked properly

function Vehicle(Make, Model, Year, Color) { //CONSTRUCTOR FUNCTION
    this.Vehicle_Mak = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); 
var Emily = new Vehicle ("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle ("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model + 
    " manufactured in " + Erik.Vehicle_Year;
}

function tFunction() { //TERNARY FUNCTION
    var voteable, age;
    age = document.getElementById("Vote").value;
    voteable = (age > 18) ? "Get out and vote":"Register when you turn 18";
    document.getElementById("vote_1").innerHTML = voteable + ", yeah?";
}

function nestedFunction() { //NESTED FUNCTION
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 7;
        function plus_one() {Starting_point +=1;}
        plus_one();
        return Starting_point;
    }
}