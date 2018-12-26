
function HUD(_w, _h) {

  this.init = function(_w, _h) {
    this.w = _w;
    this.h = _h;
    this.wpart = w / 8;
    this.hpart = h / 10;
    this.colors = [];
    this.colors.push(color("#647277"));
    this.colors.push(color("#638A94"));
    this.colors.push(color("#BAD1D1"));
    this.colors.push(color("#F3ECD9"));
    this.colors.push(color("#FCB3B3"));
  }

  this.init(_w, _h);
  

  this.display = function() {
    push()
    stroke(this.colors[3]);
    strokeWeight(3);
    line(this.wpart * 5, this.hpart, this.wpart * 5, this.h-this.hpart)
    line(this.wpart * 5.1, this.hpart, this.wpart * 5.1, this.h-this.hpart)
    
    stroke(this.colors[4]);
    strokeWeight(1);
    textSize(32);
    text("Game Info", this.wpart*5.2, 0, this.wpart*3, this.hpart);
    rect(this.wpart*5, this.hpart*.03, this.wpart*2.4, this.hpart*.5);
    pop()
  }
}