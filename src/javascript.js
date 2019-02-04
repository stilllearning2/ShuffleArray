/*global window: false */
/*global document: false */

function saveArray() {
    'use strict';
    var arrayDiv = document.querySelector("#arrayDiv"),
        inputs = document.getElementsByTagName("input"),
        output = [],
        i;
    
    // load words to array
    for (i = 0; i < inputs.length; i = i + 1) {
        output.push(inputs[i].value);
    }  
    
    // display array
    arrayDiv.innerHTML = output.join(", ");
}

function shuffleArray() {
    'use strict';

    var shuffledArray = [],
        shuffledArrayDiv = document.querySelector("#shuffledArrayDiv"),   
        start = document.querySelector("#arrayDiv").innerHTML,
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
    'use strict';

    var element = document.querySelector("#saveButton"),
        element2 = document.querySelector("#shuffleButton");
        
    element.addEventListener("click", saveArray);
    element2.addEventListener("click", shuffleArray);
}

// add window eventListener for Load
window.addEventListener("load", init);
