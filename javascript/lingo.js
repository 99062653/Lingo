import { words } from "../javascript/lingo-nl.js"
var container = document.getElementById("SpeelVeld"); 
var knop = document.getElementById("knop");
knop.onclick = function() { 
    checkWoord(document.getElementById("Input").value);
} 
var randomwoord;
var attempts = 5;
var attempt = 1;
var lettersinput = [];
var lettersrandom = [];

function maakBord(){
    for(var i = 1; i <= 25; i++){
        var blok = document.createElement("div");
        //blok.id = "W" + attempt + "L" + i;
        container.appendChild(blok);
        for(var r = 5; r <= 25; r++){
            blok.id = "W" + r + "L" + i;
        }
    }
}

function randomWoord(){
    randomwoord = words[Math.floor(Math.random() * words.length)];
    console.log(randomwoord);
}

function eersteLetter(){
    var blok1 = document.getElementById("W1L5");
    blok1.innerHTML = "<h1></h1>" + randomwoord[0];
}

function woordPlaatsen(woord){
     lettersinput = [];
     lettersrandom = [];
    
    for (var i = 0; i < woord.length; i++) {
        lettersinput[i] = woord[i];
    }   
    for(var i = 0; i < randomwoord.length; i++){
        lettersrandom[i] = randomwoord[i];
    }
}

function checkWoord(woord){
    attempt++
    woordPlaatsen(woord);
    if(attempt > attempts){
        alert("Helaas, je hebt verloren.");
        location.reload();
    }
    if(woord == randomwoord){
        alert("Je hebt gewonnen!");
        location.reload();
    }
    //var input = document.getElementById("Input").value;
}

maakBord();
randomWoord();
eersteLetter();
