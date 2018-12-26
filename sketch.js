// "use strict"

var h = 600;
var w = 600;
var board;
var hud;

function setup() {
  createCanvas(w, h);
  board = new Board(w,h);
  hud = new HUD(w,h);
}

function draw() {
  board.display();
  hud.display();
}

