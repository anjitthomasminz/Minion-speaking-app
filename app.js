var btnSelector = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#text-hold");

var outputDiv = document.querySelector("#output")


    
function clickHandler(){
    outputDiv.innerText = "Translation" + txtInput.value;
}

btnSelector.addEventListener("click", clickHandler)