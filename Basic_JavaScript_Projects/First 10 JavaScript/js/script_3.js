var A = "Crazy Digits";
var b = "Hey!";

window.alert(Math.random());
document.write(A);

var r = 4;
r++;
document.write(r);

var t = 6.7;
t--;
document.write(t);

function negation_Operator () {
    var x = 10;
    document.getElementById("math_1").innerHTML = -x;
}

function modulus_Operator() {
    var simple_Math = 25 % 6; 
    document.getElementById("math_2").innerHTML = "When you divide 25 by 6 you have a remainder of:" + simple_Math;
}

function division_Function() {
    var simple_Math = 12/4;
    document.getElementById("math_3").innerHTML = "12 divided by 4 = "+simple_Math;
}

function multiplication_Function() {
    var simple_Math = 6 * 8;
    document.getElementById("math_4").innerHTML = "six multiplied by 8 ="+simple_Math;
}

function addition_Function() {
    var addition= 3 + 4;
    document.getElementById("math_5").innerHTML = "3 + 4 =" + addition;
}

function subtraction_Function() {
    var Subtraction = 5 - 2;
    document.getElementById("math_6").innerHTML = Subtraction;
}

function myNextFunction () {
    var next = "Here Comes the Sun!";
    var result = next.fontsize("300px");
    document.getElementById("Next_Sun").innerHTML = result;
}
