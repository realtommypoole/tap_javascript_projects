//SWITCH STATEMENT
function Color_Function () {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch (Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default: 
        Color_Output = "\*Please enter a color exactly as written above.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

//CLASS FUNCTION
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!"; 
}

//CANVAS FUNCTIONS
function draw_Canvas () {
    var c = document.getElementById("can_1");
    var ctx = c.getContext("2d"); 
    ctx.moveTo(0,0);
    ctx.lineTo(150,150)
    ctx.stroke();
}

//LINEAR GRADIENT FUNCTION
function color_Canvas() {
    var c = document.getElementById("can_2");
    var ctx = c.getContext("2d");

    var grd = ctx.createLinearGradient(0, 0, 170, 0);
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");

    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 150, 150);
}


