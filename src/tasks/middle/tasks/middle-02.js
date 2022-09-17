var MyClass = function() {};

MyClass.prototype.options = {
  available: false
};

var user1 = new MyClass('Ivan');
var user2 = new MyClass('Petr');

user1.options.available = true;

// user1.options.available ???
// user2.options.available ???
