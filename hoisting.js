// An example of hoisting
(function () {
  'use strict';

  var firstName = 'Freido';

  var addLastName = function () {
    var lastName = 'Franks';
    var fullName = firstName + ' ' + lastName;
    var firstName = "Faust";
    console.log("Name = " + fullName);
  };

  addLastName();
}());
