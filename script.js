
let UserColorValue;
let board = document.querySelector('.container');


function createBoxes(gridSize) {
    board.style.setProperty('--grid-rows', gridSize);
    for (i=0; i<gridSize*gridSize; i++){
        var box = document.createElement('div');
        box.className = 'etchSketch';
        board.appendChild(box);
    }
}

//----------Black  Button--------------//
const blackButton = document.getElementById('black');
blackButton.addEventListener('click', goBlack);

function goBlack() {
    const gridElements = document.querySelectorAll('.etchSketch');
        gridElements.forEach( (div) => {div.removeEventListener('mouseenter', gradient); });
        gridElements.forEach( (div) => {div.removeEventListener('mouseenter', random); });
        gridElements.forEach( (div) => {div.removeEventListener('mouseenter', userColor); });
        gridElements.forEach( (div) => {div.addEventListener('mouseenter', black); });
}

function black() {

        this.style.backgroundColor = 'black';
    
}

//----------Gradient Color Button--------------//

const gradientButton = document.getElementById('gradientColor');
gradientButton.addEventListener('click', goGradient);

function goGradient(){

        const gridElements = document.querySelectorAll('.etchSketch');
        gridElements.forEach( (div) => {div.removeEventListener('mouseenter', black); });
        gridElements.forEach( (div) => {div.removeEventListener('mouseenter', random); });
        gridElements.forEach( (div) => {div.removeEventListener('mouseenter', userColor); });
        gridElements.forEach( (div) => {div.addEventListener('mouseenter', gradient); });
}

function gradient() {
    
    const style = window.getComputedStyle(this);
    const backgroundColorValue = style.getPropertyValue('background-color'); 

    const firstComma = backgroundColorValue.indexOf(',');
    const firstSpace = backgroundColorValue.indexOf(' ');
    const lastComma = backgroundColorValue.lastIndexOf(',');
    const lastSpace = backgroundColorValue.lastIndexOf(' ');

    const valueColorR = backgroundColorValue.slice('4', firstComma);
    const valueColorG = backgroundColorValue.slice((firstSpace+1), lastComma);
    const valueColorB = backgroundColorValue.slice((lastSpace+1),-1);

    const newValueColorR = valueColorR - (valueColorR*0.1);
    const newValueColorG = valueColorG - (valueColorG*0.1);
    const newValueColorB = valueColorB - (valueColorB*0.1);

 
    this.style.backgroundColor = `rgb(${newValueColorR},${newValueColorG},${newValueColorB})`;
    
}


//----------Random Color Button--------------//
const randomButton = document.getElementById('randomColor');
randomButton.addEventListener('click', goRandom);

function goRandom(){
    const gridElements = document.querySelectorAll('.etchSketch');
    gridElements.forEach( (div) => {div.removeEventListener('mouseenter', black); });
    gridElements.forEach( (div) => {div.removeEventListener('mouseenter', gradient); });
    gridElements.forEach( (div) => {div.removeEventListener('mouseenter', userColor); });
    gridElements.forEach( (div) => {div.addEventListener('mouseenter', random); });
}

function random() {
        this.style.backgroundColor = 'rgb('+ Math.floor(Math.random() * 256) +','
        + Math.floor(Math.random() * 256) +','
        + Math.floor(Math.random() * 256) +')';
    
}

///----------User Color Button--------------//
const userColorButton = document.getElementById('userColor');
userColorButton.addEventListener('click', goUserColor);
userColorButton.addEventListener('change', goUserColor);

function goUserColor(){
    const gridElements = document.querySelectorAll('.etchSketch');
    gridElements.forEach( (div) => {div.removeEventListener('mouseenter', black); });
    gridElements.forEach( (div) => {div.removeEventListener('mouseenter', gradient); });
    gridElements.forEach( (div) => {div.removeEventListener('mouseenter', random); });
    gridElements.forEach( (div) => {div.addEventListener('mouseenter', userColor); });

    userColorValue = event.target.value;
}

function userColor() {
    this.style.backgroundColor = userColorValue;
}

 
//---------grid Resize (on press enter or click)----------//
const gridSizeButton = document.getElementById("gridSizeButton");
const gridSize = document.getElementById("gridSize");
gridSizeButton.addEventListener('click', resizeGrid);
gridSize.addEventListener('keypress', function (e){
    if (e.keyCode==13){
        resizeGrid();
    }
  } ); 

function resizeGrid() {
    board.innerHTML = '';
      if (gridSize.value > 64) {
        alert("max size is 64")
        createBoxes(resetValue);
    } else {
        createBoxes(Math.floor(gridSize.value)) //integers only
    }
}



  //----------------Reset Grid----------------//
  const resetValue = 16;
  const resetButton = document.getElementById("resetButton");
  resetButton.addEventListener('click', resetGrid);

  function resetGrid(){
      board.innerHTML = '';
      createBoxes(resetValue);
  }


//---------------initialize----------------//
createBoxes(resetValue);
goBlack();