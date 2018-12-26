function Board(_w, _h) {

  this.init = function(_w, _h) {
    this.h = _h;
    this.w = _w;
    this.gradient = new Gradient(this.w, this.h);
    
    this.spaces = [];
    
    var wpart = this.w / 8;
    var hpart = this.h / 10;
    
    // player one start
    this.spaces.push(new Space(wpart, hpart,wpart, hpart, new Rossett()))
    for (var i = 2; i <= 4; i += 1) {
      this.spaces.push(new Space(wpart, hpart*i,wpart, hpart))
    }
    

    // player one end 
    for (var i = 7; i <= 8; i += 1) {
      this.spaces.push(new Space(wpart, hpart*i,wpart, hpart))
    }

    // shared column 
    for (var i = 1; i <= 8; i += 1) {
      this.spaces.push(new Space(wpart*2, hpart*i,wpart, hpart))
    }

    // player 2 start 
    for (var i = 1; i <= 4; i += 1) {
      this.spaces.push(new Space(wpart*3, hpart*i,wpart, hpart))
    }

    // player 3 end 
    for (var i = 7; i <= 8; i += 1) {
      this.spaces.push(new Space(wpart*3, hpart*i,wpart, hpart))
    }
    
    this.b1 = color("#647277");
    this.b2 = color("#638A94");
    this.b3 = color("#BAD1D1");
    this.b4 = color("#F3ECD9");
    this.b5 = color("#FCB3B3");
  }

  // call init method
  this.init(_w, _h);

  this.display = function() {

    this.gradient.display();
    for(var i = 0; i < this.spaces.length; ++i){
      this.spaces[i].display();
    }
    // this.drawBoard();

  }
  

  this.drawBoard = function() {
    var wpart = w / 8;
    var hpart = h / 10;

    stroke(this.b2); // set the outline of the boxes
    fill(this.b4);
    // player one start
    for (var i = 2; i <= 4; i += 1) {
      rect(wpart * 1, hpart * i, wpart, hpart);
    }

    // player one end 
    for (var i = 7; i <= 8; i += 1) {
      rect(wpart * 1, hpart * i, wpart, hpart);
    }

    // shared column 
    for (var i = 1; i <= 8; i += 1) {
      rect(wpart * 2, hpart * i, wpart, hpart);
    }

    // player 2 start 
    for (var i = 1; i <= 4; i += 1) {
      rect(wpart * 3, hpart * i, wpart, hpart);
    }

    // player 3 end 
    for (var i = 7; i <= 8; i += 1) {
      rect(wpart * 3, hpart * i, wpart, hpart);
    }

    this.drawStar(wpart + (wpart * .5), hpart + (hpart * .5), wpart / 3);
    this.drawStar(wpart * 3 + (wpart * .5), hpart + (hpart * .5), wpart / 3);
    this.drawStar((wpart * 2) + (wpart * .5), (hpart * 4) + (hpart * .5), wpart / 3);
    this.drawStar((wpart * 1) + (wpart * .5), (hpart * 7) + (hpart * .5), wpart / 3);
    this.drawStar((wpart * 3) + (wpart * .5), (hpart * 7) + (hpart * .5), wpart / 3);

  }

  this.drawStar = function(wpart, hpart, s) {
    push();
    // fill(b1);
    stroke(this.b3)
    translate(wpart, hpart);
    rotate(frameCount / 50);
    ellipse(0, 0, 5, s * 2)
    rotate(HALF_PI)
    ellipse(0, 0, 5, s * 2)
    rotate(HALF_PI / 2)
    ellipse(0, 0, 5, s)
    rotate(HALF_PI)
    ellipse(0, 0, 5, s)
    pop();
  }

  // depricated. can be used as a reference for creating own objects. 
  function star(x, y, radius1, radius2, npoints) {
    var angle = TWO_PI / npoints;
    var halfAngle = angle / 2.0;
    beginShape();
    for (var a = 0; a < TWO_PI; a += angle) {
      var sx = x + cos(a) * radius2;
      var sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }

}