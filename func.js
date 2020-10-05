/** 
 * Add Event on buttons
 * */ 
let divBtn = document.getElementsByClassName("bt-center");
for (i = 0; i < divBtn.length; i++){
  divBtn[i].addEventListener("click", getClick, false);
}
divBtn = document.getElementsByClassName("bt-right");
for (i = 0; i < divBtn.length; i++){
  divBtn[i].addEventListener("click", getClick, false);
}

/**
 * Declare Var 
 */
var boLog = true;
var NUM1 = '';
var NUM2 = '';
var TOTAL = '';
var MATHFUNCTION = '';


function getClick(e) {
  if (boLog) {console.log('getClick')};
  //// if symbol = then try to calculate
  let strElement = e.target.innerHTML
  
  if (isNaN(strElement)){
    /** IF is Symbol */
    verifySymbol(strElement);

  } else {
    /** if is number */
    saveElements(strElement,'', '');
    ajustDisplay(false);
    //displayValues(strElement);
  }
}



/**
 * verifySymbol
 */
function verifySymbol(strElement){
  if (boLog) {console.log('verifySymbol')};
  switch(strElement){
    case 'AC': //clear display
      ajustDisplay(true);
      break;

    case '&lt;-':
      backspace();
      break;

    case '.':
      if (verifyDot()){
        ajustDisplay(false);
      }
      break;

    case '=':
      
      if (isReadyToCalculate()){
        tryToCalculate();
        saveElements('', '', '=');
        ajustDisplay(false);
      }
      break;

    default:
      newMathFunction();
      saveElements('', '', strElement);
      ajustDisplay(false);
      //tryToCalculate();

  }
}


/**
 * new Math Function
 */
function newMathFunction(){
  if (boLog) {console.log('newMathFunction')};
  if (isReadyToCalculate()){
    tryToCalculate();
  }else{
    NUM2 = NUM1;
    NUM1 = '';
  }
}

/**
 * id ready to calculate
 */
function isReadyToCalculate() {
  if (boLog) {console.log('isReadyToCalculate')};
  if (NUM1 != '' && NUM2 != '' && MATHFUNCTION != '') {
    return true;
  }
  return false;
}


/**
 * saveElements
 */
function saveElements(num1, num2, mathfunction){
  if (boLog) {console.log('saveElements ' + num1 + ' - ' + num2 + ' - ' +mathfunction)};
  if (mathfunction != ''){
    MATHFUNCTION = mathfunction;
  }  
  NUM2 = ''+NUM2 + num2;
  NUM1 = ''+NUM1 + num1;
}



/**
 * Verify if it can alredy is decimal
 */
function verifyDot(){
  if (boLog) {console.log('verifyDot')};
  if (!isNaN(NUM1 + '.')){
    NUM1 = ''+NUM1 + '.';
    return true;
  }
  return false;
}


/**
 * Delete last character
 */
function backspace(){
  if (boLog) {console.log('backspace')};
  divCurrent = document.getElementById("top-display-current").innerText;
  NUM1 = divCurrent.substring(0,(divCurrent.length-1))
  document.getElementById("top-display-current").innerText = NUM1;
}



/**
 * Ajust firt display
 */
function ajustCurrentDisplay(clear = false){
  if (boLog) {console.log('ajustCurrentDisplay' + clear)};
  if (clear){
    document.getElementById("top-display-current").innerHTML = '';
    NUM1 = '';
  }else{
    document.getElementById("top-display-current").innerText = ''+NUM1;
  }
  
}

/**
 * Ajust Prior Display
 */
function ajustPriorDisplay(clear = false){
  if (boLog) {console.log('ajustPriorDisplay')};
  if (clear){
    document.getElementById("top-display-prior").innerHTML = '';
    NUM2 = '';
  }else{
    document.getElementById("top-display-prior").innerText = NUM2;  
  }
  
}

/**
 * AJust Math Diplay
 */
function ajustMathDiplay(clear = false){
  if (boLog) {console.log('ajustMathDisplay')};
  if (clear){
    document.getElementById("top-display-func").innerHTML = '';
    MATHFUNCTION = ''
  }else{
    document.getElementById("top-display-func").innerText = MATHFUNCTION;  
  }
  
}


/***
 * Ajust Display
 */
function ajustDisplay(clear = false){
  if (boLog) {console.log('ajustDisplay')};
  ajustCurrentDisplay(clear);
  ajustPriorDisplay(clear);
  ajustMathDiplay(clear);
}


/**
 * Try To Calculate
 */
function tryToCalculate(){
  if (boLog) {console.log('tryToCalculate')};
  ///Run the string find de symbols and try to calculate
  
  try {
    //console.log(NUM1 + MATHFUNCTION + NUM2);
    TOTAL = eval(NUM2 + MATHFUNCTION + NUM1); 
    NUM2 = TOTAL;
    NUM1 = '';

  } catch (error) {
    console.log(error);
    return false;
  }
  
}