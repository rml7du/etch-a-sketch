

let board = document.querySelector("#container");


function createBoxes() {
    for (i=0; i<256; i++){
        var boxes = document.createElement('div');
        boxes.className = 'etchSketch';
        document.getElementById('boxes').appendChild(boxes);
        //board.appendChild(boxes);
    }
}