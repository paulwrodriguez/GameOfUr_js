// "use strict"

var h = 400;
var w = 400;
var board;

function setup() {
  createCanvas(w, h);

  board = new Board(w,h);
}

function draw() {

  board.display();

}

