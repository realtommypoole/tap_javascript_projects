function My_First_Function () {         // define the function name
    var str = "This text is blue.";     // define the first variable, a string
    var result = str.fontcolor ("blue");// define a method on that first variable, as a variable
    document.getElementById("Blue_Text").innerHTML = result; //define a method on that second variable, 
}

function myFunction () {        // define the function name
    var sentence = "I am learning";     // define the variable the function will be working on.
    sentence += "a lot from this book!"; // define the second variable of the function
    document.getElementById("Concatenate").innerHTML = sentence; // define the method that will be called on the two variables and where it will result on the page.
}

function myNextFunction () {
    var next = "Here Comes the Sun!";
    var result = next.fontsize("300px");
    document.getElementById("Next_Sun").innerHTML = result;
}
