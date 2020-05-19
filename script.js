const resetValue = 16;
const resetButton = document.getElementById("resetButton");
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
blackButton.addEventListener('click', black);

function black() {
    board.addEventListener('mouseover', (e) => { 
        e.target.style.backgroundColor = 'black'
    });
}

//----------Gradient Color Button--------------//
const gradientButton = document.getElementById('gradientColor');
gradientButton.addEventListener('click', gradient);

function gradient() {
    board.addEventListener('mouseover', (e) => { 
        e.target.style.backgroundColor = 'black'
    });
}


//----------Random Color Button--------------//
const randomButton = document.getElementById('randomColor');
randomButton.addEventListener('click', random);

function random() {
    board.addEventListener('mouseover', (e) => { 
        e.target.style.backgroundColor = 'rgb('+ Math.floor(Math.random() * 256) +','
        + Math.floor(Math.random() * 256) +','
        + Math.floor(Math.random() * 256) +')';
    });
}

///----------User Color Button--------------//
const userColorButton = document.getElementById('userColor');
userColorButton.addEventListener('click', userColor);
userColorButton.addEventListener('change', userColor);


function userColor() {
    userColorValue = event.target.value;
    board.addEventListener('mouseover', (e) => { 
        e.target.style.backgroundColor = userColorValue;
    });
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
    } else {
        createBoxes(Math.floor(gridSize.value)) //integers only
    }
}



  //Reset Grid

  resetButton.addEventListener('click', resetGrid);

  function resetGrid(){
      board.innerHTML = '';
      createBoxes(resetValue);
  }

createBoxes(resetValue);
black();