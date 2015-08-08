(function () {
  'use strict';

  // closure
  var displayClosure = function () {
    var count = 0;
    return function () {
      return ++count;
    };
  };

  var counter = displayClosure();
  console.log("Counter is " + counter());
  console.log("Counter is " + counter());

  // closure with a memory leak
  var foo = function (element, a, b) {
    element.onclick = function () {
      /* uses a and b */
    };
  }

}());