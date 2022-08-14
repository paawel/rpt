typeof typeof undefined // ?

typeof null; // ?

"null" && {} && "undefined";

[] || null || parseInt('2.5');

!!(2-1);

!(0-1);

// 2==='2' vs 2=='2';

// let a = ; ???
console.log(a !== a)  //=> true

// есть объект, как сделать так, чтобы менять его свойство было запрещено
let testObj = {value: 1, key: true};
testObj.value = 2 // => не изменилось, осталось 1, // throws an error in strict mode
testObj.key = false // => не изменилось, осталось true, // throws an error in strict mode
