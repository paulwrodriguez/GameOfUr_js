function Space(x, y, w, h, special) {

  this.init = function(_x, _y, _w, _h, special) {
    this.x = _x;
    this.y = _y;
    this.w = _w;
    this.h = _h;
    this.b1 = color("#647277");
    this.b2 = color("#638A94");
    this.b3 = color("#BAD1D1");
    this.b4 = color("#F3ECD9");
    this.b5 = color("#FCB3B3");
    this.special = special;
  }

  // call constructor
  this.init(x, y, w, h, special);

  this.display = function() {
    push()
    stroke(this.b2); // set the outline of the boxes
    fill(this.b4);
    rect(this.x, this.y, this.w, this.h);
    pop()
    if(this.special != null) {
      // this.drawStar(wpart + (wpart * .5), hpart + (hpart * .5), wpart / 3);
      this.special.display(this.x+this.w*.5, this.y +this.h*.5, this.w/3);
    }
    
  }


}