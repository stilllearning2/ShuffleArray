/*global window: false */
/*global document: false */
var startArray = [];

function saveArray() {
    'use strict';
    var arrayDiv = document.querySelector("#arrayDiv"),
        inputs = document.getElementsByTagName("input");
    
    // load words to array
    for (let i = 0; i < inputs.length; i = i + 1) {
        startArray.push(inputs[i].value);
    }  
    
    // display array
    arrayDiv.innerHTML = startArray.join(", ");
}

function shuffleArray() {
    'use strict';

    var shuffledArray = [],
        shuffledArrayDiv = document.querySelector("#shuffledArrayDiv"),
        tempArray = startArray.slice(0),
        lngth = tempArray.length;
                                    
    for (let i = 0; i < lngth; i = i + 1) {
        let num = Math.floor(startArray.length * Math.random());
        let word = tempArray[num];
        tempArray.splice(num, 1);
        shuffledArray.push(word);
    }

    shuffledArrayDiv.innerHTML = shuffledArray.join(", ");   
}

function init() {
    'use strict';

    var element = document.querySelector("#saveButton"),
        element2 = document.querySelector("#shuffleButton");
        
    element.addEventListener("click", saveArray);
    element2.addEventListener("click", shuffleArray);
}

// add window eventListener for Load
window.addEventListener("load", init);
