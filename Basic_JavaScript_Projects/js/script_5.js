window.alert(Math.random());

document.write(typeof "Word");
document.write(typeof 3);

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;
}

function my_Function_NaN() {
    document.getElementById("Test_1").innerHTML=isNaN('Hey there');
}

document.write("12"+5);

document.write(-2E310);
document.write(2E319);

document.write(10 < 2);
console.log(4<2);

console.log(2+2);

document.write((10+5)==15);

A = "5"
B = 5
document.write(A===B);
console.log(A===B);

document.write(5>10&&5<10);
document.write(15>10||5>8);

function not_Function() {
    document.getElementById("Not").innerHTML = !(10>5);
}
