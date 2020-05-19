//METHOD WITHIN AN OBJECT
//let car = {
  //  make: "Dodge ",
  //  model: "Viper ", 
  //  year: "2021 ", 
  //  color: "red ", 
  //  description: function () {
  //      return "The car is a " + this.year + this.color + this.make + this.model;
 //   }
//};
document.getElementById("Car_Object").innerHTML = car.description();

//RETRUN 
//function myFunction(name) {
//    return "Hello " + name;
//    document.getElementById("Demo").innerHTML= return;
//}



//STRING LENGTH PROPERTY
function find_Length() {
    var str = "Hello World";
    var n = str.length; 
    document.getElementById("length").innerHTML = n;
}

//FOR LOOP
function for_Loop() {
    var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var Content = "";
    var Y;
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br><br>";
    }
    document.getElementById("List_Instruments").innerHTML = Content;
}

//LOOP FUNCTION
function Call_Loop() {

}


//WHILE FUNCTION
function count_to_Ten() { //Define function name.
    var Digit = ""; //define first variable, to be entered by user or zero if nothing entered?
    var X = 1; //define second variable, where counting will start.
    while (X < 11) { //define loop that will do the actual work of the function, the subfunction. 
        Digit += "<br>" + X; //+= sums up left and right operands and assigns them to the Digit variable. As long as that is less than 11, it will print and increment.
        X++; //this is the part that increments the number. 
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit; //This finds the location in the HTML code to change values and display information. 
}

//array loop 
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping"; 
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + 
        Cat_Picture[2] + ".";
}

function fruit_Array() {
    var fruits = ["banana", "mango", "strawberry", "apple"];
    var Content = "";
    var F;
    for (F = 0; F < fruits.length; F++) {
        Content += fruits[F] + "<br><br>";
    }
    document.getElementById("Array").innerHTML = Content;
}

//CONSTANT FUNCTION
function constant_function() {
    const BP = {type: "Van", make: "Sprinter", color: "black", name: "The Black Pearl"}
    //BP.color = "grey"
    BP.price = "$1000"
    document.getElementById("Constant").innerHTML = "The cost of the " + BP.make + BP.type + " affectionately known as "
    + BP.name + " is " + BP.price + " ; oh, and it's " +BP.color + ".";
}

//LET KEYWORD

var I = 45;
document.write (I);
{ 
    let I = 3;
    document.write("<br>"+ I);
}
document.write("<br>"+ I);

//BREAK STATEMENT
function count_to_Ten_b() { //Define function name.
    var Digit = ""; //define first variable, to be entered by user or zero if nothing entered?
    var X = 1; //define second variable, where counting will start.
    while (X < 11) { //define loop that will do the actual work of the function, the subfunction. 
        Digit += "<br>" + X; //+= sums up left and right operands and assigns them to the Digit variable. As long as that is less than 11, it will print and increment.
        X++; //this is the part that increments the number.
        if (X === 5) {break; } //break at five.  
    }
    document.getElementById("breaker").innerHTML = Digit; //This finds the location in the HTML code to change values and display information. 
}

//CONTINUE STATEMENT
//function count_to_Ten_c() {
   // var Digit =""
   // var X = 1;
    //while (X < 11) {
      //  Digit += "<br>" + X;
      //  X++; 
      //  if (X === 3) { continue; }
    //}
    //document.getElementById("continue_1").innerHTML = Digit;
//}
