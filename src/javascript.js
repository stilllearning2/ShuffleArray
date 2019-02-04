"use strict";
// add window eventListener for Load
window.addEventListener("load", init);

function saveArray() {
    var form = document.querySelector("form"),
        arrayDiv = form.querySelector("#arrayDiv"),
        inputs = form.getElementsByTagName( "input" ),
        output = [],
        i;
    
    // load words to array
    for (i = 0; i < inputs.length; i++) {
        output.push(inputs[i].value);
    }  
    
    // display array
    arrayDiv.innerHTML = output.join(", ");
}

function shuffleArray() {
    var form = document.querySelector("form"),
        shuffledArray = new Array(),
        shuffledArrayDiv = form.querySelector("#shuffledArrayDiv"),   
        start = form.querySelector("#arrayDiv").innerHTML,
        startArray = start.split(", "),
        lngth = startArray.length,
        i,
        num,
        word;
                                    
    for (i = 0; i < lngth; i = i + 1) {
        num = Math.floor(startArray.length * Math.random());
        word = startArray[num];
        startArray.splice(num, 1);
        shuffledArray.push(word);
    }

    shuffledArrayDiv.innerHTML = shuffledArray.join(", ");   
}

function init() {
    var form = document.querySelector("form");
        
    if (typeof Storage !== "undefined") {
        var element = form.querySelector("#saveButton"),
            element2 = form.querySelector("#shuffleButton");
        
        element.addEventListener("click", saveArray);
        element2.addEventListener("click", shuffleArray);
    }
}

