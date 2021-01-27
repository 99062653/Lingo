import { words } from "../javascript/lingo-nl.js"
var container = document.getElementById("SpeelVeld"); 
var knop = document.getElementById("knop");
knop.onclick = function() { 
    checkWoord(document.getElementById("Input").value);
}
var randomwoord;
var attempts = 5;
var attempt = 0;
var lettersinput = [];
var lettersrandom = [];

function maakBord(){
    for(var l = 1; l <= 5; l++){
        for(var i = 1; i <= 5; i++){
            var blok = document.createElement("div");
            blok.id = "W" + l + "L" + i;
            container.appendChild(blok);   
        }
    }
}

function randomWoord(){
    randomwoord = words[Math.floor(Math.random() * words.length)];
    console.log(randomwoord);
}

function eersteLetter(){
    var blok1 = document.getElementById("W1L1" );
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
    //plaats de woordjes
        for(var i = 0; i < lettersinput.length; i++){
            document.getElementById("W"+ attempt +"L"+ (i+1)).innerHTML = "<h1></h1>" + lettersinput[i];

            if(lettersrandom[i] == lettersinput[i]){
                document.getElementById("W"+ attempt +"L" + (i+1)).style.backgroundColor = "green";
                document.getElementById("W"+ (attempt + 1) + "L" + (i+1)).innerHTML
                
            }else{
                if(randomwoord.includes(lettersinput[i])){
                    document.getElementById("W"+ attempt +"L"+(i+1)).style.borderRadius = "50%";
                    document.getElementById("W"+ attempt +"L"+(i+1)).style.backgroundColor = "yellow";
            }
        
        }
    }
}

function checkWoord(woord){
    attempt++
    woordPlaatsen(woord);
    if(attempt >= attempts){
        alert("Helaas, je hebt verloren.");
        location.reload();
    }
    if(woord == randomwoord){
        alert("Je hebt gewonnen!");
        location.reload();
    }
    console.log(attempt);
}

maakBord();
randomWoord();
eersteLetter();
