const resetValue = 16;
const resetButton = document.getElementById("resetButton");
const gridSizeButton = document.getElementById("gridSizeButton");
const gridSize = document.getElementById("gridSize");
var redSelect = document.getElementById("red").checked;

let board = document.querySelector('.container');


function createBoxes(gridSize) {
    board.style.setProperty('--grid-rows', gridSize);
    for (i=0; i<gridSize*gridSize; i++){
        var box = document.createElement('div');
        box.className = 'etchSketch';
        board.appendChild(box);
    }
}


board.addEventListener('mouseover', (e) => { 
    if (redSelect === true){
        console.log(redSelect);
        e.target.style.backgroundColor = 'red';
    } else {
    //e.target.setAttribute("class", "etchSketchColor");
    e.target.style.backgroundColor = 'rgb('+ Math.floor(Math.random() * 256) +','
    + Math.floor(Math.random() * 256) +','
    + Math.floor(Math.random() * 256) +')';
}});

 
  //grid Resize (on press enter or click)
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