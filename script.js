

let board = document.querySelector(".container");


function createBoxes() {
    for (i=0; i<256; i++){
        var box = document.createElement('div');
        box.className = 'etchSketch';
        //document.getElementById('boxes').appendChild(boxes);
        console.log(i);
        board.appendChild(box);
    }
}

createBoxes();