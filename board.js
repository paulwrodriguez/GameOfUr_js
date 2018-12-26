function Board(_w, _h) {

  this.init = function(_w, _h) {
    this.h = _h;
    this.w = _w;
    this.gradient = new Gradient(this.w, this.h);

    this.spaces = [];

    var wpart = this.w / 8;
    var hpart = this.h / 10;

    // player one start
    this.spaces.push(new Space(wpart, hpart, wpart, hpart, new Rossett()))
    this.spaces.push(new Space(wpart, hpart * 2, wpart, hpart))
    this.spaces.push(new Space(wpart, hpart * 3, wpart, hpart))
    this.spaces.push(new Space(wpart, hpart * 4, wpart, hpart))

    // Player one end 
    this.spaces.push(new Space(wpart, hpart * 7, wpart, hpart, new Rossett()))
    this.spaces.push(new Space(wpart, hpart * 8, wpart, hpart))

    // shared column 
    this.spaces.push(new Space(wpart * 2, hpart * 1, wpart, hpart))
    this.spaces.push(new Space(wpart * 2, hpart * 2, wpart, hpart))
    this.spaces.push(new Space(wpart * 2, hpart * 3, wpart, hpart))
    this.spaces.push(new Space(wpart * 2, hpart * 4, wpart, hpart, new Rossett()))
    this.spaces.push(new Space(wpart * 2, hpart * 5, wpart, hpart))
    this.spaces.push(new Space(wpart * 2, hpart * 6, wpart, hpart))
    this.spaces.push(new Space(wpart * 2, hpart * 7, wpart, hpart))
    this.spaces.push(new Space(wpart * 2, hpart * 8, wpart, hpart))

    // player 2 start 
    this.spaces.push(new Space(wpart * 3, hpart * 1, wpart, hpart, new Rossett()))
    this.spaces.push(new Space(wpart * 3, hpart * 2, wpart, hpart))
    this.spaces.push(new Space(wpart * 3, hpart * 3, wpart, hpart))
    this.spaces.push(new Space(wpart * 3, hpart * 4, wpart, hpart))

    // Player 2 end
    this.spaces.push(new Space(wpart * 3, hpart * 7, wpart, hpart, new Rossett()))
    this.spaces.push(new Space(wpart * 3, hpart * 8, wpart, hpart))

    // Colors
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
    for (var i = 0; i < this.spaces.length; ++i) {
      this.spaces[i].display();
    }
  }
}