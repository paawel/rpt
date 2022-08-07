var ivan = {fio: 'Ivan Ivanov'};
var petr = {fio: 'Petr Petrov'};
var vasily = {fio: 'Vasily Vasiliev'};

function sayMyName() {
  console.log('My name is:' + this.fio);
}

// var test = sayMyName.bind(ivan);
// test();

// TODO:
// myBind(func, context);

// TODO: как с аргументами ?
