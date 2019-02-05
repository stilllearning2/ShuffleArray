/*global window: false */
/*global document: false */
"use strict";

// initialize array
var startArray = [];

function saveArray() {
    // load array from input class fields
    var arrayDiv = document.querySelector("#arrayDiv"),
        inputs = document.getElementsByTagName("input");
    
    // load words to array
    startArray = [];
    for (let i = 0; i < inputs.length; i = i + 1) {
        startArray.push(inputs[i].value);
    }  
    
    // display startArray
    arrayDiv.innerHTML = startArray.join(", ");
}

function shuffleArray() {
    // clone startArray to tempArray
    var shuffledArrayDiv = document.querySelector("#shuffledArrayDiv"),
        tempArray = startArray.slice(0),
        lngth = startArray.length,
        shuffledArray = [];
      
    // shuffle tempArray into shuffledArray
    for (let i = 0; i < lngth; i = i + 1) {
        let num = Math.floor(tempArray.length * Math.random());
        let word = tempArray[num];
        tempArray.splice(num, 1);
        shuffledArray.push(word);
    }

    // display shuffledArray
    shuffledArrayDiv.innerHTML = shuffledArray.join(", ");   
}

function init() {
    var element = document.querySelector("#saveButton"),
        element2 = document.querySelector("#shuffleButton");
        
    element.addEventListener("click", saveArray, false);
    element2.addEventListener("click", shuffleArray, false);
}

// add window eventListener for Load
window.addEventListener("load", init, false);
