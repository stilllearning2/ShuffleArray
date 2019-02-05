/*global window: false */
/*global document: false */

function saveArray() {
    'use strict';
    const arrayDiv = document.querySelector("#arrayDiv"),
          inputs = document.getElementsByTagName("input"),
          output = [];
    
    // load words to array
    for (let i = 0; i < inputs.length; i = i + 1) {
        output.push(inputs[i].value);
    }  
    
    // display array
    arrayDiv.innerHTML = output.join(", ");
}

function shuffleArray() {
    'use strict';

    const shuffledArray = [],
          shuffledArrayDiv = document.querySelector("#shuffledArrayDiv"),   
          start = document.querySelector("#arrayDiv").innerHTML,
          startArray = start.split(", "),
          lngth = startArray.length;
                                    
    for (let i = 0; i < lngth; i = i + 1) {
        let num = Math.floor(startArray.length * Math.random());
        let word = startArray[num];
        startArray.splice(num, 1);
        shuffledArray.push(word);
    }

    shuffledArrayDiv.innerHTML = shuffledArray.join(", ");   
}

function init() {
    'use strict';

    const element = document.querySelector("#saveButton"),
          element2 = document.querySelector("#shuffleButton");
        
    element.addEventListener("click", saveArray);
    element2.addEventListener("click", shuffleArray);
}

// add window eventListener for Load
window.addEventListener("load", init);
