"use strict"

let h = 400;
let w = 400;
let Y_AXIS = 1;
let X_AXIS = 2;
let b1, b2, b3, b4,b5;

function setup() {
  createCanvas(w, h);
  
  // Define colors
  b1 = color("#647277");
  b2 = color("#638A94");
  b3 = color("#BAD1D1");
  b4 = color("#F3ECD9");
  b5 = color("#FCB3B3");
}

function draw() {
  
  drawGradient();
  drawBoard();
  
}

function drawGradient(){
  var hpart = h/4;
  setGradient(0, 0, w, hpart, b1, b2, Y_AXIS);
  setGradient(0, hpart, w, hpart, b2, b3, Y_AXIS);
  setGradient(0, hpart*2, w, hpart, b3, b4, Y_AXIS);
  setGradient(0, hpart*3, w, hpart, b4, b5, Y_AXIS);
}
function drawBoard(){
  var wpart = w/8;
  var hpart = h/10;
  
  stroke(b2); // set the outline of the boxes
  
  fill(b4);
  // player one start
  for (var i = 1; i <= 4; i += 1) {
    rect(wpart*1,hpart*i, wpart, hpart);
  }
  
  // player one end 
  for (var i = 7; i <= 8; i += 1) {
    rect(wpart*1,hpart*i, wpart, hpart);
  }
  
  // shared column 
  for (var i = 1; i <= 8; i += 1) {
    rect(wpart*2,hpart*i, wpart, hpart);
  }
  
  // player 2 start 
  for (var i = 1; i <= 4; i += 1) {
    rect(wpart*3,hpart*i, wpart, hpart);
  }
  
  // player 3 end 
  for (var i = 7; i <= 8; i += 1) {
    rect(wpart*3,hpart*i, wpart, hpart);
  }
  
  // drawStar(wpart*1.5, hpart*1.5, wpart/3);
  
}

function drawStar(wpart, hpart, s){
  // draw rossette on rect(wpart*1,hpart*1, wpart, hpart);
  push();
  fill(b1)
  stroke(b3)
  translate(wpart, hpart);
  // rotate(frameCount/50);
  star(0, 0, 4, s, 6); 
  pop(); 
}

function setGradient(x, y, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }  
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = x; i <= x+w; i++) {
      var inter = map(i, x, x+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y+h);
    }
  }
}

function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
