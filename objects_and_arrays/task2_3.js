// Задача 2.3
// Реализовать функцию для фильтрации массива по длине слов, значения длины указываются включительно, фильтр должен работать так:
// const fruits = [‘orange’, ‘apple’, ‘banana’, ‘’]
//
// filterByLength(fruits, 0,5) // [‘apple’, ‘’]

function filterByLength(arr, from, to) {
  return arr.filter(elem => (elem.length >= from) && (elem.length <= to))
}

const fruits = ['orange', 'apple', 'banana', ''];
console.log(filterByLength(fruits, 0, 5)) // ["apple", ""]
