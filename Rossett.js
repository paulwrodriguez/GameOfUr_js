function Rossett() {

  this.init = function() {
    this.b1 = color("#647277");
    this.b2 = color("#638A94");
    this.b3 = color("#BAD1D1");
    this.b4 = color("#F3ECD9");
    this.b5 = color("#FCB3B3");
  }

  this.init();

  this.display = function(wpart, hpart, s) {
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
}