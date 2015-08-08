// anonymous/immediate function also known as an immediately invoked function expression
(function () {
  'use strict';

  // anonymous function
  setTimeout(function () {
    console.log('Hello from an anonymous function');
  }, 1);

  // immediate function
  (function superFunc() {
    console.log('Hello from the immediate function');
  }());

  // constructor function
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }

  // why use a prototype and not just define the function inside the constructor?
  Point.prototype.distance = function (p1) {
    var x = Math.pow(this.x - p1.x, 2);
    var y = Math.pow(this.y - p1.y, 2);
    var distance = Math.sqrt(x + y);
    return distance;
  };

  // let's try out our point function
  (function doMath() {
    var a = new Point(2, 3);
    var b = new Point(2, -1);
    var c = new Point(-1, -1);
    var distanceFromAtoB = b.distance(a);
    var distanceFromAtoC = c.distance(a);
    console.info("The distance from a to b is " + distanceFromAtoB);
    console.info("The distance from a to c is " + distanceFromAtoC);
  }());

}());