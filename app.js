var btnSelector = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#text-hold");


    
function clickHandler(){
    console.log("clicked!");
    console.log("input", txtInput.value);
}

btnSelector.addEventListener("click", clickHandler)