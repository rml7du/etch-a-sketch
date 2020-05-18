

let board = document.querySelector(".container");


function createBoxes(gridSize) {
    for (i=0; i<gridSize; i++){
        var box = document.createElement('div');
        box.className = 'etchSketch';
        //document.getElementById('boxes').appendChild(boxes);
        //console.log(i);
        board.appendChild(box);
    }
}

board.addEventListener("mouseover", (e) => { 
    //e.target.setAttribute("class", "etchSketchBlack");
    e.target.style.backgroundColor = "red";
  } )

createBoxes(256);