// don't need to run this file, nothing useful here
(function () {
  'use strict';

  var obj = {
    import: "A really useful string"
  };

  obj.delete = "delete can be a property name";
  obj["import"] = "Can change import's value";

  // this code won't work
  //function delete() {
  //  // do something useful
  //}
}());

