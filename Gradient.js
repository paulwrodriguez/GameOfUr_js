function Gradient(_w,_h) {
  
  this.Y_AXIS = 1; // if you dont use 'this' then the code will error on reference
  this.X_AXIS = 2;
  
  this.h = _h;
  this.w = _w;
  
  this.b1 = color("#647277");
  this.b2 = color("#638A94");
  this.b3 = color("#BAD1D1");
  this.b4 = color("#F3ECD9");
  this.b5 = color("#FCB3B3");
  
  this.display = function() {
    var hpart = this.h / 4;
    this.setGradient(0, 0, this.w, hpart, this.b1, this.b2, this.Y_AXIS);
    this.setGradient(0, hpart, this.w, hpart, this.b2, this.b3, this.Y_AXIS);
    this.setGradient(0, hpart * 2, this.w, hpart, this.b3, this.b4, this.Y_AXIS);
    this.setGradient(0, hpart * 3, this.w, hpart, this.b4, this.b5, this.Y_AXIS);
  }

  this.setGradient = function(x, y, w, h, c1, c2, axis) {
    noFill();
    if (axis == this.Y_AXIS) { // Top to bottom gradient
      for (var i = y; i <= y + h; i++) {
        var inter = map(i, y, y + h, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    } else if (axis == this.X_AXIS) { // Left to right gradient
      for (var i = x; i <= x + w; i++) {
        var inter = map(i, x, x + w, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
      }
    }
  }
}