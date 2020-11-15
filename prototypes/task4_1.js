// Модифицировать прототип Array, добавив в него метод shuffle,
// чтобы получить возможность выполнять случайную сортировку для любого массива

Array.prototype.shuffle = function() {
  return this.sort(() => 0.5 - Math.random());
}

let a = [1, 2, 3, 4, 5];
let fruit = ['banana', 'apple'];
a.shuffle();
fruit.shuffle();
console.log(a); // [3, 2, 5, 4, 1]
console.log(fruit); // ["apple", "banana"]
