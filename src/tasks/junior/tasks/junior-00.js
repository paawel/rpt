var numbers = [5, 10, 5, 10, 5];
var sum = 0;

for(var item in numbers) {
  sum += item;
}

var result = sum / 5;

console.log(result);
