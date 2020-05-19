window.alert(Math.random());

var X = 10;
var Y = 11;

function add_1() {//define function 'add_1'
    document.write(X + Y + "<br>"); 
}

function add_2() {
    var B = 23
    document.write (X + B + "<br>");
}

function add_3 () {
    document.write (Y + B);
}

console.log (add_3);//run function 'add_3' in the console log
add_1(); //run the function 
add_2();
//add_3();

//Greeting function
function get_Date() {
    if (new Date().getHours()<12) {
        document.getElementById("Greeting").innerHTML = "Good morning!";
    }
}

function Age_Function() {
    age = document.getElementById("age").value; //retreive input value that user entered on page
    if (age>=18) { //if function with conditional statement
        Vote= "You are old enough to vote."
    }
    else { //the other branch of the if statement if conditional statement is false, do this.
        Vote = "You are not old enough to vote."
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote; //type correct statement based on logic in this element of the HTML document. 
}

//time function
function Time_function() {
    var Time = new Date ().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon time!";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}