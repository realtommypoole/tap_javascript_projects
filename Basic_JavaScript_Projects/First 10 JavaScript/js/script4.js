window.alert(Math.random());

function myDictionary() {
    var Animal= {
        Species: "dog",
        Color: "black",
        Breed: "Labrador",
        Age: 5, 
        Sound: "Bark!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary_1").innerHTML = Animal.Sound;
    document.getElementById("Dictionary_2").innerHTML = Animal.Breed;
}