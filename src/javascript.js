"use strict";
// add window eventListener for Load
window.addEventListener("load", init);

function init() {
    if (typeof Storage !== "undefined") {
        var element = document.getElementByID("printArray"),
            element2 = document.getElementByID("shuffle");
        
        element.addEventListener("click", saveArray);
        element2.addEventListener("click", shuffleArray);
    }
}

function saveArray() {
    var one = document.querSelector("#one"),
        two = document.querSelector("#two"),
        three = document.querSelector("#three"),
        four = document.querSelector("#four"),
        five = document.querSelector("#six"),
        six = document.querSelector("#six"),
        seven = document.querSelector("#seven"),
        eight = document.querSelector("#eight"),
        nine = document.querSelector("#nine"),
        arrayDiv = document.querySelector("#array"),
        output = new Array();
                                    
    output.push(one.value);         
    output.push(two.value);         
    output.push(three.value);         
    output.push(four.value);         
    output.push(five.value);         
    output.push(six.value);         
    output.push(seven.value);         
    output.push(eight.value);         
    output.push(nine.value);
    
    localStorage.set("array", output);
                                    
    arrayDiv.innerHTML = output.join();
}

function shuffleArray() {
    var shuffle = new Array(),
        output = localStorage.get("array");
                                    
    for (let i = 0; i < shuffle.length; i++) {
        var rand = new Random(out.length);
        let num = Math.floor(output.length * rand);
        let element = output.slice(num, 1);
        shuffle.push(element);
    }
    
    shuffledArrayDiv = document.querySelector("#selectedArray");
    shuffledArrayDiv.innerHTML = shuffledArrayDiv.join();   
}



