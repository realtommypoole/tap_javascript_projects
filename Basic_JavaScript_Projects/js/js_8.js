//Upper Case Method
function upperCase () {
    var str = "Hello World!"
    var res = str.toUpperCase();
    document.getElementById("Upper").innerHTML = res;
}

//Concatenate method
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//Slice Method
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy."
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

//Search Method
function search_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy."
    var Search = Sentence.search("no");
    document.getElementById("Search").innerHTML = Search;
}

//String Method
function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//Precision Method
function precision_Method() {
    var X = 1236.234236880;
    document.getElementById("Precision").innerHTML = X.toPrecision(8);
}

//To Fix Method
function fix_Method() {
    var X = 23423.2342342
    document.getElementById("Fixed").innerHTML = X.toFixed(2); 
}

//Value of Method
function value_Method() {
    var str =  "Hello"
    var res = str.valueOf();
    document.getElementById("Value").innerHTML = res;
}