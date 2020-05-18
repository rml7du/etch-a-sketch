const resetValue = 16;
const resetButton = document.getElementById("resetButton");


let board = document.querySelector('.container');


function createBoxes(gridSize) {
    for (i=0; i<gridSize*gridSize; i++){
        var box = document.createElement('div');
        box.className = 'etchSketch';
        board.appendChild(box);
    }
}




board.addEventListener('mouseover', (e) => { 
    //e.target.setAttribute("class", "etchSketchColor");
    e.target.style.backgroundColor = 'rgb('+ Math.floor(Math.random() * 256) +','
    + Math.floor(Math.random() * 256) +','
    + Math.floor(Math.random() * 256) +')';
  } )

 


  //clear grid
  resetButton.addEventListener('click', resetGrid);

  function resetGrid(){
      board.innerHTML = '';
      createBoxes(resetValue);
  }

createBoxes(resetValue);