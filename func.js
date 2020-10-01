//// Add Event on buttons
let divBtn = document.getElementsByClassName("bt-center");
for (i = 0; i < divBtn.length; i++){
  divBtn[i].addEventListener("click", getClick, false);
}
divBtn = document.getElementsByClassName("bt-right");
for (i = 0; i < divBtn.length; i++){
  divBtn[i].addEventListener("click", getClick, false);
}

let arrValues = new Float32Array;
let sizeArrayValues = 0;

function getClick(e) {
  //// primeiro trata o click
  howClick(e.target.innerHTML)
  displayValues(e.target.innerHTML)

}

function howClick(strElement){
  
}

function displayValues(strElement) {
  let divDisplay = document.getElementById("top-display");
  divDisplay.innerHTML = divDisplay.innerHTML + strElement;
}

