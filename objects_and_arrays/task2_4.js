ЗАДАЧА 2.4
// Реализовать функцию для фильтрации массива чисел по убыванию
// const numbers = [-20, -10, 0, 10, 20, 30]
//
// sortDesc(numbers) // [30, 20, 10, 0, -10, -20]
function sortDesc(array) {
  return array.sort((a, b) => b-a)
}
const numbers = [-20, -10, 0, 10, 20, 30];
console.log(sortDesc(numbers)) // [30, 20, 10, 0, -10, -20]
