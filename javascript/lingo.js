import {words} from "./lingo-nl.js"
var container = document.getElementById("SpeelVeld");
var submit = document.getElementById("submit");
submit.onclick = InputValue;

for(var i = 1; i <= 25; i++){
    var blok = document.createElement("div");
    container.appendChild(blok);
    blok.id = "Blok_" + i;
}

function InputValue(){
    var input = document.getElementById("input").value;

    if(input.length > 5){
        alert("Je input is te lang. Maximaal 5 letters.");
    }
}

function randomWoord(){
    var randomwoord = words[Math.floor(Math.random() * words.length)];
    console.log(randomwoord);

    var woordstuk = randomwoord.split;
    console.log(woordstuk);
}

function woordRaden(){
    var hint = document.getElementById("Blok_1");

}

randomWoord();
