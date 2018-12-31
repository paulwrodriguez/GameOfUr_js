// "use strict"

var h = 600;
var w = 600;
var board;
var hud;

function setup() {
  createCanvas(w, h);
  board = new Board(w,h);
  hud = new HUD(w,h);
  // createInputThing();
}

// function createInputThing() {
//     input = createInput();
//     input.position(w/5.5, h/8);
    
//     button = createButton('submit');
//     button.position(w / 6,h / 7);
    
//     button.mousePressed(test);
    
// }

function test() {
  input.value(' ');
  console.log("hello world");
}


function draw() {
  board.display();
  hud.display();
}

