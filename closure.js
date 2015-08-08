(function () {
  'use strict';

  // closure
  var displayClosure = function (val) {
    var count = val;
    return function () {
      return ++count;
    };
  };

  var counter = displayClosure(5);
  var counter2 = displayClosure(50);
  console.log("Counter is " + counter());
  console.log("Counter is " + counter2());
  console.log("Counter is " + counter());
  console.log("Counter is " + counter2());


  // closure with a memory leak
  var foo = function (element, a, b) {
    element.onclick = function () {
      /* uses a and b */
    };
  }

}());