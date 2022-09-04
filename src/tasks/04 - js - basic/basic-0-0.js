// Theory:

// 1. что возвращает функция если в ней не прописан return ?
// 2. как навесить обработчик на элемент стандартным способом? какие аргументы?
// 3. как отключить конкретный таймер если их несколько ?
// 4. какие функции называют чистыми ?
// 5. что в TS означает тип void ?


// Block : Primitive
// ______________________________________________________________________________________________

typeof typeof undefined // ?

typeof null; // ?

"null" && {} && "undefined"; // ?

[] || null || parseInt('2.5'); // ?

!!(2-1); // ?


// Block : Upper Primitive
// ______________________________________________________________________________________________

// На проекте с typeScript линтер выдал ошибку о том что свойство которые должно быть строкой
// не гарантированно является строкой (поле какогото объекта бех типов объекта).
// перепешите строку так, чтобы линтер провалидировал кода верно, используйте тернарный оператор
this.stringValue = dataObj.someValue;


// Какое значение нужно присвоить переменной, чтобы консоль вернул true
// let a = ; ???
console.log(a !== a)  //=> true


// есть объект, как сделать так, чтобы менять его свойство было запрещено
let testObj = {value: 1, key: true};
testObj.value = 2 // => не изменилось, осталось 1, // throws an error in strict mode
testObj.key = false // => не изменилось, осталось true, // throws an error in strict mode
