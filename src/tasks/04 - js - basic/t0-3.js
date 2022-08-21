var test = 1;

(function() {
  var test = 2;

  window.showNumber = function() {
    var test = 3;
    console.log(this.test);
  }
})();

showNumber();
