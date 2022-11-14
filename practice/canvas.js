let canvas = document.getElementById("canvas-1");
canvas.width = 1000;
canvas.height = 500;
/** @type {CanvasRederingContext2d} */
let context = canvas.getContext("2d");

let squares = [];
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let colSize = 80;
let rowSize = 40;
let gridSize = colSize - rowSize;
let size = canvas.width / gridSize;

// for (let row = 0; row < rowSize; row++) {
//     for (let column = 0; column < colSize; column++) {
//         let colorIndex = Math.floor(Math.random() colors.length);
//         let color = colors[colorIndex];
//         drawSquare(column * size, row * size, color, size);
//     }
// }

// drawSquare(0, 0, "red");
// drawSquare(25, 0, "blue")
// drawSquare(50, 0, "orange")
// drawSquare(75, 0, "green");
// drawSquare(100, 0, "teal");
function drawSquare(x, y, color, size = 25) {
    let square = new Path2D();

    context.fillStyle = color;
    context.fillRect(x, y, 25, 25);
    context.moveTo(25, 0);
    squares.push(squares);
}
// 
function drawLoop(timestamp){
	for (let row = 0; row < rowSize; row++) {
        for (let column = 0; column < colSize; column++) {
            let colorIndex = Math.floor(Math.random() * colors.length);
            let color = colors[colorIndex];
            drawSquare(column * size, row * size, color, size);
        }
    }
    requestAnimationFrame(drawLoop);
}
requestAnimationFrame(drawLoop);