// "use strict"

var h = 600;
var w = 600;
var board;

function setup() {
  createCanvas(w, h);
  board = new Board(w,h);
}

function draw() {
  board.display();
}

